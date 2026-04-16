---
tags: [system/network, system/ui, concern/performance, concern/memory, concern/readability, status/done, firebase, crashlytics]
aliases: [FirebaseManager Analysis, FirebaseManager.cs 분석]
---

# FirebaseManager.cs 분석

## 개요
`FirebaseManager`는 Unity 클라이언트의 Firebase 통합 단일 진입점이다.  
주요 역할은 1) Firebase 초기화, 2) Crashlytics 로그/유저 컨텍스트 전송, 3) Analytics 이벤트 전송, 4) FCM 토픽 구독 및 메시지 수신 처리다.  
특히 iOS 백그라운드/종료 시 비동기 호출로 인한 크래시를 줄이기 위한 안전 종료 시퀀스(`ShutdownState`, `SafeShutdownCoroutine`)가 핵심 방어 로직으로 추가되어 있다.

## 주요 책임/구성 요소
- **초기화 라이프사이클**
  - `Init()`에서 `FirebaseApp.CheckAndFixDependenciesAsync()` 실행
  - 의존성 정상 시 Messaging 이벤트 핸들러 등록, Crashlytics 키 설정, 기본 토픽 구독
- **안전 종료(iOS 중심)**
  - `OnApplicationPause`, `OnApplicationFocus`, `OnDestroy`에서 `BeginSafeShutdown()` 트리거
  - 종료 상태 머신: `Normal -> PreparingShutdown -> ShuttingDown -> Completed`
  - 종료 중 Crashlytics/토픽 해지 호출을 제한해 불안정한 비동기 호출을 최소화
- **Crashlytics 컨텍스트 관리**
  - `CrashlyticsLog`, `SetLastAPI`, `SetLastRespAPI`, `UpdateUserData`
  - 앱 종료/리포팅 중복 상태를 플래그로 차단
- **Analytics 이벤트 기록**
  - `Log(bool addCommonLog, string key, Dictionary<string,string> parms)`
  - 공통 파라미터(account/user/server/ally/hq/power 등) 자동 주입 옵션 제공
- **FCM Messaging**
  - `SubscribeToTopic`, `UnSubscribeTopic`, `OnTokenReceived`, `OnMessageReceived`
  - 주제 토픽은 `env_all_age_lang` 규칙(`BuildTopic`)으로 구성

## 데이터/의존성 관계
- **외부 SDK 의존**
  - `FirebaseApp`, `FirebaseMessaging`, `FirebaseAnalytics`, `Firebase.Crashlytics`
- **게임 전역 싱글톤 의존**
  - `MKHttp.instance` (계정/서버/설정 데이터)
  - `MKUserDataModel.instance` (유저 상태, fcm_token, 국가/건물 정보)
  - `FunnelManager.Instance` (환경명)
  - `MKTerm.Instance` (언어 코드)
- **상태 필드**
  - 초기화 상태: `Initalized`
  - 종료 제어: `isAppShuttingDown`, `isCrashlyticsReporting`, `isFirebaseShuttingDown`, `currentShutdownState`
  - 토픽 상태: `currentTopic`

## 동작 흐름 요약
1. **Awake**: 싱글톤 인스턴스 할당, 초기화 플래그 리셋  
2. **Init**: Firebase 의존성 검사 후 이벤트 연결/Crashlytics 키 설정/토픽 구독  
3. **런타임**:
   - 게임 로직에서 Crashlytics/Analytics API 호출
   - 언어/연령 변경 시 토픽 재구독(`OnLanguageOrAgeChanged`)
4. **종료/백그라운드(iOS)**:
   - 안전 종료 코루틴에서 Crashlytics 키 기록 -> 토픽 해지 시도(타임아웃 2초) -> 상태 완료
   - 이벤트 핸들러 해제(`CleanupFirebaseEvents`)

## 문제점 및 개선 제안
- **문제 1: 스레드 컨텍스트 불명확**
  - `Init()`의 `ContinueWith` 내부에서 Unity/Firebase API 호출을 수행한다.
  - `ContinueWith`는 메인 스레드 보장이 약해 플랫폼/버전에 따라 잠재 리스크가 있다.
  - **개선**: `ContinueWithOnMainThread`(Firebase Extensions) 또는 메인 스레드 디스패처 사용.

- **문제 2: `async void` 사용**
  - `SubscribeToTopic`가 `async void`라 호출부에서 예외/완료 시점을 제어하기 어렵다.
  - **개선**: `Task` 반환으로 변경하고 호출부에서 await/에러 핸들링 일원화.

- **문제 3: 파라미터 딕셔너리 변형 부작용**
  - `Log()`에서 전달받은 `_parms`에 공통 키를 직접 `Add`한다.
  - 동일 딕셔너리 재사용 시 `ArgumentException`(중복 키) 또는 외부 상태 오염 가능.
  - **개선**: 내부 복사본(Dictionary clone)을 만들어 수정하거나 `TryAdd` 사용.

- **문제 4: 로그 과다 및 민감 정보 노출 가능성**
  - config JSON, 토큰, 메시지 전문 등을 `Debug.Log`로 상세 출력.
  - 릴리즈 빌드에서 성능/보안/로그 노이즈 리스크가 있다.
  - **개선**: 개발/운영 로그 레벨 분리, 민감 필드 마스킹, 조건부 컴파일 도입.

- **문제 5: 네이밍/오탈자**
  - `Initalized` 오탈자(Initialized)로 가독성과 검색성이 저하.
  - **개선**: 점진적 리네이밍(프로퍼티 + obsolete 래퍼)으로 안전 전환.

- **문제 6: 종료 상태 리셋 정책의 모호성**
  - `OnApplicationPause/Focus`에서 복귀 시점마다 종료 상태를 리셋한다.
  - iOS 라이프사이클의 경계 케이스에서 상태 전이 타이밍이 꼬일 수 있다.
  - **개선**: 상태 전이 이벤트를 단일 메서드로 정규화하고, 전이 로그를 구조화.

## 게임 플레이/성능/메모리 영향
- **게임 플레이 안정성**
  - 안전 종료 로직은 iOS 백그라운드 전환 시 크래시/프리즈 확률을 낮추는 긍정 효과가 있다.
  - 다만 종료 상태에서 로깅이 차단되므로, 이 구간 이슈 추적은 제한될 수 있다.
- **성능**
  - 현재 메시지/에러/데이터 상세 로그가 많아 프레임 구간 로그 부하가 증가할 수 있다.
  - `UpdateUserData`의 JSON 직렬화(`config`)는 호출 빈도 높을 경우 비용이 커질 수 있다.
- **메모리**
  - 큰 누수 요소는 보이지 않지만, 문자열 결합/직렬화/로그 생성으로 단기 GC 압력이 증가할 수 있다.
  - 이벤트 해제(`CleanupFirebaseEvents`)가 있어 핸들러 누수 위험은 상대적으로 낮다.

## 우선순위 리팩터링 제안
1. `Init`의 메인 스레드 보장 정리 (`ContinueWithOnMainThread`)
2. `SubscribeToTopic` 시그니처 `Task` 기반으로 전환
3. `Log()` 입력 딕셔너리 불변 처리(복사본 사용)
4. 릴리즈 로그 정책(마스킹 + 레벨링) 도입
5. `Initalized` 명칭 정리

## 관련 문서
- [[MKCommon_ReplaceAllDataKeepingVisualElements_Analysis]]

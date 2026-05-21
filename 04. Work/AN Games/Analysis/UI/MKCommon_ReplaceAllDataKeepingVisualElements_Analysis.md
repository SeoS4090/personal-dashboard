---
tags:
  - system/ui
  - ui
  - concern/readability
  - status/done
aliases:
  - MKCommon.cs - ReplaceAllDataKeepingVisualElements 분석
description: ReplaceAllDataKeepingVisualElements(List<T> newDataList)는 **스크롤 리스트 가상화(재사용) 방식**으로, 실제로 생성된 고정 개수의 itemElements(Visu...
created: 2026-05-20
updated: 2026-05-20
---

← [[UI_MOC]]


# MKCommon.cs - ReplaceAllDataKeepingVisualElements 분석

## 개요
ReplaceAllDataKeepingVisualElements(List<T> newDataList)는 **스크롤 리스트 가상화(재사용) 방식**으로, 실제로 생성된 고정 개수의 itemElements(VisualElement들)는 유지한 채 **내부 데이터 캐시(dataCache)만 통째로 교체**하고, 현재 스크롤 시작 인덱스(currentDataStartIndex)에 맞춰 각 엘리먼트를 재배치(style.top) / 표시여부(display) / 데이터 바인딩(onItemUpdate)을 수행한다.

핵심 특징은 다음과 같다.
- 데이터 개수 변화에 따라 contentContainer.style.height = dataCount * singleItemHeight로 스크롤 가능한 전체 높이를 재설정한다.
- currentDataStartIndex가 새 데이터 범위를 벗어나면(끝을 넘으면) **마지막 페이지가 보이도록** 시작 인덱스를 보정하고, 스크롤 오프셋(scrollOffset.y)도 그에 맞게 강제로 이동한다.
- 각 재사용 엘리먼트 i는 데이터 인덱스 dataIndex = currentDataStartIndex + i에 매핑되며, 	op = dataIndex * singleItemHeight로 배치된다.
- 데이터가 부족한 슬롯은 display=None으로 숨긴다.

## 주요 책임/구성 요소
- dataCache: 실제 데이터 리스트(교체 대상)
- itemElements: 재사용하는 UI 슬롯들(고정 개수)
- currentDataStartIndex: 현재 화면 최상단에 대응하는 데이터 인덱스
- singleItemHeight: 아이템 1개의 고정 높이(가상화 계산의 기준)
- scrollViewPro.scrollOffset.y: 실제 스크롤 위치
- onItemUpdate(data, element): (데이터, 엘리먼트) 바인딩/렌더 갱신 콜백

## 동작 흐름(요약)
1) null 방어: 
ewDataList == null이면 종료
2) dataCache를 비우고 
ewDataList로 전부 교체
3) contentContainer 높이를 dataCount * singleItemHeight로 갱신
4) 데이터가 0이면 모든 itemElements를 숨기고 종료
5) currentDataStartIndex >= dataCount이면 시작 인덱스를 마지막 페이지로 보정하고 scrollOffset.y도 강제 세팅
6) itemElements 전체를 순회하며 각 슬롯을
   - dataIndex < dataCount면 표시 + 	op 재배치 + onItemUpdate
   - 아니면 숨김
7) (추가 보정) dataCount < itemElements.Count이면서 currentDataStartIndex > 0이면
   - currentDataStartIndex = 0, scrollOffset.y = 0
   - 처음부터 다시 6)과 유사한 방식으로 표시/숨김/업데이트

## 1개 감소 시 스크롤/엘리먼트 변화(핵심 케이스)
전제:
- 기존 데이터 개수 N → 새 데이터 개수 N-1
- 고정 슬롯 수 V = itemElements.Count
- 아이템 높이 H = singleItemHeight(>0 가정)
- 기존 시작 인덱스 S = currentDataStartIndex
- 각 슬롯 i(0..V-1)는 데이터 인덱스 S+i에 매핑되고 	op = (S+i)*H

### 케이스 A) S < N-1 (시작 인덱스가 여전히 유효)
- **스크롤 오프셋 변화**: 이 함수는 이 조건에서는 scrollOffset을 직접 바꾸지 않는다. 즉, scrollOffset.y는 **유지**된다.
  - 단, 스크롤뷰 구현(UI Toolkit)이 contentContainer.height 감소로 인해 내부적으로 clamp를 할 수 있다. 이 함수 레벨에서는 clamp를 호출하지 않는다.
- **컨텐츠 높이 변화**: contentHeight: N*H → (N-1)*H로 1칸만큼 감소한다.
- **각 엘리먼트의 위치/표시 변화**:
  - 모든 보이는 슬롯에 대해 itemElements[i].style.top = (S+i)*H로 **다시 설정**된다(결과적으로 기존과 동일한 값일 가능성이 높음).
  - 데이터 바인딩은 onItemUpdate(dataCache[S+i], itemElements[i])로 다시 수행된다.
  - 만약 기존에 마지막 슬롯이 dataIndex == N-1(마지막 아이템)을 보여주고 있었다면, 새 데이터에서는 그 인덱스가 사라졌으므로 해당 슬롯은 dataIndex < (N-1) 조건에서 탈락해 display=None으로 **숨겨진다**.

직관적으로:
- 위쪽/중간에서 보고 있으면 화면은 거의 안 움직이고, **맨 끝에 걸려 있던 슬롯 하나가 사라지거나(숨김)** 데이터만 재바인딩된다.

### 케이스 B) S >= N-1 (시작 인덱스가 새 데이터 끝을 넘어 무효)
이 케이스는 데이터가


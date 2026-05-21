[iOS Fix] App gained focus - resetting shutdown state
FirebaseManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/FirebaseManager.cs:76)
UnityEditor.HostView:OnFocus ()

OnApplicationFocus
IAPManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/IAPManagerNew.cs:925)
UnityEditor.HostView:OnFocus ()

---서버간 요새전으로 이동
FortWarJoin:CrossEnterBattleField (Callback,Callback) (at Assets/Scripts/FortWar/FortWarJoin.cs:809)
CrossFortWarNoticeUI:<OnEnable>b__2_0 (UnityEngine.UIElements.ClickEvent) (at Assets/Scripts/CrossFortWar/CrossFortWarNoticeUI.cs:47)
[허드] On !
MainHudUi:RemoveHudAnimation () (at Assets/Common Document/Scripts/MainHudUi.cs:322)
MKPanelSetting:CheckHudAnimation (bool) (at Assets/Scripts/MKPanelSetting.cs:121)
MKPanelSetting:OnDisable () (at Assets/Scripts/MKPanelSetting.cs:56)

FortWarJoin:CrossEnterBattleField (Callback,Callback) (at Assets/Scripts/FortWar/FortWarJoin.cs:814)
CrossFortWarNoticeUI:<OnEnable>b__2_0 (UnityEngine.UIElements.ClickEvent) (at Assets/Scripts/CrossFortWar/CrossFortWarNoticeUI.cs:47)
Set ccSet=33201 - 서버 간 요새전 진입 API

NetworkFortWar:Request_IntoCSFortWar (long,long,long,Callback,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1217)
FortWarJoin:CrossEnterBattleField (Callback,Callback) (at Assets/Scripts/FortWar/FortWarJoin.cs:826)
CrossFortWarNoticeUI:<OnEnable>b__2_0 (UnityEngine.UIElements.ClickEvent) (at Assets/Scripts/CrossFortWar/CrossFortWarNoticeUI.cs:47)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_IntoCSFortWar (long,long,long,Callback,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1217)
FortWarJoin:CrossEnterBattleField (Callback,Callback) (at Assets/Scripts/FortWar/FortWarJoin.cs:826)
CrossFortWarNoticeUI:<OnEnable>b__2_0 (UnityEngine.UIElements.ClickEvent) (at Assets/Scripts/CrossFortWar/CrossFortWarNoticeUI.cs:47)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_IntoCSFortWar (long,long,long,Callback,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1217)
FortWarJoin:CrossEnterBattleField (Callback,Callback) (at Assets/Scripts/FortWar/FortWarJoin.cs:826)
CrossFortWarNoticeUI:<OnEnable>b__2_0 (UnityEngine.UIElements.ClickEvent) (at Assets/Scripts/CrossFortWar/CrossFortWarNoticeUI.cs:47)
---RunDelayProcessing
MainHudUi:RunDelayProcessing () (at Assets/Common Document/Scripts/MainHudUi.cs:6798)
MainHudUi:<RemoveHudAnimation>b__67_0 () (at Assets/Common Document/Scripts/MainHudUi.cs:359)
CoroutineCallback/<WaitSecondsCallback>d__0:MoveNext () (at Assets/Village/Scripts/CoroutineCallback.cs:12)
Call ccCall=33201 / callList=1

33201 - 서버 간 요새전 진입 API

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":33201,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"cd":{"game_id":1,"map_no":101,"match_no":3}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":33201,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"cd":{"game_id":1,"map_no":101,"match_no":3}}

33201 - 서버 간 요새전 진입 APIhttp://13.209.182.168:2020/api.php

particle Load : Succeeded - FX_Touch_HitPlayEffect_Touch Click @ input ((1011.03, 408.08, 0.00)) → uxmlPos: ((1011.03, 671.92)) → Visual at left: 921.0331px, top: 581.9158px
MKEffectSystemManager/<>c__DisplayClass93_1:<PlayEffect_Touch>b__1 () (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2391)
Re ccRecive=33201 / callList=1[   33201  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913117.533721,"rc":0,"rd":{"crossserverfortwarset":{"received_item":[],"no":720037,"fw_emergency_rtn_cnt":0,"up_time":1776912048,"enter_cnt":17,"server_no":1501,"socket_io":"https:\/\/qa-socketio-csfw1501.aalbtw.com\/","api_url":"https:\/\/aa-qa-ap01.aalbtw.com\/api.php"},"__dummy":1776913117.726201},"clidesc":null,"svdesc":null,"end_ts":1776913117.727751}
cc=33201
SetServerTime offset=-2.03701615333557
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
33201 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913117.533721,"rc":0,"rd":{"crossserverfortwarset":{"received_item":[],"no":720037,"fw_emergency_rtn_cnt":0,"up_time":1776912048,"enter_cnt":17,"server_no":1501,"socket_io":"https:\/\/qa-socketio-csfw1501.aalbtw.com\/","api_url":"https:\/\/aa-qa-ap01.aalbtw.com\/api.php"},"__dummy":1776913117.726201},"clidesc":null,"svdesc":null,"end_ts":1776913117.727751}
[허드] Off !
MainHudUi:AddHudAnimation (HudAnimationType,Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:237)
MainHudUi:HideMainHud (bool,Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:209)
EntryFog:DoInAnimation (Callback,EntryFog/TYPE) (at Assets/Resources/Fog/EntryFog.cs:96)
MKSceneManager:ShowEntryFog (Callback,EntryFog/TYPE) (at Assets/Scripts/MKSceneManager.cs:1494)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__1 () (at Assets/Scripts/FortWar/FortWarJoin.cs:828)
NetworkFortWar/<>c__DisplayClass39_0:<Request_IntoCSFortWar>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkFortWar.cs:1226)

[허드 연출] UI 숨기기 !
MainHudUi:AddHudAnimation (HudAnimationType,Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:273)
MainHudUi:HideMainHud (bool,Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:209)
EntryFog:DoInAnimation (Callback,EntryFog/TYPE) (at Assets/Resources/Fog/EntryFog.cs:96)
MKSceneManager:ShowEntryFog (Callback,EntryFog/TYPE) (at Assets/Scripts/MKSceneManager.cs:1494)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__1 () (at Assets/Scripts/FortWar/FortWarJoin.cs:828)
NetworkFortWar/<>c__DisplayClass39_0:<Request_IntoCSFortWar>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkFortWar.cs:1226)

Sound Play POPUP_EFFECT : Effect_Button_Village
EntryFog:DoInAnimation (Callback,EntryFog/TYPE) (at Assets/Resources/Fog/EntryFog.cs:104)
MKSceneManager:ShowEntryFog (Callback,EntryFog/TYPE) (at Assets/Scripts/MKSceneManager.cs:1494)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__1 () (at Assets/Scripts/FortWar/FortWarJoin.cs:828)
NetworkFortWar/<>c__DisplayClass39_0:<Request_IntoCSFortWar>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkFortWar.cs:1226)


테마 변경 : EARTH2
MKUIDocumentManager:SwitchTheme (int) (at Assets/Scripts/MKUIDocumentManager.cs:35)
MKPanelSetting:LayoutChanged (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Scripts/MKPanelSetting.cs:91)
UIDocument FogScreen sortingOrder=100 aspectRatio=1.777778,match(0:width 1:height)=1
MKPanelSetting:LayoutChanged (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Scripts/MKPanelSetting.cs:92)
Set ccSet=1632 - 채팅 내역 불러오기

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:830)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

isPauseMode=False , isPaused=True

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:830)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

isPauseMode=False , isPaused=True

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:830)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

HUD REFRESH SUPPLY BTN 2026-04-23 오전 11:55:48 : Remain : -00:02:50
MainHudUi:RefreshFWSupplyBtn () (at Assets/Common Document/Scripts/MainHudUi.cs:2452)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2427)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:830)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

MainHudUi:ClearPkgSideBtns () (at Assets/Common Document/Scripts/MainHudUi.cs:3503)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2431)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:830)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

---마을 제거
VillageManager:RemoveVillage () (at Assets/Village/Scripts/VillageManager.cs:745)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:835)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)

lastScene=VillageScene
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:613)

MKSceneManager:PushFortWar (System.Action,bool) (at Assets/Scripts/MKSceneManager.cs:883)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__3 () (at Assets/Scripts/FortWar/FortWarJoin.cs:843)
EntryFog:<OnEnable>b__14_0 () (at Assets/Resources/Fog/EntryFog.cs:41)
EntryFogAnimator:DoStopAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:12)


particle Load : Succeeded - fx_world_fortwar_UI_Heal_IconMKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2486)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2033)


particle Load : Succeeded - fx_world_fortwar_UI_pickup_IconMKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2486)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2033)


Call ccCall=1632 / callList=1

1632 - 채팅 내역 불러오기

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":1632,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"cd":{"type":1,"chat_no":2}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":1632,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"cd":{"type":1,"chat_no":2}}

1632 - 채팅 내역 불러오기http://13.209.182.168:2020/api.php

defaultAngle=60.64225
CityIndicator:Start () (at Assets/World/Scripts/UI/CityIndicator.cs:84)

MKCommon.isGooglePc=False Input.touchSupported=False
WorldCameraManager:Start () (at Assets/World/Scripts/WorldCameraManager.cs:113)

There are 2 audio listeners in the scene. Please ensure there is always exactly one audio listener in the scene.

There are 2 audio listeners in the scene. Please ensure there is always exactly one audio listener in the scene.

There are 2 audio listeners in the scene. Please ensure there is always exactly one audio listener in the scene.

load done scene MKSCENE_FORTWAR
MKSceneManager/<LoadSceneAsyncDelay>d__25:MoveNext () (at Assets/Scripts/MKSceneManager.cs:456)
Sound Play BGM : bgm_fortwar
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1215)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1141)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKSoundManager:SetBgmProc (MKBgmTypeData,bool,single) (at Assets/Scripts/Sound/MKSoundManager.cs:2215)
MKSoundManager:SetBgm_Scene (MKSceneManager/MKSceneEnum) (at Assets/Scripts/Sound/MKSoundManager.cs:2076)
MKSceneManager:ChangeScene (MKSceneManager/MKSceneEnum,System.Action) (at Assets/Scripts/MKSceneManager.cs:536)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:616)
Sound Play POPUP_EFFECT : Effect_WorldVillageChange
MKSceneManager:ChangeScene (MKSceneManager/MKSceneEnum,System.Action) (at Assets/Scripts/MKSceneManager.cs:537)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:616)
Re ccRecive=1632 / callList=1[   1632  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913118.735744,"rc":0,"rd":{"chat_slots":[{"_id":"69e85b8871b958f16c025d54","UTC_UNIXTIME":1776835464.087437,"SERVER_NO":2,"USER_NO":16769,"MESSAGE":{"type":"server_notify","user_no":16769,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16769,"user_name":"권순영","user_tag":"EAST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4001800,"planet_no":0,"servertime":1776835463,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"global"},"오"]}},{"_id":"69e8121850d44521fa03d174","UTC_UNIXTIME":1776816664.139313,"SERVER_NO":2,"USER_NO":16094,"MESSAGE":{"type":"server_notify","user_no":16094,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16094,"user_name":"wowodd","user_tag":"깨소금","user_title_id":4,"frame_ID":3011800,"portrait_ID":4004200,"planet_no":0,"servertime":1776816663,"vipLevel":5,"name_tag_id":20015,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"global"},"오 나 어떤데"]}},{"_id":"69e6d24eba243857c1094ec4","UTC_UNIXTIME":1776734798.073204,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734797,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"차단 해제해도 안섞임 확인"]}},{"_id":"69e6cf1bfe8a5f43ae0db0c4","UTC_UNIXTIME":1776733979.173878,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776733978,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"월드 채팅 입니다. "]}},{"_id":"69e6c73c26f0d41a5d0eb1f4","UTC_UNIXTIME":1776731964.595689,"SERVER_NO":2,"USER_NO":16758,"MESSAGE":{"type":"server_notify","user_no":16758,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16758,"user_name":"leader_16758","user_tag":"gogo","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776731964,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"이것은 월드에서 채팅한 채팅채팅"]}},{"_id":"69e5c801286cd762e40d46d4","UTC_UNIXTIME":1776666625.587742,"SERVER_NO":2,"USER_NO":16766,"MESSAGE":{"type":"server_notify","user_no":16766,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16766,"user_name":"leader_16766","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776666625,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"혹시 전장에 이게 보이나요\n"]}},{"_id":"69e5bac358224b2a0506d844","UTC_UNIXTIME":1776663235.275739,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663235,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㄴ머이람넝ㄻㄴㅇㄹㄴㅁ"]}},{"_id":"69e5babedfc655c2440cda34","UTC_UNIXTIME":1776663230.312524,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663230,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"채팅채팅\n"]}},{"_id":"69e5bab46be661890b0ad8b4","UTC_UNIXTIME":1776663220.669532,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663220,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"sadfsdafsadf"]}},{"_id":"69e5bab2af05a6dfe7059934","UTC_UNIXTIME":1776663218.75583,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663218,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"asdfa"]}},{"_id":"69e46308e67b6c010c079044","UTC_UNIXTIME":1776575239.939031,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776575239,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"인터 붙는거 확인"]}},{"_id":"69e359782d7f437677081724","UTC_UNIXTIME":1776507256.751729,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776507256,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"확인됨"]}},{"_id":"69e359752c88112039038964","UTC_UNIXTIME":1776507252.941462,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776507252,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"월보 미노출"]}},{"_id":"69e188dba82846320d0c19c4","UTC_UNIXTIME":1776388315.593869,"SERVER_NO":2,"USER_NO":15145,"MESSAGE":{"type":"server_notify","user_no":15145,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":15145,"user_name":"leader_15145","user_tag":"eve2","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776388315,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"여기는 월드2\n"]}}],"__dummy":1776913118.797259},"clidesc":null,"svdesc":null,"end_ts":1776913118.798346}
cc=1632
SetServerTime offset=-1.70554852485657
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
1632 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913118.735744,"rc":0,"rd":{"chat_slots":[{"_id":"69e85b8871b958f16c025d54","UTC_UNIXTIME":1776835464.087437,"SERVER_NO":2,"USER_NO":16769,"MESSAGE":{"type":"server_notify","user_no":16769,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16769,"user_name":"권순영","user_tag":"EAST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4001800,"planet_no":0,"servertime":1776835463,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"global"},"오"]}},{"_id":"69e8121850d44521fa03d174","UTC_UNIXTIME":1776816664.139313,"SERVER_NO":2,"USER_NO":16094,"MESSAGE":{"type":"server_notify","user_no":16094,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16094,"user_name":"wowodd","user_tag":"깨소금","user_title_id":4,"frame_ID":3011800,"portrait_ID":4004200,"planet_no":0,"servertime":1776816663,"vipLevel":5,"name_tag_id":20015,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"global"},"오 나 어떤데"]}},{"_id":"69e6d24eba243857c1094ec4","UTC_UNIXTIME":1776734798.073204,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734797,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"차단 해제해도 안섞임 확인"]}},{"_id":"69e6cf1bfe8a5f43ae0db0c4","UTC_UNIXTIME":1776733979.173878,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776733978,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"월드 채팅 입니다. "]}},{"_id":"69e6c73c26f0d41a5d0eb1f4","UTC_UNIXTIME":1776731964.595689,"SERVER_NO":2,"USER_NO":16758,"MESSAGE":{"type":"server_notify","user_no":16758,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16758,"user_name":"leader_16758","user_tag":"gogo","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776731964,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"이것은 월드에서 채팅한 채팅채팅"]}},{"_id":"69e5c801286cd762e40d46d4","UTC_UNIXTIME":1776666625.587742,"SERVER_NO":2,"USER_NO":16766,"MESSAGE":{"type":"server_notify","user_no":16766,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16766,"user_name":"leader_16766","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776666625,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"혹시 전장에 이게 보이나요\n"]}},{"_id":"69e5bac358224b2a0506d844","UTC_UNIXTIME":1776663235.275739,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663235,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㄴ머이람넝ㄻㄴㅇㄹㄴㅁ"]}},{"_id":"69e5babedfc655c2440cda34","UTC_UNIXTIME":1776663230.312524,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663230,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"채팅채팅\n"]}},{"_id":"69e5bab46be661890b0ad8b4","UTC_UNIXTIME":1776663220.669532,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663220,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"sadfsdafsadf"]}},{"_id":"69e5bab2af05a6dfe7059934","UTC_UNIXTIME":1776663218.75583,"SERVER_NO":2,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776663218,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"asdfa"]}},{"_id":"69e46308e67b6c010c079044","UTC_UNIXTIME":1776575239.939031,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776575239,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"인터 붙는거 확인"]}},{"_id":"69e359782d7f437677081724","UTC_UNIXTIME":1776507256.751729,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776507256,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"확인됨"]}},{"_id":"69e359752c88112039038964","UTC_UNIXTIME":1776507252.941462,"SERVER_NO":2,"USER_NO":16767,"MESSAGE":{"type":"server_notify","user_no":16767,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":16767,"user_name":"AXX","user_tag":"NRT","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776507252,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"월보 미노출"]}},{"_id":"69e188dba82846320d0c19c4","UTC_UNIXTIME":1776388315.593869,"SERVER_NO":2,"USER_NO":15145,"MESSAGE":{"type":"server_notify","user_no":15145,"chat_no":2,"category":"chatting","option":[0,{"server_no":"1002","user_no":15145,"user_name":"leader_15145","user_tag":"eve2","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776388315,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"여기는 월드2\n"]}}],"__dummy":1776913118.797259},"clidesc":null,"svdesc":null,"end_ts":1776913118.798346}
UnloadUnusedAssets : 828ms
MKSceneManager/<WaitUnloadUnsuedAssets>d__30:MoveNext () (at Assets/Scripts/MKSceneManager.cs:600)
GetCurMKScene Trail: MKSCENE_FORTWAR
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:620)
#FORTWAR SetDefaultCam 720037
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:168)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2339)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
GoToGroundPosAtOnce (37.00, 0.05, 72.00)
WorldManager:GoToGroundPosAtOnce (UnityEngine.Vector3) (at Assets/World/Scripts/WorldManager.cs:9255)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:170)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2339)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
#### req_block_join 5

WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2339)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2339)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=1632 - 채팅 내역 불러오기

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkChatting:Request_ChattingRead (long,long,Callback,NetworkChatting/ChattingList) (at Assets/Common Document/Scripts/NetworkChatting.cs:414)
NetworkChatting:RefreshChattingLoad (NetworkChatting/Chat_Load,bool,Callback) (at Assets/Common Document/Scripts/NetworkChatting.cs:737)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2413)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
HUD REFRESH SUPPLY BTN 2026-04-23 오전 11:55:48 : Remain : -00:02:51
MainHudUi:RefreshFWSupplyBtn () (at Assets/Common Document/Scripts/MainHudUi.cs:2452)
MainHudUi:ToggleToFortWar (bool) (at Assets/Common Document/Scripts/MainHudUi.cs:2427)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:846)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27219 - 연맹 집결 정보 조회

NetworkAlly:Request_GetRallyData (long,Callback,Callback,bool) (at Assets/Network/Scripts/NetworkAlly.cs:2755)
MainHudUi:RequestRallyDataAndRefreshConcentrateButton (Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:2225)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:848)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkAlly:Request_GetRallyData (long,Callback,Callback,bool) (at Assets/Network/Scripts/NetworkAlly.cs:2755)
MainHudUi:RequestRallyDataAndRefreshConcentrateButton (Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:2225)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:848)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkAlly:Request_GetRallyData (long,Callback,Callback,bool) (at Assets/Network/Scripts/NetworkAlly.cs:2755)
MainHudUi:RequestRallyDataAndRefreshConcentrateButton (Callback) (at Assets/Common Document/Scripts/MainHudUi.cs:2225)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:848)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27255 - 요새전 결과 발표 (요새전 랭킹)

NetworkFortWar:Request_GetFortWarBattleResult (long,long,long,long,bool,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1130)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:859)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarBattleResult (long,long,long,long,bool,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1130)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:859)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarBattleResult (long,long,long,long,bool,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1130)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:859)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)

MKCommon:MakeTerriotyNo_old (UnityEngine.Vector2) (at Assets/Scripts/MKCommon.cs:444)
MKCommon:MakeTerriotyNo (long) (at Assets/Scripts/MKCommon.cs:412)
NetworkLogin:Request_BuffAll (Callback) (at Assets/Network/Scripts/NetworkLogin.cs:2290)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:860)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27260 - 모든 버프 조회 !

NetworkLogin:Request_BuffAll (Callback) (at Assets/Network/Scripts/NetworkLogin.cs:2292)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:860)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkLogin:Request_BuffAll (Callback) (at Assets/Network/Scripts/NetworkLogin.cs:2292)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:860)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkLogin:Request_BuffAll (Callback) (at Assets/Network/Scripts/NetworkLogin.cs:2292)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:860)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27212 - 감시탑/요새/성채 건물 조회

NetworkFortWar:Request_GetFortWarPointData (long,long,long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:734)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:281)

FortWarManager:LoadMap () (at Assets/Scripts/FortWar/FortWarManager.cs:567)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:862)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarPointData (long,long,long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:734)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:281)

FortWarManager:LoadMap () (at Assets/Scripts/FortWar/FortWarManager.cs:567)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:862)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarPointData (long,long,long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:734)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:281)

FortWarManager:LoadMap () (at Assets/Scripts/FortWar/FortWarManager.cs:567)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:862)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
xml=Assets/Art_Resources/Addressable/Contents/Worldmap/TileSet/unified_tile_img.xml
WorldDataManager/<LoadUnifiedSpriteDataFromXML>d__44:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:176)

FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:291)

FortWarManager:LoadMap () (at Assets/Scripts/FortWar/FortWarManager.cs:567)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:862)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27257 - 요새전 영웅 정보 요청

NetworkFortWar:Request_GetFortWarHero (long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1157)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:865)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarHero (long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1157)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:865)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetFortWarHero (long,Callback) (at Assets/Network/Scripts/NetworkFortWar.cs:1157)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:865)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
#FORTWAR Connect_WorldSocket
FortWarSocket:ReConnect_WorldSocket () (at Assets/Scripts/FortWar/FortWarSocket.cs:42)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:867)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
Set ccSet=27217 - 연맹 마크 조회

NetworkFortWar:Request_GetAllyMark (long,long,long,Callback,bool) (at Assets/Network/Scripts/NetworkFortWar.cs:845)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:870)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetAllyMark (long,long,long,Callback,bool) (at Assets/Network/Scripts/NetworkFortWar.cs:845)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:870)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)
isPauseMode=False , isPaused=True

NetworkFortWar:Request_GetAllyMark (long,long,long,Callback,bool) (at Assets/Network/Scripts/NetworkFortWar.cs:845)
FortWarJoin/<>c__DisplayClass103_0:<CrossEnterBattleField>b__4 () (at Assets/Scripts/FortWar/FortWarJoin.cs:870)
MKSceneManager/<PushScene>d__31:MoveNext () (at Assets/Scripts/MKSceneManager.cs:621)

Call ccCall=1632 / callList=7

1632 - 채팅 내역 불러오기

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":1632,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"type":1,"chat_no":2,"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":1632,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"type":1,"chat_no":2,"map_no":101}}

1632 - 채팅 내역 불러오기http://13.209.182.168:2020/api.php

Succeeded unified_tile_img
WorldDataManager:OnUnifiedSpriteXMLAssetLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.TextAsset>) (at Assets/World/Scripts/WorldDataManager.cs:188)
WorldDataManager/<LoadUnifiedSpriteDataFromXML>d__44:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:181)
Succeeded atlas_world_common
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Succeeded atlas_world_1_water
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Succeeded atlas_world_2_earth
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Succeeded atlas_world_3_fire
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Succeeded atlas_world_4_air
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Succeeded atlas_world_5_wasteland
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
Re ccRecive=1632 / callList=7[   1632     27219     27255     27260     27212     27257     27217  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913119.706697,"rc":0,"rd":{"chat_slots":[{"_id":"69e988a40c612d90700316c2","UTC_UNIXTIME":1776912548.44951,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776912548,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"잔잔"],"map_no":101}},{"_id":"69e988a1960f80104f022a02","UTC_UNIXTIME":1776912545.199139,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776912544,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"칼칼"],"map_no":101}},{"_id":"69e986fd59f56d649c07fbe2","UTC_UNIXTIME":1776912125.520961,"SERVER_NO":1501,"USER_NO":16827,"MESSAGE":{"type":"server_notify","user_no":16827,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16827,"user_name":"D용덕080","user_tag":"WEST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4002500,"planet_no":0,"servertime":1776912125,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"ㅂㅂㅊ\"¿"],"map_no":101}},{"_id":"69e9865adea0988719047da2","UTC_UNIXTIME":1776911962.520259,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911962,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"오늘은 칼퇴할 수 있기를!!"],"map_no":101}},{"_id":"69e9863fe605f1cf4b0d9c02","UTC_UNIXTIME":1776911935.685144,"SERVER_NO":1501,"USER_NO":16778,"MESSAGE":{"type":"server_notify","user_no":16778,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16778,"user_name":"김동환A","user_tag":"EAST","user_title_id":0,"frame_ID":0,"portrait_ID":4003600,"planet_no":0,"servertime":1776911935,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"112, 81"],"map_no":101}},{"_id":"69e985af42078b89d90fd752","UTC_UNIXTIME":1776911790.979429,"SERVER_NO":1501,"USER_NO":16827,"MESSAGE":{"type":"server_notify","user_no":16827,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16827,"user_name":"D용덕080","user_tag":"WEST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4002500,"planet_no":0,"servertime":1776911790,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"Fuck"],"map_no":101}},{"_id":"69e9850e4f6a0481d902dc92","UTC_UNIXTIME":1776911630.277901,"SERVER_NO":1501,"USER_NO":16797,"MESSAGE":{"type":"server_notify","user_no":16797,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1003","user_no":16797,"user_name":"이현규A","user_tag":"SOTH","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911630,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"방금 돌을 뚫었는디 안되네여\n"],"map_no":101}},{"_id":"69e984d6678d90bcc7088c52","UTC_UNIXTIME":1776911574.539426,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911574,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"졸리군요"],"map_no":101}},{"_id":"69e984a2cdfa10591e0d45b2","UTC_UNIXTIME":1776911522.823738,"SERVER_NO":1501,"USER_NO":16808,"MESSAGE":{"type":"server_notify","user_no":16808,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16808,"user_name":"aaas","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911522,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"우동 돈까스 탕수육"],"map_no":101}},{"_id":"69e98190674de919340862f2","UTC_UNIXTIME":1776910736.197902,"SERVER_NO":1501,"USER_NO":16797,"MESSAGE":{"type":"server_notify","user_no":16797,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1003","user_no":16797,"user_name":"이현규A","user_tag":"SOTH","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776910736,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"하이여~"],"map_no":101}},{"_id":"69e98096541c88a60402cd22","UTC_UNIXTIME":1776910486.001346,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776910485,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"요새전!!"],"map_no":101}},{"_id":"69e861882c506dd02b0b7162","UTC_UNIXTIME":1776837000.608501,"SERVER_NO":1501,"USER_NO":16546,"MESSAGE":{"type":"server_notify","user_no":16546,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16546,"user_name":"Rally2","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":4001000,"planet_no":0,"servertime":1776837000,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"suck"],"map_no":101}},{"_id":"69e86182b63e9371d00b0c42","UTC_UNIXTIME":1776836994.119391,"SERVER_NO":1501,"USER_NO":16675,"MESSAGE":{"type":"server_notify","user_no":16675,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16675,"user_name":"leader_16675","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776836993,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"fuck"],"map_no":101}},{"_id":"69e861789e3d60dc690f8c62","UTC_UNIXTIME":1776836984.739378,"SERVER_NO":1501,"USER_NO":16546,"MESSAGE":{"type":"server_notify","user_no":16546,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16546,"user_name":"Rally2","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":4001000,"planet_no":0,"servertime":1776836984,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"xxxx"],"map_no":101}},{"_id":"69e861743c3554db39002942","UTC_UNIXTIME":1776836980.393935,"SERVER_NO":1501,"USER_NO":16675,"MESSAGE":{"type":"server_notify","user_no":16675,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16675,"user_name":"leader_16675","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776836980,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"xxxx"],"map_no":101}},{"_id":"69e6d23779739b22c10bb8f2","UTC_UNIXTIME":1776734774.96611,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734774,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"예"],"map_no":101}},{"_id":"69e6d21e577fbe03fe0180d2","UTC_UNIXTIME":1776734750.036769,"SERVER_NO":1501,"USER_NO":16811,"MESSAGE":{"type":"server_notify","user_no":16811,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16811,"user_name":"wwww","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734749,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"저는 이제 나갑니댜"],"map_no":101}},{"_id":"69e6d170024c1f72fb000d02","UTC_UNIXTIME":1776734576.464756,"SERVER_NO":1501,"USER_NO":16811,"MESSAGE":{"type":"server_notify","user_no":16811,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16811,"user_name":"wwww","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734576,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"05605650645456456"],"map_no":101}},{"_id":"69e6d1184860fe4d0807bab2","UTC_UNIXTIME":1776734488.379486,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734488,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채팅 1"],"map_no":101}},{"_id":"69e6d1084e3d2af23e09b6b2","UTC_UNIXTIME":1776734472.322048,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734472,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"암 히얼"],"map_no":101}},{"_id":"69e6d102e1e2a35d8202db92","UTC_UNIXTIME":1776734466.342591,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734466,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"똑똑?"],"map_no":101}},{"_id":"69e6cf3ad792e8556a0799f2","UTC_UNIXTIME":1776734010.433055,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734010,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채팅"],"map_no":101}},{"_id":"69e6cf3539a7d4000404bc22","UTC_UNIXTIME":1776734005.117934,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734004,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"하하"],"map_no":101}},{"_id":"69e5cb599da0927b7c0bdff2","UTC_UNIXTIME":1776667481.736701,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776667481,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ"],"map_no":101}},{"_id":"69e5c2015305680da50b8cd2","UTC_UNIXTIME":1776665089.803298,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776665089,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"계세요?"],"map_no":101}},{"_id":"69e5bc0db05bfe293e0332a2","UTC_UNIXTIME":1776663565.365683,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776663565,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"159159"],"map_no":101}},{"_id":"69e1a0655bf7a2c3450bac22","UTC_UNIXTIME":1776394340.920842,"SERVER_NO":1501,"USER_NO":17500,"MESSAGE":{"type":"server_notify","user_no":17500,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1001","user_no":17500,"user_name":"leader_17500","user_tag":"1209","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394340,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채널도 똑같이 월드 채팅이랑 같은 조건이 붙을 거 같은데용?"],"map_no":101}},{"_id":"69e1a013717d13478c0be5e2","UTC_UNIXTIME":1776394259.715563,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394259,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㄴㄴㄴㄴ"],"map_no":101}},{"_id":"69e1a0111b77a474a706b262","UTC_UNIXTIME":1776394257.344211,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394256,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅂㅈㄷㅂㅈㄱㄷ"],"map_no":101}},{"_id":"69e19f744825167872072a72","UTC_UNIXTIME":1776394100.500996,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394100,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"아 이거 과금 안하면 채팅 못하고 그러지는 않겠죠?"],"map_no":101}},{"_id":"69e19f60270b97de75050512","UTC_UNIXTIME":1776394080.148589,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394079,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅎㅇㅎ"],"map_no":101}},{"_id":"69e19e491a7d5d4ea90d7692","UTC_UNIXTIME":1776393801.314658,"SERVER_NO":1501,"USER_NO":16031,"MESSAGE":{"type":"server_notify","user_no":16031,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1001","user_no":16031,"user_name":"cacao","user_tag":"1209","user_title_id":0,"frame_ID":3011700,"portrait_ID":4004300,"planet_no":0,"servertime":1776393801,"vipLevel":10,"name_tag_id":20011,"termParam":[],"ally_war_idx":0,"filter_no":0},"1서버가 짱이지"],"map_no":101}},{"_id":"69e19d8223aae54bc10e2852","UTC_UNIXTIME":1776393602.340036,"SERVER_NO":1501,"USER_NO":16031,"MESSAGE":{"type":"server_notify","user_no":16031,"chat_no":1501,"category":"chatting","option":[<message truncated>
cc=1632
SetServerTime offset=-2.1006805896759
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
1632 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913119.706697,"rc":0,"rd":{"chat_slots":[{"_id":"69e988a40c612d90700316c2","UTC_UNIXTIME":1776912548.44951,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776912548,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"잔잔"],"map_no":101}},{"_id":"69e988a1960f80104f022a02","UTC_UNIXTIME":1776912545.199139,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776912544,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"칼칼"],"map_no":101}},{"_id":"69e986fd59f56d649c07fbe2","UTC_UNIXTIME":1776912125.520961,"SERVER_NO":1501,"USER_NO":16827,"MESSAGE":{"type":"server_notify","user_no":16827,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16827,"user_name":"D용덕080","user_tag":"WEST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4002500,"planet_no":0,"servertime":1776912125,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"ㅂㅂㅊ\"¿"],"map_no":101}},{"_id":"69e9865adea0988719047da2","UTC_UNIXTIME":1776911962.520259,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911962,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"오늘은 칼퇴할 수 있기를!!"],"map_no":101}},{"_id":"69e9863fe605f1cf4b0d9c02","UTC_UNIXTIME":1776911935.685144,"SERVER_NO":1501,"USER_NO":16778,"MESSAGE":{"type":"server_notify","user_no":16778,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16778,"user_name":"김동환A","user_tag":"EAST","user_title_id":0,"frame_ID":0,"portrait_ID":4003600,"planet_no":0,"servertime":1776911935,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"112, 81"],"map_no":101}},{"_id":"69e985af42078b89d90fd752","UTC_UNIXTIME":1776911790.979429,"SERVER_NO":1501,"USER_NO":16827,"MESSAGE":{"type":"server_notify","user_no":16827,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16827,"user_name":"D용덕080","user_tag":"WEST","user_title_id":0,"frame_ID":3010600,"portrait_ID":4002500,"planet_no":0,"servertime":1776911790,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"Fuck"],"map_no":101}},{"_id":"69e9850e4f6a0481d902dc92","UTC_UNIXTIME":1776911630.277901,"SERVER_NO":1501,"USER_NO":16797,"MESSAGE":{"type":"server_notify","user_no":16797,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1003","user_no":16797,"user_name":"이현규A","user_tag":"SOTH","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911630,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"방금 돌을 뚫었는디 안되네여\n"],"map_no":101}},{"_id":"69e984d6678d90bcc7088c52","UTC_UNIXTIME":1776911574.539426,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911574,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"졸리군요"],"map_no":101}},{"_id":"69e984a2cdfa10591e0d45b2","UTC_UNIXTIME":1776911522.823738,"SERVER_NO":1501,"USER_NO":16808,"MESSAGE":{"type":"server_notify","user_no":16808,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16808,"user_name":"aaas","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776911522,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"우동 돈까스 탕수육"],"map_no":101}},{"_id":"69e98190674de919340862f2","UTC_UNIXTIME":1776910736.197902,"SERVER_NO":1501,"USER_NO":16797,"MESSAGE":{"type":"server_notify","user_no":16797,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1003","user_no":16797,"user_name":"이현규A","user_tag":"SOTH","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776910736,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"하이여~"],"map_no":101}},{"_id":"69e98096541c88a60402cd22","UTC_UNIXTIME":1776910486.001346,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776910485,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"요새전!!"],"map_no":101}},{"_id":"69e861882c506dd02b0b7162","UTC_UNIXTIME":1776837000.608501,"SERVER_NO":1501,"USER_NO":16546,"MESSAGE":{"type":"server_notify","user_no":16546,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16546,"user_name":"Rally2","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":4001000,"planet_no":0,"servertime":1776837000,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"suck"],"map_no":101}},{"_id":"69e86182b63e9371d00b0c42","UTC_UNIXTIME":1776836994.119391,"SERVER_NO":1501,"USER_NO":16675,"MESSAGE":{"type":"server_notify","user_no":16675,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16675,"user_name":"leader_16675","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776836993,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"fuck"],"map_no":101}},{"_id":"69e861789e3d60dc690f8c62","UTC_UNIXTIME":1776836984.739378,"SERVER_NO":1501,"USER_NO":16546,"MESSAGE":{"type":"server_notify","user_no":16546,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16546,"user_name":"Rally2","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":4001000,"planet_no":0,"servertime":1776836984,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"xxxx"],"map_no":101}},{"_id":"69e861743c3554db39002942","UTC_UNIXTIME":1776836980.393935,"SERVER_NO":1501,"USER_NO":16675,"MESSAGE":{"type":"server_notify","user_no":16675,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16675,"user_name":"leader_16675","user_tag":"test","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776836980,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"xxxx"],"map_no":101}},{"_id":"69e6d23779739b22c10bb8f2","UTC_UNIXTIME":1776734774.96611,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734774,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"예"],"map_no":101}},{"_id":"69e6d21e577fbe03fe0180d2","UTC_UNIXTIME":1776734750.036769,"SERVER_NO":1501,"USER_NO":16811,"MESSAGE":{"type":"server_notify","user_no":16811,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16811,"user_name":"wwww","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734749,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"저는 이제 나갑니댜"],"map_no":101}},{"_id":"69e6d170024c1f72fb000d02","UTC_UNIXTIME":1776734576.464756,"SERVER_NO":1501,"USER_NO":16811,"MESSAGE":{"type":"server_notify","user_no":16811,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16811,"user_name":"wwww","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734576,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"05605650645456456"],"map_no":101}},{"_id":"69e6d1184860fe4d0807bab2","UTC_UNIXTIME":1776734488.379486,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734488,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채팅 1"],"map_no":101}},{"_id":"69e6d1084e3d2af23e09b6b2","UTC_UNIXTIME":1776734472.322048,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734472,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"암 히얼"],"map_no":101}},{"_id":"69e6d102e1e2a35d8202db92","UTC_UNIXTIME":1776734466.342591,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776734466,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0,"chat_channel":"csfw"},"똑똑?"],"map_no":101}},{"_id":"69e6cf3ad792e8556a0799f2","UTC_UNIXTIME":1776734010.433055,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734010,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채팅"],"map_no":101}},{"_id":"69e6cf3539a7d4000404bc22","UTC_UNIXTIME":1776734005.117934,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776734004,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"하하"],"map_no":101}},{"_id":"69e5cb599da0927b7c0bdff2","UTC_UNIXTIME":1776667481.736701,"SERVER_NO":1501,"USER_NO":16810,"MESSAGE":{"type":"server_notify","user_no":16810,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16810,"user_name":"정의훈A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776667481,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ"],"map_no":101}},{"_id":"69e5c2015305680da50b8cd2","UTC_UNIXTIME":1776665089.803298,"SERVER_NO":1501,"USER_NO":16763,"MESSAGE":{"type":"server_notify","user_no":16763,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1002","user_no":16763,"user_name":"지용호A","user_tag":"hoho","user_title_id":0,"frame_ID":3011200,"portrait_ID":4000600,"planet_no":0,"servertime":1776665089,"vipLevel":15,"name_tag_id":20009,"termParam":[],"ally_war_idx":0,"filter_no":0},"계세요?"],"map_no":101}},{"_id":"69e5bc0db05bfe293e0332a2","UTC_UNIXTIME":1776663565.365683,"SERVER_NO":1501,"USER_NO":16813,"MESSAGE":{"type":"server_notify","user_no":16813,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16813,"user_name":"신서우A","user_tag":"WEST","user_title_id":0,"frame_ID":3011200,"portrait_ID":4003600,"planet_no":0,"servertime":1776663565,"vipLevel":15,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"159159"],"map_no":101}},{"_id":"69e1a0655bf7a2c3450bac22","UTC_UNIXTIME":1776394340.920842,"SERVER_NO":1501,"USER_NO":17500,"MESSAGE":{"type":"server_notify","user_no":17500,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1001","user_no":17500,"user_name":"leader_17500","user_tag":"1209","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394340,"vipLevel":1,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"전장 채널도 똑같이 월드 채팅이랑 같은 조건이 붙을 거 같은데용?"],"map_no":101}},{"_id":"69e1a013717d13478c0be5e2","UTC_UNIXTIME":1776394259.715563,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394259,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㄴㄴㄴㄴ"],"map_no":101}},{"_id":"69e1a0111b77a474a706b262","UTC_UNIXTIME":1776394257.344211,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394256,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅂㅈㄷㅂㅈㄱㄷ"],"map_no":101}},{"_id":"69e19f744825167872072a72","UTC_UNIXTIME":1776394100.500996,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394100,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"아 이거 과금 안하면 채팅 못하고 그러지는 않겠죠?"],"map_no":101}},{"_id":"69e19f60270b97de75050512","UTC_UNIXTIME":1776394080.148589,"SERVER_NO":1501,"USER_NO":16681,"MESSAGE":{"type":"server_notify","user_no":16681,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1004","user_no":16681,"user_name":"leader_16681","user_tag":"vv44","user_title_id":0,"frame_ID":0,"portrait_ID":0,"planet_no":0,"servertime":1776394079,"vipLevel":6,"name_tag_id":0,"termParam":[],"ally_war_idx":0,"filter_no":0},"ㅎㅇㅎ"],"map_no":101}},{"_id":"69e19e491a7d5d4ea90d7692","UTC_UNIXTIME":1776393801.314658,"SERVER_NO":1501,"USER_NO":16031,"MESSAGE":{"type":"server_notify","user_no":16031,"chat_no":1501,"category":"chatting","option":[0,{"server_no":"1001","user_no":16031,"user_name":"cacao","user_tag":"1209","user_title_id":0,"frame_ID":3011700,"portrait_ID":4004300,"planet_no":0,"servertime":1776393801,"vipLevel":10,"name_tag_id":20011,"termParam":[],"ally_war_idx":0,"filter_no":0},"1서버가 짱이지"],"map_no":101}},{"_id":"69e19d8223aae54bc10e2852","UTC_UNIXTIME":1776393602.340036,"SERVER_NO":1501,"USER_NO":16031,"MESSAGE":{"type":"server_notify","user_no":16031,"chat_no":1501,"category":"chatting","o<message truncated>
Succeeded atlas_world_6_fortwar
WorldDataManager:OnUnifiedSpriteAtlasLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.U2D.SpriteAtlas>,string) (at Assets/World/Scripts/WorldDataManager.cs:248)
WorldDataManager/<LoadUnifiedSpriteAtlas>d__46:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:240)
csv=Assets/Scripts/FortWar/WorldData/fortwar_ground.csv
WorldDataManager/<LoadGroundDataFromCSV>d__49:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:304)

FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:295)
Call ccCall=27219 / callList=6

27219 - 연맹 집결 정보 조회

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27219,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"ally_war_idx":0,"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27219,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"ally_war_idx":0,"map_no":101}}

27219 - 연맹 집결 정보 조회https://aa-qa-ap01.aalbtw.com/api.php

Succeeded fortwar_ground
WorldDataManager:OnGroundCSVAssetLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.TextAsset>) (at Assets/World/Scripts/WorldDataManager.cs:321)
WorldDataManager/<LoadGroundDataFromCSV>d__49:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:312)
csv=Assets/Scripts/FortWar/WorldData/fortwar_object.csv
WorldDataManager/<LoadObjectDataFromCSV>d__56:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:566)

FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:296)

Re ccRecive=27219 / callList=6[   27219     27255     27260     27212     27257     27217  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913119.900306,"rc":0,"rd":{"ally_war":[],"fw_ally_war_target":[],"__dummy":1776913119.998246},"clidesc":null,"svdesc":null,"end_ts":1776913119.999358}
cc=27219
SetServerTime offset=-2.08238101005554
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27219 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913119.900306,"rc":0,"rd":{"ally_war":[],"fw_ally_war_target":[],"__dummy":1776913119.998246},"clidesc":null,"svdesc":null,"end_ts":1776913119.999358}
Set ccSet=27202 - 군단 편성 정보 보기 [16250]

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
FortWarJoin/<>c:<CrossEnterBattleField>b__103_5 () (at Assets/Scripts/FortWar/FortWarJoin.cs:851)
MainHudUi/<>c__DisplayClass246_0:<RequestRallyDataAndRefreshConcentrateButton>b__0 () (at Assets/Common Document/Scripts/MainHudUi.cs:2231)
NetworkAlly/<>c__DisplayClass91_0:<Request_GetRallyData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkAlly.cs:2858)

isPauseMode=False , isPaused=True

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
FortWarJoin/<>c:<CrossEnterBattleField>b__103_5 () (at Assets/Scripts/FortWar/FortWarJoin.cs:851)
MainHudUi/<>c__DisplayClass246_0:<RequestRallyDataAndRefreshConcentrateButton>b__0 () (at Assets/Common Document/Scripts/MainHudUi.cs:2231)
NetworkAlly/<>c__DisplayClass91_0:<Request_GetRallyData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkAlly.cs:2858)

isPauseMode=False , isPaused=True

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
FortWarJoin/<>c:<CrossEnterBattleField>b__103_5 () (at Assets/Scripts/FortWar/FortWarJoin.cs:851)
MainHudUi/<>c__DisplayClass246_0:<RequestRallyDataAndRefreshConcentrateButton>b__0 () (at Assets/Common Document/Scripts/MainHudUi.cs:2231)
NetworkAlly/<>c__DisplayClass91_0:<Request_GetRallyData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkAlly.cs:2858)

Call ccCall=27255 / callList=5

27255 - 요새전 결과 발표 (요새전 랭킹)

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27255,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"game_id":1,"match_no":3,"map_no":101,"joined_ally_no":664,"with_user":false,"ally_no":0}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27255,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"game_id":1,"match_no":3,"map_no":101,"joined_ally_no":664,"with_user":false,"ally_no":0}}

27255 - 요새전 결과 발표 (요새전 랭킹)https://aa-qa-ap01.aalbtw.com/api.php

Succeeded world_fortwar_simple_00_00
WorldTile:onTextureLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.Texture2D>) (at Assets/World/Scripts/WorldTile.cs:220)

Succeeded world_fortwar_simple_00_01
WorldTile:onTextureLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.Texture2D>) (at Assets/World/Scripts/WorldTile.cs:220)

Succeeded world_fortwar_simple_01_00
WorldTile:onTextureLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.Texture2D>) (at Assets/World/Scripts/WorldTile.cs:220)

Succeeded world_fortwar_simple_01_01
WorldTile:onTextureLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.Texture2D>) (at Assets/World/Scripts/WorldTile.cs:220)

Sound Load : Succeeded - Effect_Ambi_World_Fire

MKSoundManager:AddressablesLoadSucceededProc (string,UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:443)
Sound Play AMBIENT : Effect_Ambi_World_Fire
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1232)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1141)
MKSoundManager/<>c__DisplayClass71_0:<GetAudioClip>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:987)
Succeeded fortwar_object
WorldDataManager:OnObjectCSVAssetLoadDone (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.TextAsset>) (at Assets/World/Scripts/WorldDataManager.cs:583)
WorldDataManager/<LoadObjectDataFromCSV>d__56:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:574)
json=Assets/Scripts/FortWar/WorldData/fortwar_paint.json
WorldDataManager/<LoadTerriPaintData>d__59:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:658)

FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:297)
#FORTWAR map_no=101 join.user_no=16250 join.session=2e1d1889856a37447c7c9a19e174ba3d671137f3
FortWarSocket:req_join () (at Assets/Scripts/FortWar/FortWarSocket.cs:907)

Re ccRecive=27255 / callList=6[   27255     27260     27212     27257     27217     27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.075792,"rc":0,"rd":{"fwresult":{"result_ally":[{"ally_no":644,"game_id":1,"map_no":101,"match_no":1,"acc_into_cnt":0,"enter_cnt":0,"occupation_score":0,"kill_point":0,"wound_cnt":0,"planet_move_cnt":0,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"Q43","ally_name":"TEST3","ally_emblem":"121600010009"},{"ally_no":664,"game_id":1,"map_no":101,"match_no":3,"acc_into_cnt":17,"enter_cnt":17,"occupation_score":9,"kill_point":26326200,"wound_cnt":0,"planet_move_cnt":18,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"EAST","ally_name":"East Kingdom","ally_emblem":"151517060209"},{"ally_no":666,"game_id":1,"map_no":101,"match_no":2,"acc_into_cnt":6,"enter_cnt":6,"occupation_score":13,"kill_point":337425099,"wound_cnt":0,"planet_move_cnt":10,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"SOTH","ally_name":"South Kingdom","ally_emblem":"161617030103"},{"ally_no":667,"game_id":1,"map_no":101,"match_no":4,"acc_into_cnt":6,"enter_cnt":6,"occupation_score":13,"kill_point":107877371,"wound_cnt":201868,"planet_move_cnt":14,"murong_occ_ts":1776912645,"share_reward_count":0,"ally_index":"WEST","ally_name":"West Kingdom","ally_emblem":"040417090803"}],"result_user":[]},"__dummy":1776913120.22967},"clidesc":null,"svdesc":null,"end_ts":1776913120.230777}
cc=27255
SetServerTime offset=-1.992427110672
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27255 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.075792,"rc":0,"rd":{"fwresult":{"result_ally":[{"ally_no":644,"game_id":1,"map_no":101,"match_no":1,"acc_into_cnt":0,"enter_cnt":0,"occupation_score":0,"kill_point":0,"wound_cnt":0,"planet_move_cnt":0,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"Q43","ally_name":"TEST3","ally_emblem":"121600010009"},{"ally_no":664,"game_id":1,"map_no":101,"match_no":3,"acc_into_cnt":17,"enter_cnt":17,"occupation_score":9,"kill_point":26326200,"wound_cnt":0,"planet_move_cnt":18,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"EAST","ally_name":"East Kingdom","ally_emblem":"151517060209"},{"ally_no":666,"game_id":1,"map_no":101,"match_no":2,"acc_into_cnt":6,"enter_cnt":6,"occupation_score":13,"kill_point":337425099,"wound_cnt":0,"planet_move_cnt":10,"murong_occ_ts":0,"share_reward_count":0,"ally_index":"SOTH","ally_name":"South Kingdom","ally_emblem":"161617030103"},{"ally_no":667,"game_id":1,"map_no":101,"match_no":4,"acc_into_cnt":6,"enter_cnt":6,"occupation_score":13,"kill_point":107877371,"wound_cnt":201868,"planet_move_cnt":14,"murong_occ_ts":1776912645,"share_reward_count":0,"ally_index":"WEST","ally_name":"West Kingdom","ally_emblem":"040417090803"}],"result_user":[]},"__dummy":1776913120.22967},"clidesc":null,"svdesc":null,"end_ts":1776913120.230777}
Call ccCall=27260 / callList=5

27260 - 모든 버프 조회 !

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27260,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"tid":1,"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27260,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"tid":1,"map_no":101}}

27260 - 모든 버프 조회 !https://aa-qa-ap01.aalbtw.com/api.php

Succeeded fortwar_paint
WorldDataManager:MakeTerriPaintData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.TextAsset>) (at Assets/World/Scripts/WorldDataManager.cs:676)
WorldDataManager/<LoadTerriPaintData>d__59:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:666)
json=Assets/Scripts/FortWar/WorldData/fortwar_outline.json
WorldDataManager/<LoadTerriOutlineData>d__64:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:834)

FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:298)
#FORTWAR #### SOCKET RESPONSE
{"err":0,"msg":""}
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:916)
ally_join_req {"map_no":101,"ally_no":664}
FortWarSocket:ally_join_req () (at Assets/Scripts/FortWar/FortWarSocket.cs:944)
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:918)
#### block_leave_req {"map_no":101,"blocks":[5]}
FortWarSocket:req_over_block_leave (System.Collections.Generic.List`1<int>) (at Assets/Scripts/FortWar/FortWarSocket.cs:1069)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2745)
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:927)
#### req_block_join 5

WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:927)WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:927)
#FORTWAR #### 블럭 요청 : {"map_no":101,"blocks":[5],"keys":null}
FortWarSocket:req_one_block () (at Assets/Scripts/FortWar/FortWarSocket.cs:1034)


WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarSocket:OnJoin (string) (at Assets/Scripts/FortWar/FortWarSocket.cs:927)
Re ccRecive=27260 / callList=5[   27260     27212     27257     27217     27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.397851,"rc":0,"rd":{"fw_ally_buff_sub_slot":[{"buff_sub_id":5002,"buff_id":50,"buff_type":1,"boost_type":0,"buff_value":1500,"buff_stime":0,"buff_etime":0,"buff_source":2},{"buff_sub_id":5010,"buff_id":50,"buff_type":1,"boost_type":1,"buff_value":10000,"buff_stime":1776909601,"buff_etime":1776940201,"buff_source":24},{"buff_sub_id":6901,"buff_id":69,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":19},{"buff_sub_id":25001,"buff_id":250,"buff_type":1,"boost_type":0,"buff_value":500000,"buff_stime":0,"buff_etime":0,"buff_source":19},{"buff_sub_id":25101,"buff_id":251,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":19}],"fw_user_buff_main_slot":[{"buff_sub_id":103,"buff_id":1,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":105,"buff_id":1,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1003,"buff_id":10,"buff_type":1,"boost_type":0,"buff_value":600,"buff_stime":0,"buff_etime":0,"buff_source":3},{"buff_sub_id":1006,"buff_id":10,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1804,"buff_id":18,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1904,"buff_id":19,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2004,"buff_id":20,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2104,"buff_id":21,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2803,"buff_id":28,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":2867,"buff_id":28,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":5302,"buff_id":53,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":20203,"buff_id":202,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":24501,"buff_id":245,"buff_type":1,"boost_type":0,"buff_value":4000,"buff_stime":0,"buff_etime":0,"buff_source":3}],"__dummy":1776913120.508554},"clidesc":null,"svdesc":null,"end_ts":1776913120.509775}
cc=27260
SetServerTime offset=-2.10486173629761
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27260 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.397851,"rc":0,"rd":{"fw_ally_buff_sub_slot":[{"buff_sub_id":5002,"buff_id":50,"buff_type":1,"boost_type":0,"buff_value":1500,"buff_stime":0,"buff_etime":0,"buff_source":2},{"buff_sub_id":5010,"buff_id":50,"buff_type":1,"boost_type":1,"buff_value":10000,"buff_stime":1776909601,"buff_etime":1776940201,"buff_source":24},{"buff_sub_id":6901,"buff_id":69,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":19},{"buff_sub_id":25001,"buff_id":250,"buff_type":1,"boost_type":0,"buff_value":500000,"buff_stime":0,"buff_etime":0,"buff_source":19},{"buff_sub_id":25101,"buff_id":251,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":19}],"fw_user_buff_main_slot":[{"buff_sub_id":103,"buff_id":1,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":105,"buff_id":1,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1003,"buff_id":10,"buff_type":1,"boost_type":0,"buff_value":600,"buff_stime":0,"buff_etime":0,"buff_source":3},{"buff_sub_id":1006,"buff_id":10,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1804,"buff_id":18,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":1904,"buff_id":19,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2004,"buff_id":20,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2104,"buff_id":21,"buff_type":1,"boost_type":0,"buff_value":1200,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":2803,"buff_id":28,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":2867,"buff_id":28,"buff_type":1,"boost_type":0,"buff_value":1000,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":5302,"buff_id":53,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":7},{"buff_sub_id":20203,"buff_id":202,"buff_type":1,"boost_type":0,"buff_value":500,"buff_stime":0,"buff_etime":0,"buff_source":4},{"buff_sub_id":24501,"buff_id":245,"buff_type":1,"boost_type":0,"buff_value":4000,"buff_stime":0,"buff_etime":0,"buff_source":3}],"__dummy":1776913120.508554},"clidesc":null,"svdesc":null,"end_ts":1776913120.509775}
#### block remove slash:{"msg":"","err":0,"blocks":[{"player_list":[{"no":720037,"map_no":101,"terri_id":202,"user_no":16250,"name":"승승승현현현","shape":2,"ally_no":664,"hq_level":8,"shield_t":0,"index_name":"EAST","wall_status":0,"skin_id":0,"skin_end_time":0,"name_tag_id":0,"name_tag_end_time":0,"cur_ally_mem_cnt_fw":17}],"resource_list":[],"npc_list":[],"point_list":[{"map_no":101,"no":870032,"id":14,"c_type":0,"p_type":1,"category":101,"t_id":217,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911127,"user_no":0,"inctime":0,"duration":300,"ally_index_name":"EAST","ally_emblem":"151517060209","durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"skill_info":[],"su_info":[],"ps_status":0,"pss_time":0,"pse_time":0,"psc_time":0,"p_no":0,"addon_info":[],"max_duration":300,"locked":false,"expire_time":0}],"move_list":[],"scout_list":[],"ally_raid":[],"no":5}],"user_no":16250}

####res_block Ok : 5Call ccCall=27212 / callList=4

27212 - 감시탑/요새/성채 건물 조회

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27212,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"map_no":101,"no":0,"ally_no":0}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27212,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"map_no":101,"no":0,"ally_no":0}}

27212 - 감시탑/요새/성채 건물 조회https://aa-qa-ap01.aalbtw.com/api.php

New object of TargetMark addedCityObject:MakeTargetMark () (at Assets/World/Scripts/CityObject.cs:250)
CityObject:Start () (at Assets/World/Scripts/CityObject.cs:72)
WorldManager/<>c__DisplayClass277_0:<RefreshWithPlayerData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5280)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)


player city:승승승현현현(37.00, 0.05, 72.00)
WorldManager/<>c__DisplayClass277_0:<RefreshWithPlayerData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5309)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)


point:14(32.00, 0.05, 87.00)
WorldManager/<>c__DisplayClass282_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5644)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)


cs_point_tower SetBattle : NONE : False : False
PointObject:SetBattle (PointObject/WORLD_3DNPC_STATUS,bool,bool) (at Assets/World/Scripts/PointObject.cs:857)
PointObject:RefreshView () (at Assets/World/Scripts/PointObject.cs:365)
WorldManager/<>c__DisplayClass282_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5658)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)


sprite_atlas spriteAtlas RequestAtlas : worldNameTags

sprite_atlas spriteAtlas RequestAtlas : worldNameTags

Succeeded fortwar_outline
WorldDataManager:MakeTerriOutlineData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.TextAsset>) (at Assets/World/Scripts/WorldDataManager.cs:848)
WorldDataManager/<LoadTerriOutlineData>d__64:MoveNext () (at Assets/World/Scripts/WorldDataManager.cs:840)
#FORTWAR NavMesh 데이터 로드 시작


FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:299)
#FORTWAR NavMesh JSON 파일 로드 시작: Assets/Scripts/FortWar/WorldData/FortWar_navmesh_01.json


FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:299)
RefreshTerriState :: 영토 색상 업데이트
FortWarManager:RefreshTerriState () (at Assets/Scripts/FortWar/FortWarManager.cs:645)
FortWarManager:Update () (at Assets/Scripts/FortWar/FortWarManager.cs:328)

Sound Play POPUP_EFFECT : Effect_Button_Worldmap
EntryFog:DoOutAnimation (Callback,EntryFog/TYPE) (at Assets/Resources/Fog/EntryFog.cs:133)
MKSceneManager:EndEntryFog (Callback,EntryFog/TYPE) (at Assets/Scripts/MKSceneManager.cs:1501)
WorldManager/<CreateBlockObjectCoroutine>d__262:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4707)
Re ccRecive=27212 / callList=4[   27212     27257     27217     27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.615322,"rc":0,"rd":{"fw_server_world_object_point_slot":[{"no":270027,"id":50,"c_type":1,"category":104,"p_type":0,"t_id":202,"conn_status":0,"ally_no":664,"c_status":0,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"151517060209"},{"no":270222,"id":51,"c_type":1,"category":104,"p_type":0,"t_id":203,"conn_status":0,"ally_no":667,"c_status":0,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"040417090803"},{"no":320132,"id":10,"c_type":0,"category":101,"p_type":1,"t_id":213,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910541,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":370112,"id":11,"c_type":0,"category":101,"p_type":1,"t_id":214,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911119,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":570077,"id":12,"c_type":0,"category":101,"p_type":1,"t_id":215,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911066,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":670097,"id":32,"c_type":0,"category":101,"p_type":1,"t_id":235,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911322,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":670182,"id":9,"c_type":0,"category":101,"p_type":1,"t_id":212,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910544,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":720062,"id":13,"c_type":0,"category":101,"p_type":1,"t_id":216,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911088,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":720137,"id":30,"c_type":0,"category":101,"p_type":1,"t_id":233,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910700,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":770082,"id":33,"c_type":0,"category":101,"p_type":1,"t_id":236,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911313,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":770112,"id":31,"c_type":0,"category":101,"p_type":1,"t_id":234,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911346,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":770167,"id":29,"c_type":0,"category":101,"p_type":1,"t_id":232,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910720,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":820152,"id":39,"c_type":0,"category":101,"p_type":1,"t_id":242,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910845,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":870032,"id":14,"c_type":0,"category":101,"p_type":1,"t_id":217,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911127,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":870212,"id":8,"c_type":0,"category":101,"p_type":1,"t_id":211,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910584,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":920177,"id":28,"c_type":0,"category":101,"p_type":1,"t_id":231,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910730,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":970122,"id":42,"c_type":0,"category":101,"p_type":1,"t_id":245,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910888,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1020102,"id":46,"c_type":0,"category":102,"p_type":1,"t_id":249,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776913083,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"151517060209"},{"no":1020142,"id":45,"c_type":0,"category":102,"p_type":1,"t_id":248,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911599,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1070207,"id":26,"c_type":0,"category":101,"p_type":1,"t_id":229,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910850,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1070232,"id":7,"c_type":0,"category":101,"p_type":1,"t_id":210,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910865,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1120042,"id":15,"c_type":0,"category":101,"p_type":1,"t_id":218,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911389,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":1120172,"id":27,"c_type":0,"category":101,"p_type":1,"t_id":230,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911014,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1220122,"id":47,"c_type":0,"category":103,"p_type":1,"t_id":250,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776912645,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1370177,"id":38,"c_type":0,"category":101,"p_type":1,"t_id":241,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910953,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1370202,"id":25,"c_type":0,"category":101,"p_type":1,"t_id":228,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910791,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1520162,"id":37,"c_type":0,"category":101,"p_type":1,"t_id":240,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910925,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1520232,"id":6,"c_type":0,"category":101,"p_type":1,"t_id":209,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910693,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1570177,"id":24,"c_type":0,"category":101,"p_type":1,"t_id":227,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910764,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1670132,"id":21,"c_type":0,"category":101,"p_type":1,"t_id":224,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910736,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1720157,"id":23,"c_type":0,"category":101,"p_type":1,"t_id":226,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910736,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1720197,"id":5,"c_type":0,"category":101,"p_type":1,"t_id":208,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910596,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1820172,"id":4,"c_type":0,"category":101,"p_type":1,"t_id":207,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910566,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation"<message truncated>
cc=27212
SetServerTime offset=-2.07391166687012
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27212 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.615322,"rc":0,"rd":{"fw_server_world_object_point_slot":[{"no":270027,"id":50,"c_type":1,"category":104,"p_type":0,"t_id":202,"conn_status":0,"ally_no":664,"c_status":0,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"151517060209"},{"no":270222,"id":51,"c_type":1,"category":104,"p_type":0,"t_id":203,"conn_status":0,"ally_no":667,"c_status":0,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"040417090803"},{"no":320132,"id":10,"c_type":0,"category":101,"p_type":1,"t_id":213,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910541,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":370112,"id":11,"c_type":0,"category":101,"p_type":1,"t_id":214,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911119,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":570077,"id":12,"c_type":0,"category":101,"p_type":1,"t_id":215,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911066,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":670097,"id":32,"c_type":0,"category":101,"p_type":1,"t_id":235,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911322,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":670182,"id":9,"c_type":0,"category":101,"p_type":1,"t_id":212,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910544,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":720062,"id":13,"c_type":0,"category":101,"p_type":1,"t_id":216,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911088,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":720137,"id":30,"c_type":0,"category":101,"p_type":1,"t_id":233,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910700,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":770082,"id":33,"c_type":0,"category":101,"p_type":1,"t_id":236,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911313,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":770112,"id":31,"c_type":0,"category":101,"p_type":1,"t_id":234,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911346,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":770167,"id":29,"c_type":0,"category":101,"p_type":1,"t_id":232,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910720,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":820152,"id":39,"c_type":0,"category":101,"p_type":1,"t_id":242,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910845,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":870032,"id":14,"c_type":0,"category":101,"p_type":1,"t_id":217,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911127,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":870212,"id":8,"c_type":0,"category":101,"p_type":1,"t_id":211,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910584,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":920177,"id":28,"c_type":0,"category":101,"p_type":1,"t_id":231,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910730,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":970122,"id":42,"c_type":0,"category":101,"p_type":1,"t_id":245,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910888,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1020102,"id":46,"c_type":0,"category":102,"p_type":1,"t_id":249,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776913083,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":0,"ally_emblem":"151517060209"},{"no":1020142,"id":45,"c_type":0,"category":102,"p_type":1,"t_id":248,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911599,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1070207,"id":26,"c_type":0,"category":101,"p_type":1,"t_id":229,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910850,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1070232,"id":7,"c_type":0,"category":101,"p_type":1,"t_id":210,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910865,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1120042,"id":15,"c_type":0,"category":101,"p_type":1,"t_id":218,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911389,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"151517060209"},{"no":1120172,"id":27,"c_type":0,"category":101,"p_type":1,"t_id":230,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911014,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1220122,"id":47,"c_type":0,"category":103,"p_type":1,"t_id":250,"conn_status":0,"ally_no":667,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776912645,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"040417090803"},{"no":1370177,"id":38,"c_type":0,"category":101,"p_type":1,"t_id":241,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910953,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1370202,"id":25,"c_type":0,"category":101,"p_type":1,"t_id":228,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910791,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1520162,"id":37,"c_type":0,"category":101,"p_type":1,"t_id":240,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910925,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1520232,"id":6,"c_type":0,"category":101,"p_type":1,"t_id":209,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910693,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1570177,"id":24,"c_type":0,"category":101,"p_type":1,"t_id":227,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910764,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1670132,"id":21,"c_type":0,"category":101,"p_type":1,"t_id":224,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910736,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1720157,"id":23,"c_type":0,"category":101,"p_type":1,"t_id":226,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910736,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1720197,"id":5,"c_type":0,"category":101,"p_type":1,"t_id":208,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910596,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_occupation":1,"ally_emblem":"161617030103"},{"no":1820172,"id":4,"c_type":0,"category":101,"p_type":1,"t_id":207,"conn_status":0,"ally_no":666,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776910566,"user_no":0,"inctime":0,"duration":300,"durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"expire_time":0,"first_oc<message truncated>

WorldManager:InitTerriLineAndPaint () (at Assets/World/Scripts/WorldManager.cs:8381)
FortWarManager:Update () (at Assets/Scripts/FortWar/FortWarManager.cs:331)
WorldManager:InitTerriLineAndPaint () (at Assets/World/Scripts/WorldManager.cs:8386)
FortWarManager:Update () (at Assets/Scripts/FortWar/FortWarManager.cs:331)

Call ccCall=27257 / callList=3

27257 - 요새전 영웅 정보 요청

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27257,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27257,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"map_no":101}}

27257 - 요새전 영웅 정보 요청https://aa-qa-ap01.aalbtw.com/api.php

sprite_atlas Load : Succeeded - worldNameTags


sprite_atlas spriteAtlas AtlasRegistered : worldNameTags

sprite_atlas spriteAtlas AtlasRegistered : worldNameTags

sprite_atlas spriteAtlas AtlasRegistered : worldNameTags

sprite_atlas spriteAtlas AtlasRegistered : worldNameTags

#FORTWAR NavMesh JSON 파일 로드 완료: 파일 개수 = 1

#FORTWAR Succeeded FortWar_navmesh_01
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:151)

#FORTWAR sec_num=1, meshPolygonVector2 count=381
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:175)

#FORTWAR MakeNavmeshData: count=1, NavMeshSectSize=1, NavMeshArraySize=2
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:201)

#FORTWAR 모든 섹션이 로드되었습니다. navMeshWorld 생성 및 MKNavMeshManager 초기화 시작
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:204)

#FORTWAR meshPolygonWorld[0].Count = 381
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:205)

#FORTWAR navMeshWorld 생성 완료. NavPolygons.Count = 381
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:208)

#FORTWAR navMeshSect[0] 설정 완료. navMeshSect[0] == null? False
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:211)

#FORTWAR JsonToInit 호출 전: MKNavMeshManager.Instance.GetWorldNavMesh() == null? False
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:219)

#FORTWAR JsonToInit 완료: NavMeshWorld != null? True, NavPolygons.Count = 381
MKNavMeshManager:JsonToInit (MKNavmesh.NavMesh[],System.Collections.Generic.List`1<System.Collections.Generic.List`1<UnityEngine.Vector2>>[]) (at Assets/Scripts/NavMesh/MKNavMeshManager.cs:605)
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:220)

#FORTWAR JsonToInit 호출 후: MKNavMeshManager.Instance.GetWorldNavMesh() == null? False
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:222)

#FORTWAR MKNavMeshManager 초기화 완료. NavPolygons.Count = 381
FortWarDataManager:MakeNavmeshData (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<System.Collections.Generic.IList`1<UnityEngine.TextAsset>>) (at Assets/Scripts/FortWar/FortWarDataManager.cs:225)

#FORTWAR NavMesh 로드 완료: NavPolygons.Count = 381, MKNavMeshManager 초기화 완료
FortWarDataManager/<>c__DisplayClass5_0:<LoadNavMeshData_Json>b__2 () (at Assets/Scripts/FortWar/FortWarDataManager.cs:115)
Re ccRecive=27257 / callList=3[   27257     27217     27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.904359,"rc":0,"rd":{"fwgetherolist":{"hero":[{"hero_id":201,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":3,"property1":1004,"property2":2001,"property3":3003,"skill1_id":2011,"skill1_id_lv":1,"skill2_id":2012,"skill2_id_lv":0,"skill3_id":2013,"skill3_id_lv":0,"skill4_id":2014,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":303,"rarity":3,"exp":2150,"level":6,"grade":1,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":3031,"skill1_id_lv":1,"skill2_id":3032,"skill2_id_lv":0,"skill3_id":3033,"skill3_id_lv":0,"skill4_id":3034,"skill4_id_lv":0,"a_skill_id":3035,"a_skill_id_lv":0,"trait_point":5,"troop_slot_no":0,"highest_trait_point":5,"wall_no":0,"power":1212,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":304,"rarity":3,"exp":34550,"level":21,"grade":11,"unitClass":2,"property1":1005,"property2":2004,"property3":3002,"skill1_id":3041,"skill1_id_lv":1,"skill2_id":3042,"skill2_id_lv":1,"skill3_id":3043,"skill3_id_lv":1,"skill4_id":3044,"skill4_id_lv":0,"a_skill_id":3045,"a_skill_id_lv":0,"trait_point":27,"troop_slot_no":0,"highest_trait_point":30,"wall_no":0,"power":17766,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":1}}]},"__dummy":1776913120.986035},"clidesc":null,"svdesc":null,"end_ts":1776913120.987224}
cc=27257
SetServerTime offset=-2.10710334777832
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27257 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913120.904359,"rc":0,"rd":{"fwgetherolist":{"hero":[{"hero_id":201,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":3,"property1":1004,"property2":2001,"property3":3003,"skill1_id":2011,"skill1_id_lv":1,"skill2_id":2012,"skill2_id_lv":0,"skill3_id":2013,"skill3_id_lv":0,"skill4_id":2014,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":303,"rarity":3,"exp":2150,"level":6,"grade":1,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":3031,"skill1_id_lv":1,"skill2_id":3032,"skill2_id_lv":0,"skill3_id":3033,"skill3_id_lv":0,"skill4_id":3034,"skill4_id_lv":0,"a_skill_id":3035,"a_skill_id_lv":0,"trait_point":5,"troop_slot_no":0,"highest_trait_point":5,"wall_no":0,"power":1212,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":304,"rarity":3,"exp":34550,"level":21,"grade":11,"unitClass":2,"property1":1005,"property2":2004,"property3":3002,"skill1_id":3041,"skill1_id_lv":1,"skill2_id":3042,"skill2_id_lv":1,"skill3_id":3043,"skill3_id_lv":1,"skill4_id":3044,"skill4_id_lv":0,"a_skill_id":3045,"a_skill_id_lv":0,"trait_point":27,"troop_slot_no":0,"highest_trait_point":30,"wall_no":0,"power":17766,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":1}}]},"__dummy":1776913120.986035},"clidesc":null,"svdesc":null,"end_ts":1776913120.987224}
#FORTWAR Data LOAD DONE
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:301)
Call ccCall=27217 / callList=2

27217 - 연맹 마크 조회

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27217,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"idx":0,"category":0,"type":0,"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27217,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"idx":0,"category":0,"type":0,"map_no":101}}

27217 - 연맹 마크 조회https://aa-qa-ap01.aalbtw.com/api.php

#FORTWAR SetDefaultCam 720037
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:168)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)
GoToGroundPosAtOnce (37.00, 0.05, 72.00)
WorldManager:GoToGroundPosAtOnce (UnityEngine.Vector3) (at Assets/World/Scripts/WorldManager.cs:9255)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:170)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)
#### block_leave_req {"map_no":101,"blocks":[5]}
FortWarSocket:req_over_block_leave (System.Collections.Generic.List`1<int>) (at Assets/Scripts/FortWar/FortWarSocket.cs:1069)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2745)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)
My City = 720037
CityObject:ClearAll () (at Assets/World/Scripts/CityObject.cs:131)
WorldManager:RemoveActiveObject (System.Collections.Generic.List`1<int>) (at Assets/World/Scripts/WorldManager.cs:4993)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2749)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)
#### req_block_join 5

WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)
#FORTWAR #### 블럭 요청 : {"map_no":101,"blocks":[5],"keys":null}
FortWarSocket:req_one_block () (at Assets/Scripts/FortWar/FortWarSocket.cs:1034)


WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2781)
FortWarManager:SetDefaultCam () (at Assets/Scripts/FortWar/FortWarManager.cs:181)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:314)

WorldManager:InitTerriLineAndPaint () (at Assets/World/Scripts/WorldManager.cs:8381)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:315)

WorldManager:InitTerriLineAndPaint () (at Assets/World/Scripts/WorldManager.cs:8386)
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:315)
#FORTWAR Point Network Data LOAD DONE
FortWarDataManager/<LoadALL>d__8:MoveNext () (at Assets/Scripts/FortWar/FortWarDataManager.cs:316)
#### block remove slash:{"msg":"","err":0,"blocks":[{"player_list":[{"no":720037,"map_no":101,"terri_id":202,"user_no":16250,"name":"승승승현현현","shape":2,"ally_no":664,"hq_level":8,"shield_t":0,"index_name":"EAST","wall_status":0,"skin_id":0,"skin_end_time":0,"name_tag_id":0,"name_tag_end_time":0,"cur_ally_mem_cnt_fw":17}],"resource_list":[],"npc_list":[],"point_list":[{"map_no":101,"no":870032,"id":14,"c_type":0,"p_type":1,"category":101,"t_id":217,"conn_status":0,"ally_no":664,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1776911127,"user_no":0,"inctime":0,"duration":300,"ally_index_name":"EAST","ally_emblem":"151517060209","durability_level":0,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"skill_info":[],"su_info":[],"ps_status":0,"pss_time":0,"pse_time":0,"psc_time":0,"p_no":0,"addon_info":[],"max_duration":300,"locked":false,"expire_time":0}],"move_list":[],"scout_list":[],"ally_raid":[],"no":5}],"user_no":16250}

####res_block Ok : 5

player city:승승승현현현(37.00, 0.05, 72.00)
WorldManager/<>c__DisplayClass277_0:<RefreshWithPlayerData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5309)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)

WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPlayerData (MKGameData.Socket_Player_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:5263)
WorldManager/<CreateBlockObjectCoroutine>d__262:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4671)

WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4643)

point:14(32.00, 0.05, 87.00)
WorldManager/<>c__DisplayClass282_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5644)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)

WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5619)
WorldManager/<CreateBlockObjectCoroutine>d__262:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4675)

WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4643)

cs_point_tower SetBattle : NONE : False : False
PointObject:SetBattle (PointObject/WORLD_3DNPC_STATUS,bool,bool) (at Assets/World/Scripts/PointObject.cs:857)
PointObject:RefreshView () (at Assets/World/Scripts/PointObject.cs:365)
WorldManager/<>c__DisplayClass282_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5658)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)

WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5619)
WorldManager/<CreateBlockObjectCoroutine>d__262:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4675)

WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4643)World_Object_Prefab Load : Succeeded - WorldPropObject

Re ccRecive=27217 / callList=2[   27217     27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913121.055439,"rc":0,"rd":{"fw_ally_marker_slot":[],"__dummy":1776913121.157743},"clidesc":null,"svdesc":null,"end_ts":1776913121.158867}
cc=27217
SetServerTime offset=-2.08136773109436
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27217 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913121.055439,"rc":0,"rd":{"fw_ally_marker_slot":[],"__dummy":1776913121.157743},"clidesc":null,"svdesc":null,"end_ts":1776913121.158867}
Call ccCall=27202 / callList=1

27202 - 군단 편성 정보 보기 [16250]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27202,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"user_no":[16250],"map_no":101}}
encrypt str before={"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","cc":27202,"version_no":"1.4.859","user_no":16250,"account_no":6005,"playzone_no":2,"contents_playzone_no":1501,"cd":{"user_no":[16250],"map_no":101}}

27202 - 군단 편성 정보 보기 [16250]https://aa-qa-ap01.aalbtw.com/api.php

Sound Play POPUP_EFFECT : Effect_Button_Worldmap
EntryFog:DoOutAnimation (Callback,EntryFog/TYPE) (at Assets/Resources/Fog/EntryFog.cs:133)
MKSceneManager:EndEntryFog (Callback,EntryFog/TYPE) (at Assets/Scripts/MKSceneManager.cs:1501)
WorldManager/<CreateBlockObjectCoroutine>d__262:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4707)
Re ccRecive=27202 / callList=1[   27202  ]

{"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913121.240271,"rc":0,"rd":{"16250":{"lines":[],"scoutSlot":[{"slot_id":428,"user_no":16250,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":502,"user_no":16250,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":2200,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":1850,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":1955,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":1850,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}],"total_wounded":0}},"nation":{"npc_max_level":3},"__dummy":1776913121.364739},"clidesc":null,"svdesc":null,"end_ts":1776913121.365853}
cc=27202
SetServerTime offset=-2.09080958366394
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
27202 => {"se":"2e1d1889856a37447c7c9a19e174ba3d671137f3","user_no":16250,"ts":1776913121.240271,"rc":0,"rd":{"16250":{"lines":[],"scoutSlot":[{"slot_id":428,"user_no":16250,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":502,"user_no":16250,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":2200,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":1850,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":1955,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":1850,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}],"total_wounded":0}},"nation":{"npc_max_level":3},"__dummy":1776913121.364739},"clidesc":null,"svdesc":null,"end_ts":1776913121.365853}
[허드] On !
MainHudUi:RemoveHudAnimation () (at Assets/Common Document/Scripts/MainHudUi.cs:322)
EntryFog:SetHudActive () (at Assets/Resources/Fog/EntryFog.cs:198)
EntryFog:FinishAnimation () (at Assets/Resources/Fog/EntryFog.cs:215)
EntryFog:<OnEnable>b__14_1 () (at Assets/Resources/Fog/EntryFog.cs:50)
EntryFogAnimator:DoEndAnimation () (at Assets/Resources/Fog/EntryFogAnimator.cs:18)
---RunDelayProcessing
MainHudUi:RunDelayProcessing () (at Assets/Common Document/Scripts/MainHudUi.cs:6798)
MainHudUi:<RemoveHudAnimation>b__67_0 () (at Assets/Common Document/Scripts/MainHudUi.cs:359)
CoroutineCallback/<WaitSecondsCallback>d__0:MoveNext () (at Assets/Village/Scripts/CoroutineCallback.cs:12)
OnApplicationFocus
IAPManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/IAPManagerNew.cs:925)
UnityEditor.HostView:OnLostFocus ()
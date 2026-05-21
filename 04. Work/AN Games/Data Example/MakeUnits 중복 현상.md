#### fleet_battle_end....{"key":"15483//879","fleet_slot_id":879,"status":5,"user_no":15483,"target_no":2090642,"target_id":30,"win":1,"ci_id":15064,"push_type":"fleet_battle_end"}
mk.socket.MKSocket:HandleFleetBattleEnd (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4625)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4185)
battle end troop key=15483//879
WorldManager:RefreshWithPushFleetBattleEnd (mk.socket.ResFleetBattleEnd) (at Assets/World/Scripts/WorldManager.cs:3822)
mk.socket.MKSocket:HandleFleetBattleEnd (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4627)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4185)
FADE : 1 : True
WorldTroopPanel:Fade (bool) (at Assets/World/Scripts/WorldTroopPanel.cs:888)
WorldManager:RemoveTroopPanel (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:6889)
WorldManager:RefreshWithPushFleetBattleEnd (mk.socket.ResFleetBattleEnd) (at Assets/World/Scripts/WorldManager.cs:3824)
mk.socket.MKSocket:HandleFleetBattleEnd (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4627)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4185)
FADE : 1 : True
WorldTroopPanel:Fade (bool) (at Assets/World/Scripts/WorldTroopPanel.cs:888)
WorldManager:RemoveTroopPanel (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:6879)
WorldManager:RefreshWithPushFleetBattleEnd (mk.socket.ResFleetBattleEnd) (at Assets/World/Scripts/WorldManager.cs:3830)
mk.socket.MKSocket:HandleFleetBattleEnd (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4627)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4185)
RemoveCombatQueueNo:2090642
WorldManager:RemoveCombatQueueNo (long) (at Assets/World/Scripts/WorldManager.cs:6833)
WorldManager:RefreshWithPushFleetBattleEnd (mk.socket.ResFleetBattleEnd) (at Assets/World/Scripts/WorldManager.cs:3953)
mk.socket.MKSocket:HandleFleetBattleEnd (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4627)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4185)
#### before escape {"key":"15483//879","fleet_slot_id":879,"status":2,"user_no":15483,"user_name":"leader_15483","ally_no":375,"ally_idx":"一一一一","rally_id":0,"source_no":2110644,"target_type":3,"target_id":30,"target_no":2090642,"target_key":"","start_time":1777874265.1168,"end_time":1777874298,"sally_type":0,"corps":"[{\"hero_id\":413,\"leader\":1,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":112851,\"j\":5733,\"d\":0,\"w\":0,\"i\":118584}],\"comp_fleet_code\":101,\"comp_level\":300,\"comp_rank\":23,\"t\":2},{\"hero_id\":409,\"leader\":0,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":107186,\"j\":6998,\"d\":0,\"w\":8,\"i\":114192}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2},{\"hero_id\":204,\"leader\":0,\"level\":54,\"classID\":0,\"grade\":30,\"div\":[{\"id\":206,\"num\":75256,\"j\":8851,\"d\":0,\"w\":8,\"i\":84115}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2}]","origin_no":2090642,"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"tracking_slot_id_arr":[],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"push_type":"fleet_sally"}
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
#### fleet_sally....{"key":"15483//879","fleet_slot_id":879,"status":2,"user_no":15483,"user_name":"leader_15483","ally_no":375,"ally_idx":"一一一一","rally_id":0,"source_no":2110644,"target_type":3,"target_id":30,"target_no":2090642,"target_key":"","start_time":1777874265.1168,"end_time":1777874298,"sally_type":0,"corps":[{"hero_id":413,"leader":1,"level":60,"classID":0,"grade":31,"div":[{"id":206,"num":112851,"j":5733,"d":0,"w":0,"i":118584}],"comp_fleet_code":101,"comp_level":300,"comp_rank":23,"t":2},{"hero_id":409,"leader":0,"level":60,"classID":0,"grade":31,"div":[{"id":206,"num":107186,"j":6998,"d":0,"w":8,"i":114192}],"comp_fleet_code":0,"comp_level":0,"comp_rank":0,"t":2},{"hero_id":204,"leader":0,"level":54,"classID":0,"grade":30,"div":[{"id":206,"num":75256,"j":8851,"d":0,"w":8,"i":84115}],"comp_fleet_code":0,"comp_level":0,"comp_rank":0,"t":2}],"origin_no":2090642,"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"tracking_slot_id_arr":[],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"push_type":"fleet_sally"}
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4310)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
Look rotation viewing vector is zero
UnityEngine.Quaternion:LookRotation (UnityEngine.Vector3,UnityEngine.Vector3)
NPCTroopLOD:set_AutoMove (bool) (at Assets/World/Scripts/NPCTroopLOD.cs:1085)
TroopLOD:TryUpdateNpcLinkedActionData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/TroopLOD.cs:3945)
TroopLOD:SetTroopSlotData (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/TroopLOD.cs:3877)
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6297)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4322)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
[싱글] : 15483//879

NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4795)
TroopLOD:SetTroopSlotData (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/TroopLOD.cs:3923)
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6297)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4322)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
[AWPL-3143] 프리펩 데이터 세팅 : 3 ms
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6298)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4322)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
[AWPL-3143] 전투모드를 해제 : 0 ms
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6306)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4322)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
Set ccSet=3057 - 군단 편성 정보 보기 [15483]

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4342)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
isPauseMode=False , isPaused=True

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4342)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:HandleRallyCreateStartSally (string,string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4342)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4137)
Call ccCall=3057 / callList=1

3057 - 군단 편성 정보 보기 [15483]

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":3057,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":[15483]}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":3057,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":[15483]}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwNw6wPoCc91AcKCUAeqkLTsCorSrm4pZJule/AynbhlEgI60/FWOvMZxk3cg+eRijjY/E6mrhNuPwQVGpxdsaSL6BEXzwPzp+M6Sy1f9ktjC/SIZd/sCKC7t8npSAWsSNCTCKw6fkgtkAh2QeRqVYHA==

3057 - 군단 편성 정보 보기 [15483]https://test-ap01.aalbtw.com/api.php

Look rotation viewing vector is zero
UnityEngine.Quaternion:LookRotation (UnityEngine.Vector3,UnityEngine.Vector3)
NPCTroopLOD:UpdatePosAndRot () (at Assets/World/Scripts/NPCTroopLOD.cs:323)
TroopLOD:Update () (at Assets/World/Scripts/TroopLOD.cs:3800)
NPCTroopLOD:Update () (at Assets/World/Scripts/NPCTroopLOD.cs:450)

#### before escape {"no":2090642,"push_type":"delete"}
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
#### delete....{"no":2090642,"push_type":"delete"}
mk.socket.MKSocket:HandleDelete (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4439)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4175)
delete NPC key=2090642
WorldManager:RefreshWithPushDelete (mk.socket.ResDelete) (at Assets/World/Scripts/WorldManager.cs:4061)
mk.socket.MKSocket:HandleDelete (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4444)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4175)
ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

#### before escape {"no":2230664,"id":26,"locked":false,"event_id":0,"terri_id":841,"expire_time":1778133499,"push_type":"new_npc"}
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
#### new_npc.... create NPC{"no":2230664,"id":26,"locked":false,"event_id":0,"terri_id":841,"expire_time":1778133499,"push_type":"new_npc"}
mk.socket.MKSocket:HandleNewNpc (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4408)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4155)
hero_unit_object Load : Succeeded - fanatics
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

user_notify 채널 => {"msg":"","err":0,"type":0,"category":"mission","option":"[4,5]","user_no":15483,"immediately_x":1,"req_no":104058}
mk.socket.MKSocket:PreprocessResUserNotiPush (string,mk.socket.ResUserNoti&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1488)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1502)
15001 - 유저 미션 상태 정보 조회 !
NetworkMission:Request_MissionStateInquiry (System.Collections.Generic.List`1<MISSION_TYPE>,Callback) (at Assets/Network/Scripts/NetworkMission.cs:30)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1611)
Set ccSet=15001 - 유저 미션 상태 정보 조회

NetworkMission:Request_MissionStateInquiry (System.Collections.Generic.List`1<MISSION_TYPE>,Callback) (at Assets/Network/Scripts/NetworkMission.cs:41)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1611)
isPauseMode=False , isPaused=True

NetworkMission:Request_MissionStateInquiry (System.Collections.Generic.List`1<MISSION_TYPE>,Callback) (at Assets/Network/Scripts/NetworkMission.cs:41)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1611)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkMission:Request_MissionStateInquiry (System.Collections.Generic.List`1<MISSION_TYPE>,Callback) (at Assets/Network/Scripts/NetworkMission.cs:41)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1611)
Re ccRecive=3057 / callList=1[   3057  ]

Network Stopwatch 3057 군단 편성 정보 보기 [15483] = 177ms

Network Queue Stopwatch 3057 군단 편성 정보 보기 [15483] = 179ms [DeleayTime : 2ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874299.452367,"rc":0,"rd":{"15483":{"lines":[{"fleet_slot_id":879,"status":1,"source_no":2110644,"target_t_id":841,"target_no":2090642,"origin_t_id":841,"origin_no":2090642,"sally_type":0,"target_type":0,"target_id":0,"speed":2500,"speedup":0,"start_time":1777874265.1168,"end_time":1777874298,"interval_sec":0,"corps":"[{\"hero_id\":413,\"leader\":1,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":112851,\"j\":5733,\"d\":0,\"w\":0,\"i\":118584}],\"comp_fleet_code\":101,\"comp_level\":300,\"comp_rank\":23,\"t\":2},{\"hero_id\":409,\"leader\":0,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":107186,\"j\":6998,\"d\":0,\"w\":0,\"i\":114192}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2},{\"hero_id\":204,\"leader\":0,\"level\":54,\"classID\":0,\"grade\":30,\"div\":[{\"id\":206,\"num\":75256,\"j\":8851,\"d\":0,\"w\":0,\"i\":84115}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2}]","target_key":"","target_no_new":0,"combat_rating":3168910,"fleet_size":0,"ci_id":0,"rally_id":0,"user_no":15483,"tracking_slot_id_arr":[],"after_win":1,"rn_t_id":841,"rn_no":2090642,"reg_time":1777874262,"combat_id_history":"0","planet_no":2110644,"name":"leader_15483","ally_no":375,"index_name":"","world_gather_slot":[],"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"return_path_org_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"return_path_dft_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"return_block_org_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}],"return_block_dft_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}]}],"scoutSlot":[{"slot_id":1225,"user_no":15483,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1306,"user_no":15483,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1307,"user_no":15483,"slot_no":3,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":null,"scout_data":null,"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]}},"action_point_continue_battle_slot":[{"slot_id":879,"ap_continuebattle":1}],"nation":{"npc_max_level":30},"__dummy":1777874299.592713},"clidesc":null,"svdesc":null,"end_ts":1777874299.5974}
cc=3057
SetServerTime offset=-0.0739498138427734
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
3057 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874299.452367,"rc":0,"rd":{"15483":{"lines":[{"fleet_slot_id":879,"status":1,"source_no":2110644,"target_t_id":841,"target_no":2090642,"origin_t_id":841,"origin_no":2090642,"sally_type":0,"target_type":0,"target_id":0,"speed":2500,"speedup":0,"start_time":1777874265.1168,"end_time":1777874298,"interval_sec":0,"corps":"[{\"hero_id\":413,\"leader\":1,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":112851,\"j\":5733,\"d\":0,\"w\":0,\"i\":118584}],\"comp_fleet_code\":101,\"comp_level\":300,\"comp_rank\":23,\"t\":2},{\"hero_id\":409,\"leader\":0,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":107186,\"j\":6998,\"d\":0,\"w\":0,\"i\":114192}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2},{\"hero_id\":204,\"leader\":0,\"level\":54,\"classID\":0,\"grade\":30,\"div\":[{\"id\":206,\"num\":75256,\"j\":8851,\"d\":0,\"w\":0,\"i\":84115}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2}]","target_key":"","target_no_new":0,"combat_rating":3168910,"fleet_size":0,"ci_id":0,"rally_id":0,"user_no":15483,"tracking_slot_id_arr":[],"after_win":1,"rn_t_id":841,"rn_no":2090642,"reg_time":1777874262,"combat_id_history":"0","planet_no":2110644,"name":"leader_15483","ally_no":375,"index_name":"","world_gather_slot":[],"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"return_path_org_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"return_path_dft_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"return_block_org_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}],"return_block_dft_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}]}],"scoutSlot":[{"slot_id":1225,"user_no":15483,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1306,"user_no":15483,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1307,"user_no":15483,"slot_no":3,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":null,"scout_data":null,"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]}},"action_point_continue_battle_slot":[{"slot_id":879,"ap_continuebattle":1}],"nation":{"npc_max_level":30},"__dummy":1777874299.592713},"clidesc":null,"svdesc":null,"end_ts":1777874299.5974}
[싱글] : 15483//879

NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4795)
NetworkTroop/<>c__DisplayClass19_0:<UpdateUserTroopData>b__1 (System.Collections.Generic.KeyValuePair`2<string, object>) (at Assets/Network/Scripts/NetworkTroop.cs:521)
System.Collections.Generic.List`1<System.Collections.Generic.KeyValuePair`2<string, object>>:ForEach (System.Action`1<System.Collections.Generic.KeyValuePair`2<string, object>>)
NetworkTroop:UpdateUserTroopData (System.Collections.Generic.Dictionary`2<string, object>,int) (at Assets/Network/Scripts/NetworkTroop.cs:393)
NetworkTroop/<>c__DisplayClass18_0:<Request_GetFleetData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkTroop.cs:384)

[싱글] : 15483//879

NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4795)
mk.socket.MKSocket/<>c:<HandleRallyCreateStartSally>b__107_3 () (at Assets/World/Scripts/NetworkData/MKSocket.cs:4342)
NetworkTroop/<>c__DisplayClass18_0:<Request_GetFleetData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkTroop.cs:385)

Call ccCall=15001 / callList=1

15001 - 유저 미션 상태 정보 조회

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":15001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"mission_type":[4,5]}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":15001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"mission_type":[4,5]}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwLknP72HPEaBg4idlLBYjIxIrdhtb3ijwpxDl5OQ2VWoBq1IJH5wE9dCcHY2VDLkfyoC4F6nXY+Q9oiIAY1enxoSIEIpzIy7Ziy4dc+FKootGreRPKcQ+tpRoixNePoanMOxWOJRzH4/qjsIvqjE6BTOH9hbfI5V/ZdWa5JPfHzc=

15001 - 유저 미션 상태 정보 조회https://test-ap01.aalbtw.com/api.php

Re ccRecive=15001 / callList=1[   15001  ]

Network Stopwatch 15001 유저 미션 상태 정보 조회 = 176ms

Network Queue Stopwatch 15001 유저 미션 상태 정보 조회 = 179ms [DeleayTime : 3ms]
Stopwatch decrypt time - 4ms
{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874299.649287,"rc":0,"rd":{"mission_user_data":{"user_no":15483,"last_chpater_id":9,"last_townhall_level":26,"daily_reset_time":1777856521,"reg_time":1744347930,"townhall_level":26,"daily_point":0},"mission_user_slot":[{"mission_id":30015,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30016,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30017,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30043,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30044,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30045,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30073,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30074,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30075,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30102,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30103,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30104,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30127,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":11,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081556,"e_time":0},{"mission_id":30128,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30129,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30130,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30131,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30132,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30133,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30155,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":11,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081556,"e_time":0},{"mission_id":30156,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30157,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30158,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30159,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30160,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30161,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30216,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30217,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":18,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30218,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30219,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30220,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30221,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30261,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":5,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1745574297,"e_time":0},{"mission_id":30262,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":7,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565014,"e_time":0},{"mission_id":30268,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":10,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565024,"e_time":0},{"mission_id":30270,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":13,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081559,"e_time":0},{"mission_id":30271,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":16,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765162425,"e_time":0},{"mission_id":30272,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30273,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30274,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30275,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30304,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30305,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30306,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30329,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":13,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081559,"e_time":0},{"mission_id":30330,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":16,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765162425,"e_time":0},{"mission_id":30331,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30332,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30333,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30334,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30361,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30362,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30363,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30390,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30391,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30392,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30403,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":9,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565022,"e_time":0},{"mission_id":30410,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":12,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081558,"e_time":0},{"mission_id":30414,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":15,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765161967,"e_time":0},{"mission_id":30415,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30416,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30417,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30418,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30419,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30420,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30549,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":20,"ca<message truncated>
cc=15001
SetServerTime offset=-0.0546362400054932
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
15001 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874299.649287,"rc":0,"rd":{"mission_user_data":{"user_no":15483,"last_chpater_id":9,"last_townhall_level":26,"daily_reset_time":1777856521,"reg_time":1744347930,"townhall_level":26,"daily_point":0},"mission_user_slot":[{"mission_id":30015,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30016,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30017,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":102,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30043,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30044,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30045,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":103,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30073,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30074,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30075,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":104,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30102,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30103,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30104,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":105,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30127,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":11,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081556,"e_time":0},{"mission_id":30128,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30129,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30130,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30131,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30132,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30133,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":106,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30155,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":11,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081556,"e_time":0},{"mission_id":30156,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30157,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30158,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30159,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30160,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30161,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":107,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30216,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":14,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081560,"e_time":0},{"mission_id":30217,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":18,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30218,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":20,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199369,"e_time":0},{"mission_id":30219,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30220,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30221,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":110,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30261,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":5,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1745574297,"e_time":0},{"mission_id":30262,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":7,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565014,"e_time":0},{"mission_id":30268,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":10,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565024,"e_time":0},{"mission_id":30270,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":13,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081559,"e_time":0},{"mission_id":30271,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":16,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765162425,"e_time":0},{"mission_id":30272,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30273,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":22,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801243,"e_time":0},{"mission_id":30274,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30275,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":201,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30304,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30305,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30306,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":202,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30329,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":13,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081559,"e_time":0},{"mission_id":30330,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":16,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765162425,"e_time":0},{"mission_id":30331,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30332,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30333,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30334,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":203,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30361,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":23,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801245,"e_time":0},{"mission_id":30362,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30363,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":204,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30390,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30391,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30392,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":205,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30403,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":9,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1752565022,"e_time":0},{"mission_id":30410,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":12,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1755081558,"e_time":0},{"mission_id":30414,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":15,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1765161967,"e_time":0},{"mission_id":30415,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":17,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199367,"e_time":0},{"mission_id":30416,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":19,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199368,"e_time":0},{"mission_id":30417,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":21,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1770199383,"e_time":0},{"mission_id":30418,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":24,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801246,"e_time":0},{"mission_id":30419,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":25,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801247,"e_time":0},{"mission_id":30420,"group_id":0,"mission_type":4,"daily_reset":0,"goal_value":1,"category":2,"type":2,"param_type1":1,"param_val1":206,"param_type2":11,"param_val2":26,"values":0,"status":0,"l_time":0,"r_time":0,"s_time":1773801288,"e_time":0},{"mission_id":30549,"group_id":0,"mission_type":4,"daily_reset":0,"goal_valu<message truncated>
user_notify 채널 => {"msg":"","err":0,"type":0,"category":"mail","option":"{\"user_no\":15483,\"category\":2,\"no\":1479,\"id\":20011}","user_no":15483,"immediately_x":1,"req_no":104059}
mk.socket.MKSocket:PreprocessResUserNotiPush (string,mk.socket.ResUserNoti&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1488)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1502)
 - 유저넘버 : 15483
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1657)
New object of ToastPopupUi added
QuickPool.Pool:AddewObject () (at Assets/QuickPool/Scripts/Core/Pool.cs:162)
QuickPool.Pool:Pop () (at Assets/QuickPool/Scripts/Core/Pool.cs:258)
QuickPool.PoolsManager:Spawn (string,UnityEngine.Vector3,UnityEngine.Quaternion) (at Assets/QuickPool/Scripts/Core/PoolsManager.cs:99)
MKCommon:ShowToastPopup (string,single) (at Assets/Scripts/MKCommon.cs:1594)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1676)
Set ccSet=3057 - 군단 편성 정보 보기 [15483]

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1683)
isPauseMode=False , isPaused=True

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1683)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkTroop:Request_GetFleetData (System.Collections.Generic.List`1<long>,Callback,bool) (at Assets/Network/Scripts/NetworkTroop.cs:376)
NetworkTroop:Request_GetFleetData (long,Callback) (at Assets/Network/Scripts/NetworkTroop.cs:364)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1683)
Set ccSet=4001 - 영웅 정보

NetworkHero:Request_HeroInfo (Callback) (at Assets/Network/Scripts/NetworkHero.cs:58)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1685)
isPauseMode=False , isPaused=True

NetworkHero:Request_HeroInfo (Callback) (at Assets/Network/Scripts/NetworkHero.cs:58)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1685)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkHero:Request_HeroInfo (Callback) (at Assets/Network/Scripts/NetworkHero.cs:58)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1685)
1013 - 유저 프로필 조회 !
NetworkLogin:Request_UserTargetData (long,Callback) (at Assets/Network/Scripts/NetworkLogin.cs:1095)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1686)
Set ccSet=1013 - 유저 프로필 조회

NetworkLogin:Request_UserTargetData (long,Callback) (at Assets/Network/Scripts/NetworkLogin.cs:1100)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1686)
isPauseMode=False , isPaused=True

NetworkLogin:Request_UserTargetData (long,Callback) (at Assets/Network/Scripts/NetworkLogin.cs:1100)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1686)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkLogin:Request_UserTargetData (long,Callback) (at Assets/Network/Scripts/NetworkLogin.cs:1100)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1686)
Set ccSet=9001 - 인벤토리 조회

NetworkItem:Request_InventoryInfo (Callback) (at Assets/Network/Scripts/NetworkItem.cs:27)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1688)
isPauseMode=False , isPaused=True

NetworkItem:Request_InventoryInfo (Callback) (at Assets/Network/Scripts/NetworkItem.cs:27)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1688)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkItem:Request_InventoryInfo (Callback) (at Assets/Network/Scripts/NetworkItem.cs:27)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1688)
부상병 발생 !
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:874)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
Set ccSet=5010 - 사망자 조회

NetworkUnit:Request_DeadInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:615)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:910)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
isPauseMode=False , isPaused=True

NetworkUnit:Request_DeadInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:615)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:910)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkUnit:Request_DeadInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:615)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:910)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
Set ccSet=5021 - 리커버리 정보 조회

NetworkUnit:Request_RecoveryInfo_Proc (Callback,Callback,bool) (at Assets/Network/Scripts/NetworkUnit.cs:681)
NetworkUnit:RequestUpdate_RecoveryInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:646)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:919)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
isPauseMode=False , isPaused=True

NetworkUnit:Request_RecoveryInfo_Proc (Callback,Callback,bool) (at Assets/Network/Scripts/NetworkUnit.cs:681)
NetworkUnit:RequestUpdate_RecoveryInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:646)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:919)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
isPauseMode=False , isPaused=True
NetworkManager/<PauseCoroutine>d__44:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:328)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
NetworkManager/<PauseCallHttpRequest>d__45:MoveNext () (at Assets/Scripts/Network/NetworkManager.cs:343)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)

NetworkUnit:Request_RecoveryInfo_Proc (Callback,Callback,bool) (at Assets/Network/Scripts/NetworkUnit.cs:681)
NetworkUnit:RequestUpdate_RecoveryInfo (Callback) (at Assets/Network/Scripts/NetworkUnit.cs:646)
NetworkUnit:RefreshWounded (long) (at Assets/Network/Scripts/NetworkUnit.cs:919)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1699)
패배 !
NetworkWall:RefreshDefeat (long) (at Assets/Network/Scripts/NetworkWall.cs:250)
mk.socket.MKSocket:res_user_notify (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1701)
[UI] BingToForeground #type1
MK.UI.AutoTransitionElement:BingToForeground () (at Assets/Art_Resources/AUI/Runtime/AutoTransitionElement.cs:98)
MK.UI.AutoTransitionElement:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/AutoTransitionElement.cs:214)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()Call ccCall=3057 / callList=6

3057 - 군단 편성 정보 보기 [15483]

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":3057,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":[15483]}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":3057,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":[15483]}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwNw6wPoCc91AcKCUAeqkLTsCorSrm4pZJule/AynbhlEgI60/FWOvMZxk3cg+eRijjY/E6mrhNuPwQVGpxdsaSL6BEXzwPzp+M6Sy1f9ktjC/SIZd/sCKC7t8npSAWsSNCTCKw6fkgtkAh2QeRqVYHA==

3057 - 군단 편성 정보 보기 [15483]https://test-ap01.aalbtw.com/api.php

Re ccRecive=3057 / callList=6[   3057     4001     1013     9001     5010     5021  ]

Network Stopwatch 3057 군단 편성 정보 보기 [15483] = 166ms

Network Queue Stopwatch 3057 군단 편성 정보 보기 [15483] = 168ms [DeleayTime : 2ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.009134,"rc":0,"rd":{"15483":{"lines":[{"fleet_slot_id":879,"status":1,"source_no":2110644,"target_t_id":841,"target_no":2090642,"origin_t_id":841,"origin_no":2090642,"sally_type":0,"target_type":0,"target_id":0,"speed":2500,"speedup":0,"start_time":1777874265.1168,"end_time":1777874298,"interval_sec":0,"corps":"[{\"hero_id\":413,\"leader\":1,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":112851,\"j\":5733,\"d\":0,\"w\":0,\"i\":118584}],\"comp_fleet_code\":101,\"comp_level\":300,\"comp_rank\":23,\"t\":2},{\"hero_id\":409,\"leader\":0,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":107186,\"j\":6998,\"d\":0,\"w\":0,\"i\":114192}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2},{\"hero_id\":204,\"leader\":0,\"level\":54,\"classID\":0,\"grade\":30,\"div\":[{\"id\":206,\"num\":75256,\"j\":8851,\"d\":0,\"w\":0,\"i\":84115}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2}]","target_key":"","target_no_new":0,"combat_rating":3168910,"fleet_size":0,"ci_id":0,"rally_id":0,"user_no":15483,"tracking_slot_id_arr":[],"after_win":1,"rn_t_id":841,"rn_no":2090642,"reg_time":1777874262,"combat_id_history":"0","planet_no":2110644,"name":"leader_15483","ally_no":375,"index_name":"","world_gather_slot":[],"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"return_path_org_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"return_path_dft_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"return_block_org_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}],"return_block_dft_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}]}],"scoutSlot":[{"slot_id":1225,"user_no":15483,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1306,"user_no":15483,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1307,"user_no":15483,"slot_no":3,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":null,"scout_data":null,"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]}},"action_point_continue_battle_slot":[{"slot_id":879,"ap_continuebattle":1}],"nation":{"npc_max_level":30},"__dummy":1777874300.133948},"clidesc":null,"svdesc":null,"end_ts":1777874300.134781}
cc=3057
SetServerTime offset=-0.10010290145874
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
3057 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.009134,"rc":0,"rd":{"15483":{"lines":[{"fleet_slot_id":879,"status":1,"source_no":2110644,"target_t_id":841,"target_no":2090642,"origin_t_id":841,"origin_no":2090642,"sally_type":0,"target_type":0,"target_id":0,"speed":2500,"speedup":0,"start_time":1777874265.1168,"end_time":1777874298,"interval_sec":0,"corps":"[{\"hero_id\":413,\"leader\":1,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":112851,\"j\":5733,\"d\":0,\"w\":0,\"i\":118584}],\"comp_fleet_code\":101,\"comp_level\":300,\"comp_rank\":23,\"t\":2},{\"hero_id\":409,\"leader\":0,\"level\":60,\"classID\":0,\"grade\":31,\"div\":[{\"id\":206,\"num\":107186,\"j\":6998,\"d\":0,\"w\":0,\"i\":114192}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2},{\"hero_id\":204,\"leader\":0,\"level\":54,\"classID\":0,\"grade\":30,\"div\":[{\"id\":206,\"num\":75256,\"j\":8851,\"d\":0,\"w\":0,\"i\":84115}],\"comp_fleet_code\":0,\"comp_level\":0,\"comp_rank\":0,\"t\":2}]","target_key":"","target_no_new":0,"combat_rating":3168910,"fleet_size":0,"ci_id":0,"rally_id":0,"user_no":15483,"tracking_slot_id_arr":[],"after_win":1,"rn_t_id":841,"rn_no":2090642,"reg_time":1777874262,"combat_id_history":"0","planet_no":2110644,"name":"leader_15483","ally_no":375,"index_name":"","world_gather_slot":[],"move_path_slot":[{"path_idx":1,"move_idx":0,"px":644,"py":211,"move_time":1777874261.9935,"move_sec":0},{"path_idx":2,"move_idx":0,"px":642,"py":209,"move_time":1777874265.9935,"move_sec":3}],"return_path_org_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"return_path_dft_slot":[{"path_idx":1,"move_idx":0,"px":642,"py":209,"move_sec":0,"move_time":0},{"path_idx":2,"move_idx":0,"px":644,"py":211,"move_sec":3,"move_time":0}],"move_block_slot":[{"block_idx":1,"move_idx":0,"block_no":92},{"block_idx":2,"move_idx":0,"block_no":72}],"return_block_org_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}],"return_block_dft_slot":[{"block_idx":1,"move_idx":0,"block_no":72},{"block_idx":2,"move_idx":0,"block_no":92}]}],"scoutSlot":[{"slot_id":1225,"user_no":15483,"slot_no":1,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1306,"user_no":15483,"slot_no":2,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":[],"scout_data":[],"target_user_no":0},{"slot_id":1307,"user_no":15483,"slot_no":3,"status":0,"target_type":0,"target_id":0,"target_t_id":0,"move_path":null,"scout_data":null,"target_user_no":0}],"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]}},"action_point_continue_battle_slot":[{"slot_id":879,"ap_continuebattle":1}],"nation":{"npc_max_level":30},"__dummy":1777874300.133948},"clidesc":null,"svdesc":null,"end_ts":1777874300.134781}
[싱글] : 15483//879

NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4795)
NetworkTroop/<>c__DisplayClass19_0:<UpdateUserTroopData>b__1 (System.Collections.Generic.KeyValuePair`2<string, object>) (at Assets/Network/Scripts/NetworkTroop.cs:521)
System.Collections.Generic.List`1<System.Collections.Generic.KeyValuePair`2<string, object>>:ForEach (System.Action`1<System.Collections.Generic.KeyValuePair`2<string, object>>)
NetworkTroop:UpdateUserTroopData (System.Collections.Generic.Dictionary`2<string, object>,int) (at Assets/Network/Scripts/NetworkTroop.cs:393)
NetworkTroop/<>c__DisplayClass18_0:<Request_GetFleetData>b__0 (NetworkResponse) (at Assets/Network/Scripts/NetworkTroop.cs:384)

Call ccCall=4001 / callList=5

4001 - 영웅 정보

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":4001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":4001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwQ8hOkcs3O0/w71mvclU6Z7WpBARUZxDP51y37y+GmZCKZd8eTjSsrbKCr275h6Jro2GkOAM39tehEM25i7WmGVjPSBfatTBFfBdMCkje2Nau5ia9aU/G7i6g6P4n/VDd

4001 - 영웅 정보https://test-ap01.aalbtw.com/api.php

Re ccRecive=4001 / callList=5[   4001     1013     9001     5010     5021  ]

Network Stopwatch 4001 영웅 정보 = 114ms

Network Queue Stopwatch 4001 영웅 정보 = 301ms [DeleayTime : 187ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.18211,"rc":0,"rd":{"hero_slot":{"hero_max":10,"holdings":[{"hero_id":201,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":3,"property1":1004,"property2":2001,"property3":3003,"skill1_id":2011,"skill1_id_lv":1,"skill2_id":2012,"skill2_id_lv":0,"skill3_id":2013,"skill3_id_lv":0,"skill4_id":2014,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":202,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1004,"property2":2003,"property3":3001,"skill1_id":2021,"skill1_id_lv":1,"skill2_id":2022,"skill2_id_lv":0,"skill3_id":2023,"skill3_id_lv":0,"skill4_id":2024,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":203,"rarity":2,"exp":1173,"level":5,"grade":1,"unitClass":4,"property1":1004,"property2":2005,"property3":3004,"skill1_id":2031,"skill1_id_lv":1,"skill2_id":2032,"skill2_id_lv":0,"skill3_id":2033,"skill3_id_lv":0,"skill4_id":2034,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":4,"troop_slot_no":0,"highest_trait_point":4,"wall_no":0,"power":758,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":204,"rarity":2,"exp":4167135,"level":54,"grade":30,"unitClass":2,"property1":1004,"property2":2003,"property3":3002,"skill1_id":2041,"skill1_id_lv":1,"skill2_id":2042,"skill2_id_lv":1,"skill3_id":2043,"skill3_id_lv":1,"skill4_id":2044,"skill4_id_lv":1,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":75,"troop_slot_no":0,"highest_trait_point":82,"wall_no":2,"power":230228,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"103":3,"301":2,"302":2}},{"hero_id":302,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1003,"property2":2003,"property3":3001,"skill1_id":3021,"skill1_id_lv":1,"skill2_id":3022,"skill2_id_lv":0,"skill3_id":3023,"skill3_id_lv":0,"skill4_id":3024,"skill4_id_lv":0,"a_skill_id":3025,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":303,"rarity":3,"exp":10100,"level":12,"grade":6,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":3031,"skill1_id_lv":1,"skill2_id":3032,"skill2_id_lv":1,"skill3_id":3033,"skill3_id_lv":0,"skill4_id":3034,"skill4_id_lv":0,"a_skill_id":3035,"a_skill_id_lv":0,"trait_point":16,"troop_slot_no":0,"highest_trait_point":16,"wall_no":0,"power":5042,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":304,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":2,"property1":1005,"property2":2004,"property3":3002,"skill1_id":3041,"skill1_id_lv":1,"skill2_id":3042,"skill2_id_lv":0,"skill3_id":3043,"skill3_id_lv":0,"skill4_id":3044,"skill4_id_lv":0,"a_skill_id":3045,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":305,"rarity":3,"exp":11822,"level":10,"grade":1,"unitClass":4,"property1":1001,"property2":2002,"property3":3004,"skill1_id":3051,"skill1_id_lv":1,"skill2_id":3052,"skill2_id_lv":0,"skill3_id":3053,"skill3_id_lv":0,"skill4_id":3054,"skill4_id_lv":0,"a_skill_id":3055,"a_skill_id_lv":0,"trait_point":9,"troop_slot_no":0,"highest_trait_point":9,"wall_no":0,"power":1952,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":307,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1003,"property2":2001,"property3":3004,"skill1_id":3071,"skill1_id_lv":1,"skill2_id":3072,"skill2_id_lv":0,"skill3_id":3073,"skill3_id_lv":0,"skill4_id":3074,"skill4_id_lv":0,"a_skill_id":3075,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":308,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":2,"property1":1002,"property2":2005,"property3":3002,"skill1_id":3081,"skill1_id_lv":1,"skill2_id":3082,"skill2_id_lv":0,"skill3_id":3083,"skill3_id_lv":0,"skill4_id":3084,"skill4_id_lv":0,"a_skill_id":3085,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":402,"rarity":4,"exp":20586910,"level":60,"grade":31,"unitClass":3,"property1":1002,"property2":2001,"property3":3003,"skill1_id":4021,"skill1_id_lv":3,"skill2_id":4022,"skill2_id_lv":1,"skill3_id":4023,"skill3_id_lv":1,"skill4_id":4024,"skill4_id_lv":1,"a_skill_id":4025,"a_skill_id_lv":0,"trait_point":32,"troop_slot_no":0,"highest_trait_point":89,"wall_no":1,"power":440810,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"109":3,"110":3,"111":1,"113":4,"114":4,"115":5,"301":2,"302":2,"303":3,"304":3,"305":3,"306":3,"307":3,"308":4,"309":3,"310":3,"311":3,"312":5}},{"hero_id":403,"rarity":4,"exp":20444217,"level":60,"grade":31,"unitClass":3,"property1":1001,"property2":2002,"property3":3003,"skill1_id":4031,"skill1_id_lv":1,"skill2_id":4032,"skill2_id_lv":1,"skill3_id":4033,"skill3_id_lv":1,"skill4_id":4034,"skill4_id_lv":1,"a_skill_id":4035,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":405,"rarity":4,"exp":4131,"level":7,"grade":1,"unitClass":2,"property1":1005,"property2":2006,"property3":3002,"skill1_id":4051,"skill1_id_lv":1,"skill2_id":4052,"skill2_id_lv":0,"skill3_id":4053,"skill3_id_lv":0,"skill4_id":4054,"skill4_id_lv":0,"a_skill_id":4055,"a_skill_id_lv":0,"trait_point":6,"troop_slot_no":0,"highest_trait_point":6,"wall_no":0,"power":2180,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":406,"rarity":4,"exp":19227,"level":10,"grade":1,"unitClass":2,"property1":1001,"property2":2005,"property3":3002,"skill1_id":4061,"skill1_id_lv":1,"skill2_id":4062,"skill2_id_lv":0,"skill3_id":4063,"skill3_id_lv":0,"skill4_id":4064,"skill4_id_lv":0,"a_skill_id":4065,"a_skill_id_lv":0,"trait_point":9,"troop_slot_no":0,"highest_trait_point":9,"wall_no":0,"power":3170,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":407,"rarity":4,"exp":20566209,"level":60,"grade":31,"unitClass":3,"property1":1005,"property2":2006,"property3":3003,"skill1_id":4071,"skill1_id_lv":1,"skill2_id":4072,"skill2_id_lv":1,"skill3_id":4073,"skill3_id_lv":1,"skill4_id":4074,"skill4_id_lv":1,"a_skill_id":4075,"a_skill_id_lv":0,"trait_point":78,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":425010,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":2,"303":3,"304":3,"305":1}},{"hero_id":408,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1003,"property2":2004,"property3":3004,"skill1_id":4081,"skill1_id_lv":1,"skill2_id":4082,"skill2_id_lv":0,"skill3_id":4083,"skill3_id_lv":0,"skill4_id":4084,"skill4_id_lv":0,"a_skill_id":4085,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":409,"rarity":4,"exp":106794,"level":60,"grade":31,"unitClass":2,"property1":1002,"property2":2001,"property3":3002,"skill1_id":4091,"skill1_id_lv":5,"skill2_id":4092,"skill2_id_lv":5,"skill3_id":4093,"skill3_id_lv":5,"skill4_id":4094,"skill4_id_lv":4,"a_skill_id":4095,"a_skill_id_lv":0,"trait_point":60,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":410,"rarity":4,"exp":20563761,"level":60,"grade":31,"unitClass":3,"property1":1001,"property2":2004,"property3":3003,"skill1_id":4101,"skill1_id_lv":1,"skill2_id":4102,"skill2_id_lv":1,"skill3_id":4103,"skill3_id_lv":1,"skill4_id":4104,"skill4_id_lv":1,"a_skill_id":4105,"a_skill_id_lv":0,"trait_point":78,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":425010,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":2,"303":3,"304":3,"305":1}},{"hero_id":411,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1002,"property2":2004,"property3":3004,"skill1_id":4111,"skill1_id_lv":1,"skill2_id":4112,"skill2_id_lv":0,"skill3_id":4113,"skill3_id_lv":0,"skill4_id":4114,"skill4_id_lv":0,"a_skill_id":4115,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":413,"rarity":4,"exp":20565042,"level":60,"grade":31,"unitClass":2,"property1":1001,"property2":2004,"property3":3002,"skill1_id":4131,"skill1_id_lv":5,"skill2_id":4132,"skill2_id_lv":5,"skill3_id":4133,"skill3_id_lv":5,"skill4_id":4134,"skill4_id_lv":5,"a_skill_id":4135,"a_skill_id_lv":1,"trait_point":0,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":527210,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"109":3,"113":4,"114":4,"115":5,"209":3,"210":3,"211":4,"213":4,"214":4,"215":5,"301":2,"302":2,"303":3,"304":3,"305":3,"306":3,"307":3,"308":4,"309":3,"310":3,"311":3,"312":5,"313":4,"314":4,"315":5}},{"hero_id":415,"rarity":4,"exp":20446382,"level":60,"grade":31,"unitClass":1,"property1":1003,"property2":2003,"property3":3001,"skill1_id":4151,"skill1_id_lv":1,"skill2_id":4152,"skill2_id_lv":1,"skill3_id":4153,"skill3_id_lv":1,"skill4_id":4154,"skill4_id_lv":1,"a_skill_id":4155,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":417,"rarity":4,"exp":20444217,"level":60,"grade":31,"unitClass":1,"property1":1003,"property2":2006,"property3":3001,"skill1_id":4171,"skill1_id_lv":1,"skill2_id":4172,"skill2_id_lv":1,"skill3_id":4173,"skill3_id_lv":1,"skill4_id":4174,"skill4_id_lv":1,"a_skill_id":4175,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":421,"rarity":4,"exp":0,"level":1,"grade":4,"unitClass":2,"property1":1002,"property2":2003,"property3":3002,"skill1_id":4211,"skill1_id_lv":1,"skill2_id":4212,"skill2_id_lv":0,"skill3_id":4213,"skill3_id_lv":0,"skill4_id":4214,"skill4_id_lv":0,"a_skill_id":4215,"a_skill_id_lv":0,"trait_point":3,"troop_slot_no":0,"highest_trait_point":3,"wall_no":0,"power":2230,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":424,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":4241,"skill1_id_lv":1,"skill2_id":4242,"skill2_id_lv":0,"skill3_id":4243,"skill3_id_lv":0,"skill4_id":4244,"skill4_id_lv":0,"a_skill_id":4245,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":426,"rarity":4,"exp":3417,"level":7,"grade":1,"unitClass":4,"property1":1005,"property2":2002,"property3":3004,"skill1_id":4261,"skill1_id_lv":1,"skill2_id":4262,"skill2_id_lv":0,"skill3_id":4263,"skill3_id_lv":0,"skill4_id":4264,"skill4_id_lv":0,"a_skill_id":4265,"a_skill_id_lv":0,"trait_point":6,"troop_slot_no":0,"highest_trait_point":6,"wall_no":0,"power":2180,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}}]},"__dummy":1777874300.260737},"clidesc":null,"svdesc":null,"end_ts":1777874300.261519}
cc=4001
SetServerTime offset=-0.125129699707031
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
4001 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.18211,"rc":0,"rd":{"hero_slot":{"hero_max":10,"holdings":[{"hero_id":201,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":3,"property1":1004,"property2":2001,"property3":3003,"skill1_id":2011,"skill1_id_lv":1,"skill2_id":2012,"skill2_id_lv":0,"skill3_id":2013,"skill3_id_lv":0,"skill4_id":2014,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":202,"rarity":2,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1004,"property2":2003,"property3":3001,"skill1_id":2021,"skill1_id_lv":1,"skill2_id":2022,"skill2_id_lv":0,"skill3_id":2023,"skill3_id_lv":0,"skill4_id":2024,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":588,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":203,"rarity":2,"exp":1173,"level":5,"grade":1,"unitClass":4,"property1":1004,"property2":2005,"property3":3004,"skill1_id":2031,"skill1_id_lv":1,"skill2_id":2032,"skill2_id_lv":0,"skill3_id":2033,"skill3_id_lv":0,"skill4_id":2034,"skill4_id_lv":0,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":4,"troop_slot_no":0,"highest_trait_point":4,"wall_no":0,"power":758,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":204,"rarity":2,"exp":4167135,"level":54,"grade":30,"unitClass":2,"property1":1004,"property2":2003,"property3":3002,"skill1_id":2041,"skill1_id_lv":1,"skill2_id":2042,"skill2_id_lv":1,"skill3_id":2043,"skill3_id_lv":1,"skill4_id":2044,"skill4_id_lv":1,"a_skill_id":0,"a_skill_id_lv":0,"trait_point":75,"troop_slot_no":0,"highest_trait_point":82,"wall_no":2,"power":230228,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"103":3,"301":2,"302":2}},{"hero_id":302,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1003,"property2":2003,"property3":3001,"skill1_id":3021,"skill1_id_lv":1,"skill2_id":3022,"skill2_id_lv":0,"skill3_id":3023,"skill3_id_lv":0,"skill4_id":3024,"skill4_id_lv":0,"a_skill_id":3025,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":303,"rarity":3,"exp":10100,"level":12,"grade":6,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":3031,"skill1_id_lv":1,"skill2_id":3032,"skill2_id_lv":1,"skill3_id":3033,"skill3_id_lv":0,"skill4_id":3034,"skill4_id_lv":0,"a_skill_id":3035,"a_skill_id_lv":0,"trait_point":16,"troop_slot_no":0,"highest_trait_point":16,"wall_no":0,"power":5042,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":304,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":2,"property1":1005,"property2":2004,"property3":3002,"skill1_id":3041,"skill1_id_lv":1,"skill2_id":3042,"skill2_id_lv":0,"skill3_id":3043,"skill3_id_lv":0,"skill4_id":3044,"skill4_id_lv":0,"a_skill_id":3045,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":305,"rarity":3,"exp":11822,"level":10,"grade":1,"unitClass":4,"property1":1001,"property2":2002,"property3":3004,"skill1_id":3051,"skill1_id_lv":1,"skill2_id":3052,"skill2_id_lv":0,"skill3_id":3053,"skill3_id_lv":0,"skill4_id":3054,"skill4_id_lv":0,"a_skill_id":3055,"a_skill_id_lv":0,"trait_point":9,"troop_slot_no":0,"highest_trait_point":9,"wall_no":0,"power":1952,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":307,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1003,"property2":2001,"property3":3004,"skill1_id":3071,"skill1_id_lv":1,"skill2_id":3072,"skill2_id_lv":0,"skill3_id":3073,"skill3_id_lv":0,"skill4_id":3074,"skill4_id_lv":0,"a_skill_id":3075,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":308,"rarity":3,"exp":0,"level":1,"grade":1,"unitClass":2,"property1":1002,"property2":2005,"property3":3002,"skill1_id":3081,"skill1_id_lv":1,"skill2_id":3082,"skill2_id_lv":0,"skill3_id":3083,"skill3_id_lv":0,"skill4_id":3084,"skill4_id_lv":0,"a_skill_id":3085,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":812,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":402,"rarity":4,"exp":20586910,"level":60,"grade":31,"unitClass":3,"property1":1002,"property2":2001,"property3":3003,"skill1_id":4021,"skill1_id_lv":3,"skill2_id":4022,"skill2_id_lv":1,"skill3_id":4023,"skill3_id_lv":1,"skill4_id":4024,"skill4_id_lv":1,"a_skill_id":4025,"a_skill_id_lv":0,"trait_point":32,"troop_slot_no":0,"highest_trait_point":89,"wall_no":1,"power":440810,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"109":3,"110":3,"111":1,"113":4,"114":4,"115":5,"301":2,"302":2,"303":3,"304":3,"305":3,"306":3,"307":3,"308":4,"309":3,"310":3,"311":3,"312":5}},{"hero_id":403,"rarity":4,"exp":20444217,"level":60,"grade":31,"unitClass":3,"property1":1001,"property2":2002,"property3":3003,"skill1_id":4031,"skill1_id_lv":1,"skill2_id":4032,"skill2_id_lv":1,"skill3_id":4033,"skill3_id_lv":1,"skill4_id":4034,"skill4_id_lv":1,"a_skill_id":4035,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":405,"rarity":4,"exp":4131,"level":7,"grade":1,"unitClass":2,"property1":1005,"property2":2006,"property3":3002,"skill1_id":4051,"skill1_id_lv":1,"skill2_id":4052,"skill2_id_lv":0,"skill3_id":4053,"skill3_id_lv":0,"skill4_id":4054,"skill4_id_lv":0,"a_skill_id":4055,"a_skill_id_lv":0,"trait_point":6,"troop_slot_no":0,"highest_trait_point":6,"wall_no":0,"power":2180,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":406,"rarity":4,"exp":19227,"level":10,"grade":1,"unitClass":2,"property1":1001,"property2":2005,"property3":3002,"skill1_id":4061,"skill1_id_lv":1,"skill2_id":4062,"skill2_id_lv":0,"skill3_id":4063,"skill3_id_lv":0,"skill4_id":4064,"skill4_id_lv":0,"a_skill_id":4065,"a_skill_id_lv":0,"trait_point":9,"troop_slot_no":0,"highest_trait_point":9,"wall_no":0,"power":3170,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":407,"rarity":4,"exp":20566209,"level":60,"grade":31,"unitClass":3,"property1":1005,"property2":2006,"property3":3003,"skill1_id":4071,"skill1_id_lv":1,"skill2_id":4072,"skill2_id_lv":1,"skill3_id":4073,"skill3_id_lv":1,"skill4_id":4074,"skill4_id_lv":1,"a_skill_id":4075,"a_skill_id_lv":0,"trait_point":78,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":425010,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":2,"303":3,"304":3,"305":1}},{"hero_id":408,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1003,"property2":2004,"property3":3004,"skill1_id":4081,"skill1_id_lv":1,"skill2_id":4082,"skill2_id_lv":0,"skill3_id":4083,"skill3_id_lv":0,"skill4_id":4084,"skill4_id_lv":0,"a_skill_id":4085,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":409,"rarity":4,"exp":106794,"level":60,"grade":31,"unitClass":2,"property1":1002,"property2":2001,"property3":3002,"skill1_id":4091,"skill1_id_lv":5,"skill2_id":4092,"skill2_id_lv":5,"skill3_id":4093,"skill3_id_lv":5,"skill4_id":4094,"skill4_id_lv":4,"a_skill_id":4095,"a_skill_id_lv":0,"trait_point":60,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":410,"rarity":4,"exp":20563761,"level":60,"grade":31,"unitClass":3,"property1":1001,"property2":2004,"property3":3003,"skill1_id":4101,"skill1_id_lv":1,"skill2_id":4102,"skill2_id_lv":1,"skill3_id":4103,"skill3_id_lv":1,"skill4_id":4104,"skill4_id_lv":1,"a_skill_id":4105,"a_skill_id_lv":0,"trait_point":78,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":425010,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"301":2,"302":2,"303":3,"304":3,"305":1}},{"hero_id":411,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":4,"property1":1002,"property2":2004,"property3":3004,"skill1_id":4111,"skill1_id_lv":1,"skill2_id":4112,"skill2_id_lv":0,"skill3_id":4113,"skill3_id_lv":0,"skill4_id":4114,"skill4_id_lv":0,"a_skill_id":4115,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":413,"rarity":4,"exp":20565042,"level":60,"grade":31,"unitClass":2,"property1":1001,"property2":2004,"property3":3002,"skill1_id":4131,"skill1_id_lv":5,"skill2_id":4132,"skill2_id_lv":5,"skill3_id":4133,"skill3_id_lv":5,"skill4_id":4134,"skill4_id_lv":5,"a_skill_id":4135,"a_skill_id_lv":1,"trait_point":0,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":527210,"status":1,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{"109":3,"113":4,"114":4,"115":5,"209":3,"210":3,"211":4,"213":4,"214":4,"215":5,"301":2,"302":2,"303":3,"304":3,"305":3,"306":3,"307":3,"308":4,"309":3,"310":3,"311":3,"312":5,"313":4,"314":4,"315":5}},{"hero_id":415,"rarity":4,"exp":20446382,"level":60,"grade":31,"unitClass":1,"property1":1003,"property2":2003,"property3":3001,"skill1_id":4151,"skill1_id_lv":1,"skill2_id":4152,"skill2_id_lv":1,"skill3_id":4153,"skill3_id_lv":1,"skill4_id":4154,"skill4_id_lv":1,"a_skill_id":4155,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":417,"rarity":4,"exp":20444217,"level":60,"grade":31,"unitClass":1,"property1":1003,"property2":2006,"property3":3001,"skill1_id":4171,"skill1_id_lv":1,"skill2_id":4172,"skill2_id_lv":1,"skill3_id":4173,"skill3_id_lv":1,"skill4_id":4174,"skill4_id_lv":1,"a_skill_id":4175,"a_skill_id_lv":0,"trait_point":89,"troop_slot_no":0,"highest_trait_point":89,"wall_no":0,"power":421710,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":421,"rarity":4,"exp":0,"level":1,"grade":4,"unitClass":2,"property1":1002,"property2":2003,"property3":3002,"skill1_id":4211,"skill1_id_lv":1,"skill2_id":4212,"skill2_id_lv":0,"skill3_id":4213,"skill3_id_lv":0,"skill4_id":4214,"skill4_id_lv":0,"a_skill_id":4215,"a_skill_id_lv":0,"trait_point":3,"troop_slot_no":0,"highest_trait_point":3,"wall_no":0,"power":2230,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":424,"rarity":4,"exp":0,"level":1,"grade":1,"unitClass":1,"property1":1002,"property2":2001,"property3":3001,"skill1_id":4241,"skill1_id_lv":1,"skill2_id":4242,"skill2_id_lv":0,"skill3_id":4243,"skill3_id_lv":0,"skill4_id":4244,"skill4_id_lv":0,"a_skill_id":4245,"a_skill_id_lv":0,"trait_point":0,"troop_slot_no":0,"highest_trait_point":0,"wall_no":0,"power":1280,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}},{"hero_id":426,"rarity":4,"exp":3417,"level":7,"grade":1,"unitClass":4,"property1":1005,"property2":2002,"property3":3004,"skill1_id":4261,"skill1_id_lv":1,"skill2_id":4262,"skill2_id_lv":0,"skill3_id":4263,"skill3_id_lv":0,"skill4_id":4264,"skill4_id_lv":0,"a_skill_id":4265,"a_skill_id_lv":0,"trait_point":6,"troop_slot_no":0,"highest_trait_point":6,"wall_no":0,"power":2180,"status":0,"weapon":0,"gloves":0,"belt":0,"shoes":0,"trait_slot":{}}]},"__dummy":1777874300.260737},"clidesc":null,"svdesc":null,"end_ts":1777874300.261519}
Call ccCall=1013 / callList=4

1013 - 유저 프로필 조회

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":1013,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":15483}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":1013,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{"user_no":15483}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwsTlNVBF/Dp4vk8dIFEUDHz6w4m7JISqc0kdAmxUoto2j6SeLbIEbYZrAoGHgwFHGFXJtGMe7Wkk9OTS4A22G+WZVIQBTPpkNvj8HuZ2IsarDlNrk5LNIKfXDqCFs/RmI9lSUbDZnMZLzdAumxTxL7Q==

1013 - 유저 프로필 조회https://test-ap01.aalbtw.com/api.php

Re ccRecive=1013 / callList=4[   1013     9001     5010     5021  ]

Network Stopwatch 1013 유저 프로필 조회 = 139ms

Network Queue Stopwatch 1013 유저 프로필 조회 = 480ms [DeleayTime : 341ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.342553,"rc":0,"rd":{"profile_nation":{"name":"leader_15483","power":36489232,"ally_no":375,"planet_no":2110644,"planet_shape":4,"nation_type":4,"p_no":1,"hq_level":26},"profile_record":[],"invite":0,"profile_skin":{"town_hall_id":1001400,"name_tag_id":2001200,"frame_id":3011200,"portrait_id":4004400},"profile_pvpkill_pt":2618701,"ally_data":{"name":"一一一一一一一一一一一一一一","index_name":"一一一一"},"profile_vip_lv":0,"__dummy":1777874300.436448},"clidesc":null,"svdesc":null,"end_ts":1777874300.437241}
cc=1013
SetServerTime offset=-0.116271734237671
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
1013 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.342553,"rc":0,"rd":{"profile_nation":{"name":"leader_15483","power":36489232,"ally_no":375,"planet_no":2110644,"planet_shape":4,"nation_type":4,"p_no":1,"hq_level":26},"profile_record":[],"invite":0,"profile_skin":{"town_hall_id":1001400,"name_tag_id":2001200,"frame_id":3011200,"portrait_id":4004400},"profile_pvpkill_pt":2618701,"ally_data":{"name":"一一一一一一一一一一一一一一","index_name":"一一一一"},"profile_vip_lv":0,"__dummy":1777874300.436448},"clidesc":null,"svdesc":null,"end_ts":1777874300.437241}
Call ccCall=9001 / callList=3

9001 - 인벤토리 조회

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":9001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":9001,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwux0wP+JsKR2+QGtF0S3iT+p1oF6AdyIE6Bj8g2gMu1SVvwgYaR/7i8Q5YjANKl/7G56hEq8npVuaaEmhxIAo0mo+ey/MLRmmfxa0HymWSafwVsDtSXF7FETfFPBYSDAh

9001 - 인벤토리 조회https://test-ap01.aalbtw.com/api.php

Re ccRecive=9001 / callList=3[   9001     5010     5021  ]

Network Stopwatch 9001 인벤토리 조회 = 120ms

Network Queue Stopwatch 9001 인벤토리 조회 = 615ms [DeleayTime : 495ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.489267,"rc":0,"rd":{"item_slot":[{"id":101,"count":1},{"id":11001,"count":7318474},{"id":11002,"count":7151596},{"id":11003,"count":10267103},{"id":11004,"count":294853},{"id":11005,"count":6467013},{"id":11006,"count":1551},{"id":11007,"count":125659},{"id":11008,"count":0},{"id":11012,"count":16295},{"id":12001,"count":0},{"id":12002,"count":0},{"id":12003,"count":0},{"id":12004,"count":1},{"id":13001,"count":260800},{"id":13002,"count":24000},{"id":21001,"count":4045},{"id":21002,"count":1970},{"id":21003,"count":288},{"id":21004,"count":265},{"id":21005,"count":6},{"id":22001,"count":4069},{"id":22002,"count":2031},{"id":22003,"count":275},{"id":22004,"count":230},{"id":23001,"count":3779},{"id":23002,"count":2241},{"id":23003,"count":628},{"id":23004,"count":196},{"id":24001,"count":3707},{"id":24002,"count":155},{"id":24003,"count":5},{"id":24004,"count":84},{"id":25001,"count":0},{"id":25003,"count":6},{"id":25004,"count":1},{"id":31001,"count":137},{"id":31002,"count":0},{"id":31003,"count":100},{"id":32001,"count":454},{"id":32002,"count":2980},{"id":32003,"count":26},{"id":33001,"count":573},{"id":33002,"count":3390},{"id":33003,"count":55},{"id":34001,"count":698},{"id":34002,"count":3137},{"id":34003,"count":19},{"id":35001,"count":206},{"id":35002,"count":0},{"id":35003,"count":0},{"id":51001,"count":73},{"id":51002,"count":20},{"id":51004,"count":0},{"id":51006,"count":0},{"id":51007,"count":0},{"id":51008,"count":0},{"id":51009,"count":0},{"id":62001,"count":9},{"id":62002,"count":29},{"id":62004,"count":0},{"id":62005,"count":0},{"id":62006,"count":55},{"id":62007,"count":11967},{"id":62008,"count":0},{"id":62009,"count":0},{"id":62010,"count":70},{"id":62011,"count":10021},{"id":62012,"count":1},{"id":63001,"count":1},{"id":63002,"count":22128},{"id":63004,"count":10586},{"id":80201,"count":20006},{"id":80202,"count":19992},{"id":80203,"count":20013},{"id":80204,"count":19173},{"id":80301,"count":20008},{"id":80302,"count":19992},{"id":80303,"count":20004},{"id":80304,"count":19991},{"id":80305,"count":20003},{"id":80306,"count":20044},{"id":80307,"count":19988},{"id":80308,"count":19997},{"id":80309,"count":20007},{"id":80401,"count":20119},{"id":80402,"count":19032},{"id":80403,"count":19033},{"id":80404,"count":20048},{"id":80405,"count":20038},{"id":80406,"count":19988},{"id":80407,"count":19081},{"id":80408,"count":20033},{"id":80409,"count":20063},{"id":80410,"count":19032},{"id":80411,"count":19992},{"id":80412,"count":20042},{"id":80413,"count":0},{"id":80414,"count":72},{"id":80415,"count":0},{"id":80416,"count":4},{"id":80417,"count":4},{"id":80419,"count":63},{"id":80421,"count":34},{"id":80424,"count":90},{"id":80426,"count":90},{"id":91001,"count":1},{"id":91002,"count":1},{"id":91003,"count":1},{"id":91004,"count":1},{"id":91005,"count":1},{"id":91011,"count":0},{"id":91012,"count":1},{"id":91013,"count":1},{"id":91014,"count":1},{"id":91015,"count":1},{"id":91021,"count":0},{"id":91022,"count":1},{"id":91023,"count":1},{"id":91024,"count":1},{"id":91031,"count":0},{"id":91041,"count":0},{"id":91042,"count":1},{"id":91043,"count":1},{"id":91044,"count":1},{"id":91051,"count":0},{"id":91052,"count":1},{"id":91053,"count":1},{"id":91054,"count":1},{"id":91061,"count":0},{"id":91071,"count":0},{"id":91081,"count":2},{"id":91094,"count":2},{"id":91101,"count":0},{"id":91111,"count":0},{"id":91121,"count":0},{"id":91141,"count":0},{"id":92001,"count":0},{"id":92004,"count":0},{"id":92005,"count":0},{"id":92006,"count":0},{"id":92007,"count":0},{"id":92008,"count":0},{"id":92009,"count":0},{"id":92011,"count":1},{"id":92012,"count":0},{"id":93101,"count":1},{"id":93102,"count":0},{"id":93103,"count":0},{"id":93104,"count":0},{"id":93105,"count":0},{"id":93106,"count":1},{"id":93107,"count":0},{"id":93112,"count":0},{"id":93113,"count":0},{"id":93115,"count":1},{"id":93116,"count":1},{"id":93117,"count":1},{"id":94042,"count":1},{"id":104001,"count":21200},{"id":111001,"count":809},{"id":112001,"count":209},{"id":113001,"count":56},{"id":120201,"count":1},{"id":120301,"count":0},{"id":120305,"count":0},{"id":121101,"count":2},{"id":121201,"count":1},{"id":121202,"count":2},{"id":131001,"count":2077},{"id":131002,"count":0},{"id":131003,"count":1021},{"id":131004,"count":7894},{"id":141001,"count":20158},{"id":141002,"count":20290},{"id":141003,"count":17575},{"id":151001,"count":20121},{"id":151002,"count":20199},{"id":151003,"count":19468},{"id":172002,"count":1},{"id":181001,"count":1},{"id":192001,"count":20142},{"id":201001,"count":19997},{"id":202001,"count":20036},{"id":202002,"count":20060},{"id":202003,"count":98},{"id":269000,"count":0},{"id":271001,"count":0},{"id":271002,"count":0},{"id":271003,"count":0},{"id":271004,"count":0},{"id":281001,"count":3},{"id":281002,"count":1},{"id":281003,"count":50},{"id":281004,"count":50},{"id":281005,"count":73},{"id":292002,"count":0},{"id":292003,"count":0},{"id":292004,"count":0},{"id":292005,"count":0},{"id":292006,"count":0},{"id":301001,"count":7},{"id":311001,"count":59},{"id":321001,"count":9867834},{"id":322001,"count":10000973},{"id":323001,"count":10000537},{"id":900002,"count":0},{"id":900003,"count":0},{"id":10100001,"count":40415},{"id":10100002,"count":447}],"__dummy":1777874300.561795},"clidesc":null,"svdesc":null,"end_ts":1777874300.562635}
cc=9001
SetServerTime offset=-0.120985507965088
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
9001 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.489267,"rc":0,"rd":{"item_slot":[{"id":101,"count":1},{"id":11001,"count":7318474},{"id":11002,"count":7151596},{"id":11003,"count":10267103},{"id":11004,"count":294853},{"id":11005,"count":6467013},{"id":11006,"count":1551},{"id":11007,"count":125659},{"id":11008,"count":0},{"id":11012,"count":16295},{"id":12001,"count":0},{"id":12002,"count":0},{"id":12003,"count":0},{"id":12004,"count":1},{"id":13001,"count":260800},{"id":13002,"count":24000},{"id":21001,"count":4045},{"id":21002,"count":1970},{"id":21003,"count":288},{"id":21004,"count":265},{"id":21005,"count":6},{"id":22001,"count":4069},{"id":22002,"count":2031},{"id":22003,"count":275},{"id":22004,"count":230},{"id":23001,"count":3779},{"id":23002,"count":2241},{"id":23003,"count":628},{"id":23004,"count":196},{"id":24001,"count":3707},{"id":24002,"count":155},{"id":24003,"count":5},{"id":24004,"count":84},{"id":25001,"count":0},{"id":25003,"count":6},{"id":25004,"count":1},{"id":31001,"count":137},{"id":31002,"count":0},{"id":31003,"count":100},{"id":32001,"count":454},{"id":32002,"count":2980},{"id":32003,"count":26},{"id":33001,"count":573},{"id":33002,"count":3390},{"id":33003,"count":55},{"id":34001,"count":698},{"id":34002,"count":3137},{"id":34003,"count":19},{"id":35001,"count":206},{"id":35002,"count":0},{"id":35003,"count":0},{"id":51001,"count":73},{"id":51002,"count":20},{"id":51004,"count":0},{"id":51006,"count":0},{"id":51007,"count":0},{"id":51008,"count":0},{"id":51009,"count":0},{"id":62001,"count":9},{"id":62002,"count":29},{"id":62004,"count":0},{"id":62005,"count":0},{"id":62006,"count":55},{"id":62007,"count":11967},{"id":62008,"count":0},{"id":62009,"count":0},{"id":62010,"count":70},{"id":62011,"count":10021},{"id":62012,"count":1},{"id":63001,"count":1},{"id":63002,"count":22128},{"id":63004,"count":10586},{"id":80201,"count":20006},{"id":80202,"count":19992},{"id":80203,"count":20013},{"id":80204,"count":19173},{"id":80301,"count":20008},{"id":80302,"count":19992},{"id":80303,"count":20004},{"id":80304,"count":19991},{"id":80305,"count":20003},{"id":80306,"count":20044},{"id":80307,"count":19988},{"id":80308,"count":19997},{"id":80309,"count":20007},{"id":80401,"count":20119},{"id":80402,"count":19032},{"id":80403,"count":19033},{"id":80404,"count":20048},{"id":80405,"count":20038},{"id":80406,"count":19988},{"id":80407,"count":19081},{"id":80408,"count":20033},{"id":80409,"count":20063},{"id":80410,"count":19032},{"id":80411,"count":19992},{"id":80412,"count":20042},{"id":80413,"count":0},{"id":80414,"count":72},{"id":80415,"count":0},{"id":80416,"count":4},{"id":80417,"count":4},{"id":80419,"count":63},{"id":80421,"count":34},{"id":80424,"count":90},{"id":80426,"count":90},{"id":91001,"count":1},{"id":91002,"count":1},{"id":91003,"count":1},{"id":91004,"count":1},{"id":91005,"count":1},{"id":91011,"count":0},{"id":91012,"count":1},{"id":91013,"count":1},{"id":91014,"count":1},{"id":91015,"count":1},{"id":91021,"count":0},{"id":91022,"count":1},{"id":91023,"count":1},{"id":91024,"count":1},{"id":91031,"count":0},{"id":91041,"count":0},{"id":91042,"count":1},{"id":91043,"count":1},{"id":91044,"count":1},{"id":91051,"count":0},{"id":91052,"count":1},{"id":91053,"count":1},{"id":91054,"count":1},{"id":91061,"count":0},{"id":91071,"count":0},{"id":91081,"count":2},{"id":91094,"count":2},{"id":91101,"count":0},{"id":91111,"count":0},{"id":91121,"count":0},{"id":91141,"count":0},{"id":92001,"count":0},{"id":92004,"count":0},{"id":92005,"count":0},{"id":92006,"count":0},{"id":92007,"count":0},{"id":92008,"count":0},{"id":92009,"count":0},{"id":92011,"count":1},{"id":92012,"count":0},{"id":93101,"count":1},{"id":93102,"count":0},{"id":93103,"count":0},{"id":93104,"count":0},{"id":93105,"count":0},{"id":93106,"count":1},{"id":93107,"count":0},{"id":93112,"count":0},{"id":93113,"count":0},{"id":93115,"count":1},{"id":93116,"count":1},{"id":93117,"count":1},{"id":94042,"count":1},{"id":104001,"count":21200},{"id":111001,"count":809},{"id":112001,"count":209},{"id":113001,"count":56},{"id":120201,"count":1},{"id":120301,"count":0},{"id":120305,"count":0},{"id":121101,"count":2},{"id":121201,"count":1},{"id":121202,"count":2},{"id":131001,"count":2077},{"id":131002,"count":0},{"id":131003,"count":1021},{"id":131004,"count":7894},{"id":141001,"count":20158},{"id":141002,"count":20290},{"id":141003,"count":17575},{"id":151001,"count":20121},{"id":151002,"count":20199},{"id":151003,"count":19468},{"id":172002,"count":1},{"id":181001,"count":1},{"id":192001,"count":20142},{"id":201001,"count":19997},{"id":202001,"count":20036},{"id":202002,"count":20060},{"id":202003,"count":98},{"id":269000,"count":0},{"id":271001,"count":0},{"id":271002,"count":0},{"id":271003,"count":0},{"id":271004,"count":0},{"id":281001,"count":3},{"id":281002,"count":1},{"id":281003,"count":50},{"id":281004,"count":50},{"id":281005,"count":73},{"id":292002,"count":0},{"id":292003,"count":0},{"id":292004,"count":0},{"id":292005,"count":0},{"id":292006,"count":0},{"id":301001,"count":7},{"id":311001,"count":59},{"id":321001,"count":9867834},{"id":322001,"count":10000973},{"id":323001,"count":10000537},{"id":900002,"count":0},{"id":900003,"count":0},{"id":10100001,"count":40415},{"id":10100002,"count":447}],"__dummy":1777874300.561795},"clidesc":null,"svdesc":null,"end_ts":1777874300.562635}
Call ccCall=5010 / callList=2

5010 - 사망자 조회

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":5010,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":5010,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwBhu0V9YoK81hkammP6JPx1tAqQhyyPx2/0CwWHpiYQPFO2BJHaTtqm1befv/jgUehHdVSK7vptSR8fwNV26wv6jPEMv13+0Ax9wKYPNk36rU02w2ruUV4EjI50C0qEnA

5010 - 사망자 조회https://test-ap01.aalbtw.com/api.php

[UI] Send AutoTransitionToForegroundEvent #type1
MK.UI.AutoTransitionElement:OnTransitionEndEvent (UnityEngine.UIElements.TransitionEndEvent) (at Assets/Art_Resources/AUI/Runtime/AutoTransitionElement.cs:192)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[UI] Send AutoTransitionToForegroundEvent #type1
MK.UI.AutoTransitionElement:OnTransitionEndEvent (UnityEngine.UIElements.TransitionEndEvent) (at Assets/Art_Resources/AUI/Runtime/AutoTransitionElement.cs:192)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

Re ccRecive=5010 / callList=2[   5010     5021  ]

Network Stopwatch 5010 사망자 조회 = 143ms

Network Queue Stopwatch 5010 사망자 조회 = 796ms [DeleayTime : 653ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.649838,"rc":0,"rd":{"capacity":210000,"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]},"healing":{"healing_start":0,"healing_time_required":0,"healing_end":0,"healing_list_id":"","healing_list_count":"","help_idx":0},"__dummy":1777874300.763199},"clidesc":null,"svdesc":null,"end_ts":1777874300.764349}
cc=5010
SetServerTime offset=-0.107679843902588
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
5010 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.649838,"rc":0,"rd":{"capacity":210000,"unit":{"troops_speed_up":0,"holdings":[{"unit_id":101,"unit_type":1,"unit_tier":1,"priority":22,"training":0,"ready":44375,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":102,"unit_type":1,"unit_tier":2,"priority":18,"training":0,"ready":5,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":106,"unit_type":1,"unit_tier":6,"priority":2,"training":0,"ready":354,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":201,"unit_type":2,"unit_tier":1,"priority":23,"training":0,"ready":10571,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":206,"unit_type":2,"unit_tier":6,"priority":3,"training":0,"ready":1997430,"field":316875,"wounded":16,"upgrading":0,"healing":0,"death":0},{"unit_id":301,"unit_type":3,"unit_tier":1,"priority":21,"training":0,"ready":28095,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":302,"unit_type":3,"unit_tier":2,"priority":17,"training":0,"ready":24,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":306,"unit_type":3,"unit_tier":6,"priority":1,"training":0,"ready":46,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":401,"unit_type":4,"unit_tier":1,"priority":24,"training":0,"ready":106720,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0},{"unit_id":406,"unit_type":4,"unit_tier":6,"priority":4,"training":0,"ready":10,"field":0,"wounded":0,"upgrading":0,"healing":0,"death":0}]},"healing":{"healing_start":0,"healing_time_required":0,"healing_end":0,"healing_list_id":"","healing_list_count":"","help_idx":0},"__dummy":1777874300.763199},"clidesc":null,"svdesc":null,"end_ts":1777874300.764349}
Call ccCall=5021 / callList=1

5021 - 리커버리 정보 조회

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":5021,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}
encrypt str before={"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","cc":5021,"version_no":"1.3.999","user_no":15483,"account_no":4174,"playzone_no":1,"cd":{}}

Stopwatch encrypt time - 0ms

encrypt str after=uqGoc3E9fTvFzBSZMbSAIwIrB134A6YDt2beNNdWZYLB5Nk8WvMJhm9YeoeZBUXwB8X7w+G5W5lFUwBeSL6msBZSlI+54ZtPI9eV2LtTcTnKLCKbf97u7ctIDLpJ1KSOHkz1XGNGtrrqKI0WvI/uKVDFZJJFmUon9zgs9w3UwVnTDpYRalHcTzlcfzODpc/W

5021 - 리커버리 정보 조회https://test-ap01.aalbtw.com/api.php

Re ccRecive=5021 / callList=1[   5021  ]

Network Stopwatch 5021 리커버리 정보 조회 = 122ms

Network Queue Stopwatch 5021 리커버리 정보 조회 = 947ms [DeleayTime : 825ms]

Stopwatch decrypt time - 0ms

{"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.823958,"rc":0,"rd":{"recovery_state":{"last_conversion_time":1765162261,"conversion_count":0},"recovery_slots":[],"__dummy":1777874300.901336},"clidesc":null,"svdesc":null,"end_ts":1777874300.902126}
cc=5021
SetServerTime offset=-0.126959800720215
MKHttp:SetServerTime (System.Collections.Generic.Dictionary`2<string, object>,double) (at Assets/World/Scripts/NetworkData/MKHttp.cs:299)
5021 => {"se":"103636ede7aaa0ec0a79d8f8eb43637094b04607","user_no":15483,"ts":1777874300.823958,"rc":0,"rd":{"recovery_state":{"last_conversion_time":1765162261,"conversion_count":0},"recovery_slots":[],"__dummy":1777874300.901336},"clidesc":null,"svdesc":null,"end_ts":1777874300.902126}
PlayEffect_Touch Click @ input ((950.32, 329.03, 0.00)) → uxmlPos: ((950.32, 750.97)) → Visual at left: 860.3226px, top: 660.9678px
MKEffectSystemManager/<>c__DisplayClass93_1:<PlayEffect_Touch>b__1 () (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2397)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

#### block_leave_req {"blocks":[93],"keys":null}
mk.socket.MKSocket:req_over_block_leave (System.Collections.Generic.List`1<int>) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1187)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2801)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:954)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , ostrichhorseman
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1106
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

curLODLevel=1
WorldManager:TurnMountainGateTile (int,bool) (at Assets/World/Scripts/WorldManager.cs:1918)
WorldManager:RefreshDetailTileObject (bool) (at Assets/World/Scripts/WorldManager.cs:2468)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:925)


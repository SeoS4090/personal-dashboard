OnApplicationFocus
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
IAPManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/IAPManagerNew.cs:925)
UnityEditor.HostView:OnFocus ()

[iOS Fix] App gained focus - resetting shutdown state
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
FirebaseManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/FirebaseManager.cs:76)
UnityEditor.HostView:OnFocus ()

PlayEffect_Touch Click @ input ((1362.02, 700.81, 0.00)) → uxmlPos: ((1362.02, 379.19)) → Visual at left: 1272.018px, top: 289.1927px
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKEffectSystemManager/<>c__DisplayClass93_1:<PlayEffect_Touch>b__1 () (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2398)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

ScrollViewPro onDetachFromPanel
UnityEngine.Debug:Log (object)
Kamgam.UIToolkitScrollViewPro.ScrollViewPro:onDetachFromPanel (UnityEngine.UIElements.DetachFromPanelEvent) (at Assets/UIToolkitScrollViewPro/Runtime/ScrollViewPro.cs:463)
UnityEngine.GameObject:SetActive (bool)
Troop_Management/<>c__DisplayClass16_0:<CreateMarchLineItem>b__10 (UnityEngine.UIElements.ClickEvent) (at Assets/UI/Troop/Troop_Management.cs:206)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[허드] On !
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MainHudUi:RemoveHudAnimation () (at Assets/Common Document/Scripts/MainHudUi.cs:323)
MKPanelSetting:CheckHudAnimation (bool) (at Assets/Scripts/MKPanelSetting.cs:125)
MKPanelSetting:OnDisable () (at Assets/Scripts/MKPanelSetting.cs:60)
UnityEngine.GameObject:SetActive (bool)
Troop_Management/<>c__DisplayClass16_0:<CreateMarchLineItem>b__10 (UnityEngine.UIElements.ClickEvent) (at Assets/UI/Troop/Troop_Management.cs:206)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - WillHide 'Fx_skin_30112'
UnityEngine.Debug:Log (object)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:124)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - WillHide 'Fx_pkg_shot_Benefits'
UnityEngine.Debug:Log (object)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:124)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - WillHide 'Fx_UI_Season_Title'
UnityEngine.Debug:Log (object)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:124)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - WillHide 'Fx_pkg_shot_seasonal'
UnityEngine.Debug:Log (object)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:124)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - PlayEffect_TargetUI 'Mission_frame'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:84)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

particle Load : Succeeded - Mission_frame
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateSync/<>c__DisplayClass1_0:<Pop>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:633)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>:WaitForCompletion ()
AddressablesManagerInstantiateSync:Pop (string) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:646)
MKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2493)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2040)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:94)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - PlayEffect_TargetUI Load 'Mission_frame'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:98)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[Tuto] 1 component:TOWN_101 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:12 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:10 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:6 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:8 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:11 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:13 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:7 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:5 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:14 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[ART] PlayFx - PlayEffect_TargetUI 'Fx_pkg_shot_Benefits'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:84)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

particle Load : Succeeded - Fx_pkg_shot_Benefits
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateSync/<>c__DisplayClass1_0:<Pop>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:633)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>:WaitForCompletion ()
AddressablesManagerInstantiateSync:Pop (string) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:646)
MKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2493)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2040)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:94)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - PlayEffect_TargetUI Load 'Fx_pkg_shot_Benefits'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:98)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - PlayEffect_TargetUI 'Fx_UI_Season_Title'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:84)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

particle Load : Succeeded - Fx_UI_Season_Title
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateSync/<>c__DisplayClass1_0:<Pop>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:633)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>:WaitForCompletion ()
AddressablesManagerInstantiateSync:Pop (string) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:646)
MKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2493)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2040)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:94)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - PlayEffect_TargetUI Load 'Fx_UI_Season_Title'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:98)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - PlayEffect_TargetUI 'Fx_pkg_shot_seasonal'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:84)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

particle Load : Succeeded - Fx_pkg_shot_seasonal
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateSync/<>c__DisplayClass1_0:<Pop>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:633)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>:WaitForCompletion ()
AddressablesManagerInstantiateSync:Pop (string) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:646)
MKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2493)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2040)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:94)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

[ART] PlayFx - PlayEffect_TargetUI Load 'Fx_pkg_shot_seasonal'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:98)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.EventSystems.EventSystem:Update () (at ./Library/PackageCache/com.unity.ugui@52e65280e89e/Runtime/UGUI/EventSystem/EventSystem.cs:514)

---RunDelayProcessing
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MainHudUi:RunDelayProcessing () (at Assets/Common Document/Scripts/MainHudUi.cs:7167)
MainHudUi:<RemoveHudAnimation>b__69_0 () (at Assets/Common Document/Scripts/MainHudUi.cs:360)
CoroutineCallback/<WaitSecondsCallback>d__0:MoveNext () (at Assets/Village/Scripts/CoroutineCallback.cs:12)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

[ART] PlayFx - PlayEffect_TargetUI 'Fx_skin_30112'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:84)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

particle Load : Succeeded - Fx_skin_30112
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateSync/<>c__DisplayClass1_0:<Pop>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:633)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>:WaitForCompletion ()
AddressablesManagerInstantiateSync:Pop (string) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:646)
MKEffectSystemManager:GetEffect (string) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2493)
MKEffectSystemManager:PlayEffect_TargetUI (string,UnityEngine.UIElements.VisualElement,int,int) (at Assets/Scripts/Effect/MKEffectSystemManager.cs:2040)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:94)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

[ART] PlayFx - PlayEffect_TargetUI Load 'Fx_skin_30112'
UnityEngine.Debug:Log (object)
MK.UI.Particle:PlayFx () (at Assets/Art_Resources/AUI/Runtime/Particle.cs:98)
MK.UI.Particle:OnGeometryChangedEvent (UnityEngine.UIElements.GeometryChangedEvent) (at Assets/Art_Resources/AUI/Runtime/Particle.cs:135)
UnityEngine.UIElements.UIElementsRuntimeUtilityNative:UpdatePanels ()

curLODLevel=2
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:TurnMountainGateTile (int,bool) (at Assets/World/Scripts/WorldManager.cs:1945)
WorldManager:RefreshDetailTileObject (bool) (at Assets/World/Scripts/WorldManager.cs:2483)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:937)

curLODLevel=2
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:TurnMountainGateTile (int,bool) (at Assets/World/Scripts/WorldManager.cs:1945)
WorldManager:RefreshDetailTileObject (bool) (at Assets/World/Scripts/WorldManager.cs:2495)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:937)

#### block_leave_req {"blocks":[209,210],"keys":null}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:req_over_block_leave (System.Collections.Generic.List`1<int>) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1187)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2828)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:966)

#### req_block_join 191
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:req_block_join (int,bool,bool) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1072)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2864)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:966)

Stopwatch res_block start
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:req_block_join (int[],bool,bool) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1081)
mk.socket.MKSocket:req_block_join (int,bool,bool) (at Assets/World/Scripts/NetworkData/MKSocket.cs:1074)
WorldManager:RefreshPushBlockJoinLeave (bool,bool) (at Assets/World/Scripts/WorldManager.cs:2864)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:966)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

ObjectLoadSystem OnDestroy - Parent = units , fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ObjectLoadSystem:OnDestroy () (at Assets/Scripts/BattleUnit/ObjectLoadSystem.cs:186)

#### block remove slash:{"msg":"","err":0,"blocks":[{"player_list":[{"no":4810551,"terri_id":583,"user_no":13200,"name":"m02","shape":4,"ally_no":375,"hq_level":30,"shield_t":0,"fireout_t":0,"index_name":"一一一一","wall_status":0,"skin_id":10007,"skin_end_time":0,"name_tag_id":0,"name_tag_end_time":0}],"resource_list":[{"no":4510556,"id":305,"t_id":570,"current_point":302000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778576523,"status":0},{"no":4510564,"id":306,"t_id":570,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778576343,"status":0},{"no":4510576,"id":105,"t_id":570,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778580424,"status":0},{"no":4510580,"id":5,"t_id":570,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579283,"status":0},{"no":4530558,"id":6,"t_id":570,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582583,"status":0},{"no":4530566,"id":106,"t_id":570,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582643,"status":0},{"no":4530574,"id":206,"t_id":570,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778583663,"status":0},{"no":4550596,"id":305,"t_id":636,"current_point":302000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582162,"status":0},{"no":4570554,"id":107,"t_id":570,"current_point":907000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778583903,"status":0},{"no":4610578,"id":206,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778577666,"status":0},{"no":4630576,"id":306,"t_id":557,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778581505,"status":0},{"no":4650574,"id":206,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778583123,"status":0},{"no":4650598,"id":5,"t_id":636,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778578746,"status":0},{"no":4670552,"id":5,"t_id":557,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582343,"status":0},{"no":4670568,"id":206,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579705,"status":0},{"no":4670580,"id":105,"t_id":557,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582582,"status":0},{"no":4690578,"id":306,"t_id":557,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778581505,"status":0},{"no":4750552,"id":105,"t_id":583,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579885,"status":0},{"no":4750588,"id":6,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778584444,"status":0},{"no":4770554,"id":208,"t_id":583,"current_point":1008000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778578684,"status":0},{"no":4770562,"id":105,"t_id":557,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582763,"status":0},{"no":4770582,"id":306,"t_id":557,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778578025,"status":0},{"no":4770586,"id":107,"t_id":557,"current_point":907000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778584622,"status":0},{"no":4790556,"id":6,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778577364,"status":0},{"no":4790564,"id":106,"t_id":557,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778582882,"status":0},{"no":4790584,"id":205,"t_id":557,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778577485,"status":0},{"no":4830564,"id":6,"t_id":557,"current_point":805896,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778576825,"status":0},{"no":4830568,"id":6,"t_id":555,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778575806,"status":0},{"no":4830580,"id":105,"t_id":555,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778581265,"status":0},{"no":4850558,"id":6,"t_id":583,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778581862,"status":0},{"no":4850578,"id":306,"t_id":555,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579945,"status":0},{"no":4870560,"id":106,"t_id":555,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778580186,"status":0},{"no":4910564,"id":6,"t_id":555,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778577365,"status":0},{"no":4910576,"id":205,"t_id":555,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778576224,"status":0},{"no":4910588,"id":206,"t_id":555,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778584323,"status":0},{"no":4950552,"id":6,"t_id":583,"current_point":806000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579765,"status":0},{"no":4950592,"id":205,"t_id":555,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778584142,"status":0},{"no":4970570,"id":305,"t_id":555,"current_point":302000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778577725,"status":0},{"no":4970586,"id":306,"t_id":555,"current_point":403000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579763,"status":0},{"no":4970598,"id":307,"t_id":587,"current_point":454000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778583962,"status":0},{"no":4990556,"id":205,"t_id":583,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579286,"status":0},{"no":4990592,"id":105,"t_id":555,"current_point":605000,"user_no":0,"start_time":0,"end_time":0,"fleet_slot_id":0,"expire_time":1778579226,"status":0}],"npc_list":[{"no":4530578,"id":1007,"locked":false,"event_id":0,"terri_id":570,"expire_time":1778579943},{"no":4550568,"id":40,"locked":false,"event_id":0,"terri_id":570,"expire_time":1778578504},{"no":4570578,"id":40,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778580783},{"no":4590552,"id":40,"locked":false,"event_id":0,"terri_id":570,"expire_time":1778580424},{"no":4590556,"id":1006,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778752020},{"no":4590568,"id":36,"locked":false,"event_id":0,"terri_id":570,"expire_time":1778579943},{"no":4590572,"id":1006,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778579463},{"no":4590596,"id":1007,"locked":false,"event_id":0,"terri_id":636,"expire_time":1778580424},{"no":4630572,"id":38,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778580123},{"no":4650566,"id":35,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778581624,"ci_id":15519},{"no":4690582,"id":36,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778756460},{"no":4710576,"id":39,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778576104},{"no":4730598,"id":28,"locked":false,"event_id":0,"terri_id":636,"expire_time":1778576344},{"no":4770550,"id":35,"locked":false,"event_id":0,"terri_id":583,"expire_time":1778580243,"ci_id":0},{"no":4790560,"id":38,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778580064},{"no":4870576,"id":37,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778579763},{"no":4870592,"id":35,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778575743},{"no":4910556,"id":1006,"locked":false,"event_id":0,"terri_id":583,"expire_time":1778577004},{"no":4930554,"id":36,"locked":false,"event_id":0,"terri_id":583,"expire_time":1778580124},{"no":4930566,"id":1007,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778755320},{"no":4930586,"id":34,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778576883},{"no":4930598,"id":34,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778578623},{"no":4950564,"id":1007,"locked":false,"event_id":0,"terri_id":583,"expire_time":1778577182},{"no":4950596,"id":1008,"locked":false,"event_id":0,"terri_id":587,"expire_time":1778579944},{"no":4970566,"id":1008,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778577304},{"no":4990572,"id":39,"locked":false,"event_id":0,"terri_id":555,"expire_time":1778579703},{"no":4770558,"id":36,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778821920},{"no":4770566,"id":38,"locked":false,"event_id":0,"terri_id":557,"expire_time":1778825924}],"point_list":[{"no":4880583,"id":698,"c_type":0,"p_type":3,"category":1,"t_id":555,"conn_status":0,"ally_no":0,"c_status":1,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":100,"ally_index_name":"","ally_emblem":"","durability_level":1,"gold_level":1,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"skill_info":[],"su_info":[],"ps_status":0,"pss_time":0,"pse_time":0,"psc_time":0,"p_no":0,"addon_info":[],"max_duration":100,"locked":false,"expire_time":0},{"no":4710561,"id":700,"c_type":0,"p_type":3,"category":1,"t_id":557,"conn_status":0,"ally_no":0,"c_status":1,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":0,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":0,"user_no":0,"inctime":0,"duration":100,"ally_index_name":"","ally_emblem":"","durability_level":1,"gold_level":1,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"skill_info":[],"su_info":[],"ps_status":0,"pss_time":0,"pse_time":0,"psc_time":0,"p_no":0,"addon_info":[],"max_duration":100,"locked":false,"expire_time":0},{"no":4770597,"id":10059,"c_type":0,"p_type":4,"category":2,"t_id":173,"conn_status":0,"ally_no":335,"c_status":2,"ces_time":0,"cew_time":0,"cee_time":0,"w_status":0,"f_status":0,"fire_time":0,"fire_damage":0,"r_status":3,"rss_time":0,"rse_time":0,"rpe_time":0,"npc_time":0,"agr_time":1747029143,"user_no":0,"inctime":0,"duration":30000,"ally_index_name":"end","ally_emblem":"121402010802","durability_level":1,"gold_level":0,"buff_level":0,"pu_status":0,"pus_time":0,"pue_time":0,"skill_info":[],"su_info":[],"ps_status":0,"pss_time":0,"pse_time":0,"psc_time":0,"p_no":0,"addon_info":[],"max_duration":30000,"locked":false,"expire_time":0}],"move_list":[{"type":"fleet_action","act_type":"fleet_battle","fleet_slot_id":906,"user_no":15483,"status":5,"source_no":4790548,"target_no":4650566,"origin_no":4650566,"sally_type":3,"target_type":3,"target_id":35,"start_time":1778568048.139159,"end_time":1778568049.139159,"interval_sec":0,"corps":[{"hero_id":413,"leader":1,"level":60,"classID":0,"grade":31,"div":[{"id":206,"num":133272,"j":0,"d":0,"w":0,"i":133272}],"comp_fleet_code":101,"comp_level":300,"comp_rank":23,"t":2},{"hero_id":409,"leader":0,"level":60,"classID":0,"grade":31,"div":[{"id":206,"num":128336,"j":0,"d":0,"w":0,"i":128336}],"comp_fleet_code":0,"comp_level":0,"comp_rank":0,"t":2},{"hero_id":204,"leader":0,"level":54,"classID":0,"grade":30,"div":[{"id":206,"num":98259,"j":0,"d":0,"w":0,"i":98259}],"comp_fleet_code":0,"comp_level":0,"comp_rank":0,"t":2}],"target_key":"","combat_rating":3598670,"tracking_slot_id_arr":[],"after_win":0,"reg_time":1778568025.619745,"move_path_slot":[{"px":548,"py":479,"t_id":583,"move_time":1778568025.089815,"move_sec":0,"path_idx":1},{"px":566,"py":465,"t_id":557,"move_time":1778568048.0898151,"move_sec":22,"path_idx":2}],"return_path_org_slot":[{"px":566,"py":465,"t_id":557,"move_time":0,"move_sec":0,"path_idx":1},{"px":548,"py":479,"t_id":583,"move_time":0,"move_sec":22,"path_idx":2}],"return_path_dft_slot":[{"px":566,"py":465,"t_id":557,"move_time":0,"move_sec":0,"path_idx":1},{"px":548,"py":479,"t_id":583,"move_time":0,"move_sec":22,"path_idx":2}],"move_block_slot":[{"block_no":190,"block_idx":1},{"block_no":191,"block_idx":2}],"return_block_org_slot":[{"block_no":191,"block_idx":1},{"block_no":190,"block_idx":2}],"return_block_dft_slot":[{"block_no":191,"block_idx":1},{"block_no":190,"block_idx":2}],"ally_no":375,"ally_idx":"一一一一","user_name":"leader_15483","rn_t_id":557,"rn_no":4650566,"rally_id":0,"portrait_id":0,"frame_id":3011200,"req_no":2361,"key":"15483//906","prev_act":"fleet_move","ci_id":15519,"rally_list":[],"was_gather":false,"skin":0},{"type":"fleet_action","act_type":"fleet_battle_join_npc","fleet_slot_id":907,"user_no":15483,"status":5,"source_no":4790548,"target_no":4650566,"origin_no":4650566,"sally_type":3,"target_type":3,"target_id":35,"start_time":1778568048,"interval_sec":0,"corps":[{"hero_id":406,"leader":1,"level":10,"classID":0,"grade":1,"div":[{"id":206,"num":37752,"j":0,"d":0,"w":0,"i":37752}],"comp_fleet_code":0,"comp_level":0,"comp_rank":0,"t":2}],"target_key":"","combat_rating":377520,"tracking_slot_id_arr":[],"after_win":0,"reg_time":1778568030.157235,"move_path_slot":[{"px":548,"py":479,"t_id":583,"move_time":1778568029.6233175,"move_sec":0,"path_idx":1},{"px":566,"py":465,"t_id":557,"move_time":1778568055.6233177,"move_sec":25,"path_idx":2}],"return_path_org_slot":[{"px":566,"py":465,"t_id":557,"move_time":0,"move_sec":0,"path_idx":1},{"px":548,"py":479,"t_id":583,"move_time":0,"move_sec":25,"path_idx":2}],"return_path_dft_slot":[{"px":566,"py":465,"t_id":557,"move_time":0,"move_sec":0,"path_idx":1},{"px":548,"py":479,"t_id":583,"move_time":0,"move_sec":25,"path_idx":2}],"move_block_slot":[{"block_no":190,"block_idx":1},{"block_no":191,"block_idx":2}],"return_block_org_slot":[{"block_no":191,"block_idx":1},{"block_no":190,"block_idx":2}],"return_block_dft_slot":[{"block_no":191,"block_idx":1},{"block_no":190,"block_idx":2}],"ally_no":375,"ally_idx":"一一一一","user_name":"leader_15483","rn_t_id":557,"rn_no":4650566,"rally_id":0,"portrait_id":0,"frame_id":3011200,"req_no":2362,"key":"15483//907","prev_act":"fleet_move","ci_id":15519,"rally_list":[],"was_gather":false,"skin":0}],"scout_list":[],"ally_raid":[],"no":191}],"user_no":15483}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:916)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTT<message truncated>
####res_block Ok : 191
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:939)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(578.00, 0.05, 453.00) opos=(578.10, 0.05, 452.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager:RefreshWithNPCData (MKGameData.Socket_NPC_DTO) (at Assets/World/Scripts/WorldManager.cs:6222)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4666)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

detailTileDataList pos=(566.00, 0.05, 493.00) dpos=(566.10, 0.05, 494.10) oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5465)
WorldManager:RefreshWithNPCData (MKGameData.Socket_NPC_DTO) (at Assets/World/Scripts/WorldManager.cs:6222)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4666)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

detailTileDataList pos=(564.00, 0.05, 495.00) dpos=(565.10, 0.05, 496.10) oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5465)
WorldManager:RefreshWithNPCData (MKGameData.Socket_NPC_DTO) (at Assets/World/Scripts/WorldManager.cs:6222)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4666)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

detailTileDataList pos=(566.00, 0.05, 497.00) dpos=(567.10, 0.05, 496.10) oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5465)
WorldManager:RefreshWithNPCData (MKGameData.Socket_NPC_DTO) (at Assets/World/Scripts/WorldManager.cs:6222)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4666)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[TroopBattlePos] 전투 중 추적 없음 key=15483//906
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD:ApplyPathAndPositionUpdate () (at Assets/World/Scripts/TroopLOD.cs:4248)
TroopLOD:SetTroopSlotData (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/TroopLOD.cs:3914)
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6375)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4705)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
TroopLOD:SetTroopSlotData (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/TroopLOD.cs:3935)
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6375)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4705)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[AWPL-3143] 프리펩 데이터 세팅 : 4 ms
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RefreshWithMoveData (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:6376)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4705)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:206(568.00, 0.05, 467.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(568.00, 0.05, 467.00) opos=(569.10, 0.05, 466.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(568.00, 0.05, 467.00) opos=(569.10, 0.05, 468.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:206(574.00, 0.05, 465.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

point:700(561.00, 0.05, 471.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5727)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

point_T1_base_lv3 SetBattle : NONE : False : False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
PointObject:SetBattle (PointObject/WORLD_3DNPC_STATUS,bool,bool) (at Assets/World/Scripts/PointObject.cs:883)
PointObject:RefreshView () (at Assets/World/Scripts/PointObject.cs:390)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5741)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:306(576.00, 0.05, 463.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(576.00, 0.05, 463.00) opos=(575.10, 0.05, 462.10) size=1.2 oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:306(578.00, 0.05, 469.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(578.00, 0.05, 469.00) opos=(579.10, 0.05, 469.10) size=1.2 oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(578.00, 0.05, 469.00) opos=(578.10, 0.05, 470.10) size=1.2 oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:206(578.00, 0.05, 461.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:105(562.00, 0.05, 477.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:105(580.00, 0.05, 467.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(580.00, 0.05, 467.00) opos=(580.10, 0.05, 467.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:106(566.00, 0.05, 453.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(566.00, 0.05, 453.00) opos=(565.10, 0.05, 452.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

worldPropObjectDict pos=(566.00, 0.05, 453.00) opos=(565.10, 0.05, 454.10) size=1.2 oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

resource:106(564.00, 0.05, 479.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
WorldManager:ProcessBlockData (long) (at Assets/World/Scripts/WorldManager.cs:4726)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:955)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

Stopwatch res_block key=191 = 147ms
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:res_block (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:958)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - fanatics
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

hero_unit_object Load : Succeeded - 1101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

resource:206(574.00, 0.05, 453.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(574.00, 0.05, 453.00) opos=(575.10, 0.05, 454.10) size=1.2 oid=54 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(574.00, 0.05, 453.00) opos=(575.10, 0.05, 453.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:5(552.00, 0.05, 467.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(552.00, 0.05, 467.00) opos=(553.10, 0.05, 467.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(552.00, 0.05, 467.00) opos=(553.10, 0.05, 468.10) size=1.2 oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(552.00, 0.05, 467.00) opos=(552.10, 0.05, 467.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:306(564.00, 0.05, 451.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(558.00, 0.05, 453.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(558.00, 0.05, 453.00) opos=(559.10, 0.05, 453.10) size=1.2 oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:107(554.00, 0.05, 457.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(568.00, 0.05, 483.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(568.00, 0.05, 483.00) opos=(568.10, 0.05, 483.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(556.00, 0.05, 479.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(556.00, 0.05, 479.00) opos=(555.10, 0.05, 479.10) size=1.2 oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:208(554.00, 0.05, 477.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(564.00, 0.05, 483.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:105(576.00, 0.05, 451.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(576.00, 0.05, 451.00) opos=(575.10, 0.05, 451.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:105(552.00, 0.05, 475.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:306(582.00, 0.05, 477.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:305(556.00, 0.05, 451.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(556.00, 0.05, 451.00) opos=(555.10, 0.05, 451.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:5(580.00, 0.05, 451.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(558.00, 0.05, 485.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(558.00, 0.05, 485.00) opos=(559.10, 0.05, 485.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(558.00, 0.05, 485.00) opos=(559.10, 0.05, 486.10) size=1.2 oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:205(584.00, 0.05, 479.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(584.00, 0.05, 479.00) opos=(585.10, 0.05, 479.10) size=1.2 oid=54 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:105(580.00, 0.05, 483.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(580.00, 0.05, 483.00) opos=(579.10, 0.05, 483.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:107(586.00, 0.05, 477.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:306(578.00, 0.05, 485.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(578.00, 0.05, 485.00) opos=(578.10, 0.05, 484.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

player city:m02(551.00, 0.05, 481.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass279_0:<RefreshWithPlayerData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5392)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPlayerData (MKGameData.Socket_Player_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:5346)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4754)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:106(560.00, 0.05, 487.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(588.00, 0.05, 475.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(588.00, 0.05, 475.00) opos=(589.10, 0.05, 475.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(564.00, 0.05, 491.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(564.00, 0.05, 491.00) opos=(564.10, 0.05, 490.10) size=1.2 oid=55 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:205(576.00, 0.05, 491.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(576.00, 0.05, 491.00) opos=(577.10, 0.05, 491.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

point:698(583.00, 0.05, 488.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5727)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

point_T1_base_lv3 SetBattle : NONE : False : False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
PointObject:SetBattle (PointObject/WORLD_3DNPC_STATUS,bool,bool) (at Assets/World/Scripts/PointObject.cs:883)
PointObject:RefreshView () (at Assets/World/Scripts/PointObject.cs:390)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5741)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(583.00, 0.05, 488.00) opos=(582.10, 0.05, 485.10) size=1.2 oid=53 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5760)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(583.00, 0.05, 488.00) opos=(583.10, 0.05, 488.10) size=1.2 oid=51 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5760)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(583.00, 0.05, 488.00) opos=(583.10, 0.05, 489.10) size=1.2 oid=54 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5760)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:5(598.00, 0.05, 465.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(598.00, 0.05, 465.00) opos=(599.10, 0.05, 466.10) size=1.2 oid=25 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:305(596.00, 0.05, 455.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(596.00, 0.05, 455.00) opos=(595.10, 0.05, 456.10) size=1.2 oid=20 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(596.00, 0.05, 455.00) opos=(596.10, 0.05, 455.10) size=1.2 oid=21 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:305(570.00, 0.05, 497.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(570.00, 0.05, 497.00) opos=(570.10, 0.05, 498.10) size=1.2 oid=54 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

관문은 터치 영역을 다르게 설정했습니다.
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
Props:Init (bool) (at Assets/World/Scripts/Props.cs:162)
Props:OnEnable () (at Assets/World/Scripts/Props.cs:308)
UnityEngine.GameObject:SetActive (bool)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5725)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

point:10059(597.00, 0.05, 477.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5727)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

관문은 터치 영역을 다르게 설정했습니다.
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
Props:Init (bool) (at Assets/World/Scripts/Props.cs:162)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5739)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

point_gate2 SetBattle : NONE : False : False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
PointObject:SetBattle (PointObject/WORLD_3DNPC_STATUS,bool,bool) (at Assets/World/Scripts/PointObject.cs:883)
PointObject:RefreshView () (at Assets/World/Scripts/PointObject.cs:390)
WorldManager/<>c__DisplayClass284_1:<RefreshWithPointData>b__2 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5741)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithPointData (MKGameData.Socket_Point_DTO) (at Assets/World/Scripts/WorldManager.cs:5702)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4758)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:206(588.00, 0.05, 491.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(588.00, 0.05, 491.00) opos=(589.10, 0.05, 491.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:6(552.00, 0.05, 495.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:205(556.00, 0.05, 499.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(556.00, 0.05, 499.00) opos=(555.10, 0.05, 498.10) size=1.2 oid=52 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:306(586.00, 0.05, 497.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:205(592.00, 0.05, 495.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(592.00, 0.05, 495.00) opos=(593.10, 0.05, 494.10) size=1.2 oid=54 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:105(592.00, 0.05, 499.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

resource:307(598.00, 0.05, 497.00)
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5525)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(598.00, 0.05, 497.00) opos=(599.10, 0.05, 498.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

worldPropObjectDict pos=(598.00, 0.05, 497.00) opos=(597.10, 0.05, 498.10) size=1.2 oid=50 removed
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RemoveNearDecoObject (UnityEngine.Vector3,single) (at Assets/World/Scripts/WorldManager.cs:5440)
WorldManager/<>c__DisplayClass282_1:<RefreshWithResourceData>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldManager.cs:5547)
WorldObjectPrefabManager/<>c__DisplayClass6_0:<SpawnAsync>b__0 (UnityEngine.GameObject) (at Assets/World/Scripts/WorldObjectAssetManager.cs:196)
AddressablesManagerInstantiateAsync:PopAsync (string,CallbackT`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:818)
WorldObjectPrefabManager:SpawnAsync (string,UnityEngine.Vector3,UnityEngine.Quaternion,CallbackT`1<UnityEngine.GameObject>) (at Assets/World/Scripts/WorldObjectAssetManager.cs:184)
WorldManager:RefreshWithResourceData (MKGameData.Socket_Resource_DTO) (at Assets/World/Scripts/WorldManager.cs:5512)
WorldManager/<CreateBlockObjectCoroutine>d__264:MoveNext () (at Assets/World/Scripts/WorldManager.cs:4756)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### before escape {"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":["{\"no\":4650566,\"id\":15519,\"ty\":1,\"t\":12,\"p\":3,\"sq\":[{\"key\":\"15483//906\",\"id\":1,\"u\":15483,\"h\":413,\"c\":101,\"clv\":300,\"crk\":23,\"gu\":0,\"r\":240,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":119870,\"i\":133272,\"j\":13375,\"d\":0,\"w\":27}],\"org_total\":133272,\"total\":0,\"b\":[{\"i\":238,\"b\":1,\"v\":6,\"t\":0},{\"i\":210,\"b\":1,\"v\":3000,\"t\":3},{\"i\":238,\"b\":1,\"v\":6,\"t\":1}]},{\"key\":\"15483//906\",\"id\":2,\"u\":15483,\"h\":409,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":114916,\"i\":128336,\"j\":13393,\"d\":0,\"w\":27}],\"org_total\":128336,\"total\":0,\"b\":[]},{\"key\":\"15483//906\",\"id\":3,\"u\":15483,\"h\":204,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":81283,\"i\":98259,\"j\":16948,\"d\":0,\"w\":28}],\"org_total\":98259,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":101,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":106,\"n\":76558,\"i\":100000,\"j\":23442,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":102,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":103,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":104,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":306,\"n\":26169,\"i\":100000,\"j\":73831,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":105,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":106,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":1000,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"15483//907\",\"id\":4,\"u\":15483,\"h\":406,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":600,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":26242,\"i\":37752,\"j\":11488,\"d\":0,\"w\":22}],\"org_total\":37752,\"total\":0,\"b\":[]}],\"sq_gr\":[{\"id\":2,\"x\":6100,\"y\":2600,\"tg\":103,\"sa\":1,\"sm\":0,\"sqs\":[1,2,3,4]},{\"id\":101,\"x\":6899,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[101]},{\"id\":102,\"x\":6899,\"y\":7400,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[102,103]},{\"id\":103,\"x\":6899,\"y\":2600,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[104]},{\"id\":104,\"x\":7699,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[105,106]}],\"m\":[{\"a\":1,\"d\":2,\"t\":6,\"p\":[300206,null,1,23852,6,1]},{\"a\":1,\"d\":1,\"t\":5,\"p\":[4134,413405,5,20]},{\"a\":1,\"d\":103,\"t\":6,\"p\":[200408,null,2,2941,48943685.44]},{\"a\":2,\"d\":103,\"t\":1,\"p\":[2966,54346227.6]},{\"a\":101,\"d\":2,\"t\":1,\"p\":[908,30286650]},{\"a\":102,\"d\":2,\"t\":1,\"p\":[1952,65045110]},{\"a\":103,\"d\":2,\"t\":1,\"p\":[550,18358737]},{\"a\":104,\"d\":2,\"t\":1,\"p\":[1981,65986560]}],\"wa\":[0,0],\"leader\":[\"15483//906\",\"0\"],\"sp_cool\":[0,0],\"corp_a\":[{\"key\":\"15483//906\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":1,\"leader\":1,\"sq_list\":[1,2,3],\"u_name\":\"leader_15483\"},{\"key\":\"15483//907\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":6,\"leader\":0,\"sq_list\":[4],\"u_name\":\"leader_15483\"}],\"corp_d\":[]}"]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

#### fleet_battle_msg
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4642)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

{"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":[{"no":4650566,"id":15519,"ty":1,"t":12,"p":3,"sq":[{"key":"15483//906","id":1,"u":15483,"h":413,"c":101,"clv":300,"crk":23,"gu":0,"r":240,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":119870,"i":133272,"j":13375,"d":0,"w":27}],"org_total":133272,"total":0,"b":[{"i":238,"b":1,"v":6,"t":0},{"i":210,"b":1,"v":3000,"t":3},{"i":238,"b":1,"v":6,"t":1}]},{"key":"15483//906","id":2,"u":15483,"h":409,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":114916,"i":128336,"j":13393,"d":0,"w":27}],"org_total":128336,"total":0,"b":[]},{"key":"15483//906","id":3,"u":15483,"h":204,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":81283,"i":98259,"j":16948,"d":0,"w":28}],"org_total":98259,"total":0,"b":[]},{"key":"35","id":101,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":106,"n":76558,"i":100000,"j":23442,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":102,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":103,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":104,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":306,"n":26169,"i":100000,"j":73831,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":105,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":106,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":1000,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"15483//907","id":4,"u":15483,"h":406,"c":0,"clv":0,"crk":0,"gu":0,"r":600,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":26242,"i":37752,"j":11488,"d":0,"w":22}],"org_total":37752,"total":0,"b":[]}],"sq_gr":[{"id":2,"x":6100,"y":2600,"tg":103,"sa":1,"sm":0,"sqs":[1,2,3,4]},{"id":101,"x":6899,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[101]},{"id":102,"x":6899,"y":7400,"tg":2,"sa":1,"sm":0,"sqs":[102,103]},{"id":103,"x":6899,"y":2600,"tg":2,"sa":1,"sm":0,"sqs":[104]},{"id":104,"x":7699,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[105,106]}],"m":[{"a":1,"d":2,"t":6,"p":[300206,0,1,23852,6,1]},{"a":1,"d":1,"t":5,"p":[4134,413405,5,20]},{"a":1,"d":103,"t":6,"p":[200408,0,2,2941,48943685.44]},{"a":2,"d":103,"t":1,"p":[2966,54346227.6]},{"a":101,"d":2,"t":1,"p":[908,30286650]},{"a":102,"d":2,"t":1,"p":[1952,65045110]},{"a":103,"d":2,"t":1,"p":[550,18358737]},{"a":104,"d":2,"t":1,"p":[1981,65986560]}],"wa":[0,0],"leader":["15483//906","0"],"sp_cool":[0,0],"corp_a":[{"key":"15483//906","ally_no":375,"profile":0,"skin":0,"since":1,"leader":1,"sq_list":[1,2,3],"u_name":"leader_15483"},{"key":"15483//907","ally_no":375,"profile":0,"skin":0,"since":6,"leader":0,"sq_list":[4],"u_name":"leader_15483"}],"corp_d":[]}]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4643)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4908)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

OnApplicationFocus
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
IAPManager:OnApplicationFocus (bool) (at Assets/SDK/Scripts/IAPManagerNew.cs:925)
UnityEditor.HostView:OnLostFocus ()

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3177)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

전투 시작 세팅 : RefreshWithPushFleetBattle : 15483//906 전투 시작 시간 : 1778568061.30567
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3182)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[BATTLE_HP_LOG] left_attacker SetHP 86.0902 342311/397619
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7773)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=413 hp=0.860902 (342311/397619) is_rally=False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7783)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

FADE : 0 : False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldTroopPanel:Fade (bool) (at Assets/World/Scripts/WorldTroopPanel.cs:888)
WorldTroopPanel:OnEnable () (at Assets/World/Scripts/WorldTroopPanel.cs:171)
UnityEngine.Object:Instantiate<WorldTroopPanel> (WorldTroopPanel)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7035)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7783)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=1101 hp=0.7591417 (455485/600000) is_rally=True
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7793)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

FADE : 0 : False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldTroopPanel:Fade (bool) (at Assets/World/Scripts/WorldTroopPanel.cs:888)
WorldTroopPanel:OnEnable () (at Assets/World/Scripts/WorldTroopPanel.cs:171)
UnityEngine.Object:Instantiate<WorldTroopPanel> (WorldTroopPanel)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7014)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7793)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

#### 전투 이펙트 : 1 -> 2 : 300206 300206
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
TroopLOD:StartEffectCorutine (System.Collections.Generic.List`1<mk.combatSocket.CS_CombatMessage/Message>,UnityEngine.GameObject) (at Assets/World/Scripts/TroopLOD.cs:3441)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7927)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Earth_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7966)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Air_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7977)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7743)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

#### before escape {"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":["{\"no\":4650566,\"id\":15519,\"ty\":1,\"t\":13,\"p\":3,\"sq\":[{\"key\":\"15483//906\",\"id\":1,\"u\":15483,\"h\":413,\"c\":101,\"clv\":300,\"crk\":23,\"gu\":0,\"r\":366,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":115988,\"i\":133272,\"j\":17249,\"d\":0,\"w\":35}],\"org_total\":133272,\"total\":0,\"b\":[{\"i\":210,\"b\":1,\"v\":3000,\"t\":2},{\"i\":238,\"b\":1,\"v\":6,\"t\":0},{\"i\":238,\"b\":1,\"v\":6,\"t\":1},{\"i\":215,\"b\":1,\"v\":1000,\"t\":6},{\"i\":210,\"b\":1,\"v\":1000,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6}]},{\"key\":\"15483//906\",\"id\":2,\"u\":15483,\"h\":409,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":107088,\"i\":128336,\"j\":21208,\"d\":0,\"w\":40}],\"org_total\":128336,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":6},{\"i\":210,\"b\":1,\"v\":1000,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6}]},{\"key\":\"15483//906\",\"id\":3,\"u\":15483,\"h\":204,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":71453,\"i\":98259,\"j\":26759,\"d\":0,\"w\":47}],\"org_total\":98259,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":6},{\"i\":210,\"b\":1,\"v\":1000,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6}]},{\"key\":\"35\",\"id\":101,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":106,\"n\":76558,\"i\":100000,\"j\":23442,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":102,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":103,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":104,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":306,\"n\":18524,\"i\":100000,\"j\":81476,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-2400,\"t\":3}]},{\"key\":\"35\",\"id\":105,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":106,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":100,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"15483//907\",\"id\":4,\"u\":15483,\"h\":406,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":700,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":14044,\"i\":37752,\"j\":23662,\"d\":0,\"w\":46}],\"org_total\":37752,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6},{\"i\":215,\"b\":2,\"v\":-250,\"t\":6}]}],\"sq_gr\":[{\"id\":2,\"x\":6100,\"y\":2600,\"tg\":103,\"sa\":1,\"sm\":0,\"sqs\":[1,2,3,4]},{\"id\":101,\"x\":6899,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[101]},{\"id\":102,\"x\":6899,\"y\":7400,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[102,103]},{\"id\":103,\"x\":6899,\"y\":2600,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[104]},{\"id\":104,\"x\":7699,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[105,106]}],\"m\":[{\"a\":1,\"d\":2,\"t\":6,\"p\":[300206,null,1,23852,6,1]},{\"a\":1,\"d\":1,\"t\":5,\"p\":[4134,413405,5,20]},{\"a\":2,\"d\":103,\"t\":3,\"p\":[4091,409105,2,5308,88330913]},{\"a\":2,\"d\":103,\"t\":3,\"p\":[4091,409115,1,21561,2400,3]},{\"a\":3,\"d\":2,\"t\":3,\"p\":[2041,204101,1,21551,1000,6]},{\"a\":3,\"d\":2,\"t\":3,\"p\":[2041,204111,1,21051,1000,6]},{\"a\":101,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,4971,181719900]},{\"a\":101,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":102,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,5338,195135330]},{\"a\":102,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":103,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,5338,195135330]},{\"a\":103,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":104,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,2996,109537464]},{\"a\":104,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":105,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,5414,197959680]},{\"a\":105,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":106,\"d\":2,\"t\":3,\"p\":[11011,1101101,2,5414,197959680]},{\"a\":106,\"d\":2,\"t\":3,\"p\":[11011,1101111,1,21561,1000,6]},{\"a\":2,\"d\":103,\"t\":1,\"p\":[2337,48790087.6]},{\"a\":101,\"d\":2,\"t\":1,\"p\":[734,30286650]},{\"a\":102,\"d\":2,\"t\":1,\"p\":[1579,65045110]},{\"a\":103,\"d\":2,\"t\":1,\"p\":[352,14553231]},{\"a\":104,\"d\":2,\"t\":1,\"p\":[1602,65986560]}],\"wa\":[0,0],\"leader\":[\"15483//906\",\"0\"],\"sp_cool\":[0,0],\"corp_a\":[{\"key\":\"15483//906\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":1,\"leader\":1,\"sq_list\":[1,2,3],\"u_name\":\"leader_15483\"},{\"key\":\"15483//907\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":6,\"leader\":0,\"sq_list\":[4],\"u_name\":\"leader_15483\"}],\"corp_d\":[]}"]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

#### fleet_battle_msg
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4642)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

{"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":[{"no":4650566,"id":15519,"ty":1,"t":13,"p":3,"sq":[{"key":"15483//906","id":1,"u":15483,"h":413,"c":101,"clv":300,"crk":23,"gu":0,"r":366,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":115988,"i":133272,"j":17249,"d":0,"w":35}],"org_total":133272,"total":0,"b":[{"i":210,"b":1,"v":3000,"t":2},{"i":238,"b":1,"v":6,"t":0},{"i":238,"b":1,"v":6,"t":1},{"i":215,"b":1,"v":1000,"t":6},{"i":210,"b":1,"v":1000,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6}]},{"key":"15483//906","id":2,"u":15483,"h":409,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":107088,"i":128336,"j":21208,"d":0,"w":40}],"org_total":128336,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":6},{"i":210,"b":1,"v":1000,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6}]},{"key":"15483//906","id":3,"u":15483,"h":204,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":71453,"i":98259,"j":26759,"d":0,"w":47}],"org_total":98259,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":6},{"i":210,"b":1,"v":1000,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6}]},{"key":"35","id":101,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":106,"n":76558,"i":100000,"j":23442,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":102,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":103,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":104,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":306,"n":18524,"i":100000,"j":81476,"d":0,"w":0}],"org_total":100000,"total":0,"b":[{"i":215,"b":2,"v":-2400,"t":3}]},{"key":"35","id":105,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":106,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":100,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"15483//907","id":4,"u":15483,"h":406,"c":0,"clv":0,"crk":0,"gu":0,"r":700,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":14044,"i":37752,"j":23662,"d":0,"w":46}],"org_total":37752,"total":0,"b":[{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6},{"i":215,"b":2,"v":-250,"t":6}]}],"sq_gr":[{"id":2,"x":6100,"y":2600,"tg":103,"sa":1,"sm":0,"sqs":[1,2,3,4]},{"id":101,"x":6899,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[101]},{"id":102,"x":6899,"y":7400,"tg":2,"sa":1,"sm":0,"sqs":[102,103]},{"id":103,"x":6899,"y":2600,"tg":2,"sa":1,"sm":0,"sqs":[104]},{"id":104,"x":7699,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[105,106]}],"m":[{"a":1,"d":2,"t":6,"p":[300206,0,1,23852,6,1]},{"a":1,"d":1,"t":5,"p":[4134,413405,5,20]},{"a":2,"d":103,"t":3,"p":[4091,409105,2,5308,88330913]},{"a":2,"d":103,"t":3,"p":[4091,409115,1,21561,2400,3]},{"a":3,"d":2,"t":3,"p":[2041,204101,1,21551,1000,6]},{"a":3,"d":2,"t":3,"p":[2041,204111,1,21051,1000,6]},{"a":101,"d":2,"t":3,"p":[11011,1101101,2,4971,181719900]},{"a":101,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":102,"d":2,"t":3,"p":[11011,1101101,2,5338,195135330]},{"a":102,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":103,"d":2,"t":3,"p":[11011,1101101,2,5338,195135330]},{"a":103,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":104,"d":2,"t":3,"p":[11011,1101101,2,2996,109537464]},{"a":104,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":105,"d":2,"t":3,"p":[11011,1101101,2,5414,197959680]},{"a":105,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":106,"d":2,"t":3,"p":[11011,1101101,2,5414,197959680]},{"a":106,"d":2,"t":3,"p":[11011,1101111,1,21561,1000,6]},{"a":2,"d":103,"t":1,"p":[2337,48790087.6]},{"a":101,"d":2,"t":1,"p":[734,30286650]},{"a":102,"d":2,"t":1,"p":[1579,65045110]},{"a":103,"d":2,"t":1,"p":[352,14553231]},{"a":104,"d":2,"t":1,"p":[1602,65986560]}],"wa":[0,0],"leader":["15483//906","0"],"sp_cool":[0,0],"corp_a":[{"key":"15483//906","ally_no":375,"profile":0,"skin":0,"since":1,"leader":1,"sq_list":[1,2,3],"u_name":"leader_15483"},{"key":"15483//907","ally_no":375,"profile":0,"skin":0,"since":6,"leader":0,"sq_list":[4],"u_name":"leader_15483"}],"corp_d":[]}]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4643)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4908)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

#### 전투 이펙트 패스 : 1 -> 1 : 4134
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3714)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 1 -> 103 : 200408 200408
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3177)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

전투 시작 세팅 : RefreshWithPushFleetBattle : 15483//906 전투 시작 시간 : 1778568062.32771
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3182)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[BATTLE_HP_LOG] left_attacker SetHP 77.60519 308573/397619
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7773)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=413 hp=0.7760519 (308573/397619) is_rally=False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7783)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=1101 hp=0.7464 (447840/600000) is_rally=True
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7793)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

find
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7819)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

#### 전투 이펙트 패스 : 1 -> 2 : 300206
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3714)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
TroopLOD:StartEffectCorutine (System.Collections.Generic.List`1<mk.combatSocket.CS_CombatMessage/Message>,UnityEngine.GameObject) (at Assets/World/Scripts/TroopLOD.cs:3441)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7927)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Earth_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7966)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Air_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7977)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7743)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

#### 전투 이펙트 패스 : 1 -> 1 : 4134
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3714)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

particle Load : Succeeded - Skill_409_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_204_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_204_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_1101_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

particle Load : Succeeded - Skill_409_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationBase`1/<>c__DisplayClass60_0<UnityEngine.GameObject>:<add_CompletedTypeless>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.Util.DelayedActionManager:LateUpdate () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelayedActionManager.cs:162)

Sound Play EFFECT : Effect_409_Skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1254)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Play EFFECT : Effect_Chanyu_Skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1254)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Play EFFECT : Effect_Chanyu_Skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1254)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Play EFFECT : Effect_Chanyu_Skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1254)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### before escape {"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":["{\"no\":4650566,\"id\":15519,\"ty\":1,\"t\":14,\"p\":3,\"sq\":[{\"key\":\"15483//906\",\"id\":1,\"u\":15483,\"h\":413,\"c\":101,\"clv\":300,\"crk\":23,\"gu\":0,\"r\":492,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":115068,\"i\":133272,\"j\":18167,\"d\":0,\"w\":37}],\"org_total\":133272,\"total\":0,\"b\":[{\"i\":210,\"b\":1,\"v\":3000,\"t\":1},{\"i\":238,\"b\":1,\"v\":6,\"t\":0},{\"i\":215,\"b\":1,\"v\":1000,\"t\":5},{\"i\":210,\"b\":1,\"v\":1000,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":238,\"b\":1,\"v\":6,\"t\":1}]},{\"key\":\"15483//906\",\"id\":2,\"u\":15483,\"h\":409,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":106038,\"i\":128336,\"j\":22256,\"d\":0,\"w\":42}],\"org_total\":128336,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":5},{\"i\":210,\"b\":1,\"v\":1000,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5}]},{\"key\":\"15483//906\",\"id\":3,\"u\":15483,\"h\":204,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":70113,\"i\":98259,\"j\":28097,\"d\":0,\"w\":49}],\"org_total\":98259,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":5},{\"i\":210,\"b\":1,\"v\":1000,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5}]},{\"key\":\"35\",\"id\":101,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":106,\"n\":76558,\"i\":100000,\"j\":23442,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":102,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":103,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":104,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":306,\"n\":9227,\"i\":100000,\"j\":90773,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-2400,\"t\":2}]},{\"key\":\"35\",\"id\":105,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":106,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":200,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"15483//907\",\"id\":4,\"u\":15483,\"h\":406,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":800,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":11979,\"i\":37752,\"j\":25722,\"d\":0,\"w\":51}],\"org_total\":37752,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5},{\"i\":215,\"b\":2,\"v\":-250,\"t\":5}]}],\"sq_gr\":[{\"id\":2,\"x\":6100,\"y\":2600,\"tg\":103,\"sa\":1,\"sm\":0,\"sqs\":[1,2,3,4]},{\"id\":101,\"x\":6899,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[101]},{\"id\":102,\"x\":6899,\"y\":7400,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[102,103]},{\"id\":103,\"x\":6899,\"y\":2600,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[104]},{\"id\":104,\"x\":7699,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[105,106]}],\"m\":[{\"a\":1,\"d\":2,\"t\":6,\"p\":[300206,null,1,23852,6,1]},{\"a\":1,\"d\":1,\"t\":5,\"p\":[4134,413405,5,20]},{\"a\":2,\"d\":103,\"t\":3,\"p\":[4091,409105,2,6744,85269338]},{\"a\":2,\"d\":103,\"t\":1,\"p\":[2553,50765828.6]},{\"a\":101,\"d\":2,\"t\":1,\"p\":[951,30286650]},{\"a\":102,\"d\":2,\"t\":1,\"p\":[2044,65045110]},{\"a\":103,\"d\":2,\"t\":1,\"p\":[306,9767778]},{\"a\":104,\"d\":2,\"t\":1,\"p\":[2074,65986560]}],\"wa\":[0,0],\"leader\":[\"15483//906\",\"0\"],\"sp_cool\":[0,0],\"corp_a\":[{\"key\":\"15483//906\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":1,\"leader\":1,\"sq_list\":[1,2,3],\"u_name\":\"leader_15483\"},{\"key\":\"15483//907\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":6,\"leader\":0,\"sq_list\":[4],\"u_name\":\"leader_15483\"}],\"corp_d\":[]}"]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

#### fleet_battle_msg
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4642)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

{"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":[{"no":4650566,"id":15519,"ty":1,"t":14,"p":3,"sq":[{"key":"15483//906","id":1,"u":15483,"h":413,"c":101,"clv":300,"crk":23,"gu":0,"r":492,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":115068,"i":133272,"j":18167,"d":0,"w":37}],"org_total":133272,"total":0,"b":[{"i":210,"b":1,"v":3000,"t":1},{"i":238,"b":1,"v":6,"t":0},{"i":215,"b":1,"v":1000,"t":5},{"i":210,"b":1,"v":1000,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":238,"b":1,"v":6,"t":1}]},{"key":"15483//906","id":2,"u":15483,"h":409,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":106038,"i":128336,"j":22256,"d":0,"w":42}],"org_total":128336,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":5},{"i":210,"b":1,"v":1000,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5}]},{"key":"15483//906","id":3,"u":15483,"h":204,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":70113,"i":98259,"j":28097,"d":0,"w":49}],"org_total":98259,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":5},{"i":210,"b":1,"v":1000,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5}]},{"key":"35","id":101,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":106,"n":76558,"i":100000,"j":23442,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":102,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":103,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":104,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":306,"n":9227,"i":100000,"j":90773,"d":0,"w":0}],"org_total":100000,"total":0,"b":[{"i":215,"b":2,"v":-2400,"t":2}]},{"key":"35","id":105,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":106,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":200,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"15483//907","id":4,"u":15483,"h":406,"c":0,"clv":0,"crk":0,"gu":0,"r":800,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":11979,"i":37752,"j":25722,"d":0,"w":51}],"org_total":37752,"total":0,"b":[{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5},{"i":215,"b":2,"v":-250,"t":5}]}],"sq_gr":[{"id":2,"x":6100,"y":2600,"tg":103,"sa":1,"sm":0,"sqs":[1,2,3,4]},{"id":101,"x":6899,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[101]},{"id":102,"x":6899,"y":7400,"tg":2,"sa":1,"sm":0,"sqs":[102,103]},{"id":103,"x":6899,"y":2600,"tg":2,"sa":1,"sm":0,"sqs":[104]},{"id":104,"x":7699,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[105,106]}],"m":[{"a":1,"d":2,"t":6,"p":[300206,0,1,23852,6,1]},{"a":1,"d":1,"t":5,"p":[4134,413405,5,20]},{"a":2,"d":103,"t":3,"p":[4091,409105,2,6744,85269338]},{"a":2,"d":103,"t":1,"p":[2553,50765828.6]},{"a":101,"d":2,"t":1,"p":[951,30286650]},{"a":102,"d":2,"t":1,"p":[2044,65045110]},{"a":103,"d":2,"t":1,"p":[306,9767778]},{"a":104,"d":2,"t":1,"p":[2074,65986560]}],"wa":[0,0],"leader":["15483//906","0"],"sp_cool":[0,0],"corp_a":[{"key":"15483//906","ally_no":375,"profile":0,"skin":0,"since":1,"leader":1,"sq_list":[1,2,3],"u_name":"leader_15483"},{"key":"15483//907","ally_no":375,"profile":0,"skin":0,"since":6,"leader":0,"sq_list":[4],"u_name":"leader_15483"}],"corp_d":[]}]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4643)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4908)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 2 -> 103 : 4091 409105
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 2 -> 103 : 4091 409115
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 3 -> 2 : 2041 204101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 3 -> 2 : 2041 204111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 101 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 101 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 102 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 102 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 103 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 103 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

<color=#F09F27>AP 증가 => 1262 (40)(1/33)</color>
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
ApManager:LateUpdate () (at Assets/World/Scripts/UI/ApManager.cs:123)

[Tuto] 1 component:TOWN_101 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:12 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:10 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:6 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:8 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:11 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:13 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:7 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:5 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:14 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

[Tuto] 1 component:TOWN_101 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:12 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:10 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:2 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:1 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:WORLD_102 index:3 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:6 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:8 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:11 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:13 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:7 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:5 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

[Tuto] 1 component:TOWN_101 index:14 type:UITOOLKIT reference:0
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TutorialManager/<SetComponent_Call>d__91:MoveNext () (at Assets/UI/Tutorial/TutorialManager.cs:812)
UnityEngine.GUIUtility:ProcessEvent (int,intptr,bool&)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 104 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 104 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 105 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 105 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3177)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

전투 시작 세팅 : RefreshWithPushFleetBattle : 15483//906 전투 시작 시간 : 1778568063.31312
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:RefreshWithPushFleetBattle (MKGameData.Socket_Action_DTO,bool) (at Assets/World/Scripts/WorldManager.cs:3182)
WorldManager/<>c__DisplayClass327_0:<ProcessCombatMsg>b__12 (MKGameData.Socket_Action_DTO) (at Assets/World/Scripts/WorldManager.cs:7315)
System.Collections.Generic.List`1<MKGameData.Socket_Action_DTO>:ForEach (System.Action`1<MKGameData.Socket_Action_DTO>)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7302)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[BATTLE_HP_LOG] left_attacker SetHP 76.2534 303198/397619
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7773)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=413 hp=0.762534 (303198/397619) is_rally=False
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7783)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

SetTroopPanel hero_id=1101 hp=0.730905 (438543/600000) is_rally=True
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SetTroopPanel (UnityEngine.GameObject,long,long,long,long,WorldTroopPanel/POS,bool,bool,long) (at Assets/World/Scripts/WorldManager.cs:7006)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7793)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

find
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7819)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

#### 전투 이펙트 패스 : 1 -> 2 : 300206
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3714)
UnityEngine.MonoBehaviour:StartCoroutine (System.Collections.IEnumerator)
TroopLOD:StartEffectCorutine (System.Collections.Generic.List`1<mk.combatSocket.CS_CombatMessage/Message>,UnityEngine.GameObject) (at Assets/World/Scripts/TroopLOD.cs:3441)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7927)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Earth_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7966)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Play BATTLE_EFFECT : Effect_Air_Impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1266)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
WorldManager:SkillNAttack (TroopLOD,UnityEngine.GameObject,mk.combatSocket.CS_CombatMessage) (at Assets/World/Scripts/WorldManager.cs:7977)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7709)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
WorldManager:ProcessCombatMsg () (at Assets/World/Scripts/WorldManager.cs:7743)
WorldManager:Update () (at Assets/World/Scripts/WorldManager.cs:859)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 : 106 -> 2 : 11011 1101101
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

#### 전투 이펙트 : 106 -> 2 : 11011 1101111
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3710)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

particle Load : Succeeded - Skill_409_emitter
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

particle Load : Succeeded - Skill_409_impact
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
AddressablesManagerInstantiateSync:AddressablesLoadSucceededProc (string,UnityEngine.GameObject) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:590)
AddressablesManagerInstantiateAsync/<>c__DisplayClass0_0:<PopAsync>b__0 (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at Assets/Scripts/Addressables/AddressablesLoadManager.cs:833)
DelegateList`1<UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>>:Invoke (UnityEngine.ResourceManagement.AsyncOperations.AsyncOperationHandle`1<UnityEngine.GameObject>) (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/DelegateList.cs:75)
UnityEngine.ResourceManagement.ResourceManager:Update (single)
MonoBehaviourCallbackHooks:Update () (at ./Library/PackageCache/com.unity.addressables@45e9abf44299/Runtime/ResourceManager/Util/MonoBehaviourCallbackHooks.cs:29)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Play EFFECT : Effect_409_Skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager:PlayAudioProc (MKSpeakerObject,MkAudioType,string,single,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>) (at Assets/Scripts/Sound/MKSoundManager.cs:1254)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1106)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### before escape {"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":["{\"no\":4650566,\"id\":15519,\"ty\":1,\"t\":15,\"p\":3,\"sq\":[{\"key\":\"15483//906\",\"id\":1,\"u\":15483,\"h\":413,\"c\":101,\"clv\":300,\"crk\":23,\"gu\":0,\"r\":618,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":114041,\"i\":133272,\"j\":19192,\"d\":0,\"w\":39}],\"org_total\":133272,\"total\":0,\"b\":[{\"i\":210,\"b\":1,\"v\":3000,\"t\":0},{\"i\":215,\"b\":1,\"v\":1000,\"t\":4},{\"i\":210,\"b\":1,\"v\":1000,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":238,\"b\":1,\"v\":6,\"t\":0},{\"i\":238,\"b\":1,\"v\":6,\"t\":1}]},{\"key\":\"15483//906\",\"id\":2,\"u\":15483,\"h\":409,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":105030,\"i\":128336,\"j\":23262,\"d\":0,\"w\":44}],\"org_total\":128336,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":4},{\"i\":210,\"b\":1,\"v\":1000,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4}]},{\"key\":\"15483//906\",\"id\":3,\"u\":15483,\"h\":204,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":68826,\"i\":98259,\"j\":29382,\"d\":0,\"w\":51}],\"org_total\":98259,\"total\":0,\"b\":[{\"i\":215,\"b\":1,\"v\":1000,\"t\":4},{\"i\":210,\"b\":1,\"v\":1000,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4}]},{\"key\":\"35\",\"id\":101,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":106,\"n\":76558,\"i\":100000,\"j\":23442,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":102,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":103,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":88279,\"i\":100000,\"j\":11721,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":104,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":306,\"n\":1434,\"i\":100000,\"j\":98566,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-2400,\"t\":1}]},{\"key\":\"35\",\"id\":105,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"35\",\"id\":106,\"u\":0,\"h\":1101,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":300,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":406,\"n\":88100,\"i\":100000,\"j\":11900,\"d\":0,\"w\":0}],\"org_total\":100000,\"total\":0,\"b\":[]},{\"key\":\"15483//907\",\"id\":4,\"u\":15483,\"h\":406,\"c\":0,\"clv\":0,\"crk\":0,\"gu\":0,\"r\":900,\"sc\":0,\"sm\":0,\"st\":0,\"t\":[{\"id\":206,\"n\":9997,\"i\":37752,\"j\":27699,\"d\":0,\"w\":56}],\"org_total\":37752,\"total\":0,\"b\":[{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4},{\"i\":215,\"b\":2,\"v\":-250,\"t\":4}]}],\"sq_gr\":[{\"id\":2,\"x\":6100,\"y\":2600,\"tg\":103,\"sa\":1,\"sm\":0,\"sqs\":[1,2,3,4]},{\"id\":101,\"x\":6899,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[101]},{\"id\":102,\"x\":6899,\"y\":7400,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[102,103]},{\"id\":103,\"x\":6899,\"y\":2600,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[104]},{\"id\":104,\"x\":7699,\"y\":5000,\"tg\":2,\"sa\":1,\"sm\":0,\"sqs\":[105,106]}],\"m\":[{\"a\":1,\"d\":2,\"t\":6,\"p\":[300206,null,1,23852,6,1]},{\"a\":1,\"d\":1,\"t\":5,\"p\":[4134,413405,5,20]},{\"a\":2,\"d\":103,\"t\":3,\"p\":[4091,409105,2,6711,84850271]},{\"a\":2,\"d\":103,\"t\":1,\"p\":[1082,50209172.1]},{\"a\":101,\"d\":2,\"t\":1,\"p\":[977,30286650]},{\"a\":102,\"d\":2,\"t\":1,\"p\":[2101,65045110]},{\"a\":103,\"d\":2,\"t\":1,\"p\":[94,2955958]},{\"a\":104,\"d\":2,\"t\":1,\"p\":[2132,65986560]}],\"wa\":[0,0],\"leader\":[\"15483//906\",\"0\"],\"sp_cool\":[0,0],\"corp_a\":[{\"key\":\"15483//906\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":1,\"leader\":1,\"sq_list\":[1,2,3],\"u_name\":\"leader_15483\"},{\"key\":\"15483//907\",\"ally_no\":375,\"profile\":0,\"skin\":0,\"since\":6,\"leader\":0,\"sq_list\":[4],\"u_name\":\"leader_15483\"}],\"corp_d\":[]}"]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:PreprocessResPush (string,mk.socket.Res_PushType&) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4267)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4122)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

#### fleet_battle_msg
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4642)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

{"push_type":"fleet_battle_msg","msg":{"idx":0,"cm":[{"no":4650566,"id":15519,"ty":1,"t":15,"p":3,"sq":[{"key":"15483//906","id":1,"u":15483,"h":413,"c":101,"clv":300,"crk":23,"gu":0,"r":618,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":114041,"i":133272,"j":19192,"d":0,"w":39}],"org_total":133272,"total":0,"b":[{"i":210,"b":1,"v":3000,"t":0},{"i":215,"b":1,"v":1000,"t":4},{"i":210,"b":1,"v":1000,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":238,"b":1,"v":6,"t":0},{"i":238,"b":1,"v":6,"t":1}]},{"key":"15483//906","id":2,"u":15483,"h":409,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":105030,"i":128336,"j":23262,"d":0,"w":44}],"org_total":128336,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":4},{"i":210,"b":1,"v":1000,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4}]},{"key":"15483//906","id":3,"u":15483,"h":204,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":68826,"i":98259,"j":29382,"d":0,"w":51}],"org_total":98259,"total":0,"b":[{"i":215,"b":1,"v":1000,"t":4},{"i":210,"b":1,"v":1000,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4}]},{"key":"35","id":101,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":106,"n":76558,"i":100000,"j":23442,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":102,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":103,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":88279,"i":100000,"j":11721,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":104,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":306,"n":1434,"i":100000,"j":98566,"d":0,"w":0}],"org_total":100000,"total":0,"b":[{"i":215,"b":2,"v":-2400,"t":1}]},{"key":"35","id":105,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"35","id":106,"u":0,"h":1101,"c":0,"clv":0,"crk":0,"gu":0,"r":300,"sc":0,"sm":0,"st":0,"t":[{"id":406,"n":88100,"i":100000,"j":11900,"d":0,"w":0}],"org_total":100000,"total":0,"b":[]},{"key":"15483//907","id":4,"u":15483,"h":406,"c":0,"clv":0,"crk":0,"gu":0,"r":900,"sc":0,"sm":0,"st":0,"t":[{"id":206,"n":9997,"i":37752,"j":27699,"d":0,"w":56}],"org_total":37752,"total":0,"b":[{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4},{"i":215,"b":2,"v":-250,"t":4}]}],"sq_gr":[{"id":2,"x":6100,"y":2600,"tg":103,"sa":1,"sm":0,"sqs":[1,2,3,4]},{"id":101,"x":6899,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[101]},{"id":102,"x":6899,"y":7400,"tg":2,"sa":1,"sm":0,"sqs":[102,103]},{"id":103,"x":6899,"y":2600,"tg":2,"sa":1,"sm":0,"sqs":[104]},{"id":104,"x":7699,"y":5000,"tg":2,"sa":1,"sm":0,"sqs":[105,106]}],"m":[{"a":1,"d":2,"t":6,"p":[300206,0,1,23852,6,1]},{"a":1,"d":1,"t":5,"p":[4134,413405,5,20]},{"a":2,"d":103,"t":3,"p":[4091,409105,2,6711,84850271]},{"a":2,"d":103,"t":1,"p":[1082,50209172.1]},{"a":101,"d":2,"t":1,"p":[977,30286650]},{"a":102,"d":2,"t":1,"p":[2101,65045110]},{"a":103,"d":2,"t":1,"p":[94,2955958]},{"a":104,"d":2,"t":1,"p":[2132,65986560]}],"wa":[0,0],"leader":["15483//906","0"],"sp_cool":[0,0],"corp_a":[{"key":"15483//906","ally_no":375,"profile":0,"skin":0,"since":1,"leader":1,"sq_list":[1,2,3],"u_name":"leader_15483"},{"key":"15483//907","ally_no":375,"profile":0,"skin":0,"since":6,"leader":0,"sq_list":[4],"u_name":"leader_15483"}],"corp_d":[]}]},"pt":3101}
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4643)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

[싱글] : 15483//907
[싱글] : 15483//906

UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
NetworkTroop:UpdateisMyJoinedRally () (at Assets/Network/Scripts/NetworkTroop.cs:91)
MainHudUi:RefreshTroop () (at Assets/Common Document/Scripts/MainHudUi.cs:4804)
mk.socket.MKSocket:HandleFleetBattleMsg (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4908)
mk.socket.MKSocket:res_push (string) (at Assets/World/Scripts/NetworkData/MKSocket.cs:4190)
BestHTTP.SocketIO3.Socket/<>c__DisplayClass38_0`1<string>:<On>b__0 (object[]) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:266)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (string,object[]) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:95)
BestHTTP.SocketIO3.Events.TypedEventTable:Call (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Events/TypedEventTable.cs:116)
BestHTTP.SocketIO3.Socket:BestHTTP.SocketIO3.ISocket.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Socket.cs:454)
BestHTTP.SocketIO3.SocketManager:BestHTTP.SocketIO3.IManager.OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/SocketManager.cs:619)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnPacket (BestHTTP.SocketIO3.IncomingPacket) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:353)
BestHTTP.SocketIO3.Transports.WebSocketTransport:OnMessage (BestHTTP.WebSocket.WebSocket,string) (at Assets/Best HTTP/Source/SocketIO.3/Transports/WebSocketTransport.cs:166)
BestHTTP.WebSocket.OverHTTP1:<OnInternalRequestUpgraded>b__16_0 (BestHTTP.WebSocket.WebSocketResponse,string) (at Assets/Best HTTP/Source/WebSocket/Implementations/OverHTTP1.cs:296)
BestHTTP.WebSocket.WebSocketResponse:BestHTTP.Core.IProtocol.HandleEvents () (at Assets/Best HTTP/Source/WebSocket/WebSocketResponse.cs:556)
BestHTTP.Core.ProtocolEventHelper:ProcessQueue () (at Assets/Best HTTP/Source/Core/ProtocolEvents.cs:75)
BestHTTP.HTTPManager:OnUpdate () (at Assets/Best HTTP/Source/HTTPManager.cs:428)
BestHTTP.HTTPUpdateDelegator:CallOnUpdate () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:286)
BestHTTP.HTTPUpdateDelegator:Update () (at Assets/Best HTTP/Source/HTTPUpdateDelegator.cs:276)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

#### 전투 이펙트 패스 : 1 -> 1 : 4134
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
TroopLOD/<CreateEffectCoroutine>d__189:MoveNext () (at Assets/World/Scripts/TroopLOD.cs:3714)
UnityEngine.SetupCoroutine:InvokeMoveNext (System.Collections.IEnumerator,intptr)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)

Sound Load Fail - Sound Clip : Effect_204_skill
UnityEngine.Debug:Log (object)
Debug:Log (object) (at Assets/Plugins/Debug.cs:24)
MKSoundManager/<>c__DisplayClass76_0:<PlayAudio>b__0 (UnityEngine.AudioClip) (at Assets/Scripts/Sound/MKSoundManager.cs:1116)
MKSoundManager:GetAudioClip (string,CallbackT`1<UnityEngine.AudioClip>) (at Assets/Scripts/Sound/MKSoundManager.cs:994)
MKSoundManager:PlayAudio (MkAudioType,string,bool,single,single,UnityEngine.GameObject,MkAudio3DPositionType,bool,CallbackT`1<MKSpeakerObject>,CallbackT`1<MKSpeakerObject>,single,bool) (at Assets/Scripts/Sound/MKSoundManager.cs:1111)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:SetPlay () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:279)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:UpdateState () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:158)
MKObjectSoundSystemT`1<UnityEngine.ParticleSystem>:Update () (at Assets/Scripts/Sound/MKObjectSoundSystemT.cs:97)


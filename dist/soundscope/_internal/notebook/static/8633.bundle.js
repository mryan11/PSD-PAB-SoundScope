"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8633],{98633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i,r=n(3053),a=n(12982),o=n(31536),d=n(68239),s=n(70856),c=n(24758),l=n(5787),g=n(36768),u=n(66853),p=n(71677);!function(e){e.open="settingeditor:open",e.openJSON="settingeditor:open-json",e.revert="settingeditor:revert",e.save="settingeditor:save"}(i||(i={}));const m={id:"@jupyterlab/settingeditor-extension:form-ui",description:"Adds the interactive settings editor and provides its tracker.",requires:[g.ISettingRegistry,u.IStateDB,p.ITranslator,d.IFormRendererRegistry,r.ILabStatus],optional:[r.ILayoutRestorer,a.ICommandPalette,c.g,l.IPluginManager],autoStart:!0,provides:c.O,activate:function(e,t,r,o,s,c,l,g,u,p){const v=o.load("jupyterlab"),{commands:y,shell:S}=e,b="setting-editor",I=new a.WidgetTracker({namespace:b});return l&&l.restore(I,{command:i.open,args:e=>({}),name:e=>b}),y.addCommand(i.open,{execute:async e=>{var l;"ui"===e.settingEditorType?y.execute(i.open,{query:null!==(l=e.query)&&void 0!==l?l:""}):"json"===e.settingEditorType?y.execute(i.openJSON):t.load(m.id).then((l=>{var g;"json"===l.get("settingEditorType").composite?y.execute(i.openJSON):(async e=>{if(I.currentWidget&&!I.currentWidget.isDisposed)return I.currentWidget.isAttached||S.add(I.currentWidget,"main",{type:"Settings"}),void S.activateById(I.currentWidget.id);const l=m.id,{SettingsEditor:g}=await n.e(8671).then(n.t.bind(n,68671,23)),h=new a.MainAreaWidget({content:new g({editorRegistry:s,key:l,registry:t,state:r,commands:y,toSkip:["@jupyterlab/application-extension:context-menu","@jupyterlab/mainmenu-extension:plugin"],translator:o,status:c,query:e.query})});h.toolbar.addItem("spacer",d.Toolbar.createSpacerItem()),p&&h.toolbar.addItem("open-plugin-manager",new d.ToolbarButton({onClick:async()=>{await p.open()},icon:d.launchIcon,label:v.__("Plugin Manager")})),u&&h.toolbar.addItem("open-json-editor",new d.CommandToolbarButton({commands:y,id:i.openJSON,icon:d.launchIcon,label:v.__("JSON Settings Editor")})),h.id=b,h.title.icon=d.settingsIcon,h.title.label=v.__("Settings"),h.title.closable=!0,I.add(h),S.add(h,"main",{type:"Settings"})})({query:null!==(g=e.query)&&void 0!==g?g:""})}))},label:e=>e.label?e.label:v.__("Settings Editor")}),g&&g.addItem({category:v.__("Settings"),command:i.open,args:{settingEditorType:"ui"}}),I}},v={id:"@jupyterlab/settingeditor-extension:plugin",description:"Adds the JSON settings editor and provides its tracker.",requires:[g.ISettingRegistry,o.IEditorServices,u.IStateDB,s.IRenderMimeRegistry,r.ILabStatus,p.ITranslator],optional:[r.ILayoutRestorer,a.ICommandPalette],autoStart:!0,provides:c.g,activate:function(e,t,r,o,s,c,l,g,u){const p=l.load("jupyterlab"),{commands:v,shell:y}=e,S="json-setting-editor",b=r.factoryService.newInlineEditor,I=new a.WidgetTracker({namespace:S});return g&&g.restore(I,{command:i.openJSON,args:e=>({}),name:e=>S}),v.addCommand(i.openJSON,{execute:async()=>{if(I.currentWidget&&!I.currentWidget.isDisposed)return I.currentWidget.isAttached||y.add(I.currentWidget,"main",{type:"Advanced Settings"}),void y.activateById(I.currentWidget.id);const r=m.id,g=e.restored,{JsonSettingEditor:u}=await n.e(8671).then(n.t.bind(n,68671,23)),h=new u({commands:{registry:v,revert:i.revert,save:i.save},editorFactory:b,key:r,registry:t,rendermime:s,state:o,translator:l,when:g});let w=null;h.commandsChanged.connect(((e,t)=>{t.forEach((e=>{v.notifyCommandChanged(e)})),h.canSaveRaw?w||(w=c.setDirty()):w&&(w.dispose(),w=null),h.disposed.connect((()=>{w&&w.dispose()}))}));const _=new a.MainAreaWidget({content:h});_.id=S,_.title.icon=d.settingsIcon,_.title.label=p.__("Advanced Settings Editor"),_.title.closable=!0,I.add(_),y.add(_,"main",{type:"Advanced Settings"})},label:p.__("Advanced Settings Editor")}),u&&u.addItem({category:p.__("Settings"),command:i.openJSON}),v.addCommand(i.revert,{execute:()=>{var e;null===(e=I.currentWidget)||void 0===e||e.content.revert()},icon:d.undoIcon,label:p.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),v.addCommand(i.save,{execute:()=>{var e;return null===(e=I.currentWidget)||void 0===e?void 0:e.content.save()},icon:d.saveIcon,label:p.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),I}},y=[m,v]},24758:(e,t,n)=>{n.d(t,{O:()=>r,g:()=>a});var i=n(20998);const r=new i.Token("@jupyterlab/settingeditor:ISettingEditorTracker","A widget tracker for the interactive setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application."),a=new i.Token("@jupyterlab/settingeditor:IJSONSettingEditorTracker","A widget tracker for the JSON setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application.")}}]);
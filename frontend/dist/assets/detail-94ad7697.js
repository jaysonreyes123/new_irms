import{C as T}from"./index-59a3d1fa.js";import{B,M as L}from"./index-97d0c7de.js";import{u as ce}from"./incident-9ee9fcc1.js";import{q as F,r as R,x as J,p as P,v as ue,m as pe,F as S,o as oe,z as se,B as _e,_ as w,a as b,b as n,c as r,d as g,f as o,w as k,t as a,g as Z,E as h,n as C,C as W,S as me,U as fe,h as ne,R as ve}from"./index-1d3dd1f9.js";import{f as ge,e as be,j as le,d as ke,u as H,i as re,c as ye,r as Se,b as he,p as xe,a as Ie,h as $e,g as Me,k as Te,l as we,B as Pe}from"./user-dd06187b.js";import{b as Ge,B as Be}from"./index-5fa3f16f.js";import{I as Le}from"./index-dd1ce917.js";import{a as Ue,f as ie,o as U,V as K,w as Re,t as ae,R as ee,b as $,g as D,M,u as Ce,c as De}from"./micro-task-890db824.js";import"./mapbox-gl-79a43217.js";import"./index-a722a3a4.js";import"./index-b562c514.js";let Ae=F({props:{onFocus:{type:Function,required:!0}},setup(s){let t=R(!0);return()=>t.value?J(ie,{as:"button",type:"button",features:Ue.Focusable,onFocus(i){i.preventDefault();let d,e=50;function _(){var p;if(e--<=0){d&&cancelAnimationFrame(d);return}if((p=s.onFocus)!=null&&p.call(s)){t.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(_)}d=requestAnimationFrame(_)}}):null}}),de=Symbol("TabsContext");function Q(s){let t=_e(de,null);if(t===null){let i=new Error(`<${s} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Q),i}return t}let Fe=F({name:"TabGroup",emits:{change:s=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(s,{slots:t,attrs:i,emit:d}){let e=R(null),_=R([]),p=R([]),m=P(()=>s.selectedIndex!==null),c=P(()=>m.value?s.selectedIndex:e.value),f={selectedIndex:e,orientation:P(()=>s.vertical?"vertical":"horizontal"),activation:P(()=>s.manual?"manual":"auto"),tabs:_,panels:p,setSelectedIndex(l){c.value!==l&&d("change",l),m.value||(e.value=l)},registerTab(l){_.value.includes(l)||_.value.push(l)},unregisterTab(l){let u=_.value.indexOf(l);u!==-1&&_.value.splice(u,1)},registerPanel(l){p.value.includes(l)||p.value.push(l)},unregisterPanel(l){let u=p.value.indexOf(l);u!==-1&&p.value.splice(u,1)}};return ue(de,f),pe(()=>{var l;if(f.tabs.value.length<=0||s.selectedIndex===null&&e.value!==null)return;let u=f.tabs.value.map(x=>U(x)).filter(Boolean),y=u.filter(x=>!x.hasAttribute("disabled")),G=(l=s.selectedIndex)!=null?l:s.defaultIndex;if(G<0)e.value=u.indexOf(y[0]);else if(G>f.tabs.value.length)e.value=u.indexOf(y[y.length-1]);else{let x=u.slice(0,G),v=[...u.slice(G),...x].find(I=>y.includes(I));if(!v)return;e.value=u.indexOf(v)}}),()=>{let l={selectedIndex:e.value};return J(S,[_.value.length<=0&&J(Ae,{onFocus:()=>{for(let u of _.value){let y=U(u);if((y==null?void 0:y.tabIndex)===0)return y.focus(),!0}return!1}}),K({theirProps:{...i,...Re(s,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:t,attrs:i,name:"TabGroup"})])}}}),Ne=F({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(s,{attrs:t,slots:i}){let d=Q("TabList");return()=>{let e={selectedIndex:d.selectedIndex.value},_={role:"tablist","aria-orientation":d.orientation.value};return K({ourProps:_,theirProps:s,slot:e,attrs:t,slots:i,name:"TabList"})}}}),Oe=F({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(s,{attrs:t,slots:i,expose:d}){let e=Q("Tab"),_=`headlessui-tabs-tab-${ae()}`,p=R(null);d({el:p,$el:p}),oe(()=>e.registerTab(p)),se(()=>e.unregisterTab(p));let m=P(()=>e.tabs.value.indexOf(p)),c=P(()=>m.value===e.selectedIndex.value);function f(v){let I=e.tabs.value.map(X=>U(X)).filter(Boolean);if(v.key===$.Space||v.key===$.Enter){v.preventDefault(),v.stopPropagation(),e.setSelectedIndex(m.value);return}switch(v.key){case $.Home:case $.PageUp:return v.preventDefault(),v.stopPropagation(),D(I,M.First);case $.End:case $.PageDown:return v.preventDefault(),v.stopPropagation(),D(I,M.Last)}if(Ce(e.orientation.value,{vertical(){if(v.key===$.ArrowUp)return D(I,M.Previous|M.WrapAround);if(v.key===$.ArrowDown)return D(I,M.Next|M.WrapAround)},horizontal(){if(v.key===$.ArrowLeft)return D(I,M.Previous|M.WrapAround);if(v.key===$.ArrowRight)return D(I,M.Next|M.WrapAround)}}))return v.preventDefault()}function l(){var v;(v=U(p))==null||v.focus()}let u=R(!1);function y(){var v;u.value||(u.value=!0,!s.disabled&&((v=U(p))==null||v.focus(),e.setSelectedIndex(m.value),De(()=>{u.value=!1})))}function G(v){v.preventDefault()}let x=Ge(P(()=>({as:s.as,type:t.type})),p);return()=>{var v;let I={selected:c.value},X={ref:p,onKeydown:f,onFocus:e.activation.value==="manual"?l:y,onMousedown:G,onClick:y,id:_,role:"tab",type:x.value,"aria-controls":(v=U(e.panels.value[m.value]))==null?void 0:v.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:s.disabled?!0:void 0};return K({ourProps:X,theirProps:s,slot:I,attrs:t,slots:i,name:"Tab"})}}}),qe=F({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(s,{slots:t,attrs:i}){let d=Q("TabPanels");return()=>{let e={selectedIndex:d.selectedIndex.value};return K({theirProps:s,ourProps:{},slot:e,attrs:i,slots:t,name:"TabPanels"})}}}),Ee=F({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(s,{attrs:t,slots:i,expose:d}){let e=Q("TabPanel"),_=`headlessui-tabs-panel-${ae()}`,p=R(null);d({el:p,$el:p}),oe(()=>e.registerPanel(p)),se(()=>e.unregisterPanel(p));let m=P(()=>e.panels.value.indexOf(p)),c=P(()=>m.value===e.selectedIndex.value);return()=>{var f;let l={selected:c.value},u={ref:p,id:_,role:"tabpanel","aria-labelledby":(f=U(e.tabs.value[m.value]))==null?void 0:f.id,tabIndex:c.value?0:-1};return!c.value&&s.unmount?J(ie,{as:"span",...u}):K({ourProps:u,theirProps:s,slot:l,attrs:t,slots:i,features:ee.Static|ee.RenderStrategy,visible:c.value,name:"TabPanel"})}}});const N=ce(),je={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;N.id=s,N.getItem()},methods:{find_picklist_value(s,t){var i="";if(N[s]!==void 0){const d=N[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{IncidentStore:N}}},ze={class:"lg:grid lg:grid-cols-2 gap-12"},Ve={class:"fromGroup relative"},We={class:"fromGroup relative"},He={class:"lg:grid lg:grid-cols-2 gap-12"},Ke={class:"fromGroup relative"},Qe={key:0},Je={class:"fromGroup relative"},Xe={class:"lg:grid lg:grid-cols-2 gap-12"},Ye={class:"fromGroup relative"},Ze={class:"fromGroup relative"},et={class:"lg:grid lg:grid-cols-1 gap-12"},tt={class:"fromGroup relative"},ot={class:"lg:grid lg:grid-cols-2 gap-12"},st={class:"fromGroup relative"},nt={class:"fromGroup relative"},lt={class:"fromGroup relative"},rt={class:"fromGroup relative"},it={class:"lg:grid lg:grid-cols-2 gap-12"},at={class:"fromGroup relative"},dt={class:"fromGroup relative"},ct={class:"lg:grid lg:grid-cols-1 gap-12"},ut={class:"fromGroup relative"},pt={class:"lg:grid lg:grid-cols-2 gap-12"},_t={class:"fromGroup relative"},mt={class:"fromGroup relative"},ft={class:"lg:grid lg:grid-cols-1 gap-12"},vt={class:"fromGroup relative"};function gt(s,t,i,d,e,_){const p=b("Loading"),m=b("Block"),c=b("Map");return n(),r("div",null,[g(p,{active:e.IncidentStore.loading,"onUpdate:active":t[0]||(t[0]=f=>e.IncidentStore.loading=f)},null,8,["active"]),o("div",null,[g(m,{blockname:"Incident Details"},{default:k(()=>[o("div",ze,[o("div",Ve,[t[1]||(t[1]=o("label",null,"Incident No",-1)),o("span",null,a(e.IncidentStore.form.incident_no),1)]),o("div",We,[t[2]||(t[2]=o("label",null,"Incident Type",-1)),o("span",null,a(_.find_picklist_value("incident_types_picklist",e.IncidentStore.form.incident_types_picklist)),1)])]),o("div",He,[o("div",Ke,[t[3]||(t[3]=o("label",null,"Time of Incident",-1)),e.IncidentStore.form.time_of_incident!=""?(n(),r("span",Qe,a(e.IncidentStore.form.time_of_incident),1)):Z("",!0)]),o("div",Je,[t[4]||(t[4]=o("label",null,"Date of Incident",-1)),o("span",null,a(e.IncidentStore.form.date_of_incident),1)])]),o("div",Xe,[o("div",Ye,[t[5]||(t[5]=o("label",null,"Incident Status",-1)),o("span",null,a(_.find_picklist_value("incident_statuses_picklist",e.IncidentStore.form.incident_statuses_picklist)),1)]),o("div",Ze,[t[6]||(t[6]=o("label",null,"Incident Priority",-1)),o("span",null,a(_.find_picklist_value("incident_priorities_picklist",e.IncidentStore.form.incident_priorities_picklist)),1)])]),o("div",et,[o("div",tt,[t[7]||(t[7]=o("label",{for:""},"Notes/Remarks",-1)),o("span",null,a(e.IncidentStore.form.remarks),1)])])]),_:1}),g(m,{blockname:"Location Details"},{default:k(()=>[o("div",ot,[o("div",null,[o("div",st,[t[8]||(t[8]=o("label",{for:""},"Location",-1)),o("span",null,a(e.IncidentStore.form.location),1)]),o("div",nt,[t[9]||(t[9]=o("label",{for:""},"Street name",-1)),o("span",null,a(e.IncidentStore.form.street_name),1)]),o("div",lt,[t[10]||(t[10]=o("label",{for:""},"Nearest landmark",-1)),o("span",null,a(e.IncidentStore.form.nearest_landmark),1)]),o("div",rt,[t[11]||(t[11]=o("label",{for:""},"Coordinates",-1)),o("span",null,a(e.IncidentStore.form.coordinates),1)])]),o("div",null,[g(c,{set_coordinates:e.IncidentStore.form.coordinates},null,8,["set_coordinates"])])])]),_:1}),g(m,{blockname:"Caller Details"},{default:k(()=>[o("div",it,[o("div",at,[t[12]||(t[12]=o("label",{for:""},"First Name",-1)),o("span",null,a(e.IncidentStore.form.caller_firstname),1)]),o("div",dt,[t[13]||(t[13]=o("label",{for:""},"Last Name",-1)),o("span",null,a(e.IncidentStore.form.caller_lastname),1)])]),o("div",ct,[o("div",ut,[t[14]||(t[14]=o("label",{for:""},"Contact no",-1)),o("span",null,a(e.IncidentStore.form.caller_contact),1)])])]),_:1}),g(m,{blockname:"Responder Details"},{default:k(()=>[o("div",pt,[o("div",_t,[t[15]||(t[15]=o("label",{for:""},"Responder Team",-1)),o("span",null,a(e.IncidentStore.form.response_team),1)]),o("div",mt,[t[16]||(t[16]=o("label",{for:""},"Assigned By",-1)),o("span",null,a(e.IncidentStore.form.assigned_by),1)])]),o("div",ft,[o("div",vt,[t[17]||(t[17]=o("label",{for:""},"Assigned Team",-1)),o("span",null,a(e.IncidentStore.form.assigned_team),1)])])]),_:1})])])}const bt=w(je,[["render",gt],["__scopeId","data-v-dcd1411e"]]);const O=ge(),kt={components:{Block:B,Map:L,Card:T},methods:{find_picklist_value(s,t){var i="";if(O[s]!==void 0){const d=O[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},mounted(){const s=this.$route.params.id;O.id=s,O.getItem()},data(){return{ResourcesStore:O}}},yt={class:"lg:grid lg:grid-cols-2 gap-12"},St={class:"fromGroup relative"},ht={class:"fromGroup relative"},xt={class:"lg:grid lg:grid-cols-2 gap-12"},It={class:"fromGroup relative"},$t={class:"fromGroup relative"},Mt={class:"lg:grid lg:grid-cols-2 gap-12"},Tt={class:"fromGroup relative"},wt={class:"fromGroup relative"},Pt={class:"lg:grid lg:grid-cols-2 gap-12"},Gt={class:"fromGroup relative"},Bt={class:"fromGroup relative"},Lt={class:"lg:grid lg:grid-cols-2 gap-12"},Ut={class:"fromGroup relative"},Rt={class:"fromGroup relative"},Ct={class:"lg:grid lg:grid-cols-2 gap-12"},Dt={class:"fromGroup relative"};function At(s,t,i,d,e,_){const p=b("Loading"),m=b("Block"),c=b("Map");return n(),r("div",null,[g(p,{active:e.ResourcesStore.loading,"onUpdate:active":t[0]||(t[0]=f=>e.ResourcesStore.loading=f)},null,8,["active"]),o("div",null,[g(m,{blockname:"Resources Information"},{default:k(()=>[o("div",yt,[o("div",St,[t[1]||(t[1]=o("label",{for:""},"Resource Name",-1)),o("span",null,a(e.ResourcesStore.form.resources_name),1)]),o("div",ht,[t[2]||(t[2]=o("label",{for:""},"Resource Type",-1)),o("span",null,a(_.find_picklist_value("resources_types_picklist",e.ResourcesStore.form.resources_types_picklist)),1)])]),o("div",xt,[o("div",It,[t[3]||(t[3]=o("label",{for:""},"Quantity",-1)),o("span",null,a(e.ResourcesStore.form.quantity),1)]),o("div",$t,[t[4]||(t[4]=o("label",{for:""},"Status",-1)),o("span",null,a(_.find_picklist_value("resources_statuses_picklist",e.ResourcesStore.form.resources_statuses_picklist)),1)])]),o("div",Mt,[o("div",Tt,[t[5]||(t[5]=o("label",{for:""},"Contact info",-1)),o("span",null,a(e.ResourcesStore.form.contact_info),1)]),o("div",wt,[t[6]||(t[6]=o("label",{for:""},"Owner",-1)),o("span",null,a(e.ResourcesStore.form.owner),1)])]),o("div",Pt,[o("div",Gt,[t[7]||(t[7]=o("label",{for:""},"Date Acquired",-1)),o("span",null,a(e.ResourcesStore.form.date_acquired),1)]),o("div",Bt,[t[8]||(t[8]=o("label",{for:""},"Dispatch",-1)),o("span",null,a(_.find_picklist_value("dispatchers_picklist",e.ResourcesStore.form.dispatchers_picklist)),1)])]),o("div",Lt,[o("div",Ut,[t[9]||(t[9]=o("label",{for:""},"Remarks",-1)),o("span",null,a(e.ResourcesStore.form.remarks),1)]),o("div",Rt,[t[10]||(t[10]=o("label",{for:""},"Condition",-1)),o("span",null,a(_.find_picklist_value("conditions_picklist",e.ResourcesStore.form.conditions_picklist)),1)])])]),_:1}),g(m,{blockname:"Location Details"},{default:k(()=>[o("div",Ct,[o("div",null,[o("div",Dt,[t[11]||(t[11]=o("label",{for:""},"Coordinates",-1)),o("span",null,a(e.ResourcesStore.form.coordinates),1)])]),o("div",null,[g(c,{set_coordinates:e.ResourcesStore.form.coordinates},null,8,["set_coordinates"])])])]),_:1})])])}const Ft=w(kt,[["render",At],["__scopeId","data-v-c7452be7"]]);const q=be(),Nt={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;q.id=s,q.getItem()},methods:{find_picklist_value(s,t){var i="";if(q[s]!==void 0){const d=q[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{ModuleStore:q,blocks:le}}},Ot={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},qt={class:"fromGroup relative"},Et={key:0},jt={key:1};function zt(s,t,i,d,e,_){const p=b("Loading"),m=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.ModuleStore.loading=c)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(c,f)=>(n(),r("div",{key:f},[g(m,{title:c.block_name},{default:k(()=>[o("div",Ot,[(n(!0),r(S,null,h(c.fields,(l,u)=>(n(),r("div",{key:u,class:C([`custom-grid-${u%2}`,"mt-4"])},[o("div",qt,[o("label",null,a(l.label),1),l.type!="picklist"?(n(),r("span",Et,a(e.ModuleStore.form[l.name]),1)):(n(),r("span",jt,a(_.find_picklist_value(l.name,e.ModuleStore.form[l.name])),1))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const Vt=w(Nt,[["render",zt],["__scopeId","data-v-a3894001"]]);const E=ke(),Wt=H(),Ht={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;E.id=s,E.getItem()},methods:{find_picklist_value(s,t){var i="";if(E[s]!==void 0){const d=E[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{ModuleStore:E,blocks:re,user_store:Wt}}},Kt={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},Qt={class:"fromGroup relative"},Jt={key:0},Xt={key:1},Yt={key:0},Zt={key:1};function eo(s,t,i,d,e,_){const p=b("Loading"),m=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.ModuleStore.loading=c)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(c,f)=>(n(),r("div",{key:f},[g(m,{title:c.block_name},{default:k(()=>[o("div",Kt,[(n(!0),r(S,null,h(c.fields,(l,u)=>(n(),r("div",{key:u,class:C([`custom-grid-${u%2}`,"mt-4"])},[o("div",Qt,[o("label",null,a(l.label),1),l.type!="picklist"?(n(),r("span",Jt,a(e.ModuleStore.form[l.name]),1)):(n(),r("span",Xt,[l.name=="assigned_to_picklist"?(n(),r("span",Yt,a(e.user_store.get_single_assigned_to_picklist(e.ModuleStore.form[l.name])),1)):(n(),r("span",Zt,a(_.find_picklist_value(l.name,e.ModuleStore.form[l.name])),1))]))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const to=w(Ht,[["render",eo],["__scopeId","data-v-f03e627c"]]);const j=ye(),oo=H(),so={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;j.id=s,j.getItem()},methods:{find_picklist_value(s,t){var i="";if(j[s]!==void 0){const d=j[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{ModuleStore:j,blocks:Se,user_store:oo}}},no={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},lo={class:"fromGroup relative"},ro={key:0},io={key:1},ao={key:0},co={key:1};function uo(s,t,i,d,e,_){const p=b("Loading"),m=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.ModuleStore.loading=c)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(c,f)=>(n(),r("div",{key:f},[g(m,{title:c.block_name},{default:k(()=>[o("div",no,[(n(!0),r(S,null,h(c.fields,(l,u)=>(n(),r("div",{key:u,class:C([`custom-grid-${u%2}`,"mt-4"])},[o("div",lo,[o("label",null,a(l.label),1),l.type!="picklist"?(n(),r("span",ro,a(e.ModuleStore.form[l.name]),1)):(n(),r("span",io,[l.name=="assigned_to_picklist"?(n(),r("span",ao,a(e.user_store.get_single_assigned_to_picklist(e.ModuleStore.form[l.name])),1)):(n(),r("span",co,a(_.find_picklist_value(l.name,e.ModuleStore.form[l.name])),1))]))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const po=w(so,[["render",uo],["__scopeId","data-v-3341bb9f"]]);const z=he(),_o=H(),mo={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;z.id=s,z.getItem()},methods:{find_picklist_value(s,t){var i="";if(z[s]!==void 0){const d=z[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{ModuleStore:z,blocks:xe,user_store:_o}}},fo={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},vo={class:"fromGroup relative"},go={key:0},bo={key:1},ko={key:0},yo={key:1};function So(s,t,i,d,e,_){const p=b("Loading"),m=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.ModuleStore.loading=c)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(c,f)=>(n(),r("div",{key:f},[g(m,{title:c.block_name},{default:k(()=>[o("div",fo,[(n(!0),r(S,null,h(c.fields,(l,u)=>(n(),r("div",{key:u,class:C([`custom-grid-${u%2}`,"mt-4"])},[o("div",vo,[o("label",null,a(l.label),1),l.type!="picklist"?(n(),r("span",go,a(e.ModuleStore.form[l.name]),1)):(n(),r("span",bo,[l.name=="assigned_to_picklist"?(n(),r("span",ko,a(e.user_store.get_single_assigned_to_picklist(e.ModuleStore.form[l.name])),1)):(n(),r("span",yo,a(_.find_picklist_value(l.name,e.ModuleStore.form[l.name])),1))]))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const ho=w(mo,[["render",So],["__scopeId","data-v-0b82aa2e"]]);const V=Ie(),xo=H(),Io={components:{Block:B,Map:L,Card:T},mounted(){const s=this.$route.params.id;V.id=s,V.getItem()},methods:{find_picklist_value(s,t){var i="";if(V[s]!==void 0){const d=V[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i}},data(){return{ModuleStore:V,blocks:$e,user_store:xo}}},$o={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},Mo={class:"fromGroup relative"},To={key:0},wo={key:1},Po={key:0},Go={key:1};function Bo(s,t,i,d,e,_){const p=b("Loading"),m=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.ModuleStore.loading=c)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(c,f)=>(n(),r("div",{key:f},[g(m,{title:c.block_name},{default:k(()=>[o("div",$o,[(n(!0),r(S,null,h(c.fields,(l,u)=>(n(),r("div",{key:u,class:C([`custom-grid-${u%2}`,"mt-4"])},[o("div",Mo,[o("label",null,a(l.label),1),l.type!="picklist"?(n(),r("span",To,a(e.ModuleStore.form[l.name]),1)):(n(),r("span",wo,[l.name=="assigned_to_picklist"?(n(),r("span",Po,a(e.user_store.get_single_assigned_to_picklist(e.ModuleStore.form[l.name])),1)):(n(),r("span",Go,a(_.find_picklist_value(l.name,e.ModuleStore.form[l.name])),1))]))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const Lo=w(Io,[["render",Bo],["__scopeId","data-v-afa2647e"]]);const A=H(),Uo={components:{Block:B,Map:L,Card:T,Badge:Be},mounted(){const s=this.$route.params.id;A.id=s,A.getItem(),console.log(A.form)},methods:{find_picklist_value(s,t){var i="";if(A[s]!==void 0){const d=A[s].find(e=>e.id==t);d!==void 0&&(i=d.label)}return i},split_name(s){return s.split(".")[1]}},data(){return{ModuleStore:A,blocks:Me}}},Ro={class:"lg:grid gap-x-12",style:{"grid-template-columns":"1fr 1fr"}},Co={class:"fromGroup relative"},Do={key:0},Ao={key:0},Fo={key:1},No={key:1},Oo={key:0},qo={key:1};function Eo(s,t,i,d,e,_){const p=b("Loading"),m=b("Badge"),c=b("Block");return n(),r("div",null,[g(p,{active:e.ModuleStore.loading,"onUpdate:active":t[0]||(t[0]=f=>e.ModuleStore.loading=f)},null,8,["active"]),(n(!0),r(S,null,h(e.blocks,(f,l)=>(n(),r("div",{key:l},[g(c,{title:f.block_name},{default:k(()=>[o("div",Ro,[(n(!0),r(S,null,h(f.fields,(u,y)=>(n(),r("div",{key:y,class:C([`custom-grid-${y%2}`,"mt-4"])},[o("div",Co,[o("label",null,a(u.label),1),u.type!="picklist"?(n(),r("span",Do,[u.type=="checkbox"?(n(),r("span",Ao,[e.ModuleStore.form.user_privileges[_.split_name(u.name)]?(n(),W(m,{key:0,label:"Active",badgeClass:"bg-success-500 text-white"})):Z("",!0),e.ModuleStore.form.user_privileges[_.split_name(u.name)]?Z("",!0):(n(),W(m,{key:1,label:"Inactive",badgeClass:"bg-danger-500 text-white"}))])):(n(),r("span",Fo,a(e.ModuleStore.form[u.name]),1))])):(n(),r("span",No,[u.name=="assigned_to_picklist"?(n(),r("span",Oo,a(s.user_store.get_single_assigned_to_picklist(e.ModuleStore.form[u.name])),1)):(n(),r("span",qo,a(_.find_picklist_value(u.name,e.ModuleStore.form[u.name])),1))]))])],2))),128))])]),_:2},1032,["title"])]))),128))])}const jo=w(Uo,[["render",Eo],["__scopeId","data-v-f45cf52c"]]),Y=me(),zo=fe("system",{state:()=>({loading:!1,logs:[],systemForm:{logo:"",site:""}}),getters:{},actions:{async activity_logs(s,t){try{this.log=[],this.loading=!0;const i=await this.axios.get("activity_logs/"+s+"/"+t);this.logs=i.data.data,this.loading=!1}catch{}},async save(){try{if(this.systemForm.site=="")return Y.error("Site title is required!",{timeout:3e3}),!1;if(this.systemForm.logo=="")return Y.error("Logo is required!",{timeout:3e3}),!1;let s=await this.axios.post("/system",this.systemForm,{headers:{"Content-Type":"multipart/form-data"}});this.systemForm.logo=s.data.data[0].logo,this.systemForm.site=s.data.data[0].site,Y.success("Successfully saved!",{timeout:3e3})}catch(s){console.log(s)}}},persist:!0}),te=zo(),Vo={components:{Card:T},data(){return{modules:this.$route.params.module,module_id:this.$route.params.id,SystemStore:te}},mounted(){te.activity_logs(this.modules,this.module_id)},computed:{fields_computed(){let s;switch(this.$route.params.module){case"incidents":s=we;break;case"resources":s=Te;break;case"contacts":s=le;break;case"agencies":s=re;break}return s},fields(){const s=[];return this.fields_computed.map(t=>{t.fields.map(i=>{s[i.name]=i.label})}),s}}},Wo={class:"relative ltr:pl-2 rtl:pr-2"},Ho={class:"w-[250px] text-xs"},Ko={class:"text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600"},Qo={class:"font-bold"},Jo=["innerHTML"];function Xo(s,t,i,d,e,_){const p=b("Loading"),m=b("Card");return n(),r("div",null,[g(p,{active:e.SystemStore.loading,"onUpdate:active":t[0]||(t[0]=c=>e.SystemStore.loading=c)},null,8,["active"]),g(m,{title:"Updates"},{default:k(()=>[o("ul",Wo,[(n(!0),r(S,null,h(e.SystemStore.logs,(c,f)=>(n(),r("li",{key:f,class:"mt-5 flex"},[o("div",Ho,a(c.created_at),1),t[1]||(t[1]=o("div",{class:"w-[100px] ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')]"},null,-1)),o("div",null,[o("h2",Ko,[o("span",Qo,a(c.users_.name),1),ne(" - "+a(c.action),1)]),o("p",{class:"text-xs dark:text-slate-400",innerHTML:c.description.replace("agency_name ","test")},null,8,Jo)])]))),128))])]),_:1})])}const Yo=w(Vo,[["render",Xo]]),Zo={incidents:[{title:"Details",icon:"heroicons-outline:view-columns",component:"Incident"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"},{title:"Media",icon:"heroicons-outline:view-columns",component:"Update"}],resources:[{title:"Details",icon:"heroicons-outline:view-columns",component:"Resource"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],preplans:[{title:"Details",icon:"heroicons-outline:view-columns",component:"PrePlan"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],contacts:[{title:"Details",icon:"heroicons-outline:view-columns",component:"Contact"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],agencies:[{title:"Details",icon:"heroicons-outline:view-columns",component:"Agency"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],responders:[{title:"Details",icon:"heroicons-outline:view-columns",component:"Responder"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],call_logs:[{title:"Details",icon:"heroicons-outline:view-columns",component:"CallLog"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}],users:[{title:"Details",icon:"heroicons-outline:view-columns",component:"User"},{title:"Updates",icon:"heroicons-outline:view-columns",component:"Update"}]},es={components:{Breadcrumb:Pe,Card:T,TabGroup:Fe,TabList:Ne,Tab:Oe,TabPanel:Ee,TabPanels:qe,Icon:Le,Resource:Ft,Incident:bt,Update:Yo,Contact:Vt,Agency:to,Responder:po,PrePlan:ho,User:jo,CallLog:Lo},methods:{Details(){const s=this.$route.params.module;var t="";switch(s){case"incidents":t="Incident";break;case"resources":t="Resource";break;case"contacts":t="Contact";break;case"agencies":t="Agency";break;case"responders":t="Responder";break;case"preplans":t="PrePlan";break;case"call_logs":t="CallLog";break;case"users":t="User"}return t},Updates(){return"Update"}},computed:{button_module(){return Zo[this.$route.params.module]}}},ts={class:"text-ba se relative top-[1px] ltr:mr-1 rtl:ml-1"};function os(s,t,i,d,e,_){const p=b("Breadcrumb"),m=b("Icon"),c=b("Tab"),f=b("TabList"),l=b("Card"),u=b("TabPanel"),y=b("TabPanels"),G=b("TabGroup");return n(),r("div",null,[g(p,{mode:"view"}),g(G,{defaultIndex:0},{default:k(()=>[g(l,{class:"mb-4"},{default:k(()=>[g(f,{class:"lg:space-x-8 md:space-x-4 space-x-0 rtl:space-x-reverse"},{default:k(()=>[(n(!0),r(S,null,h(_.button_module,(x,v)=>(n(),W(c,{as:"template",key:v},{default:k(({selected:I})=>[o("button",{class:C([[I?"text-primary-500 before:w-full":"text-slate-500 before:w-0 dark:text-slate-300"],"inline-flex items-start text-sm font-medium capitalize bg-white dark:bg-slate-800 ring-0 foucs:ring-0 focus:outline-none px-2 transition duration-150 before:transition-all before:duration-150 relative before:absolute before:left-1/2 before:bottom-[-6px] before:h-[1.5px] before:bg-primary-500 before:-translate-x-1/2"])},[o("span",ts,[g(m,{icon:x.icon},null,8,["icon"])]),ne(a(x.title),1)],2)]),_:2},1024))),128))]),_:1})]),_:1}),g(y,null,{default:k(()=>[(n(!0),r(S,null,h(_.button_module,(x,v)=>(n(),W(u,{key:v},{default:k(()=>[(n(),W(ve(x.component)))]),_:2},1024))),128))]),_:1})]),_:1})])}const ms=w(es,[["render",os]]);export{ms as default};

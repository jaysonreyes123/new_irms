import{I as _}from"./index-0d1b0429.js";import{K as m,L as g,_ as f,a as u,b as a,d as r,h as l,t as o,e as h,w as R,j as S,n as k,G as x,i as n}from"./index-bf9c440a.js";m();const w=g("incident",{state:()=>({incidentList:[],incidentType:[],incidentStatus:[],incidentPriority:[],id:0,loading:!0,form:{incident_no:"",incident_type:"",time_of_incident:null,date_of_incident:null,incident_status:"",incident_priority:"",remarks:"",location:"",street_name:"",nearest_landmark:"",coordinates:"",assigned_team:[],response_team:"",assigned_by:"",caller_contact:"",caller_firstname:"",caller_lastname:""}}),getters:{getIncidentType(t){return t.incidentType.map(e=>({label:e.name,value:e.id}))},getSingleIncidentType(t){return e=>t.incidentType.find(s=>s.id===e)},getIncidentStatus(t){return t.incidentStatus.map(e=>({label:e.name,value:e.id}))},getSingleIncidentStatus(t){return e=>t.incidentStatus.find(s=>s.id===e)},getIncidentPriority(t){return t.incidentPriority.map(e=>({label:e.name,value:e.id}))},getSingleIncidentStatus(t){return e=>t.incidentPriority.find(s=>s.id===e)}},actions:{clearField(){this.loading=!0,Object.keys(this.form).map(e=>{this.form[e]=""}),this.id="",this.loading=!1},async list(){try{this.loading=!0;const t=await this.axios.get("incidents");this.incidentList=t.data.data,this.loading=!1}catch{}},async getItem(){this.loading=!0;const t=await this.axios.get("incidents/"+this.id),e=Object.keys(this.form),s=t.data.data;e.map(i=>{i=="assigned_team"?this.form[i]=JSON.parse(s[i]):this.form[i]=t.data.data[i]}),this.loading=!1},async save(){try{if(this.loading=!0,this.id==""){const t=await this.axios.post("incidents",this.form);this.id=t.data.data.id}else await this.axios.put("incidents/"+this.id,this.form);this.loading=!1,this.router.push({name:"detail",params:{id:this.id,module:"incidents"}})}catch{}},async del(t){try{this.loading=!0,(await this.axios.delete("incidents/"+t)).data.status==200&&this.list(),this.loading=!1}catch{}},async get_incident_type(){try{const t=await this.axios.get("incident_type");this.incidentType=t.data.data}catch{}},async get_incident_status(){try{const t=await this.axios.get("incident_status");this.incidentStatus=t.data.data}catch{}},async get_incident_priority(){try{const t=await this.axios.get("incident_priority");this.incidentPriority=t.data.data}catch{}}},persist:!0});m();const b=g("resources",{state:()=>({loading:!1,ResourceList:[],ResourceType:[],ResourceCondition:[],ResourceDispatch:[],ResourceStatus:[],id:"",form:{resources_name:"",resources_type:"",resources_status:"",coordinates:"",dispatch:"",condition:"",quantity:1,contact_info:"",date_acquired:"",remarks:""}}),getters:{getResourceType(t){return t.ResourceType.map(e=>({label:e.name,value:e.id}))},getResourceStatus(t){return t.ResourceStatus.map(e=>({label:e.name,value:e.id}))},getResourceCondition(t){return t.ResourceCondition.map(e=>({label:e.name,value:e.id}))},getResourceDispatch(t){return t.ResourceDispatch.map(e=>({label:e.name,value:e.id}))},getSingleResourceType(t){return e=>t.ResourceType.find(s=>s.id==e)},getSingleResourceStatus(t){return e=>t.ResourceStatus.find(s=>s.id==e)},getSingleResourceDispatch(t){return e=>t.ResourceDispatch.find(s=>s.id==e)},getSingleResourceCondition(t){return e=>t.ResourceCondition.find(s=>s.id==e)}},actions:{clearField(){this.loading=!0,Object.keys(this.form).map(e=>{e=="quantity"?this.form[e]=1:this.form[e]=""}),this.id="",this.loading=!1},async list(){try{this.loading=!0;const t=await this.axios.get("resources");this.ResourceList=t.data.data,this.loading=!1}catch{}},async getItem(){this.loading=!0;const t=await this.axios.get("resources/"+this.id),e=Object.keys(this.form);t.data.data,e.map(s=>{this.form[s]=t.data.data[s]}),this.loading=!1},async save(){try{if(this.loading=!0,this.id==""){const t=await this.axios.post("resources",this.form);this.id=t.data.data.id}else await this.axios.put("resources/"+this.id,this.form);this.loading=!1,this.router.push({name:"detail",params:{id:this.id,module:"resources"}})}catch{}},async del(t){try{this.loading=!0,(await this.axios.delete("resources/"+t)).data.status==200&&this.list(),this.loading=!1}catch{}},async get_resources_type(){try{const t=await this.axios.get("resources_type");this.ResourceType=t.data.data}catch{}},async get_resources_status(){try{const t=await this.axios.get("resources_status");this.ResourceStatus=t.data.data}catch{}},async get_resources_condition(){try{const t=await this.axios.get("resources_condition");this.ResourceCondition=t.data.data}catch{}},async get_resources_dispatch(){try{const t=await this.axios.get("resources_dispatch");this.ResourceDispatch=t.data.data}catch{}}},persist:!0}),v=w(),I=b(),p={incidents:"incident_no",resources:"resources_name"},T={components:{Icon:_},props:{mode:{type:String,default:"list"}},computed:{getName(){const t=this.$route.params.module;var e="";switch(t){case"incidents":e=v.form[p[t]];break;case"resources":e=I.form[p[t]];break}return e},editName(){var t="";return this.$route.params.id==""&&(t="Creating new "+this.$route.params.module),t}}},C={class:"mb-4 flex"},N={key:0,class:"flex"},D={class:"capitalize font-bold"},B={key:1},j={key:1},L={class:"font-bold"};function O(t,e,s,i,P,c){const d=u("Icon"),y=u("router-link");return a(),r("div",C,[s.mode=="list"||s.mode=="view"?(a(),r("div",N,[l("span",D,o(this.$route.params.module),1),h(d,{class:"mt-1",icon:"heroicons-outline:chevron-right"}),h(y,{class:k([s.mode!="list"?"font-bold":""]),to:`/app/module/${this.$route.params.module}`},{default:R(()=>e[0]||(e[0]=[S("All ")])),_:1},8,["class","to"]),s.mode!="list"?(a(),x(d,{key:0,class:"mt-1",icon:"heroicons-outline:chevron-right"})):n("",!0),s.mode!="list"?(a(),r("span",B,o(c.getName),1)):n("",!0)])):n("",!0),s.mode=="edit"?(a(),r("div",j,[l("span",L,o(c.editName),1)])):n("",!0)])}const z=f(T,[["render",O]]);export{z as B,b as a,w as u};

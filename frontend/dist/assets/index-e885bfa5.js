import{S as i,U as l,_ as p,c as a,f as e,F as h,D as _,a as u,b as s,d as g}from"./index-aae2f258.js";import{C as m}from"./chart-02316c1e.js";import"./index-ff5637ae.js";import"./report-5ef2e7a1.js";import"./dropdown-689d2ad1.js";import"./appex-chart-2e5bc126.js";i();const f=l("dashboard",{state:()=>({loading:!1,chart:[]}),getters:{},actions:{async get_dashboard_report_chart(){try{this.loading=!0;const t=await this.axios.get("dashboard/get_report_charts");this.chart=t.data.data,this.loading=!1}catch{}}},persist:!0}),d=f(),b={components:{chart:m},mounted(){d.get_dashboard_report_chart()},data(){return{dashboard_store:d}}},x={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"};function v(t,o,y,B,n,C){const c=u("chart");return s(),a("div",null,[o[0]||(o[0]=e("div",{class:"flex mb-8"},[e("span",{class:"capitalize font-bold text-2xl"},"dashboard")],-1)),e("div",x,[(s(!0),a(h,null,_(n.dashboard_store.chart,(r,S)=>(s(),a("div",null,[g(c,{height:"200px",title:r.report_name,report_id:r.id,chart_type:r.report_charts.chart},null,8,["title","report_id","chart_type"])]))),256))])])}const w=p(b,[["render",v]]);export{w as default};

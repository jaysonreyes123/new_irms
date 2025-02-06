import{B as F}from"./index-c7743a2e.js";import{I}from"./index-8100ed51.js";import{I as M}from"./index-35a1d2a7.js";import{T as L,C as O}from"./vue-select.es-2c5a72e0.js";import{T as j}from"./index-6273444f.js";import{C as q}from"./index-ff5637ae.js";import{u as A}from"./dropdown-689d2ad1.js";import{u as E}from"./report-5ef2e7a1.js";import{r as V,_ as z,a as m,b as i,C as a,w as S,d as p,f as l,c as u,D as U,n as g,t as N,F as T,h as v,g as x,i as D}from"./index-aae2f258.js";import{S as G}from"./sweetalert2.all-58477e35.js";const b=A(),r=E();V("");V([]);const H=[{label:"Equal",value:"="},{label:"Not Equal",value:"<>"}];let c=V(0),X=[{id:1,title:"Report Details"},{id:2,title:"Select Columns"},{id:3,title:"Filters"}];const Y={components:{Button:F,Icon:I,Textinput:j,InputGroup:M,Textarea:L,Card:q,Select:O},mounted(){this.clear2(),c.value=0,r.id=this.$route.params.id,r.form.type="list",b.get_dropdown("modules"),r.module_list=b.dropdownlist.modules,r.id!=""&&r.id!==void 0&&r.get()},data(){return{steps:X,stepNumber:c,dropdown_store:b,report:r,operator:H}},methods:{clear2(){r.loading=!1,r.form.report_name="",r.form.modules="",r.form.selected_column=[],r.relation_module=[],r.form.related_module=[],r.form.filter=[{field:"",operator:"",type:"text",value:""}]},clear(){r.form.selected_column=[],r.form.related_module=[],r.form.filter=[{field:"",operator:"",type:"text",value:""}]},andRemoveCondition(d){r.form.filter.splice(d,1)},andCondition(){r.form.filter.push({field:"",operator:"",type:"text",value:""})},filter_and_select_option(d,t){r.form.filter[t].type=d.type,r.form.filter[t].operator="=",d.type=="dropdown"&&(b.dropdownlist_data=[],b.get_dropdown_list(d.value))},SelectModule(d){this.clear(),r.module=d.name,r.get_relation_module()},prev(){c.value--},submit(){let d="";if(c.value==0)r.form.report_name==""&&(d+="<p class='text-red-500'>Report name is required</p>"),r.form.modules==""&&(d+="<p class='text-red-500'>Module is required</p>"),d==""&&r.get_fields();else if(c.value==1)r.form.selected_column.length==0&&(d="<p class='text-red-500'>Column is required</p>");else if(c.value===2)return r.save(),!1;if(d!="")return G.fire({icon:"error",title:"Something wrong",html:d}),!1;c.value++}}},J={class:"flex z-[5] items-center relative justify-center md:mx-8"},K={key:0},P={key:1,class:"text-3xl"},Q={class:"w-max"},W={class:"conten-box mt-14 border-t border-slate-100 dark:border-slate-700 -mx-6 px-6 pt-6"},Z={key:0,class:"px-5"},$={class:"grid lg:grid-cols-4 grid-cols-2"},ee={class:"grid lg:grid-cols-4 grid-cols-2"},te={class:"grid lg:grid-cols-4 grid-cols-2"},oe={key:1,class:"px-5"},le={class:"fromGroup relative mt-5"},re={key:2,class:"px-5"},ne={class:"col-start-1 col-span-3"},se={class:"col-start-4 col-span-2"},ie={class:"col-start-6 col-span-3"},de={class:"flex justify-center"},pe=["onClick"];function ue(d,t,me,ae,e,f){const B=m("Loading"),C=m("Icon"),y=m("Textinput"),_=m("Select"),R=m("Textarea"),h=m("flat-pickr"),k=m("Button"),w=m("Card");return i(),a(w,null,{default:S(()=>[p(B,{active:e.report.loading,"onUpdate:active":t[0]||(t[0]=n=>e.report.loading=n)},null,8,["active"]),l("div",J,[(i(!0),u(T,null,U(e.steps,(n,o)=>(i(),u("div",{class:"relative z-[1] items-center item flex flex-start flex-1 last:flex-none group",key:o},[l("div",{class:g([`   ${e.stepNumber>=o?"bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900":"bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"}`,"transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium"])},[e.stepNumber<=o?(i(),u("span",K,N(o+1),1)):(i(),u("span",P,[p(C,{icon:"bx:check-double"})]))],2),l("div",{class:g(["absolute top-1/2 h-[2px] w-full",e.stepNumber>=o?"bg-slate-900 dark:bg-slate-900":"bg-[#E0EAFF] dark:bg-slate-700"])},null,2),l("div",{class:g(["absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100",e.stepNumber>=o?" text-slate-900 dark:text-slate-300":"text-slate-500 dark:text-slate-300 dark:text-opacity-40"])},[l("span",Q,N(n.title),1)],2)]))),128))]),l("div",W,[e.stepNumber===0?(i(),u("div",Z,[t[9]||(t[9]=l("br",null,null,-1)),l("div",$,[t[6]||(t[6]=l("span",null,[v("Report Name"),l("span",{class:"text-red-500"},"*")],-1)),l("div",null,[p(y,{placeholder:"Report Name",modelValue:e.report.form.report_name,"onUpdate:modelValue":t[1]||(t[1]=n=>e.report.form.report_name=n)},null,8,["modelValue"])])]),t[10]||(t[10]=l("br",null,null,-1)),l("div",ee,[t[7]||(t[7]=l("span",null,[v("Module"),l("span",{class:"text-red-500"},"*")],-1)),l("div",null,[p(_,{placeholder:"Select an option",options:e.dropdown_store.dropdownlist.modules,modelValue:e.report.form.modules,"onUpdate:modelValue":t[2]||(t[2]=n=>e.report.form.modules=n),"onOption:selected":f.SelectModule,reduce:n=>n.name},null,8,["options","modelValue","onOption:selected","reduce"])])]),t[11]||(t[11]=l("br",null,null,-1)),l("div",te,[t[8]||(t[8]=l("span",null,[v("Relation Module ("),l("i",null,"Optional"),v(" )")],-1)),l("div",null,[p(_,{placeholder:"Select an option",options:e.report.relation_module,modelValue:e.report.form.related_module,"onUpdate:modelValue":t[3]||(t[3]=n=>e.report.form.related_module=n),reduce:n=>n.value,selectable:n=>e.report.form.related_module.length<2,multiple:""},null,8,["options","modelValue","reduce","selectable"])])])])):x("",!0),e.stepNumber===1?(i(),u("div",oe,[l("div",le,[t[12]||(t[12]=l("label",{class:"flex-0 mr-6 break-words ltr:inline-block rtl:block input-label"},[v("Select Columns(MAX 10)"),l("span",{class:"text-red-500"},"*")],-1)),p(_,{placeholder:"Select an option",options:e.report.fields_list,modelValue:e.report.form.selected_column,"onUpdate:modelValue":t[4]||(t[4]=n=>e.report.form.selected_column=n),closeOnSelect:!1,multiple:"",selectable:n=>!e.report.form.selected_column.includes(n.value)&&e.report.form.selected_column.length<15,reduce:n=>n.value},null,8,["options","modelValue","selectable","reduce"])])])):x("",!0),e.stepNumber===2?(i(),u("div",re,[p(w,{title:"Choose List conditions"},{default:S(()=>[t[13]||(t[13]=l("br",null,null,-1)),t[14]||(t[14]=l("label",null,"All Conditions (All conditions must be met)",-1)),(i(!0),u(T,null,U(e.report.form.filter,(n,o)=>(i(),u("div",{class:"grid grid-cols-9 gap-8 mt-4",key:o},[l("div",ne,[p(_,{"onOption:selected":s=>f.filter_and_select_option(s,o),placeholder:"Select an option",options:e.report.fields_list,modelValue:e.report.form.filter[o].field,"onUpdate:modelValue":s=>e.report.form.filter[o].field=s,reduce:s=>s.value},null,8,["onOption:selected","options","modelValue","onUpdate:modelValue","reduce"])]),l("div",se,[p(_,{placeholder:"Select an option",options:e.operator,modelValue:e.report.form.filter[o].operator,"onUpdate:modelValue":s=>e.report.form.filter[o].operator=s,reduce:s=>s.value},null,8,["options","modelValue","onUpdate:modelValue","reduce"])]),l("div",ie,[e.report.form.filter[o].type=="text"?(i(),a(y,{key:0,placeholder:"",modelValue:e.report.form.filter[o].value,"onUpdate:modelValue":s=>e.report.form.filter[o].value=s},null,8,["modelValue","onUpdate:modelValue"])):e.report.form.filter[o].type=="textarea"?(i(),a(R,{key:1,modelValue:e.report.form.filter[o].value,"onUpdate:modelValue":s=>e.report.form.filter[o].value=s},null,8,["modelValue","onUpdate:modelValue"])):e.report.form.filter[o].type=="date"?(i(),a(h,{key:2,class:"form-control",placeholder:"yyyy-mm-dd",config:{dateFormat:"Y-m-d"},modelValue:e.report.form.filter[o].value,"onUpdate:modelValue":s=>e.report.form.filter[o].value=s},null,8,["modelValue","onUpdate:modelValue"])):e.report.form.filter[o].type=="time"?(i(),a(h,{key:3,class:"form-control",placeholder:"HH:mm:00",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i:00",time_24hr:!0,minuteIncrement:1},modelValue:e.report.form.filter[o].value,"onUpdate:modelValue":s=>e.report.form.filter[o].value=s},null,8,["modelValue","onUpdate:modelValue"])):e.report.form.filter[o].type=="dropdown"?(i(),a(_,{key:4,placeholder:"Select an option",options:e.dropdown_store.dropdownlist_data},null,8,["options"])):(i(),a(y,{key:5,type:e.report.form.filter[o].type,placeholder:"",modelValue:e.report.form.filter[o].value,"onUpdate:modelValue":s=>e.report.form.filter[o].value=s},null,8,["type","modelValue","onUpdate:modelValue"]))]),l("div",de,[o!==0?(i(),u("button",{key:0,type:"button",class:"inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white",onClick:s=>f.andRemoveCondition(o)},[p(C,{icon:"heroicons-outline:trash"})],8,pe)):x("",!0)])]))),128)),p(k,{icon:"heroicons-outline:plus",text:"Add Condition",btnClass:"btn-success mr-2 py-2 mt-3",onClick:f.andCondition},null,8,["onClick"])]),_:1})])):x("",!0),l("div",{class:g(["mt-10",e.stepNumber>0?"flex justify-between":" text-right"])},[this.stepNumber!==0?(i(),a(k,{key:0,onClick:t[5]||(t[5]=D(n=>f.prev(),["prevent"])),text:"prev",btnClass:"btn-dark"})):x("",!0),p(k,{onClick:f.submit,text:e.stepNumber!==this.steps.length-1?"next":"Save and Generate",btnClass:"btn-dark"},null,8,["onClick","text"])],2)])]),_:1})}const Ce=z(Y,[["render",ue]]);export{Ce as L};

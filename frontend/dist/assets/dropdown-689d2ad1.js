import{S as s,U as e}from"./index-aae2f258.js";s();const n=e("dropdown",{state:()=>({dropdownlist_data:[],dropdownlist:[]}),getters:{dropdpwn_list(a){a.dropdownlist_data.map(t=>({label:t.label,value:t.name}))}},actions:{async get_dropdown(a){try{const t=await this.axios.get("module/get_dropdown/"+a);this.dropdownlist[a]=t.data.data}catch{}},async get_dropdown_list(a){try{(await this.axios.get("module/get_dropdown/"+a)).data.data.map(o=>{this.dropdownlist_data.push({label:o.label,value:o.name})})}catch{}}},persist:!0});export{n as u};

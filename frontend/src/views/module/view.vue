<template lang="">
    <div>
        <Breadcrum mode='view' />
        <Menu />
        <component :is="action_module"></component>
    </div>
</template>
<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
import detail from "./view/detail.vue";
import update from "./view/update.vue";
import Summary from "./view/summary.vue";
import Menu from "./view/menu.vue";
import { ref } from "vue";
import Breadcrum from "./Breadcrum.vue";
import { useRelatedStore } from "@/store/related";
import { useModuleStore } from "@/store/module";
const module_store = useModuleStore();
const related_store = useRelatedStore();
const action_module = ref("detail");

export default {
    components:{
        Card,
        Button,
        Summary,
        detail,
        update,
        Breadcrum,
        Menu
    },
    created(){
        related_store.related_menu = [];
        module_store.entityname = "";
        this.$watch(
            ()=>this.$route.params.action,
            (action) => {
                action_module.value = action
            }
        )
    },
    mounted(){
        action_module.value = this.$route.params.action;
        related_store.get_related_menu(this.$route.params.module);
    },
    data(){
        return{
            action_module,
            related_store
        }
    },
    methods:{
    }
}
</script>
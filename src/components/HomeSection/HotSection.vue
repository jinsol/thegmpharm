<template>
    <div>
        <section-title title="Hot Keyword" />
        <div>
            <div>
                <button v-for="(item,index) in keyword" :key="index">
                    {{ item.name  }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
    export default {
        components:{
        SectionTitle,
    },
    data(){
        return{
            keyword:[
                {name:'유소아 · 어린이'},
                {name:'임신 · 출산'},
                {name:'성인건강'},
                {name:'이너뷰티'},
                {name:'오메가3'},
                {name:'유산균'},
                {name:'칼슘'},
                {name:'면역력'},
            ]
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>
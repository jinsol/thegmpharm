<template>
    <div>
        <section-title title="섭취 가이드" />
        <intake-section />
    </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
import IntakeSection from "@/components/Intake/IntakeSection.vue"
    export default {
        mounted() {
  this.scrollToTop();
},
    components:{
        SectionTitle,
        IntakeSection
    }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
  <main class="row">
    <section-title title="브랜드스토리" sub_title="지엠팜을 소개합니다" />
    <brand-title :class="{ mobile: isMobile }" />
    <brand-benefit :class="{ mobile: isMobile }" />
    <brand-go :class="{ mobile: isMobile }" />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import BrandGo from "@/components/aboutUs/BrandGo.vue";
import BrandBenefit from "@/components/aboutUs/BrandBenefit.vue";
import BrandTitle from "@/components/aboutUs/BrandTitle.vue";
import { mapState } from "vuex";
export default {
  components: { SectionTitle, BrandGo, BrandBenefit, BrandTitle },
  name: "AboutUs",
  computed: {
    ...mapState(["isMobile"]),
  },
};
</script>

<style lang="scss" scoped></style>

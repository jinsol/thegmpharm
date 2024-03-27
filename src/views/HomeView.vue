<template>
  <main>
    <test-section />
    <event-section />
    <best-product-section />
    <slide-section2 />
    <hot-key-word-section />
    <new-prd-section />
    <instargram-section />
    <go-link-section />

  </main>
</template>

<script>
import TestSection from "@/components/HomeSection/TestSection.vue"
import EventSection from "@/components/HomeSection/EventSection.vue"
import BestProductSection from "@/components/HomeSection/BestProductSection.vue"
import SlideSection2 from "@/components/HomeSection/SlideSection2.vue"
import HotKeyWordSection from "@/components/HomeSection/HotKeyWordSection.vue"
import NewPrdSection from "@/components/HomeSection/NewPrdSection.vue"
import instargramSection from "@/components/HomeSection/instargramSection.vue"
import GoLinkSection from "@/components/HomeSection/GoLinkSection.vue"

export default {
  name: "HomeView",
  components: {
    TestSection,
    EventSection,
    BestProductSection,
    SlideSection2,
    HotKeyWordSection,
    NewPrdSection,
    instargramSection,
    GoLinkSection,
  },
};
</script>

<style lang="scss" scoped>

</style>

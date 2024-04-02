<template>
  <main class="row">
    <section-title
      title="공지사항"
      sub_title="지엠팜의 공지사항을 확인하세요"
    />
    <button-title />
    <guideline-section />
    <guideline-search />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ButtonTitle from "@/components/layout/ButtonTitle.vue";
import GuidelineSection from "@/components/Guideline/GuidelineSection.vue";
import GuidelineSearch from "@/components/Guideline/GuidelineSearch.vue";

export default {
  mounted() {
    this.scrollToTop();
  },
  components: {
    SectionTitle,
    ButtonTitle,
    GuidelineSection,
    GuidelineSearch,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
    },
  },
};
</script>

<style lang="scss" scoped></style>

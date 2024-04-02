<template>
  <main class="row">
    <section-title
      title="섭취 가이드"
      sub_title="지엠팜 상품들의 섭취가이드를 확인하세요!"
    />
    <button-title />
    <intake-section />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ButtonTitle from "@/components/layout/ButtonTitle.vue";
import IntakeSection from "@/components/Intake/IntakeSection.vue";
export default {
  mounted() {
    this.scrollToTop();
  },
  components: {
    SectionTitle,
    IntakeSection,
    ButtonTitle,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
    },
  },
};
</script>

<style lang="scss" scoped></style>

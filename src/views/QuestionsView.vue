<template>
  <main class="row">
    <section-title
      title="자주묻는 질문"
      sub_title="자주 묻는 질문들을 확인하세요"
    />
    <button-title />
    <question-tag />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ButtonTitle from "@/components/layout/ButtonTitle.vue";
import QuestionTag from "@/components/Question/QuestionTag.vue";

export default {
  mounted() {
    this.scrollToTop();
  },
  components: {
    SectionTitle,
    ButtonTitle,
    QuestionTag,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
    },
  },
};
</script>

<style lang="scss" scoped></style>

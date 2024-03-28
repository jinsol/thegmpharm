<template>
  <main class="row">
    <section-title
      title="회원가입"
      sub_title="간편한 회원가입을 통해 지엠팜과 함께하세요!"
    />
    <sign-up />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import SignUp from "@/components/mypage/SignUp.vue";

export default {
  components: {
    SectionTitle,
    SignUp,
  },
};
</script>

<style lang="scss" scoped></style>

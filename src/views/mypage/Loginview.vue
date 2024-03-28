<template>
  <main>
    <section-title title="로그인" />
    <login />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import Login from "@/components/mypage/Login.vue";
export default {
  components: {
    SectionTitle,
    Login,
  },
};
</script>

<style lang="scss" scoped></style>

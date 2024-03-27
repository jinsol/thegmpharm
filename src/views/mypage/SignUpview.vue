<template>
  <main>
    <section-title title="회원가입" />
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="사용자 이름" />
      <input type="email" v-model="email" placeholder="이메일 주소" />
      <input type="password" v-model="password" placeholder="비밀번호" />
      <button type="submit">회원가입</button>
    </form>
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

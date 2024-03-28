<template>
  <main>
    <section-title title="로그인" />
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <span>아이디가 없으신가요?</span>
    <router-link to="/signUp">회원가입하기</router-link>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import SectionTitle from "@/components/layout/SectionTitle.vue";

export default {
  components: {
    SectionTitle,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    this.$store.dispatch("initLoginState");
  },
  methods: {
    ...mapActions(["login"]),
    async login() {
      if (this.username && this.password) {
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });
      } else {
        alert("Please enter username and password");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

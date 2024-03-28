<template>
  <main class="row">
    <section-title title="회원가입" sub_title="지엠팜과 함께하세요!" />
    <section class="sign_up">
      <form @submit.prevent="signup">
        <label for="id">아이디</label>
        <input
          type="text"
          id="id"
          v-model="id"
          placeholder="아이디를 입력해주세요"
        />
        <label for="username">닉네임</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="닉네임"
        />
        <label for="password">비밀번호</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
          autocomplete="new-password"
        />
        <input
          type="password"
          id="passwordConfirm"
          v-model="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요"
          autocomplete="new-password"
        />
        <button type="submit" class="sign_up-btn">회원가입하기</button>
      </form>
    </section>
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
      id: "",
      username: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    signup() {
      if (
        this.id &&
        this.username &&
        this.password &&
        this.password === this.passwordConfirm
      ) {
        this.$store.dispatch("signup", {
          id: this.id,
          username: this.username,
          password: this.password,
        });
        alert("Signup successful");
        // 회원가입 후 로그인 페이지로 이동 또는 홈페이지로 리디렉션하거나 원하는 페이지로 이동할 수 있습니다.
        this.$router.push("/login");
      } else {
        alert("Please fill in all fields correctly");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign_up {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background: tomato;
  form {
    input {
      all: unset;
      padding: 2%;
      background: whitesmoke;
      margin: 2% 0;
      border-radius: 10px;
      width: 100%;
    }
  }
  .sign_up-btn {
    background-color: var(--main-color);
    color: white;
    padding: 10px 15px;
    display: block;
    width: 100%;
  }
}
</style>

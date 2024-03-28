<template>
  <section class="login">
    <form @submit.prevent="login">
      <label for="id">아이디</label>
      <input
        type="text"
        id="id"
        v-model="username"
        placeholder="아이디를 입력해주세요"
      />
      <label for="password">비밀번호</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <button type="submit" class="login-btn">로그인</button>
    </form>
    <p class="login-tip">
      아이디가 없으신가요?
      <router-link to="/signUp">회원가입하기</router-link>
    </p>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
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

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 4% 0;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 2%;
    }
    input {
      all: unset;
      padding: 2%;
      box-sizing: border-box;
      background: whitesmoke;
      border-radius: 10px;
      width: 100%;
      margin: 1% 0;
      &::placeholder {
        color: gray;
        font-family: var(--body-font);
      }
    }
    .login-btn {
      background-color: var(--main-color);
      border-radius: 1px solid var(--main-color);
      color: white;
      padding: 10px 15px;
      display: block;
      width: 100%;
      margin: 2% 0;
      font-size: clamp(16px, 2.5vw, 20px);
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
      transition: all 0.5s;
      &:hover {
        background-color: white;
        color: var(--main-color);
      }
    }
  }
  .login-tip {
    text-align: center;
    font-size: 13px;
    color: gray;
    a {
      text-decoration: underline;
      color: var(--main-color);
    }
  }
}
</style>

<template>
  <section class="sign_up">
    <form @submit.prevent="signup">
      <label for="userId">아이디</label>
      <input
        type="text"
        id="userId"
        v-model="userId"
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userId: "",
      username: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    signup() {
      if (
        this.userId &&
        this.username &&
        this.password &&
        this.password === this.passwordConfirm
      ) {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = existingUsers.find(
          (user) => user.userId === this.userId
        );
        if (existingUser) {
          alert("이미 존재하는 아이디입니다.");
          return;
        }

        this.$store.dispatch("signup", {
          userId: this.userId,
          username: this.username,
          password: this.password,
        });

        alert("회원가입에 성공하셨습니다.");
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
    .sign_up-btn {
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
}
</style>

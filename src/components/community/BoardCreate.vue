<template>
  <main class="board_create row">
    <form @submit.prevent="submitPost">
      <input type="text" v-model="title" placeholder="제목" />
      <textarea v-model="content" placeholder="내용"></textarea>
      <button type="submit">게시글 추가</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      boardType: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    to.meta.fromBoard = from.name;
    next();
  },
  created() {
    this.boardType = this.$route.meta.fromBoard;
  },
  methods: {
    async submitPost() {
      const newPost = {
        id: this.$store.state.boardList.length + 1,
        title: this.title,
        content: this.content,
        author: "익명",
        date: new Date().toISOString().split("T")[0],
        hits: 0,
      };
      await this.$store.dispatch("addPost", {
        newPost,
        boardType: this.boardType,
      }); // 보드 타입을 함께 전달
      this.title = "";
      this.content = "";
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.board_create {
  height: 60vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    textarea {
      height: 200px;
    }
    button {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #000;
      color: #fff;
    }
  }
}

main {
  margin-top: 4%;
  margin-bottom: 10%;
}

main.mobile {
  padding: 0 2%;
}
</style>

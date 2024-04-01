<template>
  <main class="board_create row">
    <form @submit.prevent="submitPost">
      <input type="text" v-model="title" placeholder="제목" />
      <textarea
        v-model="content"
        placeholder="본문에 내용을 입력하세요"
      ></textarea>
      <div class="section_BT">
        <button type="button" @click="prev_BT" class="prev_BT">
          등록 취소
        </button>
        <button type="submit" class="create_BT">게시글 등록</button>
      </div>
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
    this.$store.dispatch("initLoginState");
  },
  methods: {
    async submitPost() {
      const newPost = {
        id: this.$store.state.boardList.length + 1,
        title: this.title,
        content: this.content,
        author: this.username,
        userId: this.userId,
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
    prev_BT() {
      this.$router.go(-1);
    },
  },
  computed: {
    username() {
      return this.$store.getters.loggedInUsername;
    },
    userId() {
      return this.$store.getters.loggedInUserId;
    },
  },
};
</script>

<style lang="scss" scoped>
.board_create {
  height: 60vh;
  display: flex;
  flex-direction: column;
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
      font-family: var(--body-font);
      font-size: 16px;
    }
    textarea {
      height: 200px;
    }
    .section_BT {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        display: flex;
        padding: 15px 20px;
        margin: 10px 0;
        border-radius: 5px;
        line-height: 1em;
        &.prev_BT {
          border: 1px solid gray;
          color: gray;
          transform: translateY(0);
          transition: all 0.5s;
          &:hover {
            background-color: gray;
            color: #fff;
            transform: translateY(-4px);
            box-shadow: 0 4px 8px 8px whitesmoke;
          }
        }
        &.create_BT {
          border: 1px solid var(--main-color);
          color: var(--main-color);
          transform: translateY(0);
          transition: all 0.5s;
          &:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 8px 8px var(--main-color-hover);
            background-color: var(--main-color);
            color: #fff;
          }
        }
      }
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

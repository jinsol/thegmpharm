<template>
  <main class="row">
    <section class="board_modify">
      <form @submit.prevent="handleSubmit">
        <input type="text" id="title" v-model="title" />

        <textarea id="content" v-model="content"></textarea>

        <div class="section_BT">
          <button type="button" @click="prev_BT" class="prev_BT">
            목록으로
          </button>
          <button type="submit" class="modify_BT">수정하기</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ModifyPost",
  data() {
    return {
      title: "", // 수정될 제목을 담을 변수
      content: "", // 수정될 내용을 담을 변수
      boardType: "", // 보드 타입을 담을 변수
      postId: "", // 보드 아이디를 담을 변수
    };
  },
  methods: {
    ...mapActions(["updatePost"]),
    handleSubmit() {
      // 게시물 수정 버튼 클릭 시 호출되는 메서드
      if (!this.title.trim() || !this.content.trim()) {
        alert("내용을 입력하세요.");
        return;
      }
      const modifiedPost = {
        title: this.title,
        content: this.content,
      };

      // 수정된 게시물 정보와 보드타입, 보드아이디를 이용하여 게시물을 수정하고 Vuex store에 업데이트
      this.updatePost({
        modifiedPost,
        boardType: this.boardType,
        postId: this.postId,
      })
        .then(() => {
          // 게시물 수정 완료 시 처리할 내용 추가
          alert("게시물 수정이 완료되었습니다.");
          // 수정된 게시물 상세 페이지로 이동
          this.$router.push({
            name: "board-detail",
            params: { id: this.postId, type: this.boardType },
          });
          this.$router.go(-3);

          // 수정된 내용을 로컬 스토리지에 반영
          const modifiedPostKey =
            this.boardType === "board" ? "board" : "pregnancy";
          const modifiedPostList =
            JSON.parse(localStorage.getItem(modifiedPostKey)) || [];
          const postIndex = modifiedPostList.findIndex(
            (post) => post.id === this.postId
          );
          if (postIndex !== -1) {
            modifiedPostList[postIndex] = {
              ...modifiedPostList[postIndex],
              ...modifiedPost,
            };
            localStorage.setItem(
              modifiedPostKey,
              JSON.stringify(modifiedPostList)
            );
          }
        })
        .catch((error) => {
          // 게시물 수정 실패 시 처리할 내용 추가
          alert("게시물 수정에 실패했습니다: " + error.message);
        });
    },
    prev_BT() {
      this.$router.go(-2);
    },
  },
  created() {
    this.boardType = this.$route.params.boardType;
    this.postId = this.$route.params.id;
  },
};
</script>

<style lang="scss" scoped>
.board_modify {
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
  }
  .section_BT {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
      &.modify_BT {
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
</style>

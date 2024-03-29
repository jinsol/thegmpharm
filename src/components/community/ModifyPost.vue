<template>
  <main class="row">
    <section class="modify-post-container">
      <form @submit.prevent="handleSubmit">
        <h1>게시물 수정</h1>
        <div class="form-group">
          <label for="title">제목</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div class="form-group">
          <label for="content">내용</label>
          <textarea id="content" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-button">수정 완료</button>
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
  },
  created() {
    this.boardType = this.$route.params.boardType;
    this.postId = this.$route.params.id;
  },
};
</script>

<style>
.modify-post-container {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.form-group textarea {
  resize: vertical;
}

.form-group .submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-group .submit-button:hover {
  background-color: #0056b3;
}
</style>

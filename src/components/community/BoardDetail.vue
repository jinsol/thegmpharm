<template>
  <main class="row">
    <ul class="board_list">
      <li class="board_list-title">
        <p>자유게시판 / 임신소식</p>
        <h3>{{ boardList.title }}</h3>
      </li>
      <li class="board_list-writer">
        <ul class="board_list-writer-profile">
          <i class="fa-solid fa-user"></i>
        </ul>
        <ul>
          <li class="board_list-writer-name">{{ boardList.author }}</li>
          <li class="board_list-writer-author">{{ boardList.date }}</li>
          <!-- <li class="board_list-writer-date">{{ boardList.date }}</li> -->
        </ul>
      </li>
      <li class="board_list-content">
        <p>{{ boardList.content }}</p>
      </li>
      <li class="board_list-btn">
        <button
          v-if="boardList.userId === userId && isLoggedIn"
          class="modify_BT"
          @click="handleModify"
        >
          수정하기
        </button>
        <button
          v-if="boardList.userId === userId && isLoggedIn"
          class="delete_BT"
          @click="handleDelete"
        >
          삭제하기
        </button>
        <button class="prev_BT" @click="prev_BT">이전으로</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      boardType: "",
      boardList: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const componentName = from.name;
      if (componentName === "board") {
        vm.boardType = "board";
      } else if (componentName === "pregnancy") {
        vm.boardType = "pregnancy";
      }
      if (componentName === "board") {
        vm.boardList = vm.$store.getters.fnGetBoardList.find(
          (item) => item.id == vm.$route.params.id
        );
      } else if (componentName === "pregnancy") {
        vm.boardList = vm.$store.getters.fnGetPregnancyList.find(
          (item) => item.id == vm.$route.params.id
        );
      }
    });
  },
  methods: {
    prev_BT() {
      this.$router.go(-1);
    },
    handleModify() {
      // 보드의 타입과 ID를 함께 전달합니다.
      this.$router.push({
        name: "modify-post",
        params: { id: this.boardList.id, boardType: this.boardType },
      });
    },
    handleDelete() {
      if (confirm("게시물을 삭제하시겠습니까?")) {
        this.$store
          .dispatch("deletePost", {
            postId: this.boardList.id,
            boardType: this.boardType,
          })
          .then(() => {
            alert("게시물 삭제 완료");
            this.$router.go(-1);
          })
          .catch((error) => {
            alert("게시물 삭제 실패: " + error.message);
          });
      }
    },
  },
  computed: {
    userId() {
      return this.$store.getters.loggedInUserId;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  .board_list {
    .board_list-title {
      p {
        font-size: 14px;
        color: var(--main-color);
      }
      h3 {
        font-size: var(-title-size);
      }
    }
    .board_list-writer {
      display: flex;
      border-bottom: var(--main-border);
      gap: 2%;
      padding: 2% 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        width: 100%;
        &.board_list-writer-profile {
          background: whitesmoke;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          i {
            color: gray;
            font-size: 34px;
          }
        }
        .board_list-writer-name {
          font-weight: bold;
          width: 100%;
        }
        .board_list-writer-author,
        .board_list-writer-date {
          color: var(--gray-color);
          margin-right: 12px;
        }
      }
    }
    .board_list-content {
      border-bottom: var(--main-border);
      min-height: 10em;
      padding: 1em 0;
      p {
        font-family: var(--body-font);
        color: gray;
        font-size: var(--body-size);
      }
    }
    .board_list-btn {
      button {
        width: 100%;
      }
    }
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
  .prev_BT {
    width: 140px;
    height: 50px;
    background-color: var(--main-color);
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>

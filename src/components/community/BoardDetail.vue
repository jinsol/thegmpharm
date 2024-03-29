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
      boardList: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    let componentName = from.name;
    next((vm) => {
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
      // 게시물 ID를 파라미터로 전달하여 수정 페이지로 이동
      this.$router.push({
        name: "modify-post",
        params: { id: this.boardList.id },
      });
    },
    handleDelete() {
      // 삭제 확인 메시지 출력
      if (confirm("게시물을 삭제하시겠습니까?")) {
        // Vuex store의 deletePost 액션 호출
        this.$store
          .dispatch("deletePost", this.boardList.id)
          .then(() => {
            // 삭제 성공 시 메시지 출력 및 목록 페이지로 이동
            alert("게시물 삭제 완료");
            this.$router.push("/");
          })
          .catch((error) => {
            // 삭제 실패 시 에러 메시지 출력
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

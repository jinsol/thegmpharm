<template>
  <main class="row">
    <!-- <section-title title="자유게시판" /> -->
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
        <button class="prev_BT" @click="prev_BT">이전으로</button>
      </li>
    </ul>
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
export default {
  components: {
    SectionTitle,
  },
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

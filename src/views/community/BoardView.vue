<template>
  <main class="row">
    <section-title
      title="자유게시판"
      sub_title="자유롭게 게시글을 적을 수 있습니다"
    />
    <!-- <board-list /> -->
    <board-list
      :boardList="dataBoardList"
      :totalItems="boardList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <button class="board_edit_BT">
      <router-link to="/boardcreate">글쓰기</router-link>
    </button>
    <pagination
      :totalItems="dataBoardList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import BoardList from "@/components/community/BoardList.vue";
import Pagination from "@/components/layout/Pagination.vue";

export default {
  name: "Board",
  components: {
    SectionTitle,
    BoardList,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      boardList: [],
    };
  },
  // created() {
  //   this.$store.dispatch("init__Board");
  // },
  // computed: {
  //   dataBoardList() {
  //     return this.$store.getters.fnGetBoardList;
  //   },
  // },
  created() {
    const localBoardList = JSON.parse(localStorage.getItem("boardList"));
    if (localBoardList) {
      this.$store.commit("set__BoardList", localBoardList);
    } else {
      this.$store.dispatch("init__Board");
    }
  },
  computed: {
    dataBoardList() {
      const boardList = this.$store.getters.fnGetBoardList.slice(); // 복사본 생성
      return boardList.reverse();
    },
  },
};
</script>
<style lang="scss" scoped>
.board_edit_BT {
  width: 140px;
  height: 50px;
  background-color: var(--main-color);
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

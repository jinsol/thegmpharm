<template>
  <main class="row">
    <section-title title="임밍아웃" sub_title="임신 소식 넣는 곳?" />
    <board-list
      :boardList="dataPregnancyList"
      :totalItems="dataPregnancyList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <button class="board_edit_BT">
      <router-link to="/boardcreate">글쓰기</router-link>
    </button>
    <pagination
      :totalItems="dataPregnancyList.length"
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
  name: "Pregnancy",
  components: {
    SectionTitle,
    BoardList,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      pregnancyList: [],
    };
  },
  // created() {
  //   this.$store.dispatch("init__Pregnancy");
  // },
  // computed: {
  //   dataPregnancyList() {
  //     return this.$store.getters.fnGetPregnancyList;
  //   },
  // },
  created() {
    const localBoardList = JSON.parse(localStorage.getItem("pregnancyList"));
    if (localBoardList) {
      this.$store.commit("set__Pregnancy", localBoardList);
    } else {
      this.$store.dispatch("init__Pregnancy");
    }
  },
  computed: {
    dataPregnancyList() {
      const boardList = this.$store.getters.fnGetPregnancyList.slice(); // 복사본 생성
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

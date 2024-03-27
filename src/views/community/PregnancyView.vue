<template>
  <main class="row">
    <section-title title="임밍아웃" sub_title="임신 소식 넣는 곳?" />
    <board-list
      :boardList="dataPregnancyList"
      :totalItems="dataPregnancyList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <div class="board_edit_BT">
      <router-link to="/boardcreate">
        <i class="fa-solid fa-pen-to-square"></i>
        글쓰기
      </router-link>
    </div>
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
  display: flex;
  justify-content: flex-end;
  margin: 2% 0;
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid gray;
    color: gray;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: clamp(13px, 2.5vw, 16px);
    padding: 10px 20px 8px;
  }
}
</style>

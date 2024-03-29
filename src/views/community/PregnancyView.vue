<template>
  <main class="row">
    <section-title
      title="임신소식"
      sub_title="임신 소식을 알리고 지엠팜만의 특별한 혜택을 만나보세요!"
    />
    <board-list
      :boardList="dataPregnancyList"
      :totalItems="dataPregnancyList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <board-write />
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
import BoardWrite from "@/components/community/BoardWrite.vue";
import Pagination from "@/components/layout/Pagination.vue";

export default {
  name: "Pregnancy",
  components: {
    SectionTitle,
    BoardList,
    BoardWrite,
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

<style lang="scss" scoped></style>

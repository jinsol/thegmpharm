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
    <board-write />
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
import BoardWrite from "@/components/community/BoardWrite.vue";
import Pagination from "@/components/layout/Pagination.vue";

export default {
  name: "Board",
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
      boardList: [],
    };
  },
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
<style lang="scss" scoped></style>

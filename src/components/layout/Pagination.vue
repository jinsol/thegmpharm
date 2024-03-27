<template>
  <div class="pagination row">
    <button class="prev" @click="previousPage">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button
      class="page_num"
      v-for="page in displayedPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
    <button class="next" @click="nextPage">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedPages() {
      const pages = [];
      const startPage = Math.max(1, this.currentPage - 5);
      const endPage = Math.min(this.pageCount, startPage + 9);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.$emit("update:currentPage", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4% auto;
  button.prev,
  button.next {
    border: 1px solid lightgray;
    color: gray;
    font-weight: 100;
    width: 40px;
    height: 40px;
    font-size: 12px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button.page_num {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 14px;
    color: gray;
    cursor: pointer;
    &.active {
      color: var(--main-color);
      font-weight: b;
    }
  }
}
</style>

<template>
  <section v-if="isLoggedIn">
    <div class="board_edit_BT">
      <router-link to="/boardcreate">
        <i class="fa-solid fa-pen-to-square"></i>
        글쓰기
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initLoginState");
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
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

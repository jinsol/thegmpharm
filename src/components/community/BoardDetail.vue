<template>
  <main class="row">
    <h2>제목 : {{ boardList.title }}</h2>
    <p>내용 : {{ boardList.content }}</p>
    <button class="prev_BT" @click="prev_BT">이전</button>
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
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
  margin-top: 4%;
  margin-bottom: 10%;
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

main.mobile {
  padding: 0 2%;
}
</style>

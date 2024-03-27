<template>
  <section class="event_header">
    <ul class="event_header-box">
      <li
        v-for="(item, index) in menuCategory"
        :key="index"
        :class="{ active: selectedCategory == item }"
        @click="changeCategory(item)"
      >
        {{ item }}
      </li>
      <li class="event_header-box-background"></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: "진행중 이벤트",
    };
  },
  props: ["menuCategory"],
  methods: {
    changeCategory(category) {
      this.selectedCategory = category;
      this.$emit("changeCategory", category);
      const backgroundElement = document.querySelector(
        ".event_header-box-background"
      );
      backgroundElement.style.left =
        this.menuCategory.indexOf(category) * 50 + "%";
    },
  },
};
</script>

<style lang="scss" scoped>
.event_header {
  margin-bottom: 4%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 50px;
    position: relative;

    li {
      transition: all 0.5s;
      color: gray;
      cursor: pointer;
      &:not(:last-child) {
        z-index: 1;
      }
      flex-basis: 50%;
      text-align: center;
      padding: 2% 0;
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      &.active {
        color: var(--main-color);
        font-weight: bolder;
      }
    }
    .event_header-box-background {
      position: absolute;
      width: 48%;
      height: 80%;
      transform: translateX(2%);
      border-radius: 50px;
      background-color: white;
      transition: all 0.5s ease-in-out;
      left: 0;
      border: 1px solid var(--gray-color);
      box-shadow: 0 0 10px 0px var(--gray-color);
    }
  }
}
</style>

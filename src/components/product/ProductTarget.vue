<template>
  <div class="product__target row">
    <ul>
      <li v-for="(item, index) in productTarget" :key="index">
        <button
          type="button"
          @click="onClick(item.target)"
          :class="{ active: onTarget == item.target }"
        >
          {{ item.target }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductTarget",
  data() {
    return {
      onTarget: "전체",
    };
  },
  props: ["productTarget"],
  methods: {
    onClick(target) {
      this.onTarget = target;
      this.$emit("click", target);
    },
  },
};
</script>

<style lang="scss" scoped>
.product__target {
  ul {
    background: whitesmoke;
  }
  li {
    display: inline-block;
    margin-right: 1%;

    button {
      color: lightgray;
      padding: 8px;
      font-weight: 100;
      &.active {
        color: var(--main-color);
        font-weight: bolder;
      }
    }
  }
}
</style>

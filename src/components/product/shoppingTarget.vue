<template>
  <div class="product__target row">
    <ul>
      <li v-for="(item, index) in productTarget" :key="index">
        <button
          v-for="(target, index) in item.target"
          :key="index"
          type="button"
          @click="onClick(target)"
          :class="{ active: onTarget == target }"
        >
          {{ target }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingTarget",
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

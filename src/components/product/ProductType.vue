<template>
  <div class="product__type row">
    <ul>
      <li v-for="(item, index) in productType" :key="index">
        <button
          type="button"
          @click="onClick_type(item.name)"
          :class="{ active: activeName == item.name }"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductType",
  props: ["productType"],
  data() {
    return {
      activeName: "전체",
    };
  },
  methods: {
    onClick_type(type) {
      this.activeName = type;
      this.$emit("click", type);
    },
  },
};
</script>

<style lang="scss" scoped>
.product__type {
  margin: 1.4% auto;

  ul {
    li {
      display: inline-block;
      margin-right: 1%;
      button {
        background-color: white;
        color: var(--main-color);
        border: 1px solid var(--main-color);
        padding: 8px 18px;
        border-radius: 50px;
        &.active {
          background-color: var(--main-color);
          color: white;
        }
      }
    }
  }
}
</style>

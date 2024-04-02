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
  mounted() {
    const items = this.$el.querySelectorAll(".product__type ul li");
    gsap.from(items, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.8,
      stagger: 0.1, // Stagger time between animations
    });
  },
};
</script>

<style lang="scss" scoped>
.product__type {
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: center;
    gap: 12px;
    li {
      button {
        font-size: var(--body-size);
        display: flex;
        line-height: 1em;
        padding: 15px 20px 12px;
        background-color: white;
        color: var(--main-color);
        border: 1px solid var(--main-color);
        transform: translateY(0);
        border-radius: 50px;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 8px 8px var(--main-color-hover);
          background-color: var(--main-color);
          color: #fff;
        }
        &.active {
          background-color: var(--main-color);
          color: white;
        }
      }
    }
  }
}
</style>

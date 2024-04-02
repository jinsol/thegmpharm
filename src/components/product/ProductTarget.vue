<template>
  <div class="product__target row" ref="productTarget">
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
  mounted() {
    gsap.from(this.$refs.productTarget, {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      ease: "power2.inOut",
    });
    const items = this.$el.querySelectorAll(".product__target ul li");
    gsap.from(items, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 1.2,
      stagger: 0.1, // Stagger time between animations
    });
  },
};
</script>

<style lang="scss" scoped>
.product__target {
  margin: 0 auto;
  background-color: var(--main-color-hover);
  padding: 1em 0;
  border-radius: 10px;
  margin-top: 1%;
  ul {
    display: flex;
    justify-content: center;
    gap: 6px;
    li {
      button {
        color: lightgray;
        padding: 8px;
        font-weight: 100;
        font-size: var(--small-body-size);
        transition: all 0.5s;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background-color: var(--main-color);
          transition: all 0.5s;
        }
        &:hover {
          color: var(--main-color);
          font-weight: bolder;
        }
        &.active {
          color: var(--main-color);
          font-weight: bolder;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

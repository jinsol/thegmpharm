<template>
  <main class="row">
    <section-title title="장바구니" sub_title="장바구니를 확인할 수 있습니다" />
    <cart-list />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import CartList from "@/components/myPage/CartList.vue";

export default {
  name: "Cart",
  components: {
    SectionTitle,
    CartList,
  },
};
</script>

<style lang="scss" scoped></style>

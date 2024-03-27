<template>
  <main class="row">
    <section-title title="트니프렌즈" sub_title="관련된 내용을 입력하세요" />
    <img src="@/assets/image/Teuni_01.jpg" alt="" />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
export default {
  name: "Teuni",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: block;
  img {
    width: 100%;
  }
}
</style>

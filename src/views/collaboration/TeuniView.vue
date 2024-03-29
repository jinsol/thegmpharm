<template>
  <main class="row">
    <!-- <section-title title="트니프렌즈" sub_title="관련된 내용을 입력하세요" /> -->
    <img src="@/assets/image/Teuni_01.jpg" alt="" />
    <section class="teunu_01"></section>
    <section class="teunu_02"></section>
    <section class="teunu_03"></section>
    <section class="teunu_04"></section>
    <section class="teunu_05"></section>
    <section class="teunu_06"></section>
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
  margin: 0 auto;
  img {
    width: 100%;
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .teunu_01 {
    background: blue;
  }
  .teunu_02 {
    background: red;
  }
  .teunu_03 {
    background: green;
  }
  .teunu_04 {
    background: yellow;
  }
  .teunu_05 {
    background: purple;
  }
  .teunu_06 {
    background: pink;
  }
}
</style>

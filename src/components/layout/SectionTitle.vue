<template>
  <div class="section__title row">
    <h2>{{ title }}</h2>
    <p>{{ sub_title }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["title", "sub_title"],
};
</script>

<style lang="scss" scoped>
.section__title {
  padding: 2em 0 4em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  h2 {
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: lighter;
    color: gray;
  }
}
</style>

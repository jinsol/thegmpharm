<template>
  <section class="section__title">
    <h2>{{ title }}</h2>
    <p>{{ sub_title }}</p>
  </section>
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
  text-align: center;
  transition: all 0.5s;

  h2 {
    font-size: clamp(32px, 2.5vw, 42px);
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    font-size: clamp(12px, 2.5vw, 18px);
    font-weight: 300;
    color: gray;
    font-family: var(--body-font);
  }
}

@media screen and (max-width: 900px) {
  .section__title {
    padding: 0 0 1em;
    text-align: left;

    p {
      font-size: 16px;
    }
  }
}
</style>

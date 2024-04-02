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
  mounted() {
    gsap.from(".section__title h2", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".section__title p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5, // 타이틀 애니메이션보다 0.5초 지연
      ease: "power2.out",
    });
  },
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
    line-height: 1em;
  }
  p {
    font-size: clamp(12px, 2.5vw, 18px);
    font-weight: 300;
    color: gray;
    font-family: var(--body-font);
    line-height: 1em;
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

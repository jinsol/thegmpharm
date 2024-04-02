<template>
  <section class="pill_title">
    <ul class="pill_title-top">
      <li>
        <img :src="`./image/PillDoc_barcode.png`" alt="" />
      </li>
      <li>
        <img :src="`./image/PillDoc_logo.png`" alt="" />
      </li>
    </ul>
    <article class="pill_title-main">
      <h3 class="pill_title-main-title">
        <img :src="`./image/pildoc_logo.png`" alt="" />
      </h3>
      <ul class="pill_title-main-text">
        <li>
          <p>
            <i><span class="main-color">지엠팜</span> 전문약사</i>
          </p>
        </li>
        <li>
          <p><i>X</i></p>
        </li>
        <li>
          <p><i>약 짓는 오빠들</i></p>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  mounted() {
    gsap.from(".pill_title-main-title", { opacity: 0, y: 50 });
    gsap.from(".pill_title-main-text li", {
      opacity: 0,
      y: 50,
      stagger: 0.2, // 요소들이 순차적으로 등장하도록 설정
    });
  },
};
</script>

<style lang="scss" scoped>
.pill_title {
  .pill_title-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid black;
    padding: 2% 0;
  }
  .pill_title-main {
    padding: 4% 0;
    text-align: center;
    .pill_title-main-title {
      font-size: 40px;
    }
    ul {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 20px;
      font-size: 30px;
      padding-top: 2%;
      font-weight: bold;
      letter-spacing: -2px;

      li {
        p {
          padding: 10px;
          font-size: var(--title-size);
        }
        .main-color {
          color: var(--main-color);
        }
      }
    }
  }
}
</style>

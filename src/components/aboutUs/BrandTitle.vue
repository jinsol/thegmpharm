<template>
  <section class="brand-title">
    <h2 class="title_box">
      <span>전문 약사들이 만든</span>
      <span><b>프리미엄 브랜드</b></span>
    </h2>
    <p class="text_box">
      <span>지엠팜은 제약 회사에서</span>
      <span>신약 개발을 하는 <b>연구원 출신</b></span>
      <span>약사들이 만든 회사입니다.</span>
    </p>
    <ul class="brand__title-image">
      <li><img src="/public/image/brandstory_sec01_1.png" alt="" /></li>
      <li><img src="/public/image/brandstory_sec01_2.png" alt="" /></li>
      <li><img src="/public/image/brandstory_sec01_3.png" alt="" /></li>
      <li><img src="/public/image/brandstory_sec01_4.png" alt="" /></li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
  display: block;
}

.brand-title {
  text-align: center;
  margin: 4% 0;
  .title_box {
    span {
      font-size: 28px;
      line-height: 1.2em;
      font-weight: 100;
      color: gray;
      b {
        font-weight: bold;
        color: black;
      }
    }
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 30px;
      background-color: var(--main-color);
      margin: 4% auto;
    }
  }
  .text_box {
    span {
      font-family: "Gothic A1";
      color: gray;
    }
    b {
      color: var(--main-color);
    }
  }
  .brand__title-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4%;
    li {
      width: 20%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.brand-title.mobile {
  .brand__title-image {
    flex-direction: column;
    li {
      width: 70%;
      margin: 4% 0;
    }
  }
}
</style>

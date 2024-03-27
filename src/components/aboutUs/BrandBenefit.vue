<template>
  <section class="brand_benefit">
    <ul>
      <li class="text_box text-right">
        <h3 class="text_box-title">전문 약사</h3>
        <p>
          <span><b>약리학(pharmacology)</b>적인 접근으로</span>
          <span>제품을 기획하며 <b>약제학(Pharmaceutics)</b>을 바탕으로</span>
          <span>우수한 제품을 출시합니다.</span>
        </p>
      </li>
      <li class="image_box">
        <img src="/public/image/brandstory_sec02_1.png" alt="" />
      </li>
    </ul>
    <ul>
      <li class="image_box text-right">
        <img src="/public/image/brandstory_sec02_2.png" alt="" />
      </li>
      <li class="text_box">
        <h3 class="text_box-title">프리미엄</h3>
        <p>
          <span>지엠팜은 제품 출시를 서두르지 않습니다.</span>
          <span>하나의 제품이 세상에 나오기까지 </span>
          <span>길게는 <b>수년의 시간</b>이 걸립니다. </span>
          <span><b>끊임없이 연구하고 고민하며 </b> </span>
          <span>만족할 때까지 반복합니다.</span>
        </p>
      </li>
    </ul>
    <ul>
      <li class="text_box text-right">
        <h3 class="text_box-title">여러분과 함께</h3>
        <p>
          <span>내 아이가 아프지 않고 건강하게 자라길 바라는</span>
          <b>부모의 마음을,</b>
          <span>잠든 아내를 바라보는</span>
          <b>남편의 마음을,</b>
          <span>부모님의 건강을 염려하는</span>
          <b>자식의 마음을,</b>
          <span>그 마음을 담으려 합니다.</span>
        </p>
      </li>
      <li class="image_box">
        <img src="/public/image/brandstory_sec02_3.png" alt="" />
      </li>
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

.brand_benefit {
  padding: 6% 0;
  border-top: 1px solid var(--gray-color);
  border-bottom: 1px solid var(--gray-color);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      width: 46%;
      &:nth-child(2) {
        padding: 8% 0;
      }
    }
    .text_box {
      .text_box-title {
        font-size: 24px;
        line-height: 2.6em;
      }
      p {
        color: gray;
        font-size: 18px;
        line-height: 160%;
        & span {
          font-family: "Gothic A1";
        }
        & b {
          color: var(--main-color);
        }
      }
    }
    &:last-child {
      .text_box p b {
        margin-bottom: 2%;
        display: block;
      }
    }
  }
}

.brand_benefit.mobile {
  ul {
    flex-direction: column;
    li {
      text-align: center;
      width: 90%;
      &.text-right {
        text-align: center;
      }
      p span {
        display: inline;
        word-break: keep-all;
        font-size: 16px;
      }
    }
    &:nth-child(2) {
      flex-direction: column-reverse;
      margin-bottom: 10%;
    }
    &:last-child {
      .text_box p b {
        margin-bottom: 2%;
        display: block;
      }
    }
  }
}
</style>

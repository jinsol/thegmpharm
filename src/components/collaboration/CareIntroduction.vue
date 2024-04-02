<template>
  <section class="care_introduction row">
    <h2 class="care_introduction-title">
      <span>지엠팜케어는 지엠팜의 건강기능식품을 구매하면</span>
      <span
        ><b
          >보험의 혜택을 드리는 <strong>"소비자케어프로그램"</strong> 입니다.</b
        ></span
      >
    </h2>
    <ul class="care_introduction-contents">
      <li>*정상가보다 저렴하게 건강기능식품을 구매하실 수 있습니다.</li>
      <li>*복잡한 절차 없이 카카오톡을 통해 간편하게 보험을 가입합니다.</li>
      <li>*질병 이력과 상관 없이 무심사로 진행합니다.</li>
      <li>*기존에 보험을 가지고 있더라도 중복 보장이 가능합니다.</li>
      <li>*보험료는 전액 지엠팜이 부담합니다.</li>
    </ul>
    <p>
      <!-- <img src="../../../public/image/gmpharmCare_collaboration.png" alt="" /> -->
      <img
        :src="`./image/gmpharmCare_collaboration.png`"
        alt="지엠팜이 창립 10주년을 맞이하여 미래에셋생명과 함께 콜라보레이션을 진행합니다."
      />
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
  display: block;
}
.care_introduction {
  text-align: center;
  .care_introduction-title {
    font-size: clamp(18px, 2.5vw, 28px);
    font-weight: lighter;
    transition: all 0.3s;
    margin-bottom: 20px;
    line-height: 140%;
    color: gray;
    b {
      color: black;
      strong {
        color: var(--main-color);
      }
    }
  }
  .care_introduction-contents {
    color: gray;
    text-align: center;
    padding: 2% 0 8%;
    li {
      font-family: var(--body-font);
      font-size: 16px;
      line-height: 140%;
      // display: inline;
    }
  }
}
</style>

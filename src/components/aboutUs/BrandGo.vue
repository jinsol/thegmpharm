<template>
  <section class="brand_go row">
    <ul>
      <li class="text_box text-right">
        <span><b>지엠팜</b>은 나와 내 가족,</span>
        <span>사랑하는 모든 사람이 <b>건강하고</b></span>
        <span><b>행복할 수 있도록</b> 노력합니다.</span>
        <button class="gotoBT">
          <router-link to="/shopping"
            >건강기능식품 보러가기 <i class="fa-solid fa-angle-right"></i
          ></router-link>
        </button>
      </li>
      <li class="image_box">
        <img :src="`./image/brandstory_sec03_1.png`" alt="" />
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

.brand_go {
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14% 0 8%;
    li {
      width: 47%;
      font-size: 30px;
      line-height: 120%;
      & span {
        font-family: "Gothic A1";
        color: gray;
        letter-spacing: -1.6px;
      }
      & b {
        color: var(--main-color);
      }
      .gotoBT {
        background-color: var(--main-color);
        color: white;
        padding: 8px 20px;
        margin-top: 12%;
      }
    }
  }
}

.brand_go.mobile {
  ul {
    flex-direction: column;
    li {
      width: 90%;
      text-align: left;
      &.image_box {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

<template>
  <section class="teuni_main_section">
    <ul>
      <li class="teuni_main_section-title row">
        <h3>지엠팜 X 트니프렌즈</h3>
        <h4>안녕? 우리 친구하자!</h4>
        <p>
          지엠팜에 찾아온 트니프렌즈, 트니프렌즈와 함께 지엠팜 친구들도 건강하고
          튼튼해져요!
        </p>
      </li>
      <li class="teuni_main_section-image">
        <img :src="`./image/teuni_section1_main.png`" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.teuni_main_section {
  background-image: linear-gradient(to bottom, #5dc1f2, #d8f5fd);
  height: 200vh; // 임시
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 6%;
  overflow: hidden;
  & > ul {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    .teuni_main_section-title {
      text-align: center;
      color: white;
      h3 {
        font-size: clamp(28px, 2.5vw, 62px);
      }
      h4 {
        font-size: clamp(18px, 2.5vw, 28px);
      }
      p {
        font-size: clamp(14px, 2.5vw, 24px);
        padding-top: 2em;
      }
      & > * {
        font-family: var(--collab-font);
      }
    }
    .teuni_main_section-image {
      position: absolute;
      bottom: 0;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      height: 100vh;
    }
  }
}
</style>

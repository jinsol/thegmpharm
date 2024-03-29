<template>
  <main>
    <section class="teuni_01">
      <article class="teuni_01-text">
        <div class="teuni_01-text-title">
          <h3>지엠팜 X 트니프렌즈</h3>
          <p>안녕? 우리 친구하자!</p>
        </div>
        <div class="teuni_01-text-sub">
          <p>지엠팜에 찾아온 트니프렌즈</p>
          <p>트니프렌즈와 함께 지엠팜 친구들도 건강하고 튼튼해져요!</p>
        </div>
      </article>
      <article class="teuni_01-img">
        <div class="teuni_01-img-ballon">
          <span class="teuni_01-img-ballon1"
            ><img src="@/assets/image/teuni_section1_balloon1.png" alt=""
          /></span>
          <span class="teuni_01-img-ballon2"
            ><img src="@/assets/image/teuni_section1_balloon2.png" alt=""
          /></span>
          <span class="teuni_01-img-ballon3"
            ><img src="@/assets/image/teuni_section1_balloon3.png" alt=""
          /></span>
        </div>
        <span class="teuni_01-img-main"
          ><img src="@/assets/image/teuni_section1_main.png" alt=""
        /></span>
      </article>
    </section>
    <section class="teuni_02">
      <img
        class="teuni_zeri_airplane"
        src="@/assets/image/teuni_zeri_airplane.png"
        alt=""
      />
      <div class="boxwrap row">
        <div class="text character">
          <p>
            <span>정체를 알 수 없는 귀여운 악마 째리!</span>
            <span>
              칼슘과 비타민D를 섭취할 수 있는 성장기 아이들의 필수아이템!
            </span>
            <span>말랑말랑한 사과맛 구미!</span>
          </p>
        </div>
        <div class="img character_zeri">
          <img src="@/assets/image/teuni_zeri.png" alt="" />
        </div>
      </div>
    </section>
    <section class="teuni_03"></section>
    <section class="teuni_04"></section>
    <section class="teuni_05"></section>
    <section class="teuni_06"></section>
  </main>
</template>

<script>
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Teuni",
  components: {},
  mounted() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".teuni_02",
          start: "20% 100%",
          end: "100% 100%",
          scrub: 1,
          markers: true,
        },
      })
      .to(
        ".teuni_zeri_airplane",
        { x: -400, y: -100, rotate: -30, ease: "none", duration: 5 },
        0
      )
      .to(
        ".character_zeri img",
        { x: 50, y: 100, rotate: 10, ease: "none", duration: 5 },
        0
      );
  },
};
</script>

<style lang="scss" scoped>
main {
  section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .teuni_01 {
    background-image: linear-gradient(to bottom, #5dc1f2, #d8f5fd);
    height: 200vh; // 임시
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 6%;
    .teuni_01-text {
      color: white;
      text-align: center;
      .teuni_01-text-title {
        padding: 2em 0;
        line-height: 1;
        h3 {
          font-size: 60px;
          font-weight: bold;
        }
        p {
          font-size: 42px;
          font-family: var(--collab-font);
          font-weight: bold;
        }
      }
      .teuni_01-text-sub {
        padding: 1em 0;
      }
    }
    .teuni_01-img {
      position: relative;
      flex: 1;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      .teuni_01-img-ballon {
        position: relative;
        width: 100%;
        span {
          position: sticky;
          height: auto;
          top: 300px;
          display: inline-block;
        }
        .teuni_01-img-ballon1 {
          left: 80%;
          transform: translateX(-50%);
        }
        .teuni_01-img-ballon2 {
          left: 15%;
        }
        .teuni_01-img-ballon3 {
          left: 10%;
        }
      }
      .teuni_01-img-main {
        position: relative;
        z-index: 2;
      }
    }
  }
  .teuni_02 {
    background-color: #e73650;
    position: relative;
    .teuni_zeri_airplane {
      position: absolute;

      width: max-content;
    }
    .boxwrap {
      display: flex;
      justify-content: space-between;
      .text {
        width: 70%;
      }
      .img {
        width: 30%;
      }
      .text.character span {
        font-family: var(--collab-font);
        color: white;
        display: block;
        font-size: 40px;
      }
    }
  }
  .teuni_03 {
    background: #fff353;
  }
  .teuni_04 {
    background: #b3d344;
  }
  .teuni_05 {
    background: #f6a808;
  }
  .teuni_06 {
    background: #ef85ad;
  }
  @media screen and (max-width: 900px) {
    padding: 0;
    .teuni_01 {
      height: 120vh;
    }
  }
}
</style>

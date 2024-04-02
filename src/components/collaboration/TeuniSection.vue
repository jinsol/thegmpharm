<template>
  <section class="teuni_section">
    <ul class="row">
      <li class="teuni_section-contents">
        <ul>
          <li class="text_box">
            <h3>
              <img :src="teuniList.titleSrc" :alt="teuniList.title" />
            </h3>
            <p>{{ teuniList.content }}</p>
          </li>
          <li class="img_box">
            <div>
              <img
                class="rotate-animation"
                :src="teuniList.characterSrc"
                alt=""
              />
            </div>
          </li>
        </ul>
      </li>
      <li class="teuni_section-btn_box">
        <a href="#"
          >{{ teuniList.button }} <i class="fa-solid fa-angle-right"></i
        ></a>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ["teuniList"],
  mounted() {},
  //   mounted() {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".img_box div img",
  //           start: "20% 100%",
  //           end: "100% 100%",
  //           scrub: 1,
  //         },
  //       })
  //       //   .to(
  //       //     ".teuni_zeri_airplane",
  //       //     { x: -400, y: -100, rotate: -30, ease: "none", duration: 5 },
  //       //     0
  //       //   )
  //       .to(
  //         ".img_box div img",
  //         { x: 50, y: 100, rotate: 10, ease: "none", duration: 5 },
  //         0
  //       );
  //   },
};
</script>

<style lang="scss" scoped>
.teuni_section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  perspective: 900px;
  & > ul {
    position: relative;
    padding: 10% 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .teuni_section-contents {
      height: 100%;
      ul {
        display: flex;
        gap: 2%;
        height: inherit;

        .text_box {
          flex-basis: 70%;
          display: flex;
          align-content: center;
          flex-wrap: wrap;
          color: white;

          & > * {
            font-family: var(--collab-font);
            font-size: var(--teuni-intro-size);
            word-break: keep-all;
          }
        }
        .img_box {
          flex-basis: 30%;
          div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .teuni_section-btn_box {
      display: flex;
      justify-content: center;
      a {
        display: flex;
        font-family: var(--collab-font);
        font-size: var(--teuni-intro-size);
        background: white;
        padding: 20px 70px;
        border-radius: 50px;
        align-items: center;
      }
    }
  }
  @media screen and (max-width: 900px) {
    & {
      padding: 0 4%;
    }
    ul {
      justify-content: flex-start;
      .teuni_section-contents {
        height: 80%;
        ul {
          flex-direction: column;
          .img_box {
            div {
              img {
                width: 50%;
              }
            }
          }
        }
      }
      .teuni_section-btn_box {
        margin-top: 4%;
        a {
          padding: 20px 40px;
          font-size: 18px;
        }
      }
    }
  }
  .rotate-animation {
    transition: transform 0.5s ease; /* 회전 애니메이션에 대한 트랜지션 설정 */
  }
  .rotate-animation.rotate {
    transform: rotate(5deg) translate(20px, 20px); /* 회전 각도 설정 */
  }
  &.row-reverse .rotate-animation.rotate {
    transform: rotate(-10deg) translate(-20px, -20px); /* 회전 각도 설정 */
  }
  &.row-reverse .teuni_section-contents ul {
    flex-direction: row-reverse;
  }
}
</style>

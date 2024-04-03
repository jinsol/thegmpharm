<template>
  <section class="pill_introduction">
    <ul class="pill_introduction-contents">
      <li class="pill_introduction-contents-gmp">
        <div class="img">
          <span></span>
          <img :src="`./image/pilldoc_p1.png`" alt="서진혁" />
        </div>
        <div class="text">
          <h4><i>서진혁</i></h4>
          <p><i>지엠팜 대표약사</i></p>
        </div>
      </li>
      <li class="pill_introduction-contents-gmp">
        <div class="img">
          <span></span>
          <img :src="`./image/pilldoc_p2.png`" alt="전윤식" />
        </div>
        <div class="text">
          <h4><i>전윤식</i></h4>
          <p><i>지엠팜 대표약사</i></p>
        </div>
      </li>
      <li class="pill_introduction-contents-pill">
        <div class="img">
          <span></span>
          <img :src="`./image/pilldoc_p3.png`" alt="임성용" />
        </div>
        <div class="text">
          <h4><i>임성용</i></h4>
          <p><i>약 짓는 오빠들</i></p>
        </div>
      </li>
      <li class="pill_introduction-contents-pill">
        <div class="img">
          <span></span>
          <img :src="`./image/pilldoc_p4.png`" alt="이정철" />
        </div>
        <div class="text">
          <h4><i>이정철</i></h4>
          <p><i>약 짓는 오빠들</i></p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    const gmpElements = document.querySelectorAll(
      ".pill_introduction-contents li"
    );
    gsap.utils.toArray(gmpElements).forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "20% 100%",
            end: "100% 100%",
            scrub: 1,
          },
        })
        .fromTo(
          element,
          {
            transform: "translateY(20%)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
            duration: 1,
            ease: "none",
          },
          2
        );
    });
  },
};
</script>

<style lang="scss" scoped>
.pill_introduction {
  padding: 2% 0;
  border-bottom: 3px solid black;
  .pill_introduction-contents {
    display: flex;
    flex-direction: column;
    gap: 60px;
    position: relative;
    li {
      display: flex;
      // position: sticky;
      position: relative;
      &.pill_introduction-contents-gmp {
        .text {
          text-align: left;
        }
      }
      &.pill_introduction-contents-pill {
        position: absolute;
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          position: relative;
          right: 4%;
        }
      }
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: 10%;
      }
      &:nth-child(3) {
        right: 10%;
      }
      &:nth-child(4) {
        right: 0;
        bottom: 0;
      }

      align-items: flex-end;

      .img {
        position: relative;
        span {
          display: block;
          width: 100%;
          height: 80%;
          bottom: 0;
          position: absolute;
          background-color: var(--main-color);
          transform: skewX(-10deg);
        }
        img {
          z-index: 2;
          position: relative;
        }
      }
      .text {
        h4 {
          font-size: 50px;
          font-weight: bold;
        }
        p {
          font-size: 38px;
          letter-spacing: -2px;
          font-family: var(--body-font);
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .pill_introduction-contents {
      align-items: center;
      li {
        &.pill_introduction-contents-pill {
          position: relative;
        }
        &:nth-child(1) {
          left: 0;
        }
        &:nth-child(2) {
          left: 0;
        }
        &:nth-child(3) {
          right: 0;
        }
        &:nth-child(4) {
          right: 0;
        }
        .img {
          span {
            left: 10%;
            width: 85%;
          }
        }
        .text {
          z-index: 1;
          p {
            i {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
</style>

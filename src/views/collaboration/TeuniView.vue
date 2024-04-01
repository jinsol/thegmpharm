<template>
  <main>
    <teuni-main-section />

    <!-- <section class="teuni_02">
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
    <section class="teuni_06"></section> -->
    <teuni-section
      v-for="(item, index) in teuniList"
      :key="index"
      :teuniList="item"
      :ref="`imgBox${index}`"
      class="img_box"
    />
  </main>
</template>

<script>
import TeuniMainSection from "@/components/collaboration/TeuniMainSection.vue";
import TeuniSection from "@/components/collaboration/TeuniSection.vue";

import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "Teuni",
  components: {
    TeuniMainSection,
    TeuniSection,
  },
  data() {
    return {
      teuniList: [
        {
          title: "째리",
          titleSrc: "@/../public/image/teuni_zeri_title.png",
          characterSrc: "@/../public/image/teuni_zeri.png",
          content:
            "정체를 알 수 없는 귀여운 악마 째리. 칼슘과 비타민D를 섭취할 수 있는 성장기 아이들의 필수아이템! 말랑말랑한 사과맛 구미!",
          button: "트니프렌즈 키즈 칼슘디구미 만나기",
        },
        {
          title: "키키",
          titleSrc: "@/../public/image/teuni_kiki_title.png",
          characterSrc: "@/../public/image/teuni_kiki.png",
          content:
            "노는 게 제일 좋고 항상 기분이 좋은 키키. 종합영양제도 매일 기분 좋게 먹어요! 입 안에서 사르르 녹는 오디티정으로 간편하고 맛있게!",
          button: "트니프렌즈 키즈 멀티비타민 오디티 만나기",
        },
        {
          title: "라노",
          titleSrc: "@/../public/image/teuni_rano_title.png",
          characterSrc: "@/../public/image/teuni_rano.png",
          content:
            "내일로 미루는 걸 좋아하는 라노도 절대 미루지 않는 눈 건강! 베타카로틴과 비타민A로 가득 채운 오렌지맛 초소형 츄어블",
          button: "트니프렌즈 키즈 아이케어 오디티 만나기",
        },
        {
          title: "리보",
          titleSrc: "@/../public/image/teuni_ribo_title.png",
          characterSrc: "@/../public/image/teuni_ribo.png",
          content:
            "말랑말랑한 파워 오지라퍼 리보가 지엠팜 친구들에게 추천해요! 입 안에서 톡톡! 신나는 축제를 즐겨봐!",
          button: "트니프렌즈 톡톡 키즈 유산균 만나기",
        },
        {
          title: "치코",
          titleSrc: "@/../public/image/teuni_chico_title.png",
          characterSrc: "@/../public/image/teuni_chico.png",
          content:
            "똑똑한 잔소리쟁이 치코가 지엠팜 친구들에게 전하는 사랑의 잔소리! 내 짝꿍처럼 튼튼하고 건강하고 싶다면!",
          button: "트니프렌즈 면역 키즈비타젤리 만나기",
        },
      ],
    };
  },
  // mounted() {
  //   this.teuniList.forEach((item, index) => {
  //     const imgBox = this.$refs[`imgBox${index}`][0];
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: imgBox,
  //           start: "20% 100%",
  //           end: "100% 100%",
  //           scrub: 1,
  //           markers: true,
  //         },
  //       })
  //       .to(imgBox, {
  //         x: 50 + index * 20,
  //         y: 100 + index * 20,
  //         rotate: 10 + index * 2,
  //         ease: "none",
  //         duration: 5,
  //       });
  //   });
  // },
  mounted() {
    gsap.utils.toArray(".img_box div img").forEach((selector) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "20% 100%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
        onUpdate: (self) => {
          if (self.direction === 1) {
            selector.classList.add("rotate"); // 아래로 스크롤 시 회전 클래스 추가
          } else {
            selector.classList.remove("rotate"); // 위로 스크롤 시 회전 클래스 제거
          }
        },
      });
    });
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
    &:nth-child(2) {
      background-color: #e73650;
      color: #e73650;
    }
    &:nth-child(3) {
      background-color: #edb101;
      color: #edb101;
    }
    &:nth-child(4) {
      background-color: #b3d344;
      color: #b0d041;
    }
    &:nth-child(5) {
      background-color: #f6a808;
      color: #f7ac16;
    }
    &:nth-child(6) {
      background-color: #ef85ad;
      color: #dd7eaa;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 0;
  }
}
</style>

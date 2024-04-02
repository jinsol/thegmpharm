<template>
  <main class="row">
    <care-introduction />
    <care-program :program="program" />
    <Care-qnA :answerData="answerData" :class="{ mobile: isMobile }" />
    <!-- <img :src="`./image/GmpharmCare_02.jpg`" alt="" /> -->
  </main>
</template>

<script>
import CareIntroduction from "@/components/collaboration/CareIntroduction.vue";
import CareProgram from "@/components/collaboration/CareProgram.vue";
import CareQnA from "@/components/collaboration/CareQnA.vue";
import { mapState } from "vuex";

export default {
  name: "GmpharmCare",
  components: {
    CareIntroduction,
    CareProgram,
    CareQnA,
  },
  data() {
    return {
      program: [
        {
          title: "지엠팜케어 - 튼튼 지엠팜 미니건강보험(어린이형)",
          InsurancePeriod: "3개월",
          InsuranceSubscriptionAge: "1~14세",
          insuranceProducts: [
            {
              image: "./image/gmpaharmcare_p1_1.png",
              content: "골절 시 10만원",
              content_sub: "(골절 1회당)",
            },
            {
              image: "./image/gmpaharmcare_p1_2.png",
              content: "재해수술 시 10만원",
              content_sub: "(수술 1회당)",
            },
            {
              image: "./image/gmpaharmcare_p1_3.png",
              content: "'어린이질환' 수술 시 최대 100만원",
              content_sub: "(수술 1회당)",
            },
          ],
          buttonTitle: "유소아·어린이 제품 구매하러 가기",
        },
        {
          title: "지엠팜케어 - 튼튼 지엠팜 미니건강보험(성인형)",
          InsurancePeriod: "3개월",
          InsuranceSubscriptionAge: "20~60세",
          insuranceProducts: [
            {
              image: "./image/gmpaharmcare_p2_1.png",
              content: "골절 시 10만원",
              content_sub: "(골절 1회당)",
            },
            {
              image: "./image/gmpaharmcare_p2_2.png",
              content: "재해수술 시 10만원",
              content_sub: "(수술 1회당)",
            },
            {
              image: "./image/gmpaharmcare_p2_3.png",
              content: "'대상포진' 진단 시 10만원",
              content_sub: "(최초 1회한)",
            },
          ],
          buttonTitle: "성인 제품 구매하러 가기",
        },
      ],
      answerData: [
        {
          Q: "지엠팜 모든 제품이 지엠팜케어 대상인가요?",
          A: "지엠팜케어 메뉴에 포함된 모든 상품 또는 다른 카테고리의 모든 상품 중 지엠팜 케어 연계 상품 구매 시 서비스가 가능합니다.",
        },
        {
          Q: "지엠팜 케어의 보험은 어떻게 가입하나요?",
          A: "제품 구매 확정 시 지엠팜케어 보험가입 경로가 포함된 알림톡을 보내드리니 해당 사이트에 접속하여 가입해주시면 됩니다.",
        },
        {
          Q: "보험료는 누가 부담하나요?",
          A: "고객님을 케어하는 마음을 담아 보험료는 전액 지엠팜이 부담합니다.",
        },
        {
          Q: "지엠팜케어 가입자는 누구나 가능한가요?",
          A: "어린이용 제품 구매 시 1 - 14세, 성인용 제품은 20 - 60세 대한민국 국적을 가진 분이면 누구나 가입할 수 있습니다. 다만, 성인 중 최근 90일 이내에 의사로 부터 진찰 또는 검사를 통해 대상포진으로 확정 진단을 받았거나, 대상포진으로 입원, 투약 또는 치료를 받으신 경우 가입이 제한되며, 어린이용은 부모님 등 친권자께서 본인확인 후 가입하시면 됩니다.",
        },
        {
          Q: "제품을 여러 개 구매하면 지엠팜케어 다건 가입 또는 기간연장이 되나요?",
          A: "1인당 1건의 보험(90일)만 가입이 가능합니다. 단, 보험기간(90일) 만료 후, 다시 제품을 구매하시면 보험에 재가입할 수 있으며, 동일한 혜택을 받을 수 있습니다.",
        },
        {
          Q: "지엠팜케어는 선물이 가능한가요?",
          A: "이미 본인이 가입되어 있거나 필요하지 않은 경우, 가입경로 문자를 가족 외에 다른 분들께 전달하여 가입할 수 있으니 소중한 분께 선물도 가능합니다.",
        },
        {
          Q: "지엠팜케어 알림톡이 오고나서 바로 가입해야 하나요?",
          A: "지엠팜 케어 가입 알림톡이 발송되고 90일 이내에만 가입해주시면 됩니다. 90일 이내에 가입을 하지 않을 경우 보험혜택은 자동으로 소멸됩니다.",
        },
        {
          Q: "보험 가입 문자를 분실했습니다. 다시 받을 수 있나요?",
          A: "지엠팜 고객센터로 문의주시면 가입경로를 포함한 알림톡을 다시 발송해 드립니다.",
        },
        {
          Q: "보험기간 중 골절로 보장을 받았어요. 재 가입 후 또다시 골절이 발생하면 보장을 받을 수 있나요?",
          A: "지엠팜 케어를 통해 골절로 이미 보장을 받으셨다고 하더라도 보험 기간 내라면 다른 사고로 인해 골절이 발생한 경우 보장을 받으실 수 있습니다.",
        },
        {
          Q: "사용하지 못 한 보험 상품은 보상 받을 수 있나요?",
          A: "지엠팜 케어는 추가 혜택의 개념으로, 사용하지 못 하셔도 보상이 불가합니다.",
        },
        {
          Q: "보험 상품은 꼭 가입해야 하나요?",
          A: "지엠팜케어는 추가 혜택의 개념으로, 꼭 가입하여야 하는 것은 아닙니다.",
        },
        {
          Q: "성인 제품을 사고 어린이 보험을 받을 수는 없나요? (혹은 그 반대)",
          A: "지엠팜케어는 각 제품과 연계가 되어 있어 해당 부분은 불가합니다.",
        },
        {
          Q: "제품을 사지 않고 보험 상품만 따로 구입할 수는 없나요?",
          A: "지엠팜케어는 각 제품과 연계가 되어 있어 해당 부분은 불가합니다.",
        },
        {
          Q: "1개 혹은 2개 세트 제품에 추가비용을 내고 보험 상품을 받을 수는 없나요?",
          A: "지엠팜케어는 각 제품과 연계가 되어 있어 해당 부분은 불가합니다.",
        },
        {
          Q: "보험 가입 후에 보험 대상자를 변경할 수 있나요?",
          A: "보험 가입 후에는 보험 대상자를 변경하실 수 없습니다.",
        },
      ],
    };
  },
  computed: {
    ...mapState(["isMobile"]),
  },
};
</script>

<style lang="scss" scoped>
main {
  img {
    width: 100%;
  }
}
</style>

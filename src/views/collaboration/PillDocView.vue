<template>
  <main class="row">
    <section-title
      title="필독상식"
      sub_title="지엠팜 전문약사 X 약 짓는 오빠들"
    />
    <pill-Introduction />
    <Contents-list :pillData="pillData" :class="{ mobile: isMobile }" />
    <p class="info">
      *본 내용은 생활 속 건강 정보를 전달하기 위해 구성된 약사칼럼입니다.
    </p>
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import PillIntroduction from "@/components/collaboration/pillIntroduction.vue";
import ContentsList from "@/components/collaboration/ContentsList.vue";

import { mapState } from "vuex";

export default {
  name: "PillDoc",
  components: {
    SectionTitle,
    PillIntroduction,
    ContentsList,
  },
  data() {
    return {
      pillData: [
        {
          title: "임신 준비 필수 가이드",
          contents: [
            "임신부&수유부에게 추천하고픈 비타민&미네랄",
            "임신 준비에 필요한 영양소 베스트 5 - 여성편",
            "임신 준비에 필요한 영양소 베스트 5 – 남성편",
            "철분제의 종류와 헴철",
          ],
        },
        {
          title: "여성 건강 필수 가이드",
          contents: [
            "다낭성난소증후군에 도움이 되는 영양소",
            "이노시톨에 대한 연구 자료",
            "여성유산균·일반유산균 차이",
            "PMS에 도움이 되는 영양소",
          ],
        },
        {
          title: "아이 종합 영양 가이드",
          contents: [
            "우리 아이 처음먹는 영양제에 필요한 영양소",
            "우리 아이 영양제 섭취가이드",
            "유소아 아연 섭취와 면역력",
            "밥 안 먹는 아이에게는 어떤 영양성분을 먹여야할까?",
            "유소아 성장기 철분 섭취의 필요성",
            "프로폴리스",
            "어린이 식물성 rTG오메가3",
            "청소년기에 필요한 영양소 BEST 5",
            "유소아 때 모자라기 쉬운 영양소",
          ],
        },
        {
          title: "피부 미용 가이드",
          contents: [
            "가르시니아, 비타민C와의 시너지",
            "다이어트를 도와주는 건강기능식품",
            "NAG와 피부 보습",
            "탈모에 도움되는 영양소",
            "비타민, 미네랄을 함께 섭취하였을 때 피부에 끼치는 긍정적인 영향",
          ],
        },
        {
          title: "꼭 알아야하는 건강 상식",
          contents: [
            "약사가 꼭 챙겨먹는 영양제",
            "다양한 영양제의 올바른 섭취법에 대해 알아보자",
            "다양한 영양제의 올바른 섭취법에 대해 알아보자 -2-",
            "같이 먹으면 좋은 영양제, 나쁜 영양제",
            "아연, 왜 남녀 모두에게 중요한가?",
            "전문약 복용 시 주의해야 할 건강기능식품 섭취",
            "약을 먹을 때 주의해야 할 건강기능식품 섭취",
            "올바른 칼슘 섭취 가이드",
            "칼슘 마그네슘 비타민D를 같이 먹어야 하는 이유",
            "비타민D를 보충해야 하는 이유",
            "제형에 따른 흡수율, 흡수속도의 차이",
            "비타민, 미네랄 섭취의 이해",
            "유산균이 우리 몸에서 하는 역할",
            "칼슘과 마그네슘, 망간의 시너지",
            "밀크씨슬과 간 건강",
            "프로바이오틱스와 프리바이오틱스",
            "홍삼의 기능성과 QnA",
            "단백질 보충제와 건강",
          ],
        },
        {
          title: "노년기 건강 상식",
          contents: [
            "노년기 영양제 고르는 팁",
            "눈에 도움이 되는 건강기능식품",
            "루테인지아잔틴",
            "피로 회복에 도움이 되는 영양소",
            "항산화제와 노화",
          ],
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
  display: block;
  img {
    width: 100%;
  }
  .info {
    color: gray;
    text-align: right;
    font-size: 14px;
    font-weight: 100;
    padding: 2% 0 4%;
  }
}
</style>

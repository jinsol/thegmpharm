<template>
  <main class="row" :class="{ mobile: isMobile }">
    <section-title
      title="정기배송"
      sub_title="정가대비 15% 할인된 가격에 상품을 만나보세요!"
    />
    <product-type :productType="productType" @click="onClick_type" />
    <product-target :productTarget="productTarget" @click="onClick_target" />
    <product-list
      :productList="filteredProducts"
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      :totalItems="filteredProducts.length"
      :isMobile="isMobile"
    />
    <pagination
      :totalItems="filteredProducts.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ProductType from "@/components/product/ProductType.vue";
import ProductTarget from "@/components/product/ProductTarget.vue";
import ProductList from "@/components/product/ProductList.vue";
import Pagination from "@/components/layout/Pagination.vue";
import { mapState } from "vuex";

export default {
  name: "RegularDelivery",
  components: {
    SectionTitle,
    ProductType,
    ProductTarget,
    ProductList,
    Pagination,
  },
  data() {
    return {
      productType: [
        { name: "전체" },
        { name: "정기배송(1개월씩)" },
        { name: "정기배송(3개월씩)" },
      ],
      productTarget: [
        { target: "전체" },
        { target: "유소아·어린이" },
        { target: "성인건강" },
        { target: "여성건강" },
      ],
      productList: [
        {
          month: 1,
          image_src: "@/../public/image/RDV_m1_p01.png",
          target: "성인건강",
          tag: ["성인건강"],
          name: "더스트롱칼슘/ 1개월분 산호칼슘,마그네슘,비타민D함유) 온가족용, 임산부, 성인",
          desc: "청정 카리브해의 산호를 비소성 공법으로 정성껏 가공하여 만든 칼마디 제품. 약사들이 직접 배합한 황금 비율의 칼슘 마그네슘 비타민D.",
          price: 25000,
          stock: true,
          id: 2001,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p02.png",
          target: "성인건강",
          tag: ["성인건강"],
          name: "더스트롱포맨 옥타 / 1개월분 (남성비타민) 옥타코사놀,아연,남성건강식품",
          desc: "지구력 증진에 도움이 되는 옥타코사놀과 남성 건강에 필요한 아연 등의 미네랄, 비타민을 일일 권장량 이상으로 담은 남성 건강 종합 솔루션",
          price: 59000,
          stock: true,
          id: 2002,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p03.png",
          target: "성인건강",
          tag: ["성인건강", "눈건강"],
          name: "더알티지 오메가3 / 1개월분 (rTG오메가3 +비타민D 1000IU 함유)",
          desc: "독일 KD파마사의 최신 초임계 공법으로 정제한 고급 rTG 원료로 만든 프리미엄 알티지오메가3. 알이 작아 목넘김이 편하고 비린내가 덜 한 고객 섭취 편의를 생각한 제품.",
          price: 30000,
          stock: true,
          id: 2003,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p04.png",
          target: "유소아·어린이",
          tag: ["유소아면역"],
          name: "더징크디 / 1개월분 (유소아 / 효모아연+효모비타민D) 아기아연, 유아아연, 어린이아연",
          desc: "건조효모 유래 아연과 비타민D3를 사용하여 안심! 가루 제형으로 타서 주기도 그냥 먹이기도 편한 우리 아이 면역력 지킴이",
          price: 22000,
          stock: true,
          id: 2004,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p05.png",
          target: "유소아·어린이",
          tag: ["어린이홍삼"],
          name: "더징크디 홍삼젤리 28포 (어린이/ 홍삼+아연+나이아신) 어린이홍삼,홍삼젤리",
          desc: "6년근 홍삼을 아이들이 맛있게 먹을 수 있도록 국내산 딸기 농축액으로 맛을 낸 홍삼 젤리. 아연과 홍삼의 면역력 듀얼 콜라보.",
          price: "30000",
          stock: false,
          id: 2005,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p06.png",
          target: "유소아·어린이",
          tag: ["유소아면역"],
          name: "더징크디시럽 / 1개월분 ( 아연 + 비타민D ) 어린이아연",
          desc: "흡수율이 높은 글루콘산 아연과 비타민 D를 달콤한 딸기맛 시럽으로 한 번에. 국내산 딸기 원물을 사용하여 믿을 수 있는 제품.",
          price: 25000,
          stock: true,
          id: 2006,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p07.png",
          target: "유소아·어린이",
          tag: ["유소아유산균"],
          name: "더프로바이오 아연디 / 1개월분 (17종 유산균+비타민D+아연) 유소아용 유산균",
          desc: "보장균수 50억 유산균과 아연, 비타민D를 한 번에. 여러 가지 찾아 먹이지 마시고 한 번에 편하게 먹이세요. 지엠팜은 엄마 아빠의 마음으로 생각합니다.",
          price: 45000,
          stock: true,
          id: 2007,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p08.png",
          target: "여성건강",
          tag: ["장건강"],
          name: "더프로바이오우먼/ 1개월분(100억보장 특허유산균)",
          desc: "3종 특허 유산균이 포함된 여성을 위한 100억 유산균.",
          price: 56000,
          stock: true,
          id: 2008,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p09.png",
          target: "유소아·어린이",
          tag: ["유소아건강"],
          name: "야미푸 식물성 알티지 오메가3 (DHA, 비타민 E, 베타카로틴) / 30일분",
          desc: "무화학용매 추출법으로 안심! DHA 위주의 식물성 알티지 오메가3로 우리 아이에게 안성맞춤! 비린내가 나지 않아 아이들이 좋아하는 오렌지맛 오메가3.",
          price: 35000,
          stock: true,
          id: 2009,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p10.png",
          target: "유소아·어린이",
          tag: ["신상품", "에너지UP", "유소아건강"],
          name: "야미푸 키즈 멀티비타민",
          desc: "성장기 필수 비타민&미네랄 13종을 달콤한 오렌지 맛으로 한 번에",
          price: 19800,
          stock: true,
          id: 2010,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p11.png",
          target: "유소아·어린이",
          tag: ["유소아건강"],
          name: "야미푸철분씨 / 1개월 (철분, 비타민C 함유) 유소아철분제 어린이철분, 야미푸 철분씨",
          desc: "비린 맛이 덜한 리포퍼 철분으로 아이들이 더 잘 먹도록 고민한 새콤달콤 포도맛 가루형 철분제.",
          price: 18000,
          stock: true,
          id: 2011,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p12.png",
          target: "성인건강" + "여성건강",
          tag: ["임신준비", "성인건강"],
          name: "피코스 이노시톨(지엠팜 x 우리동산)",
          desc: "미오이노시톨, L-티로신, 엽산, 셀렌, 크롬",
          price: 40000,
          stock: true,
          id: 2012,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p13.png",
          target: "성인건강",
          tag: ["눈건강"],
          name: "더루테인 알티지 오메가3/루테인지아잔틴 일일최대 함유, 눈건강",
          desc: "황반의 구성 성분인 루테인과 지아잔틴을 한 번에! KD 파마사의 고급 초임계 알티지 오메가3와 눈 건강에 도움이 되는 비타민 A, 항산화와 면역력에 도움이 되는 각종 비타민 미네랄까지.",
          price: 25000,
          stock: true,
          id: 2013,
        },
        {
          month: 1,
          image_src: "../public/image/RDV_m1_p14.png",
          target: "성인건강",
          tag: ["눈건강"],
          name: "더칼슘디/1개월분 (유소아 / 어린이 칼슘) 칼슘 마그네슘",
          desc: "유소아 성장기 필수 미네랄인 칼슘과 뼈 건강에 도움이 되는 비타민 D, 칼슘 흡수/활용에 도움이 되는 망간, 마그네슘까지 한 번에.",
          price: 25000,
          stock: true,
          id: 2014,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p01.png",
          target: "성인건강",
          tag: ["눈건강"],
          name: "더루테인 알티지 오메가3",
          desc: "황반의 구성 성분인 루테인과 지아잔틴을 한 번에! KD 파마사의 고급 초임계 알티지 오메가3와 눈 건강에 도움이 되는 비타민 A, 항산화와 면역력에 도움이 되는 각종 비타민 미네랄까지.",
          price: 105000,
          stock: false,
          id: 2015,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p02.png",
          target: "성인건강",
          tag: [],
          name: "더스트롱 밀크씨슬",
          desc: "독일 NIC사의 실리마린 추출물 + 비타민 B군 3종 + (부원료) 유기농 15정 과채분말+영지버섯 분말+헛개나무열매추출물+유기농쌀겨추출물",
          price: 75000,
          stock: true,
          id: 2016,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p03.png",
          target: "성인건강",
          tag: ["유소아성장"],
          name: "더스트롱칼슘",
          desc: "청정 카리브해의 산호를 비소성 공법으로 정성껏 가공하여 만든 칼마디 제품. 약사들이 직접 배합한 황금 비율의 칼슘 마그네슘 비타민D.",
          price: 75000,
          stock: false,
          id: 2017,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p04.png",
          target: "성인건강",
          tag: [],
          name: "더알티지 오메가3",
          desc: "독일 KD파마사의 최신 초임계 공법으로 정제한 고급 rTG 원료로 만든 프리미엄 알티지오메가3. 알이 작아 목넘김이 편하고 비린내가 덜 한 고객 섭취 편의를 생각한 제품.",
          price: 90000,
          stock: true,
          id: 2018,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p05.png",
          target: "성인건강" + "여성건강",
          tag: ["여성건강"],
          name: "더프로바이오우먼",
          desc: "3종 특허 유산균이 포함된 여성을 위한 100억 유산균.",
          price: 168000,
          stock: true,
          id: 2019,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p06.png",
          target: "유소아·어린이",
          tag: ["유소아성장"],
          name: "야미푸 식물성 알티지 오메가3",
          desc: "EPA 및 DHA 함유유지, 비타민E, 베타카로틴| 야미푸 식물성 알티지 오메가3",
          price: 105000,
          stock: true,
          id: 2020,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p07.png",
          target: "유소아·어린이",
          tag: ["에너지UP", "유소아건강"],
          name: "야미푸 키즈 멀티비타민",
          desc: "성장기 필수 비타민&미네랄 13종을 달콤한 오렌지 맛으로 한 번에",
          price: 54000,
          stock: false,
          id: 2021,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p08.png",
          target: "유소아·어린이",
          tag: ["유소아성장"],
          name: "야미푸철분씨",
          desc: "비린 맛이 덜한 리포퍼 철분으로 아이들이 더 잘 먹도록 고민한 새콤달콤 포도맛 가루형 철분제.",
          price: 54000,
          stock: true,
          id: 2022,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p09.png",
          target: "성인건강" + "여성건강",
          tag: ["여성건강"],
          name: "피코스 이노시톨 맥스 40:1 (지엠팜 x 우리동산)",
          desc: "미오이노시톨, 캐롭추출물, L-티로신, 엽산, 셀렌, 크롬",
          price: 150000,
          stock: false,
          id: 2023,
        },
        {
          month: 3,
          image_src: "../public/image/RDV_m3_p10.png",
          target: "성인건강" + "여성건강",
          tag: ["여성건강"],
          name: "피코스 이노시톨(지엠팜 x 우리동산)",
          desc: "미오이노시톨, L-티로신, 엽산, 셀렌, 크롬",
          price: 120000,
          stock: false,
          id: 2024,
        },
      ],
      selectedTarget: "전체",
      selectedType: "전체",
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  methods: {
    onClick_target(target) {
      this.selectedTarget = target;
      this.currentPage = 1;
    },
    onClick_type(type) {
      this.selectedType = type;
      this.currentPage = 1;
    },
  },
  computed: {
    filteredProducts() {
      return this.productList.filter((product) => {
        const targetMatch =
          this.selectedTarget === "전체" ||
          product.target.includes(this.selectedTarget.trim());

        let typeMatch = false;
        if (this.selectedType === "전체") {
          typeMatch = true;
        } else if (this.selectedType === "정기배송(1개월씩)") {
          typeMatch = product.month === 1;
        } else if (this.selectedType === "정기배송(3개월씩)") {
          typeMatch = product.month === 3;
        }

        return targetMatch && typeMatch;
      });
    },
    ...mapState(["isMobile"]),
  },
};
</script>

<style lang="scss" scoped></style>

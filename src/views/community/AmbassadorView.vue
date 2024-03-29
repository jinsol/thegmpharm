<template>
  <main class="row">
    <section-title
      title="엠버서더"
      sub_title="지엠팜의 대표 엠버서더의 이야기를 들어보세요!"
    />
    <community-list
      :contentsList="contentsList"
      :totalItems="contentsList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <pagination
      :totalItems="this.contentsList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import CommunityList from "@/components/community/CommunityList.vue";
import Pagination from "@/components/layout/Pagination.vue";

export default {
  name: "Ambassador",
  components: {
    SectionTitle,
    CommunityList,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      contentsList: [
        {
          imageSrc: "@/../public/image/ambassador_230626.png",
          title: "지엠팜케어에 대한 서진혁 대표님의 이야기",
          postingDate: "2023-06-26",
        },
        {
          imageSrc: "@/../public/image/ambassador_221115.png",
          title: "변호사, 약사, 교수, 쇼핑몰대표 1인4역 슈퍼맘 지혜님 인터뷰",
          postingDate: "2022-11-15",
        },
        {
          imageSrc: "@/../public/image/ambassador_220906.png",
          title: "지엠팜 x 문경작가 아트 콜라보레이션, 문경작가님 인터뷰",
          postingDate: "2022-09-06",
        },
        {
          imageSrc: "@/../public/image/ambassador_220714.png",
          title: "피코스 이노시톨 x 우리동네산부인과 추성일원장님 인터뷰",
          postingDate: "2022-07-14",
        },
        {
          imageSrc: "@/../public/image/ambassador_220630.png",
          title: "대학원생맘 지영님의 산후 다이어트 성공기",
          postingDate: "2022-06-30",
        },
        {
          imageSrc: "@/../public/image/ambassador_220602.png",
          title: "모델 출신 워킹맘 문정님의 앰버서더 인터뷰",
          postingDate: "2022-06-02",
        },
        {
          imageSrc: "@/../public/image/ambassador_220503.jpg",
          title: "가족 모두 앰버서더, 아로홈님 패밀리 인터뷰",
          postingDate: "2022-05-03",
        },
        {
          imageSrc: "@/../public/image/ambassador_220407.png",
          title: "지엠팜 앰버서더 첫번째 인터뷰, 율시스님",
          postingDate: "2022-04-07",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <main class="row">
    <section-title
      title="매거진"
      sub_title="지엠팜에서 볼 수 있는 매거진입니다"
    />
    <community-list
      :contentsList="contentsList"
      :totalItems="contentsList.length"
      :currentPage.sync="currentPage"
      :itemsPerPage="itemsPerPage"
    />
    <pagination
      :totalItems="contentsList.length"
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
  name: "Magazine",
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
          imageSrc: "@/../public/image/magazine_220712.png",
          title: "다낭 난소 증후군이란? ㅣ 우리동네산부인과 권정은원장님",
          postingDate: "2022-07-12",
        },
        {
          imageSrc: "@/../public/image/magazine_220422.jpg",
          title: "칼슘! 뼈 건강만 지킬까? 칼슘의 다양한 역할",
          postingDate: "2022-04-22",
        },
        {
          imageSrc: "@/../public/image/magazine_220407.jpg",
          title: "장과 뇌가 연결되어 있다?!",
          postingDate: "2022-04-07",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

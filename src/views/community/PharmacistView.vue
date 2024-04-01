<template>
  <main class="row">
    <section-title
      title="약사전문칼럼"
      sub_title="약사가 직접 작성한 전문성 있는 칼럼입니다"
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
  name: "Pharmacist",
  components: {
    SectionTitle,
    CommunityList,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      contentsList: [
        {
          imageSrc: "./image/pharmacist_240102_NAG.jpg",
          title: "NAG와 피부 보습",
          postingDate: "2024-01-02",
        },
        {
          imageSrc: "./image/pharmacist_230912_protein_supplement_health.jpg",
          title: "철분제의 종류와 헴철",
          postingDate: "2023-09-12",
        },
        {
          imageSrc: "./image/pharmacist_230912_iron_supplement_heme.jpg",
          title: "단백질 보충제와 건강",
          postingDate: "2023-09-12",
        },
        {
          imageSrc: "./image/pharmacist_230810_men_preparing_pregnancy.jpg",
          title: "가르시니아, 비타민C와의 시너지",
          postingDate: "2023-08-10",
        },
        {
          imageSrc: "./image/pharmacist_230810_garcinia_vitaminC_synergy.jpg",
          title: "임신준비하는 남성",
          postingDate: "2023-08-10",
        },
        {
          imageSrc:
            "./image/pharmacist_230705_zinc_intake_immunity_infants.png",
          title: "유소아 아연 섭취와 면역력",
          postingDate: "2023-07-05",
        },
        {
          imageSrc:
            "./image/pharmacist_230705_nutrients_first_supplement_children.png",
          title: "우리 아이 처음먹는 영양제에 필요한 영양소",
          postingDate: "2023-07-05",
        },
        {
          imageSrc:
            "./image/pharmacist_230612_synergy_calcium_magnesium_manganese.png",
          title: "칼슘과 마그네슘, 망간의 시너지",
          postingDate: "2023-06-12",
        },
        {
          imageSrc: "./image/pharmacist_230612_nutrients_hair_loss.png",
          title: "탈모에 도움되는 영양소",
          postingDate: "2023-06-12",
        },
        {
          imageSrc: "./image/pharmacist_230516_plant_based_rtgo3_children.png",
          title: "어린이 식물성 rTG오메가3",
          postingDate: "2023-05-16",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>

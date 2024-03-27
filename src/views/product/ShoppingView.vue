<template>
  <main class="row">
    <section-title
      title="쇼핑하기"
      sub_title="전문 약사가 설계한 믿고 먹는 프리미엄 브랜드, 지엠팜"
    />
    <product-type :productType="productType" @click="onClick_type" />
    <shopping-target
      :productTarget="filteredProductTarget"
      @click="onClick_target"
    />
    <product-list
      :productList="filteredProducts"
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      :totalItems="filteredProducts.length"
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
import ShoppingTarget from "@/components/product/ShoppingTarget.vue";
import ProductList from "@/components/product/ProductList.vue";
import Pagination from "@/components/layout/Pagination.vue";
import { mapState } from "vuex";

export default {
  name: "Shopping",
  components: {
    SectionTitle,
    ProductType,
    ProductTarget,
    ShoppingTarget,
    ProductList,
    Pagination,
  },
  data() {
    return {
      productType: [
        { name: "전체" },
        { name: "성분별" },
        { name: "기능별" },
        { name: "지엠팜 세트상품" },
      ],
      productTarget: [
        { name: "전체", target: ["전체"] },
        {
          name: "성분별",
          target: ["전체", "아연", "칼슘", "마그네슘", "철분", "엽산"],
        },
        {
          name: "기능별",
          target: ["전체", "장건강", "눈건강", "뼈건강", "면역력"],
        },
        {
          name: "지엠팜 세트상품",
          target: ["전체", "생후 6개월 이상", "생후 24개월 이상", "성인"],
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
      console.log("타겟 누름");
      this.selectedTarget = target;
      this.currentPage = 1;
    },
    onClick_type(type) {
      console.log("타입을 눌렀어요");
      this.selectedType = type;
      if (type !== "전체") {
        this.selectedTarget = "전체";
      }
      this.currentPage = 1;
    },
  },
  created() {
    this.$store.dispatch("init__Shopping");
  },
  computed: {
    dataShoppingList() {
      return this.$store.getters.fnGetShoppingList;
    },
    filteredProductTarget() {
      return this.productTarget.filter((item) => {
        return item.name === this.selectedType;
      });
    },
    filteredProducts() {
      return this.dataShoppingList.filter((product) => {
        const targetMatch =
          this.selectedTarget === "전체" ||
          product.productTarget.includes(this.selectedTarget.trim());

        let typeMatch = false;
        if (this.selectedType === "전체") {
          typeMatch = true;
        } else {
          typeMatch = product.type === this.selectedType;
        }

        return targetMatch && typeMatch;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

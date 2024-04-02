<template>
  <main class="row">
    <section-title
      title="이용안내"
      sub_title="지엠팜 사이트 이용 안내를 확인할 수 있습니다"
    />
    <info-section />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import InfoSection from "@/components/Information/InfoSection.vue";

export default {
  data() {
    return {
      infoTag: "",
    };
  },
  components: {
    SectionTitle,
    InfoSection,
  },
  methods: {
    updateInfoTag(tag) {
      this.inforTag = tag;
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <main class="row">
    <div class="base">
      <section-title title="이용안내" />
      <info-section />
    </div>
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

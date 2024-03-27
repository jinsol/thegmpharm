<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import store from "./store";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      const is1400 = window.innerWidth < 1400;
      store.commit("setMobile", is1400);

      const isMobile = window.innerWidth < 900;
      store.commit("setMobile", isMobile);
    },
  },
};
</script>

<style lang="scss" scoped></style>

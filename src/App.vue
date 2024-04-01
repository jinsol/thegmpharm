<template>
  <div>
    <div class="loading-overlay" v-show="isLoading">
      <div class="spinner"></div>
      <iframe src="https://lottie.host/embed/5ea2414a-5bde-4f71-bc5b-7c724bd55c09/fKltP5yiqk.json"></iframe>
      <p>Loading...</p>
    </div>
    <div v-show="!isLoading">
    <Header />
    <router-view />
    <Footer />
      <test-section />
      <event-section />
      <best-product-section />
      <slide-section2 />
      <hot-key-word-section />
      <new-prd-section />
      <instargram-section />
      <go-link-section />
    </div>
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
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  created() {
    // this.initLoginState();
    // this.$store.dispatch("initLoginState");
  },
  methods: {
    updateScreenWidth() {
      const is1400 = window.innerWidth < 1400;
      store.commit("setMobile", is1400);

      const isMobile = window.innerWidth < 900;
      store.commit("setMobile", isMobile);
    },
    // ...mapActions(["initLoginState"]),
  },
};
</script>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}
</style>

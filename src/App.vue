<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <div class="loading-overlay" v-show="isLoading">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    <div v-show="!isLoading">
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
    }, 3500);
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
  background-color: rgba(255, 255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
}
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #46b7B0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<template>
  <main class="row">
    <div class="base">
      <section-title
        title="기업제휴 문의"
        sub_title="지엠팜과의 기업 제휴 문의를 할 수 있습니다"
      />
      <button-title />
      <div class="unquiryBtn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScBkB4OzNmfpt5WbyIQtgRoksr8x8aX1GFwJSjkyx0KWNFD6w/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
        >
          <button>기업제휴 문의하기</button>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ButtonTitle from "@/components/layout/ButtonTitle.vue";

export default {
  mounted() {
    this.scrollToTop();
  },

  data() {
    return {
      allianceTag: "", // 선택된 버튼 정보를 저장할 데이터 속성
    };
  },
  components: {
    SectionTitle,
    ButtonTitle,
  },
  methods: {
    updateAllianceTag(tag) {
      this.allianceTag = tag;
    },
    scrollToTop() {
      window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
    },
  },
};
</script>

<style lang="scss" scoped>
.base {
  padding: 0 0 200px 0;
  .unquiryBtn {
    margin: 130px 0 80px;
    text-align: center;
    button {
      color: #fff;
      background: #46b7b0;
      padding: 15px 40px;
      font-size: 23px;
      border-radius: 20px;
      border: 1px solid #46b7b0;
      transition: all 0.2s;
      width: 260px;
    }
    button:hover {
      background: #fff;
      color: #46b7b0;
    }
  }
}
</style>

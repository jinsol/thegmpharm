<template>
  <div class="row">
    <div class="question__list">
      <button
        v-for="(item, index) in questionTag"
        :key="item.name"
        @click="updateQuestionTag(item.name)"
        :class="{
          active: item.name === questionButton,
          click: item.name === questionButton,
        }"
      >
        <span>
          <img
            :src="item.image"
            :alt="item.name"
            @click="updateQuestionTag(index.image2)"
            :class="{ active: item.image2 === activeImg }"
          />
        </span>
        <span>{{ item.name }}</span>
      </button>
    </div>

    <div class="selectBox">
      <div v-if="questionTagValue === '유소아 · 어린이'">
        <div class="faq_list">
          <div v-for="(item, index) in faqItems" :key="index">
            <ul
              class="depth1"
              @click="toggleDepth2(index)"
              :class="{ open: item.showDepth2 }"
            >
              <li>
                {{ item.title }}
                <i
                  class="fa-solid fa-chevron-down"
                  :class="{ rotate: item.showDepth2 }"
                ></i>
              </li>
              <ul class="depth2" v-show="item.showDepth2">
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                >
                  <span v-html="breakLines(subItem.content)"></span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div v-else-if="questionTagValue === '임신 · 출산'">
        <div class="faq_list">
          <div v-for="(item, index) in faqItems2" :key="index">
            <ul
              class="depth1"
              @click="toggleDepth2_2(index)"
              :class="{ open: item.showDepth2 }"
            >
              <li>
                {{ item.title }}
                <i
                  class="fa-solid fa-chevron-down"
                  :class="{ rotate: item.showDepth2 }"
                ></i>
              </li>

              <ul class="depth2" v-show="item.showDepth2">
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                >
                  <span v-html="breakLines(subItem.content)"></span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div v-else-if="questionTagValue === '성인건강'">
        <div class="faq_list">
          <div v-for="(item, index) in faqItems3" :key="index">
            <ul
              class="depth1"
              @click="toggleDepth2_3(index)"
              :class="{ open: item.showDepth2 }"
            >
              <li>
                {{ item.title }}
                <i
                  class="fa-solid fa-chevron-down"
                  :class="{ rotate: item.showDepth2 }"
                ></i>
              </li>
              <ul class="depth2" v-show="item.showDepth2">
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                >
                  <span v-html="breakLines(subItem.content)"></span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div v-else-if="questionTagValue === '이너뷰티'">
        <div class="faq_list">
          <div v-for="(item, index) in faqItems4" :key="index">
            <ul
              class="depth1"
              @click="toggleDepth2_4(index)"
              :class="{ open: item.showDepth2 }"
            >
              <li>
                {{ item.title }}
                <i
                  class="fa-solid fa-chevron-down"
                  :class="{ rotate: item.showDepth2 }"
                ></i>
              </li>
              <ul class="depth2" v-show="item.showDepth2">
                <li
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                >
                  <span v-html="breakLines(subItem.content)"></span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import ButtonTitle from "@/components/layout/ButtonTitle.vue";

export default {
  components: {
    SectionTitle,
    ButtonTitle,
  },
  mounted() {
    // 페이지가 로드될 때 초기 이미지 상태 설정
    this.updateQuestionTag(this.questionButton);
  },
  data() {
    return {
      questionButton: "유소아 · 어린이",
      activeButton: "유소아 · 어린이",
      activeImg: "./image/faq_icon01_h.png",
      questionTagValue: "", // 클릭된 질문 버튼을 저장할 데이터 속성
      questionTag: [
        {
          name: "유소아 · 어린이",
          image: "./image/main_hot-tab01.png",
          image1: "./image/main_hot-tab01.png",
          image2: "./image/main_hot-tab01_h.png",
        },
        {
          name: "임신 · 출산",
          image: "./image/main_hot-tab02.png",
          image1: "./image/main_hot-tab02.png",
          image2: "./image/main_hot-tab02_h.png",
        },
        {
          name: "성인건강",
          image: "./image/main_hot-tab03.png",
          image1: "./image/main_hot-tab03.png",
          image2: "./image/main_hot-tab03_h.png",
        },
        {
          name: "이너뷰티",
          image: "./image/main_hot-tab04.png",
          image1: "./image/main_hot-tab04.png",
          image2: "./image/main_hot-tab04_h.png",
        },
      ],
      faqItems: [
        {
          title:
            "더징크디 / 더징크디 시럽 / 더징크디 홍삼젤리의 섭취 방법은 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content: "식후 섭취를 권장하며, 오전이나 오후 섭취를 추천합니다.",
            },
          ],
        },
        {
          title: "더칼슘디 / 더칼슘디 젤리의 섭취방법은 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            { content: "식후 섭취를 권장하며, 저녁 섭취를 추천합니다." },
          ],
        },
        {
          title: "야미푸 철분씨의 섭취방법은 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "공복 섭취를 권장하며, 오전이나 오후 섭취를 추천합니다.\n칼슘제와 같이 먹는다면 야미푸 철분씨는 오전, 칼슘제는 저녁 식후 섭취를 권장합니다.",
            },
          ],
        },
        {
          title:
            "야미푸 / 더프로바이오 아연디·츄어블의 섭취방법은 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "공복 섭취를 권장 드리며, 오전이나 저녁 섭취를 추천합니다.",
            },
          ],
        },
      ],
      faqItems2: [
        {
          title: "철분제 섭취 시기와 섭취방법이 궁금합니다.",
          showDepth2: false,
          subItems: [
            {
              content:
                "철분제는 임신16주이후(4개월이후)부 터 출산 후 3개월까지 드시는 걸 추천 드립니다.\n섭취 방법은 식전/식후 상관없이 오전이나 오후에 드시는 것을 추천합니다.",
            },
          ],
        },
        {
          title: "더폴릭포마미 엽산제 섭취시기가 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "임신전 100일부터 임신 후 20주까지 섭취하시는 걸 추천 드립니다.",
            },
          ],
        },
        {
          title: "더폴릭포대디 엽산제 섭취시기가 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "임신계획 100일전부터 하루 1번, 1캡슐씩 섭취하시면 됩니다.",
            },
          ],
        },
        {
          title: "엽산제 섭취방법이 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content: `하루 중 편한 시간에 맞춰서 섭취해주시고 식후 섭취를 권장합니다.`,
            },
          ],
        },
      ],
      faqItems3: [
        {
          title: "오메가3의 섭취 방법이 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "식후 섭취를 권장 드리며, 오전이나 오후에 드시는 것을 추천합니다.",
            },
          ],
        },
        {
          title: "더알티지오메가3의 DHA, EPA 함유량은 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "하루 섭취량 2캡슐 기준으로 DHA 360mg, EPA 540mg 함유되어 있습니다.",
            },
          ],
        },
        {
          title: "칼슘의 섭취 방법이 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "더스트롱칼슘 기준으로 오전에 1정 저녁에 1정 섭취하는 게 가장 이상적인 방법입니다.\n나눠서 섭취하시는 게 불편하시면 저녁시간에 2정을 한꺼번에 섭취하셔도 괜찮습니다.",
            },
          ],
        },
        {
          title:
            "더스트롱포맨 옥타, 밀크씨슬, 마그네슘, 더징크디 제품의 섭취 방법이 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "식후 섭취를 권장 드리며, 오전이나 오후에 드시는 것을 추천합니다.",
            },
          ],
        },
      ],
      faqItems4: [
        {
          title:
            "더프로바이오우먼 등 성인 유산균 제품의 섭취 방법이 어떻게 되나요?",
          showDepth2: false,
          subItems: [
            {
              content:
                "공복 섭취를 권장 드리며, 오전이나 취침 전 섭취를 추천합니다.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    updateAllianceTag(tag) {
      this.allianceTag = tag;
      this.activeButton = tag;
    },
    updateQuestionTag(tag) {
      this.questionTagValue = tag; // 클릭된 질문 버튼 정보 저장
      this.questionButton = tag;
      this.questionTag.forEach((item) => {
        item.image = item.name === tag ? item.image2 : item.image1;
      });
    },
    toggleDepth2(index) {
      this.faqItems.forEach((item, i) => {
        if (i === index) {
          item.showDepth2 = !item.showDepth2;
        } else {
          item.showDepth2 = false;
        }
      });
    },
    toggleDepth2_2(index) {
      this.faqItems2.forEach((item, i) => {
        if (i === index) {
          item.showDepth2 = !item.showDepth2;
        } else {
          item.showDepth2 = false;
        }
      });
    },
    toggleDepth2_3(index) {
      this.faqItems3.forEach((item, i) => {
        if (i === index) {
          item.showDepth2 = !item.showDepth2;
        } else {
          item.showDepth2 = false;
        }
      });
    },
    toggleDepth2_4(index) {
      this.faqItems4.forEach((item, i) => {
        if (i === index) {
          item.showDepth2 = !item.showDepth2;
        } else {
          item.showDepth2 = false;
        }
      });
    },
    updateInfoTag(tag) {
      this.activeButton = tag;
    },
    breakLines(text) {
      return text.replace(/\n/g, "<br>");
    },
  },
};
</script>

<style lang="scss" scoped>
.question__list {
  padding: 100px 0 30px;
  display: flex;
  justify-content: space-between;
  button {
    background: #f7f9f6;
    padding: 25px;
    border: 1px solid #e3e3e3;
    flex: 1 0 20%;
    font-size: 16px;
    color: #7f7f7f;
    &.click {
      background: #fff;
      border: 1px solid #46b7b0;
      color: #46b7b0;
    }
    span {
      display: block;
      padding: 15px;
    }
  }
}
.selectBox {
  font-size: 25px;
  padding: 30px 0;
  .faq_list {
    border-top: 1px solid #000;
    li {
      border-bottom: 1px solid #b8b8b8;
      padding: 15px 0;
      padding-right: 15px;
      display: flex;
      justify-content: space-between;
    }
    .depth1 {
      font-size: 16px;
      color: #353535;
      font-weight: bold;
      cursor: pointer;
      .rotate {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
      }
      .depth2 {
        font-size: 16px;
        color: #555;
        font-weight: lighter;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .question__list {
    padding: 100px 0 30px;
    display: flex;
    justify-content: space-between;
    button {
      background: #f7f9f6;
      padding: 0px;
      border: 1px solid #e3e3e3;
      font-size: 10px;
      color: #7f7f7f;
      word-break: keep-all;
      &.click {
        background: #fff;
        border: 1px solid #46b7b0;
        color: #46b7b0;
      }
      span {
        display: block;
        padding: 15px;
      }
    }
  }
  .selectBox {
    font-size: 25px;
    padding: 30px 0;
    .faq_list {
      border-top: 1px solid #000;
      li {
        border-bottom: 1px solid #b8b8b8;
        padding: 15px 10px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
      }
      .depth1 {
        font-size: 16px;
        color: #353535;
        font-weight: bold;
        cursor: pointer;
        .rotate {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
        .depth2 {
          font-size: 16px;
          color: #555;
          font-weight: lighter;
        }
      }
    }
  }
}
</style>

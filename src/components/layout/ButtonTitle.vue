<template>
  <section>
    <div class="base">
      <div class="tag__list">
        <router-link
          v-for="(item, index) in allianceName"
          :key="item.name"
          :to="item.link"
          class="tag__item"
          :class="{ active: $route.path === item.link }"
        >
          <button
            @click="updateAllianceTag(item.name, index)"
            :class="{
              'first-button': index === 0,
              'last-button': index === allianceName.length - 1,
            }"
          >
            {{ item.name }}
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allianceTag: "",
      activeIndex: null,
      allianceName: [
        { name: "섭취가이드", link: "/intake" },
        { name: "멤버십 안내", link: "/membership" },
        { name: "자주묻는 질문", link: "/questions" },
        { name: "1:1 문의", link: "/inquiry" },
        { name: "기업제휴 문의", link: "/alliance" },
        { name: "공지사항", link: "/guideline" },
      ],
    };
  },
  methods: {
    updateAllianceTag(tagName, index) {
      this.allianceTag = tagName;
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.tag__list {
  display: flex;
  justify-content: center;
  .tag__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    button {
      color: #555;
      font-size: 19px;
      font-weight: bold;
      margin: 0 -5px;
      padding: 20px 10px;
      background: #fff;
      border: 1px solid #ddd;
      height: 71px;
      &.first-button {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &.last-button {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    &.active {
      button {
        background-color: #46b7b0;
        color: #fff;
        border: 1px solid #46b7b0;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .tag__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .tag__item {
      flex: 0 0 19%;
      display: flex;
      flex-direction: column;
      button {
        color: #555;
        font-size: 19px;
        font-weight: bold;
        margin: 0 -5px;
        padding: 20px 10px;
        background: #fff;
        border: 1px solid #ddd;
        height: 71px;
        border-radius: 10px;
        &.first-button {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        &.last-button {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      &.active {
        button {
          background-color: #46b7b0;
          color: #fff;
          border: 1px solid #46b7b0;
        }
      }
    }
  }
}
</style>

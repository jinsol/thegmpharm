<template>
  <section class="care_program">
    <ul v-for="(item, index) in program" :key="index">
      <li class="care_program-title">
        <h4>{{ item.title }}</h4>
        <ul class="care_program-title-target">
          <li>보험기간 : {{ item.InsurancePeriod }}</li>
          <li>가입가능나이 : {{ item.InsuranceSubscriptionAge }}</li>
        </ul>
      </li>
      <li class="care_program-contents">
        <ul>
          <li v-for="(item, index) in item.insuranceProducts" :key="index">
            <ul class="care_program-contents-image">
              <img :src="item.image" :alt="item.content" />
            </ul>
            <ul class="care_program-contents-text">
              {{
                item.content
              }}
            </ul>
          </li>
        </ul>
        <p class="care_program-contents-warning">
          <span>*보험 가입시 약관을 꼭 참고하시기 바랍니다.</span>
          <span
            >미래에셋생명
            준법감시인심의필-23-06-038(2023.06.22~2024.06.21)</span
          >
        </p>
      </li>
      <li class="care_program-goto">
        <p></p>
        <button class="gotoBT">{{ item.buttonTitle }}</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["program"],
};
</script>

<style lang="scss" scoped>
span {
  display: block;
}
.care_program {
  text-align: center;
  color: gray;
  & > ul {
    padding: 6% 0 8%;
    .care_program-title {
      margin-bottom: 20px;
      h4 {
        font-size: 20px;
        color: var(--main-color);
      }
      .care_program-title-target {
        li {
          display: inline;
          &:first-child:after {
            content: " / ";
          }
        }
      }
    }
    .care_program-contents {
      ul {
        display: flex;
        justify-content: space-between;
        li {
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .care_program-contents-image {
            max-width: 300px;
            // aspect-ratio: 1/1;
          }
          .care_program-contents-text {
            word-break: keep-all;
            width: 100%;
            display: block;
            padding: 1.4em 0;
            text-align: center;
            color: black;
          }
        }
      }

      .care_program-contents-warning {
        font-family: var(--body-font);
        font-size: 12px;
        text-align: right;
        color: lightgray;
      }
    }
    .care_program-goto {
      .gotoBT {
        background-color: var(--main-color);
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
      }
    }
  }
}
</style>

<template>
  <section class="care_program">
    <h3 class="care_title">지엠팜케어 <b>프로그램 보장 내역</b></h3>
    <article
      v-for="(item, index) in program"
      :key="index"
      class="care_program-article"
    >
      <ul>
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
                <span>{{ item.content_sub }}</span>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p class="care_program-contents-warning">
        <span>*보험 가입시 약관을 꼭 참고하시기 바랍니다.</span>
        <span
          >미래에셋생명 준법감시인심의필-23-06-038(2023.06.22~2024.06.21)</span
        >
      </p>
      <div class="care_program-goto">
        <button class="gotoBT">{{ item.buttonTitle }}</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: ["program"],
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    this.$nextTick(() => {
      gsap.utils.toArray(".care_program-article").forEach((article) => {
        gsap.from(article, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: article,
            start: "20% 100%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
span {
  display: block;
}
.care_program {
  text-align: center;
  color: gray;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .care_title {
    text-align: center;
    font-size: var(--title-size);
    padding: 2em 0;
    color: black;
    b {
      color: var(--main-color);
    }
  }
  article {
    & > ul {
      border: 1px solid var(--main-color);
      border-radius: 10px;
      .care_program-title {
        padding: 1.2em 0;
        background-color: var(--main-color-hover);
        border-bottom: 1px solid var(--main-color);
        h4 {
          font-size: 20px;
          color: var(--main-color);
        }
        .care_program-title-target {
          li {
            display: inline;
            font-family: var(--body-font);
            letter-spacing: -2px;
            font-weight: 300;
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
          padding: 20px;
          align-items: flex-end;
          li {
            padding: 0 20px;
            flex-basis: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            &:not(:last-child) {
              border-right: 1px dashed lightgray;
            }
            .care_program-contents-image {
              max-width: 300px;
              // aspect-ratio: 1/1;
            }
            .care_program-contents-text {
              border-top: 1px solid lightgray;
              word-break: keep-all;
              width: 100%;
              display: block;
              padding: 1.4em 0;
              text-align: center;
              color: black;
              span {
                font-size: 14px;
                font-family: var(--body-font);
                font-weight: 300;
                color: gray;
              }
            }
          }
        }
      }
    }
    .care_program-contents-warning {
      padding: 1em 0;
      font-size: var(--info-size);
      text-align: right;
      color: lightgray;
      span {
        font-family: var(--body-font);
      }
    }
    .care_program-goto {
      padding: 20px;
      .gotoBT {
        background-color: var(--main-color);
        color: white;
        font-size: var(--body-font);
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 8px 8px var(--main-color-hover);
          background-color: var(--main-color);
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    article {
      ul {
        .care_program-contents {
          ul {
            flex-direction: column;
            align-items: center;
            li {
              &:not(:last-child) {
                border-right: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>

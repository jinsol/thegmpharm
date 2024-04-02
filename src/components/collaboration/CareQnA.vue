<template>
  <section class="QnA_section">
    <h3 class="title">지엠팜케어 <span>Q&amp;A</span></h3>
    <ul
      class="list_box"
      @click="showAnswer"
      v-for="(item, index) in answerData"
      :key="index"
    >
      <li>
        <ul class="list_box_Q">
          <li class="list_box-tag">Q.</li>
          <li class="list_box-text">
            {{ item.Q }}
          </li>
          <li class="list_box-arrow">
            <i class="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
        <transition name="fade">
          <ul class="list_box_A">
            <li class="list_box-tag">A.</li>
            <li class="list_box-text">
              {{ item.A }}
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["answerData"],
  methods: {
    showAnswer(event) {
      event.currentTarget.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.QnA_section {
  padding: 4em 0;
  .title {
    text-align: center;
    font-size: var(--title-size);
    padding: 2em 0;
    span {
      color: var(--main-color);
    }
  }
  .list_box {
    width: 100%;
    li {
      ul {
        padding: 1.6% 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .list_box-tag {
          width: 5%;
          display: flex;
          justify-content: center;
          color: var(--main-color);
          font-weight: bolder;
        }
        .list_box-text {
          text-align: left;
          font-family: var(--body-font);
          letter-spacing: -1.4px;
          font-weight: 300;
          word-break: keep-all;
          flex: 1;
          line-height: 1.6em;
        }
        .list_box-arrow {
          padding: 0 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s ease-in-out;
        }
      }
      .list_box_Q {
        border-bottom: 1px solid var(--gray-color);
      }
      .list_box_A {
        display: none;
        background-color: whitesmoke;
      }
    }
  }

  .list_box.active {
    .list_box-arrow {
      transform: rotate(180deg);
    }
    .list_box_A {
      display: flex;
    }
  }

  .QnA_section.mobile {
    .list_box {
      padding: 0 3%;
      li {
        ul {
          padding: 3% 0;
          .list_box-tag {
            width: auto;
            padding-right: 2%;
          }
        }
      }
    }
  }
}
</style>

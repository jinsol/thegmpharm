<template>
  <section class="QnA_section">
    <ul
      class="list_box"
      @click="showAnswer"
      v-for="(item, index) in pillData"
      :key="index"
    >
      <li>
        <ul class="list_box_Q">
          <li class="list_box-tag"><i class="fa-solid fa-square-check"></i></li>
          <li class="list_box-text">
            {{ item.title }}
          </li>
          <li class="list_box-arrow">
            <i class="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
        <ul class="list_box_A">
          <li class="list_box-text">
            <ul
              v-for="(item, index) in item.contents"
              :key="index"
              class="list_box-text list_box-text-contents"
            >
              {{
                item
              }}
              <i class="fa-solid fa-angle-right"></i>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["pillData"],
  methods: {
    showAnswer(event) {
      event.currentTarget.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.list_box {
  width: 100%;
  li {
    ul {
      padding: 1.6% 0;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .list_box-tag {
        width: 2%;
        color: var(--main-color);
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .list_box-text {
        text-align: left;
        font-family: "Gothic A1";
        word-break: keep-all;
        flex: 1;
        line-height: 160%;
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
      padding: 2%;
      background-color: whitesmoke;
      .list_box-text-contents {
        padding: 0;
        line-height: 2.4em;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        & i {
          display: inline-block;
          padding-left: 8px;
          color: var(--main-color);
        }
        &:hover {
          color: gray;
        }
      }
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
        .list_box-tag {
          width: auto;
          padding-right: 2%;
        }
      }
    }
  }
}
</style>

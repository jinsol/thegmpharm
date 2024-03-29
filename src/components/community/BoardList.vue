<template>
  <section class="board_list">
    <ul>
      <li class="board_list-title">
        <ul class="board_list-content table_header">
          <li class="board_list-content-id">번호</li>
          <li class="board_list-content-title">제목</li>
          <li class="board_list-content-author">작성자</li>
          <li class="board_list-content-date">작성일</li>
          <!-- <li class="board_list-content-hits">조회수</li> -->
        </ul>
      </li>

      <li>
        <ul
          v-for="(item, index) in displayedProducts"
          :key="index"
          class="board_list-content"
        >
          <router-link
            :to="{ name: 'Id', params: { id: item.id } }"
            @click="onClick(item)"
          >
            <li class="board_list-content-id">{{ item.id }}</li>
            <li class="board_list-content-title">{{ item.title }}</li>
            <li class="board_list-content-author">{{ item.author }}</li>
            <li class="board_list-content-date">{{ item.date }}</li>
            <!-- <li class="board_list-content-hits">{{ item.hits }}</li> -->
          </router-link>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BoardList",
  props: ["boardList", "totalItems", "currentPage", "itemsPerPage"],

  data() {
    return {};
  },
  computed: {
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.boardList.slice(startIndex, endIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.board_list {
  .table_header {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 1% 0;
  }
  .board_list-content {
    a {
      display: flex;
      justify-content: space-between;
      text-align: center;
      padding: 1% 0;
      border-bottom: 1px solid var(--gray-color);
      * {
        font-family: var(--body-font);
      }
    }
    .board_list-content-id {
      width: 5%;
    }
    .board_list-content-title {
      width: 30%;
      text-align: left;
    }
    .board_list-content-author {
      width: 10%;
    }
    .board_list-content-date {
      width: 10%;
    }
    .board_list-content-hits {
      width: 10%;
    }
    &.table_header {
      background-color: var(--board-background);
      border: var(--board-border);
      color: black;
    }
  }
}

@media screen and (max-width: 900px) {
  .board_list {
    ul {
      .board_list-title {
        display: none;
      }
      li {
        .board_list-content {
          a {
            flex-wrap: wrap;
            justify-content: flex-start;
            padding: 0.6em 0;
            .board_list-content-id {
              display: none;
            }
            .board_list-content-title {
              width: 100%;
              font-weight: 600;
              color: black;
              flex-basis: 100%;
              font-size: 18px;
            }
            .board_list-content-author,
            .board_list-content-date {
              flex-basis: auto;
              width: auto;
              color: gray;
              font-size: 13px;
            }
            .board_list-content-author {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
}
</style>

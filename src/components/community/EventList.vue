<template>
  <section class="event_list">
    <ul>
      <li
        v-for="(item, index) in filteredEventList"
        :key="index"
        class="event_list-content"
      >
        <ul class="event_list-content-img">
          <img :src="item.imageSrc" :alt="item.eventName" />
        </ul>
        <ul class="event_list-content-text">
          <li class="event_list-content-text-title">{{ item.eventName }}</li>
          <li class="event_list-content-text-period">
            {{ item.eventPeriodStart }} ~ {{ item.eventPeriodEnd }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["filteredEventList"],
};
</script>

<style lang="scss" scoped>
.event_list {
  & > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2%;
  }

  .event_list-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid var(--gray-color);
    box-shadow: 0 4px 6px 2px var(--gray-color);
    margin-bottom: 6%;
    transition: all 0.3s ease-in-out;
    .event_list-content-img {
      transition: all 0.5s;
      overflow: hidden;
      img {
        width: 100%;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .event_list-content-text {
      display: flex;
      flex-direction: column;
      padding: 1em 4%;
      align-items: flex-start;
      font-family: var(--body-font);
      .event_list-content-text-title {
        font-weight: 900;
        color: black;
        width: 100%;
      }
      .event_list-content-text-period {
        font-size: 13px;
        color: gray;
        letter-spacing: 0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    & > ul {
      grid-template-columns: repeat(1, 1fr);
    }

    .event_list-content {
      border: 0px solid var(--gray-color);
      box-shadow: unset;
      margin-bottom: 0;
      .event_list-content-img {
        border-radius: 10px;
        overflow: hidden;
      }

      .event_list-content-text {
        padding: 1em 0;
      }
    }
  }
}
</style>

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
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .event_list-content {
      width: 49%;
      background: whitesmoke;
      margin-bottom: 6%;
      .event_list-content-img {
        min-height: 300px;
        background-color: gray;
        img {
          width: 100%;
        }
      }
      .event_list-content-text {
        padding: 1em 4%;
        display: flex;
        align-items: center;
        .event_list-content-text-title {
          width: 100%;
        }
        .event_list-content-text-period {
          font-size: 13px;
          color: gray;
          letter-spacing: 0;
        }
      }
    }
  }
}
</style>

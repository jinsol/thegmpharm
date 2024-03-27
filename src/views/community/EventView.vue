<template>
  <main class="row" :class="{ mobile: isMobile }">
    <section-title title="이벤트" sub_title="지엠팜의 이벤트를 확인하세요!" />
    <event-header
      :menuCategory="menuCategory"
      @changeCategory="changeCategory"
    />
    <event-list
      :filteredEventList="filteredEventList"
      :class="{ mobile: isMobile }"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue";
import EventHeader from "@/components/community/EventHeader.vue";
import EventList from "@/components/community/EventList.vue";
import { mapState } from "vuex";

export default {
  components: {
    SectionTitle,
    EventHeader,
    EventList,
  },
  name: "EventView",
  data() {
    return {
      menuCategory: ["진행중 이벤트", "종료된 이벤트"],
      eventList: [
        {
          imageSrc: "@/../public/image/event_240313_240319.jpg",
          eventName: "더스트롱포맨 올인원 사전 예약 이벤트",
          eventPeriodStart: "2024-03-13",
          eventPeriodEnd: "2024-03-19",
        },
        {
          imageSrc: "@/../public/image/event_240306_241231_2.jpg",
          eventName: "내 몸을 지키는 꾸준한 습관",
          eventPeriodStart: "2024-03-06",
          eventPeriodEnd: "2024-12-31",
        },
        {
          imageSrc: "@/../public/image/event_240306_241231_1.jpg",
          eventName: "매일매일 오늘의 라이브 특가",
          eventPeriodStart: "2024-03-06",
          eventPeriodEnd: "2024-12-31",
        },
        {
          imageSrc: "@/../public/image/event_231011_251231.jpg",
          eventName: "지엠팜베이비 임밍아웃 이벤트",
          eventPeriodStart: "2023-10-11",
          eventPeriodEnd: "2024-12-31",
        },
        {
          imageSrc: "@/../public/image/event_220920_241231.jpg",
          eventName: "GMPHARM X 문경",
          eventPeriodStart: "2022-9-20",
          eventPeriodEnd: "2024-12-31",
        },
        {
          imageSrc: "@/../public/image/event_240304_240311.jpg",
          eventName: "트니프렌즈 초특가 할인 이벤트",
          eventPeriodStart: "2024-03-04",
          eventPeriodEnd: "2024-3-11",
        },
        {
          imageSrc: "@/../public/image/event_240219_240226.jpg",
          eventName: "이너풀세트 할인 이벤트",
          eventPeriodStart: "2024-02-19",
          eventPeriodEnd: "2024-02-26",
        },
        {
          imageSrc: "@/../public/image/event_240122_240131.jpg",
          eventName: "2024년 지엠팜 설 맞이 이벤트",
          eventPeriodStart: "2024-01-22",
          eventPeriodEnd: "2024-01-31",
        },
      ],
      selectedCategory: "진행중 이벤트",
    };
  },
  methods: {
    changeCategory(category) {
      this.selectedCategory = category;
    },
  },
  computed: {
    filteredEventList() {
      const now = new Date();
      return this.eventList.filter((event) => {
        const EndDate = new Date(event.eventPeriodEnd);
        if (this.selectedCategory == "진행중 이벤트") {
          return EndDate >= now;
        } else {
          return EndDate <= now;
        }
      });
    },
    ...mapState(["isMobile"]),
  },
};
</script>

<style lang="scss" scoped></style>

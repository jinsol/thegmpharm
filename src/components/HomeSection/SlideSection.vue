<template>
  <div class="slide">
    <div class="slideOuter">
      <div class="slideInner">
        <div v-for="(image, index) in images" :key="index" class="slide-item" :class="{ active: index === currentIndex }">
          <img :src="image.img" :alt="image.alt">
        </div>
      </div>
        <button @click="prevSlide" class="prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button @click="nextSlide" class="next"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="dots">
      <span v-for="(image, index) in images" :key="index" class="dot" :class="{ active: index === currentIndex }" @click="changeSlide(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { img: './image/메인배너(pc)-더스트롱포맨올인원.jpg', alt: 'Image 1' },
        { img: './image/메인배너(pc).jpg', alt: 'Image 2' },
        { img: './image/메인배너(pc)-2024신년인사.jpg', alt: 'Image 3' },
        { img: './image/메인배너(pc)-라이브.jpg', alt: 'Image 4' },
        { img: './image/메인배너(pc)_3.jpg', alt: 'Image 5' },
      ],
      currentIndex: 0,
      intervalId: null // interval ID 저장할 변수 추가
    };
  },
  mounted() {
    this.startSlider(); // 슬라이드 자동 전환을 시작하는 함수 호출
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    },
    changeSlide(index) {
      this.currentIndex = index;
    },
    startSlider() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); // 3초마다 슬라이드 전환
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId); // 컴포넌트가 파괴되기 전에 interval 정리
  }
};
</script>
  
  <style  lang="scss" scoped>
.slide {
  text-align: center;
  position: relative;

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #ddd;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }

  .slideOuter {
    width: 100%;
    margin: 0 auto;
    position: relative;
    button {
      position: absolute;
      top: 40%;
      color: #fff;
      cursor: pointer;
      font-size: 150px;
      &:hover {
        color: #555;
      }
      &.next {
        right: 5%;
        left:auto;
      }
      &.prev {
        left: 5%;
        right: auto;
      }
    }
  }

  .slideInner {
    display: flex;
  }

  .slide-item {
    display: none;
    justify-content: center;
    align-items: center;
  }

  .slide-item.active {
    display: flex;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
    
}
  </style>
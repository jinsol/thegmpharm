<template>
        <div class="row">
            <div class="event ">
                <img src="/image/4.png" alt="banner">
            </div>
            <div id="eventSlide" class="slideInner">
                <swiper class="slide" :options="eventSlide">
                   <swiper-slide v-for="(item, index) in images" :key="index">
                           <img :src="item.img" :alt="item.alt">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/myswiper.css'

    export default {
        components:{
            Swiper,
            SwiperSlide,
        },    
        data(){
            return{
            images:[
                {img: './image/main-event-banner02.png',     alt: 'Image 1'},
                {img: './image/main-event-banner02 (1).png', alt: 'Image 1'},
                {img: './image/main-event-banner02 (2).png', alt: 'Image 1'},
                {img: './image/main-event-banner02 (3).png', alt: 'Image 1'},
            ],
            eventSlide:{
                slidesPerView:1, //보여주고 싶은 슬라이드 
                    spaceBetween:0, //1장일때는 0 
                    effect:"slide",
                    autoplay:{
                        delay:3000
                    },
                    loop:true, 
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true //슬라이드 넘기기 트루값
                    },
                }
  }
    }
    }    
</script>

<style lang="scss" scoped>
</style>
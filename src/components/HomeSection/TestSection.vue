<template>
    <section id="TestSection">
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <router-link :to="slider.href"><img :src="slider.image" :alt="slider.alt"></router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/myswiper.css'

    export default {
        name:"TestSection",
        components:{
            Swiper,
            SwiperSlide,
        },
        data(){
            return{
                sliders : [
                    { image:"./image/메인배너(pc)-더스트롱포맨올인원.jpg", alt:"이미지1", href:"/" },
                    { image:"./image/메인배너(pc).jpg", alt:"이미지2", href:"/" },
                    { image:"./image/메인배너(pc)-2024신년인사.jpg", alt:"이미지3", href:"/" },
                    { image:"./image/메인배너(pc).gif", alt:"이미지1", href:"/" },
                    { image:"./image/메인배너(pc)-정기배송.jpg", alt:"이미지2", href:"/" },
                    { image:"./image/메인배너(pc)앱.jpg", alt:"이미지3", href:"/" },
                    { image:"./image/메인배너(pc)-라이브.jpg", alt:"이미지1", href:"/" },
                    { image:"./image/메인배너(pc)_3.jpg", alt:"이미지2", href:"/" },
                ],
                swiperOption:{
                    slidesPerView:1, //보여주고 싶은 슬라이드 
                    spaceBetween:0, //1장일때는 0 
                    effect:"slide",
                    autoplay:{
                        delay:3000
                    },
                    loop:true, 
                    navigation:{
                        prevEl:'.swiper-button-prev',
                        nextEl:'.swiper-button-next'
                    },
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true //슬라이드 넘기기 트루값
                    }
                }
            }
        }
    }
    
    
</script>

<style lang="scss" scoped>

</style>
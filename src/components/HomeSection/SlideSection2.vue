<template>
    <div id="slideSection2" class="slideInner">
        <Swiper  class="swiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in images" :key="index" >
                <img :src="getSlideImage(item)" :alt="item.alt">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </Swiper>
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
                    {img:'./image/main_banner_slide.jpg', alt:'배너1', mobile:'./image/slide_1.jpg'},
                    {img:'./image/main_banner_slide (1).jpg', alt:'배너2', mobile:'./image/slide_2.jpg'}
                ],
                breakpoint: 900,
            isMobileView: false
            }
        },
            computed:{    
             swiperOptions(){
                return{
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
                    breakpoints: {
                    900: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    }
                }
                }
            }
        },
        methods: {
        getSlideImage(slider) {
            if (this.isMobileView && slider.mobile) {
                return slider.mobile;
            } else {
                return slider.img;
            }
        },
        checkMobileView() {
            this.isMobileView = window.innerWidth < this.breakpoint;
        }
    },
    mounted() {
        this.checkMobileView();
        window.addEventListener('resize', this.checkMobileView);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobileView);
    }
    }
</script>

<style lang="scss" scoped>

</style>
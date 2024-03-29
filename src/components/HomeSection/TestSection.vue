<template>
    <section id="TestSection">
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <router-link :to="slider.href">
                        <img :src="getSlideImage(slider)" :alt="slider.alt">
                    </router-link>
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
    name: "TestSection",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            sliders: [
                { image: "./image/메인배너(pc)-더스트롱포맨올인원.jpg", alt: "이미지1", href: "/", mobile: "./image/slide_(1).gif" },
                { image: "./image/메인배너(pc).jpg", alt: "이미지2", href: "/", mobile: "./image/slide_(2).jpg" },
                { image: "./image/메인배너(pc)-2024신년인사.jpg", alt: "이미지3", href: "/", mobile: "./image/slide_(3).jpg" },
                { image: "./image/메인배너(pc).gif", alt: "이미지1", href: "/", mobile: "./image/slide_(4).jpg" },
                { image: "./image/메인배너(pc)-정기배송.jpg", alt: "이미지2", href: "/", mobile: "./image/slide_(5).jpg" },
                { image: "./image/메인배너(pc)앱.jpg", alt: "이미지3", href: "/", mobile: "./image/slide_(6).jpg" },
                { image: "./image/메인배너(pc)-라이브.jpg", alt: "이미지1", href: "/", mobile: "./image/slide_(3).jpg" },
                { image: "./image/메인배너(pc)_3.jpg", alt: "이미지2", href: "/", mobile: "./image/slide_(4).jpg" },
            ],
            breakpoint: 900,
            isMobileView: false
        }
    },
    computed: {
        swiperOption() {
            return {
                slidesPerView: 1,
                spaceBetween: 0,
                effect: "slide",
                autoplay: {
                    delay: 3000
                },
                loop: true,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
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
                return slider.image;
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
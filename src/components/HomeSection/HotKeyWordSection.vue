<template>
    <div id="hotKeyword" class="row" >
        <section-title title="Hot Keyword" /> 
        <div class="Btn">
            <button :class="{active : activeButton}">{{ PrdMenu.menu1 }}</button>
            <button>{{ PrdMenu.menu2 }}</button>
            <button>{{ PrdMenu.menu3 }}</button>
            <button>{{ PrdMenu.menu4 }}</button>
            <button>{{ PrdMenu.menu5 }}</button>
            <button>{{ PrdMenu.menu6 }}</button>
            <button>{{ PrdMenu.menu7 }}</button>
            <button>{{ PrdMenu.menu8 }}</button>
        </div>
        <div id="slideSection2" class="slideInner">
        <Swiper  class="slide" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in PrdSlide" :key="index">
                <div class="arrivalBox">
                    <div class="imgBox">
                        <img :src="item.img" :alt="item.alt">
                    </div>
                    <span v-for="(value, index) in item.icon" :key="index">
                        <img :src="value" alt="">
                    </span>
                    <p class="name">{{ item.name }}</p>
                    <p class="coment">{{ item.coment }}</p>
                    <p class="price">{{ item.price }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </Swiper>
    </div>
    </div>
</template>


<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/myswiper.css'

export default {
    components:{
        Swiper,
        SwiperSlide,
        SectionTitle,
    },
    data(){
        return{
            PrdMenu:{
                menu1:'유소아 · 어린이',
                menu2:'임신 · 출산',
                menu3:'성인건강',
                menu4:'이너뷰티',
                menu5:'오메가3',
                menu6:'유산균',
                menu7:'칼슘',
                menu8:'면역력',
            },
            PrdSlide:[
                {img:'./image/RDV_m1_p04.png',                      alt:'제품사진', link:'/',name:'더징크디 면역구미 포도맛 곰돌이 아연면역젤리',coment:'귀여운 곰돌이 모양, 아이들이 좋아한느 포도맛 면역젤리', price:'19,800원', icon:['./image/custom_2716877566803974.png', './image/custom_1016487034057505.png'] },
                {img:'./image/b48e23025d79abb8ce6c09368e007e07.png',alt:'제품사진', link:'/',name:'[지엠팜]더칼슘디/1개월분(유소아 / 어린이 칼슘) 칼슘 마그네슘',coment:'유소아 성장기 필수 미네랄인 칼슘과 뼈 건강에 도움이 되는 비타민D 칼슘 흡수/활용에 도움이 되는 망간, 마그네슘까지 한 번에, ', price:'25,000원', icon:['./image/custom_2716877566803974.png', './image/custom_1016487034057505.png'] },
                {img:'./image/e97e441f4cc96594724e48a247ad60f1.png',alt:'제품사진', link:'/',name:'야미푸 그린 프로폴리스 면역젤리 (구강항균과 면역을 한 번에)',coment:'프로폴리스라고 믿을 수 없는 놀라운 맛!', price:'18,000원', icon:['./image/custom_2716877566803974.png', './image/custom_1016487034057505.png'] },
                {img:'./image/RDV_m1_p10.png',                      alt:'제품사진', link:'/',name:'[지엠팜]야미푸 키즈 멀티비타민',coment:'성장기 필수 비타민&미네랄 13종을 달콤한 오렌지맛으로 한 번에', price:'17,800원', icon:['./image/custom_2716877566803974.png'] },
                {img:'./image/RDV_m1_p09.png',                      alt:'제품사진', link:'/',name:'[지엠팜]야미푸 식물성 알티지 오메가3(DHA, 비타민E, 베타카로틴) / 30일분',coment:'EPA 및 DHA 함유유지, 비타민E, 베타카로틴| 야미푸 식물성 알티지 오메가3 ', price:'35,000원', icon:['./image/custom_2716877566803974.png', './image/custom_1016487034057505.png'] },
                {img:'./image/4be2ea3e0945be86acfd1e2af41d2488.png',alt:'제품사진', link:'/',name:'[지엠팜] 더칼슘디젤리 (칼슘, 비타민D) 성장기 유소아',coment:'체내 흡수가 용이한 구연산 칼슘과 비타민 D를 한 번에 섭취 가능. 아이들이 좋아하는 탱글탱글 젤리 제형에 달콤한 복숭아 맛! (부원료)마그네슘, 망간, 비타민E, 비타민K1, 프락토올리고당까지', price:'16,000원', icon:['./image/custom_2716877566803974.png'] },
                {img:'./image/6db1fdba294eef08a5770727f48f7c81.png',alt:'제품사진', link:'/',name:'[지엠팜] 야미푸철분씨 / 1개월 (철분, 비타민C 함유) 유소아철분제 어린이철분, 야미푸 철분씨',coment:'비린 맛이 덜한 리포퍼 철분으로 아이들이 더 잘 먹도록 고민한 새콤달콤 포도맛 가루형 철분제.', price:'18,000원', icon:['./image/custom_2716877566803974.png'] },
                {img:'./image/0ea7e312b54255c56fe38800791860d4.png',alt:'제품사진', link:'/',name:'[지엠팜] 더프로바이오 츄어블 (17종 유산균+비타민D+아연)  온가족 유산균',coment:'17종의 유산균과 비타민 D, 아연을 달콤한 요구르트 맛 츄어블로 편리하게 섭취할 수 있는 제품.', price:'품절', icon:['./image/custom_2716877566803974.png', './image/custom_2216487045046389.png'] },
                {img:'./image/7849293f0d59512abaff2cab6462ff80.png',alt:'제품사진', link:'/',name:'[지엠팜] 더징크디 홍삼젤리 (어린이/ 홍삼+아연+나이아신) 어린이홍삼,홍삼젤리',coment:'6년근 홍삼을 아이들이 맛있게 먹을 수 있도록 국내산 딸기 농축액으로 맛을 낸 홍삼 젤리. 아연과 홍삼의 면역력 듀얼 콜라보.', price:'품절', icon:['./image/custom_2716877566803974.png', './image/custom_2216487045046389.png'] },
                {img:'./image/f7aada54d7b297ae5ebedbeb494d55f1.png',alt:'제품사진', link:'/',name:'[지엠팜] 더프로바이오 아연디 (17종 유산균+비타민D+아연)  유소아용 유산균',coment:'보장균수 50억 유산균과 아연, 비타민D를 한 번에. 여러 가지 찾아 먹이지 마시고 한 번에 편하게 먹이세요. 지엠팜은 엄마 아빠의 마음으로 생각합니다.', price:'45,000원', icon:['./image/custom_2716877566803974.png'] },
                {img:'./image/RDV_m1_p06.png',                      alt:'제품사진', link:'/',name:'[지엠팜] 더징크디시럽 / 1개월분 ( 아연 + 비타민D ) 어린이아연',coment:'흡수율이 높은 글루콘산 아연과 비타민 D를 달콤한 딸기맛 시럽으로 한 번에. 국내산 딸기 원물을 사용하여 믿을 수 있는 제품.', price:'25,000원', icon:['./image/custom_2716877566803974.png', './image/custom_1016487034057505.png'] },
                {img:'./image/RDV_m1_p14.png',                      alt:'제품사진', link:'/',name:'[지엠팜]더칼슘디/1개월분 (유소아 / 어린이 칼슘) 칼슘 마그네슘',coment:'유소아 성장기 필수 미네랄인 칼슘과 뼈 건강에 도움이 되는 비타민 D, 칼슘 흡수/활용에 도움이 되는 망간, 마그네슘까지 한 번에.', price:'25,000원', icon:['./image/custom_2716877566803974.png'] },
            ],
            swiperOptions:{
                slidesPerView:4,
                spaceBetween:20,
                effect:"slide",
                loop:true, 
                navigation:{
                        prevEl:'.swiper-button-prev',
                        nextEl:'.swiper-button-next'
                    },
            },
        }
    }
}

</script>

<style lang="scss" scoped>
#hotKeyword{
    .Btn{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #d9d9d9;
        button{
          font-size: 15px;
          color: #333;
        }
    }
    .slideInner{
        padding: 50px 0;
        .imgBox{
            background: #f7f7f7;
            border-radius: 15px;
            overflow:hidden ;
            img{

            padding: 30px;
            transition: all 0.3s;
            &:hover{
                scale:(1.1);
            }
            }
        }
        .name{
            font-size: 20px;
            color: #222;
        }
        .coment{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 16px;
            color: #777;
            margin: 5px 0;
        }
        .price{
            font-size: 18px;
            color:#222;
        }
    }
}
</style>
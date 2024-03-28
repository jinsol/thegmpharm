<template>
    <div class="back">
        <div class="cage">
            <div class="linkBox">
                <div class="mainBox" v-for="(item,index) in images" :key="index">
                    <router-link :to="item.link">
                        <div class="imgContainer">
                            <div class="imgBox">
                                <img :src="item.image" :alt="item.alt">
                            </div>
                        </div>
                 <div class="textBox">
                        <h3>{{ item.text }}</h3>
                        <p>{{ item.coment }}</p>
                 </div>
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                images:[
                    {image:'./image/main_membership.png', alt:'이미지',link:'/membership',text:'멤버십 혜택',coment:'지엠팜 멤버십을 통해 다양한 멤버십 혜택을 누려보세요.'},
                    {image:'./image/main_blog.png', alt:'이미지',link:'/',text:'지엠팜 블로그',coment:'전문약사들이 만든 블로그에서 다양한 소식을 전해드립니다.'},
                    {image:'./image/main_magazine.png', alt:'이미지',link:'/magazine',text:'더 매거진',coment:'고객의 행복을 위한 건강 정보, 지엠팜 매거진과 함께하세요.'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.back{
    background: #eef4f8;
    .cage{
        max-width: 1400px;
  margin: 4% auto 0%;
  .linkBox{
    display: flex;
    justify-content: space-around;
    .mainBox{
        padding: 10px;
        .imgContainer{
            .imgBox{
                img{

                }
            }
        }
    }
  }
    }
}
</style>
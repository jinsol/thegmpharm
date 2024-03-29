<template>
    <div class="back">
      <div class="cage">
        <div class="linkBox">
          <div class="mainBox" v-for="(item, index) in images" :key="index">
            <router-link :to="item.link">
              <div class="imgContainer">
                <div class="imgBox">
                  <img :src="item.image" :alt="item.alt" @mouseover="mouseoverHandler(item)" @mouseleave="mouseleaveHandler(item)">
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
        },
        methods: {
    // 마우스 오버 이벤트 핸들러
    mouseoverHandler(item) {
      // 해당 이미지의 경로를 _h가 붙은 이미지로 변경
      item.image = item.image.replace('.png', '_h.png');
    },
    // 마우스 리브 이벤트 핸들러
    mouseleaveHandler(item) {
      // 마우스 리브시 기본 이미지로 변경
      item.image = item.image.replace('_h.png', '.png');
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
        a{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        .imgContainer{
            flex: 0 0 35%;
            padding: 10px;
            .imgBox{
                img{

                }
            }
        }
        .textBox{
            word-break: keep-all;
            h3{
                color: #444;
                font-size: 19px;
            }
            p{
                color: #777;
                font-size: 15px;
            }
        }
    }
    }
  }
    }
}
@media screen and (max-width:900px){
    .back{
    background: #eef4f8;
    .cage{
        max-width: 1400px;
  margin: 4% auto 0%;
  .linkBox{
    display: flex;
    justify-content: space-around;
    .mainBox{
        a{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        flex-direction: column;
        .imgContainer{
            flex: 0 0 100%;
            padding: 10px;
            .imgBox{
                img{
                }
            }
        }
        .textBox{
            word-break: keep-all;
            h3{
                color: #444;
                font-size: 15px;
            }
            p{
                display: none;
            }
        }
    }
    }
  }
    }
}
}
</style>
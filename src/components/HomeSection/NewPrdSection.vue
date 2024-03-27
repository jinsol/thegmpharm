<template>
  <div class="back">
    <div class="row">  
      <div class="New">
          <div class="titBox">
            <p>New Product</p>
            <p>지엠팜의 새로운 제품을 소개합니다.</p>
            <div class="tabBox">
              <ul>
                <li>
                 <button @click="handleAllInOneClick">
                   &#35;리뉴얼 출시된 더스트롱포맨 올인원
                  </button>
                </li>
                <li>&#35;요청 폭주한 쏘옥 30ml 출시</li>
                <li>&#35;우리 아이와의 첫 만남</li>
                <li>&#35;말랑말랑 구미로 칼슘과 비타민D를 섭취</li>
              </ul>
            </div>
          </div>
          <div class="prodBox">
            <div class="imgBox">
              <img src="/image/c3b4744efbccdf90e43bd1a21866d5ff.png" alt="">
            </div>
            <div class="productText">
              <div class="textBox">
                <p>The Strong for Man All in One</p>
                <p>(2,200mg/30일분)</p>
              </div>
              <div class="prodName">
                <p>[지엠팜] 더스트롱포맨 올인원</p>
              </div>
              <div class="desc">
                <p>스트레스 긴장완화를 위한 홍경천 추출물과 지구력 증진에 도움이 되는 옥..</p>
                <p>44,500원 25%</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AllInOne from "@/components/New/AllInOne.vue"
  
export default {
name: 'NewPrdSection',
components: {
  AllInOne,
},
methods: {
  handleAllInOneClick() {
    // 버튼 클릭 시 처리할 내용을 여기에 추가
    console.log('All In One 버튼이 클릭되었습니다.');
  }
}
}
</script>

<style lang="scss" scoped>
.back {
background: #f7f9f6;
.New {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .titBox {
    .tabBox {
    }
  }
  .prodBox {
    .imgBox {
      background: #fff;
      width: 440px;
      height: 440px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        transition: all 0.3s;
        &:hover {
          scale: (1.1);
        }
      }
    }
    .productText {
    }
    .prodName {
    }
    .desc {
    }
  }
}
}
</style>
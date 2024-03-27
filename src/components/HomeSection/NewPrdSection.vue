<template>
  <div class="back">
    <div class="row">  
      <div class="New">
          <div class="titBox">
            <p>New Product</p>
            <p>지엠팜의 새로운 제품을 소개합니다.</p>
            <div class="Btn">
                 <button @click="changeActiveButton(BtnNames.name1)" :class="{ active: activeButton === BtnNames.name1 }">{{ BtnNames.name1 }}</button>
                 <button @click="changeActiveButton(BtnNames.name2)" :class="{ active: activeButton === BtnNames.name2 }">{{ BtnNames.name2 }}</button>
                 <button @click="changeActiveButton(BtnNames.name3)" :class="{ active: activeButton === BtnNames.name3 }">{{ BtnNames.name3 }}</button>
                 <button @click="changeActiveButton(BtnNames.name4)" :class="{ active: activeButton === BtnNames.name4 }">{{ BtnNames.name4 }}</button>
            </div>
          </div>
          <div class="prodBox" v-for="(item,index) in activeProduct.PrdInfo" :key="index">
            <div class="imgBox">
              <img :src="item.img" alt="">
            </div>
            <div class="productText">
              <div class="textBox">
                <p>{{ item.name }}</p>
                <p>{{ item.sub }}</p>
              </div>
              <div class="prodName">
                <p>{{ item.desc }}</p>
                <p>{{ item.coment }}</p>
                <p>{{ item.price }}</p>
              </div>
              <div class="desc">
                <p></p>
                <p></p>
                <router-link to="/">구매하기</router-link>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data() {
  return {
    activeButton: '#리뉴얼 출시된 더스트롱포맨 올인원',
    BtnNames: {
      name1: '#리뉴얼 출시된 더스트롱포맨 올인원',
      name2: '#요청 폭주한 쏘옥 30ml 출시',
      name3: '#우리 아이와의 첫 만남',
      name4: '#말랑말랑 구미로 칼슘과 비타민D를 섭취'
    },
    PrdInfo: [
      {name: '#리뉴얼 출시된 더스트롱포맨 올인원',
       PrdInfo: [
         {name: 'The Strong for Man All in One',sub:'(2,200mg/30일분)', coment: '스트레스 긴장완화를 위한 홍경천 추출물과 지구력 증진에 도움이 되는 옥타코사놀과 남성 건강에 필요한 아연 등의 미네랄, 비타민을 일일 권장량 이상으로 담은 남성 건강 종합 솔루션', desc: '[지엠팜] 더스트롱포맨 올인원', price: '44,500원',img:['./image/c3b4744efbccdf90e43bd1a21866d5ff.png']}
       ]
      },
      {name: '#요청 폭주한 쏘옥 30ml 출시',
       PrdInfo: [
         {name: '100% 국내산 플래티넘 실리콘 투약병',sub:'BPA FREE로 환경 호르몬 없는 국내생산 친환경 소재 플래티넘 실리콘 투약병',  coment: '지엠팜 약사들이 직접 만든 실리콘 투약병', desc: '[지엠팜] 쏘옥 30ml (재사용 가능한 실리콘 투약병)', price: '10,000원',img:['./image/7cb0ac126b5162d7b462abcba41711e7.png']}
       ]
      },
      {name: '#우리 아이와의 첫 만남',
       PrdInfo: [
         {name: '아임테스트',sub:'빠르고 정확한 임신테스트기',  coment: '아임테스트 임신테스트기', desc: '아임테스트 (임신테스트기)', price: '4,000원',img:['./image/7c70262db40fbc504eb37a6e49331a80.png']}
       ]
      },
      {name: '#말랑말랑 구미로 칼슘과 비타민D를 섭취',
       PrdInfo: [
         {name: '트니프렌즈 키즈칼슘디구미',sub:'지엠팜과 트니프렌즈가 만났다!',  coment: '어린이를 위한 칼슘 비타민디 구미', desc: '트니프렌즈 키즈칼슘디구미', price: '19,800원',img:['./image/8d39508c2e2e67d7b68103e33773f2a9.png']}
       ]
      }
    ]
  };
},
computed: {
  activeProduct() {
    return this.PrdInfo.find((item) => item.name === this.activeButton);
  }
},
methods: {
  changeActiveButton(name) {
    this.activeButton = name;
  }
}
};
</script>

<style lang="scss" scoped>
.back {
background: #f7f9f6;
.New {
display: flex;
padding: 15px;
  .titBox {
    p{
      font-size: 45px;
      color: #333;
    }
  }
  .Btn{
    display: flex;
    flex-direction: column;
    button{
    border: 1px solid #333;
    padding: 30px;
    border-radius: 50px;
    background: #fff;
    margin: 5px;
    &:hover{
      color:#46b7B0;
        border:1px solid #46b7B0;
    }
  }}
  .prodBox {
    display: flex;
      justify-content: space-between;
    .imgBox {
      background: #fff;
      border-radius: 50%;
      width: 500px;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex:0 0 70%;
      img {
      }
    }
    .productText {
      display: flex;
      flex-direction: column;
    }
    .textBox{
      border-bottom: 1px solid #333;
    }
    .prodName {
    }
    .desc {
    }
    a{
      display: block;
      border: 1px solid #999;
      padding: 30px;
      border-radius: 75px;
      text-align: center;
      &:hover{
        color:#46b7B0;
        border:1px solid #46b7B0;
      }
    }
  }
}
}
</style>
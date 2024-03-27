<template>
    <div class="row">
  <div class="question__list">
  <button v-for="(item, index) in questionTag" :key="item.name" @click="updateQuestionTag(item.name)"
  :class="{'active':item.name === questionButton, 'click': item.name === questionButton}">
  <span>
    <img :src="item.image" :alt="item.name" @click ="updateQuestionTag(index.image2)" :class="{'active':item.image2 === activeImg}" >
  </span>
  <span>{{ item.name }}</span>
  </button>
  </div>
  
  <div class="selectBox" >
      <div v-if="questionTagValue === '회원·정보'" >
  <div class="faq_list">
  <div v-for="(item, index) in faqItems" :key="index">
      <ul class="depth1" @click="toggleDepth2(index)" :class="{'open' : item.showDepth2}">
          <li>{{ item.title }}
              <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
          </li>
      <ul class="depth2" v-show="item.showDepth2">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                <span v-html="breakLines(subItem.content)"></span>
              </li>
      </ul>
      </ul>
  </div>
  </div>
  
  </div>
      <div v-else-if="questionTagValue === '주문·결제'">
          <div class="faq_list">
  <div v-for="(item, index) in faqItems2" :key="index">
  <ul class="depth1" @click="toggleDepth2_2(index)":class="{'open' : item.showDepth2}">
      <li>
          {{ item.title }}
          <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
      </li>
      
      <ul class="depth2" v-show="item.showDepth2">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
            <span v-html="breakLines(subItem.content)"></span>
          </li>
      </ul>
  </ul>
  </div>
  </div>
      </div>
      <div v-else-if="questionTagValue === '배송관련'">
          <div class="faq_list">
  <div v-for="(item, index) in faqItems3" :key="index">
  <ul class="depth1" @click="toggleDepth2_3(index)":class="{'open' : item.showDepth2}">
      <li>{{ item.title }}
          <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
      </li>
      <ul class="depth2" v-show="item.showDepth2">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
            <span v-html="breakLines(subItem.content)"></span>
          </li>
      </ul>
  </ul>
  </div>
  </div>
          </div>
      <div v-else-if="questionTagValue === '취소·반품·교환·환불'">
          <div class="faq_list">
  <div v-for="(item, index) in faqItems4" :key="index">
  <ul class="depth1" @click="toggleDepth2_4(index)":class="{'open' : item.showDepth2}">
      <li>{{ item.title }}
          <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
      </li>
      <ul class="depth2" v-show="item.showDepth2">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
            <span v-html="breakLines(subItem.content)"></span>
          </li>
      </ul>
  </ul>
  </div>
  </div></div>
      <div v-else-if="questionTagValue === '쿠폰·적립금·이벤트'">
          <div class="faq_list">
  <div v-for="(item, index) in faqItems5" :key="index">
  <ul class="depth1" @click="toggleDepth2_5(index)":class="{'open' : item.showDepth2}">
      <li>{{ item.title }}
          <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
      </li>
      <ul class="depth2" v-show="item.showDepth2">
          <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
            <span v-html="breakLines(subItem.content)"></span>
          </li>
      </ul>
  </ul>
  </div>
  </div></div>
  </div>
  </div>
  </template>
  
  <script>
  import SectionTitle from "@/components/layout/SectionTitle.vue"
  import ButtonTitle from "@/components/layout/ButtonTitle.vue";
  
    export default {
      components:{
          SectionTitle,
          ButtonTitle,
      },
      mounted() {
    // 페이지가 로드될 때 초기 이미지 상태 설정
    this.updateQuestionTag(this.questionButton);
  },
      data() {
          return {
            questionButton:'회원·정보',
            activeButton:'회원·정보',
            activeImg:'./image/faq_icon01_h.png',
              questionTagValue:'', // 클릭된 질문 버튼을 저장할 데이터 속성
              questionTag:[
                  {name: '회원·정보', image: './image/faq_icon01.png',image1: './image/faq_icon01.png', image2: './image/faq_icon01_h.png' },
                  {name: '주문·결제', image: './image/faq_icon02.png',image1: './image/faq_icon02.png', image2: './image/faq_icon02_h.png'  },
                  {name: '배송관련', image: './image/faq_icon03.png',image1: './image/faq_icon03.png', image2: './image/faq_icon03_h.png'  },
                  {name: '취소·반품·교환·환불', image: './public/image/faq_icon04.png',image1: './image/faq_icon04.png', image2: './image/faq_icon04_h.png'  },
                  {name: '쿠폰·적립금·이벤트', image: './public/image/faq_icon05.png',image1: './image/faq_icon05.png', image2: './image/faq_icon05_h.png'  },
              ],faqItems: [
                  {
                      title: '상품을 주문했는데 적립금은 언제 들어오나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '적립금은 주문하신 상품이 배달완료로 확인이 되면 자동으로 지급됩니다.' },
                      ]
                  },
                  {
                      title: '회원이 되면 어떤 혜택이 있나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '회원가입시 할인쿠폰을 받으실 수 있으며, 회원 등급별로 적립금, 추가할인 혜택을 받으실 수 있습니다.' },
                      ]
                  },
                  {
                      title: '아이디와 비밀번호를 잊어버렸습니다.',
                      showDepth2: false,
                      subItems: [
                          { content: '홈페이지 우측 상단 [로그인> 아이디/비밀번호 찾기] 버튼을 눌러 아이디 혹은 비밀번호를 찾으실 수 있습니다.  \n- 아이디 찾기: 가입 전화번호 입력 후 아이디 전송 \n- 비밀번호 찾기: 가입 전화번호 입력 후 비밀번호 재설정 링크 전송' },
                      ]
                  },
                  {
                      title: '휴대폰 번호가 변경되었습니다.',
                      showDepth2: false,
                      subItems: [
                          { content: '1:1 문의/ 고객센터 1811-7835로 연락주시면 회원 본인 확인 후 도와 드리겠습니다.' },
                      ]
                  },
              ],faqItems2: [
                  {
                      title: '전화로 주문할 수 있나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '네. 가능합니다. 결제방법은 무통장입금 또는 카드결제로 가능합니다. \n고객센터 1811-7835 로 전화해 주시면 친절히 도와드리겠습니다. \n결제계좌안내 \n[ IBK기업은행 / (주)지엠팜 / 357-078344-01-046 ]' },
                      ]
                  },
                  {
                      title: '주문자와 입금자명이 다를 때는 어떻게 해야 하나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '주문자와 입금자 성함이 다를 때는 입금 확인이 어렵습니다. \n1:1문의게시판에 주문자 성함과 입금 자 성함을 남겨 주시거나 고객센터 1811-7835로 문의해 주세요.' },
                      ]
                  },
                  {
                      title: '신용카드 일시불 결제에서 할부로 변경할 수 있나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '결제 완료 후 할부로 변경하시고자 하는 경우엔 고객센터 1811-7835로 문의해 주세요.' },
                      ]
                  },
                  {
                      title: '현금영수증 발급을 못했는데 어떻게 해야 하나요?',
                      showDepth2: false,
                      subItems: [
                          { content: `무통장입금과, 실시간계좌이체 결제 시 결제창에서 현금영수증 발급 선택 후 사업자번호나 휴대폰번호를 입력해주시면 입금완료시 자동으로 현금 영수증이 발급됩니다.\n만약 결제창에서 현금영수증 발급선택을 못했을 경우에는 1:1문의게시판에 주문자명과 발행하실 번호 (휴대폰번호 또는 사업자등록번호)를 알려주시면 신속히 발행해드리겠습니다.\n(사업자등록번호일 경우 사업체명도 함께 알려주시면 됩니다.)` },
                      ]
                  },
              ],faqItems3: [
                  {
                      title: '주문완료 후 배송지를 수정하고 싶습니다.',
                      showDepth2: false,
                      subItems: [
                          { content: '배송완료전인 결제완료상태에서는 배송지수정이 가능합니다.\n배송완료 상태에서는 주소지 변경이 불가능하므로 1:1 문의게시판이나 고객센터 1811-7835로 요청 주시면 빠르게 도와드리겠습니다.' },
                      ]
                  },
                  {
                      title: '주문을 하면 언제 출고되나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '평일 오후 3시 이전에 주문하신 제품은 당일 출고됩니다.\n(공휴일제외)' },
                      ]
                  },
                  {
                      title: '주문을 하고 언제쯤 받아볼 수 있나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '주문하신 상품은 결제 완료 후 평균 1~2일 이내에 배송이 됩니다. (연휴 및 주말은 제외 하며, 배송 지역마다 차이가 있을 수 있습니다.)\n단, 구정 추석 연휴 등 택배 물량이 많이 발생하는 경우, 폭설, 폭우 등 천재지변이 일어나는 경우 배송이 지연될 수 있습니다.\n도서산간 지방의 경우 1~5일 정도 지연될 수 있습니다.' },
                      ]
                  },
                  {
                      title: '해외 배송이 가능한가요?',
                      showDepth2: false,
                      subItems: [
                          { content: '네 해외 배송도 가능하며, 우체국 EMS 국제특급 배송으로 배송해드리고 있습니다.\n해외지역에 따라 별도의 배송비가 추가됩니다.\n주문 방법은 결제 배송 지 입력시에 우편번호 찾기에서 ‘해외’ 를 입력하시고 검색을 누르신 다음 나머지 주소란에 해외 주소지를 적어 주시면 됩니다.\n기타문의 사항은 1:1 게시판에 남겨 주시면 신속히 답변 드리겠습니다.' },
                      ]
                  },
              ],faqItems4: [
                  {
                      title: '물건을 반품하고 싶습니다. 어떻게 하면 되나요?',
                      showDepth2: false,
                      subItems: [
                          { content: '미개봉 시 단순 변심에 의한 반품은 구입일로부터 14일 이내에만 가능하며, 왕복 택배비 6,000원을 제외한 금액만 환불됩니다. (계좌 이체일 경우 현금 6,000원을 따로 입금해 주셔야 합니다.)' },
                      ]
                  },
              ],faqItems5: [
                  {
                      title: '적립금 사용방법이 궁금합니다.',
                      showDepth2: false,
                      subItems: [
                          { content: '구매 시 적립금 사용금액 한도는 없습니다.\n단, 이벤트 제품에 해당될 경우 적립금 사용이 불가 할 수 있습니다.' },
                      ]
                  },
              ],
          };
      },
      methods: {
          updateAllianceTag(tag) {
              this.allianceTag = tag;
              this.activeButton = tag;
          },
          updateQuestionTag(tag) {
    this.questionTagValue = tag; // 클릭된 질문 버튼 정보 저장
    this.questionButton = tag;
    this.questionTag.forEach(item => {
        item.image = (item.name === tag) ? item.image2 : item.image1;
    });
},
          toggleDepth2(index) {
              this.faqItems.forEach((item, i) => {
                  if (i === index) {
                      item.showDepth2 = !item.showDepth2;
                  } else {
                      item.showDepth2 = false;
                  }
              });
          },
          toggleDepth2_2(index) {
              this.faqItems2.forEach((item, i) => {
                  if (i === index) {
                      item.showDepth2 = !item.showDepth2;
                  } else {
                      item.showDepth2 = false;
                  }
              });
          },
          toggleDepth2_3(index) {
              this.faqItems3.forEach((item, i) => {
                  if (i === index) {
                      item.showDepth2 = !item.showDepth2;
                  } else {
                      item.showDepth2 = false;
                  }
              });
          },
          toggleDepth2_4(index) {
              this.faqItems4.forEach((item, i) => {
                  if (i === index) {
                      item.showDepth2 = !item.showDepth2;
                  } else {
                      item.showDepth2 = false;
                  }
              });
          },
          toggleDepth2_5(index) {
              this.faqItems5.forEach((item, i) => {
                  if (i === index) {
                      item.showDepth2 = !item.showDepth2;
                  } else {
                      item.showDepth2 = false;
                  }
              });
          },
          updateInfoTag(tag) {
      this.activeButton = tag;
    },
    breakLines(text) {
      return text.replace(/\n/g, '<br>');
    },
    
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  .question__list{
    padding: 100px 0 30px;
      display: flex;
      justify-content: space-between;
      button{
          background: #f7f9f6;
          padding: 25px;
          border: 1px solid #e3e3e3;
          flex: 1 0 20%;
          font-size: 16px;
          color: #7f7f7f;
          &.click{
              background: #fff;
              border: 1px solid #46b7b0;
              color: #46b7b0;
          }
          span{
              display: block;
              padding: 15px;
          }
      }
  }
  .selectBox{
          font-size: 25px;
          padding: 30px 0 ;
          .faq_list{
              border-top: 1px solid #000 ;
              li{
                  border-bottom: 1px solid #b8b8b8;
                  padding: 15px 0 ;
                  padding-right: 15px ;
                  display: flex;
                  justify-content: space-between;
              }
              .depth1{
                  font-size: 16px;
                  color: #353535;
                  font-weight: bold;
                  cursor: pointer;
                  .rotate{
                      transform: rotate(180deg);
                      transition: transform 0.3s ease;
                  }
                  .depth2{
                  font-size: 16px;
                  color: #555;
                  font-weight: lighter;
                  }
              }
          
          }
      }
  
  </style>
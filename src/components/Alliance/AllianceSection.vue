<template>
    <div class="contents">
        <div class="tag__list">
            <button v-for="item in allianceName" :key="item.name" @click="updateAllianceTag(item.name)"
            :class="{'active':item.name === activeButton}">
                {{ item.name }}
            </button>
        </div>
        <div class="info-section">
            <div v-if="allianceTag === '멤버십 안내'" class="box_a"> 
                <div class="inBox">
                    <h3>신규 회원 혜택</h3>
                    <p>지엠팜 가족을 위한 적립금 혜택</p>
                    <div class="box_b">
                        <p>Benefit <sapn class="circle">01</sapn></p>
                        <div class="member">
                            <a href="https://thegmpharm.co.kr/member/join.html">
                                <img src="/image/newmem01.png" alt="">
                                <div class="font">
                                    <p>신규회원가입시</p>
                                    <p><span>2,000원!</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="box_b">
                        <p>Benefit <sapn class="circle">02</sapn></p>
                        <div class="member">
                            <a href="https://pf.kakao.com/_AvxbqV">
                                <img src="/image/newmem02.png" alt="">
                                <div class="font">
                                    <p>카카오톡 플러스 친구 등록시</p>
                                    <p><span>2,000원!</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="box_b">
                        <p>Benefit <sapn class="circle">03</sapn></p>
                        <div class="member">
                            <a href="#">
                                <img src="/image/newmem03.png" alt="">
                                <div class="font">
                                    <p>어플 다운로드시</p>
                                    <p><span>2,000원!</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tier">
                    <div class="advantage">
                    <h3>등급별 혜택</h3>
                        <p>등급별 누릴 수 있는 다양한 혜택들을 확인해 보세요</p>
              </div>
                    <table>
                        <tr>
                            <th>회원등급</th>
                            <td><img src="/image/level01.png" alt=""></td>
                            <td><img src="/image/level02.png" alt=""></td>
                            <td><img src="/image/level03.png" alt=""></td>
                            <td><img src="/image/level04.png" alt=""></td>
                        </tr>
                        <tr>
                            <th>결제금액(이상)</th>
                            <td>200,000원</td>
                            <td>500,000원</td>
                            <td>1,000,000원</td>
                            <td>1,500,000원</td>
                        </tr>
                        <tr>
                            <th>결제금액 적립</th>
                            <td> - </td>
                            <td>2%</td>
                            <td>5%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <th>구매금액 할인</th>
                            <td>2%</td>
                            <td>2%</td>
                            <td>3%</td>
                            <td>4%</td>
                        </tr>
                        <tr>
                            <th>총 혜택</th>
                            <td>2%</td>
                            <td>4%</td>
                            <td>8%</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <th>생일쿠폰</th>
                            <td colspan="4">1,000원 쿠폰 지급</td>
                        </tr>
                        </table>
                    <div class="caution">
                    <h3>※ 신규회원혜택 유의사항</h3>
                    &nbsp;
                    <p>- 가입즉시 적립금 사용 가능합니다.
                    - 회원가입, 후기 작성 시 적립금은 자동으로 적립됩니다.<br>
                    - 카카오플러스 친구 등록 후 아이디를 알려주시면 적립됩니다.<br>
                    - 어플 다운로드 후 로그인 시 자동으로 적립됩니다.</p>
                    &nbsp;
                    <h3>※ 등급별 혜택 유의사항</h3>
                    &nbsp;
                    <p>- 적립금 혜택은 결제금액 대비로 계산되어 적립됩니다.<br>
                    - 배송완료 후 등급 혜택이 적용됩니다.<br>
                    - 모든 적립금은 1년 후 자동 소멸됩니다.</p>
                </div>
                </div>
            </div>
            <div v-else-if="allianceTag === '자주묻는 질문'">

                <div class="question__list">
    <button v-for="(item, index) in questionTag" :key="item.name" @click="updateQuestionTag(item.name)"
        :class="{'active':item.name === questionButton, 'click': item.name === questionButton}">
        <span><img
                :src="item.image" 
                :alt="item.name"
                @click ="updateQuestionTag(index.true)">
        </span>
        <span>{{ item.name }}</span>
    </button>
</div>

                <div class="selectBox" >
                    <div v-if="questionTagValue === '회원·정보'">
            <div class="faq_list">
                <div v-for="(item, index) in faqItems" :key="index">
                    <ul class="depth1" @click="toggleDepth2(index)" :class="{'open' : item.showDepth2}">
                        <li>{{ item.title }}
                            <i class="fa-solid fa-chevron-down" :class="{'rotate':item.showDepth2}"></i>
                        </li>
                    <ul class="depth2" v-show="item.showDepth2">
                            <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" @click="toggleDepth2(index)" :class="{'close': item.showDepth2}">
                                {{ subItem.content }}
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
                            {{ subItem.content }}
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
                            {{ subItem.content }}
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
                            {{ subItem.content }}
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
                            {{ subItem.content }}
                        </li>
                    </ul>
                </ul>
            </div>
</div></div>
                </div>
            </div>
            <div v-else-if="allianceTag === '1:1 문의'">
                <div class="unquiryBtn">
                    <a href="https://thegmpharm.co.kr/member/login.html?returnUrl=%2Fboard%2Fconsult%2Flist.html%3Fboard_no%3D9" target="_blank">
                    <button>
                        1:1 문의하기
                    </button>
                </a>
            </div>
            </div>
            <div v-else-if="allianceTag === '기업제휴 문의'">
                <div class="unquiryBtn">
                    
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScBkB4OzNmfpt5WbyIQtgRoksr8x8aX1GFwJSjkyx0KWNFD6w/viewform?vc=0&c=0&w=1&flr=0" target="_blank">
                            <button>
                            기업제휴 문의하기
                        </button>
                        </a>
                    
                </div>
            </div>
            <div v-else-if="allianceTag === '공지사항'">
                <p>안내 내용4</p>
            </div>
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            allianceTag: '', // 선택된 버튼 정보를 저장할 데이터 속성
            allianceName: [
                { name: '멤버십 안내' },
                { name: '자주묻는 질문' },
                { name: '1:1 문의' },
                { name: '기업제휴 문의' },
                { name: '공지사항' },
            ],
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
                        { content: '홈페이지 우측 상단 [로그인> 아이디/비밀번호 찾기] 버튼을 눌러 아이디 혹은 비밀번호를 찾으실 수 있습니다. ' },
                        { content: '- 아이디 찾기: 가입 전화번호 입력 후 아이디 전송 ' },
                        { content: '- 비밀번호 찾기: 가입 전화번호 입력 후 비밀번호 재설정 링크 전송' },
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
                        { content: '네. 가능합니다. 결제방법은 무통장입금 또는 카드결제로 가능합니다.고객센터 1811-7835 로 전화해 주시면 친절히 도와드리겠습니다.결제계좌안내[ IBK기업은행 / (주)지엠팜 / 357-078344-01-046 ]' },
                    ]
                },
                {
                    title: '주문자와 입금자명이 다를 때는 어떻게 해야 하나요?',
                    showDepth2: false,
                    subItems: [
                        { content: '주문자와 입금자 성함이 다를 때는 입금 확인이 어렵습니다.1:1문의게시판에 주문자 성함과 입금 자 성함을 남겨 주시거나 고객센터 1811-7835로 문의해 주세요.' },
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
                        { content: `무통장입금과, 실시간계좌이체 결제 시 결제창에서 현금영수증 발급 선택 후 사업자번호나 휴대폰번호를 입력해주시면 입금완료시 자동으로 현금 영수증이 발급됩니다.
                        만약 결제창에서 현금영수증 발급선택을 못했을 경우에는 1:1문의게시판에 주문자명과 발행하실 번호 (휴대폰번호 또는 사업자등록번호)를 알려주시면 신속히 발행해드리겠습니다.
                        (사업자등록번호일 경우 사업체명도 함께 알려주시면 됩니다.)` },
                    ]
                },
            ],faqItems3: [
                {
                    title: '주문완료 후 배송지를 수정하고 싶습니다.',
                    showDepth2: false,
                    subItems: [
                        { content: '배송완료전인 결제완료상태에서는 배송지수정이 가능합니다.배송완료 상태에서는 주소지 변경이 불가능하므로 1:1 문의게시판이나 고객센터 1811-7835로 요청 주시면 빠르게 도와드리겠습니다.' },
                    ]
                },
                {
                    title: '주문을 하면 언제 출고되나요?',
                    showDepth2: false,
                    subItems: [
                        { content: '평일 오후 3시 이전에 주문하신 제품은 당일 출고됩니다.(공휴일제외)' },
                    ]
                },
                {
                    title: '주문을 하고 언제쯤 받아볼 수 있나요?',
                    showDepth2: false,
                    subItems: [
                        { content: '주문하신 상품은 결제 완료 후 평균 1~2일 이내에 배송이 됩니다. (연휴 및 주말은 제외 하며, 배송 지역마다 차이가 있을 수 있습니다.)단, 구정 추석 연휴 등 택배 물량이 많이 발생하는 경우, 폭설, 폭우 등 천재지변이 일어나는 경우 배송이 지연될 수 있습니다.도서산간 지방의 경우 1~5일 정도 지연될 수 있습니다.' },
                    ]
                },
                {
                    title: '해외 배송이 가능한가요?',
                    showDepth2: false,
                    subItems: [
                        { content: '네 해외 배송도 가능하며, 우체국 EMS 국제특급 배송으로 배송해드리고 있습니다.해외지역에 따라 별도의 배송비가 추가됩니다.주문 방법은 결제 배송 지 입력시에 우편번호 찾기에서 ‘해외’ 를 입력하시고 검색을 누르신 다음 나머지 주소란에 해외 주소지를 적어 주시면 됩니다.기타문의 사항은 1:1 게시판에 남겨 주시면 신속히 답변 드리겠습니다.' },
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
                        { content: '구매 시 적립금 사용금액 한도는 없습니다.단, 이벤트 제품에 해당될 경우 적립금 사용이 불가 할 수 있습니다.' },
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
        // 현재 선택된 depth2 상태를 저장합니다.
        const currentStatus = this.faqItems[index].showDepth2;

        // 선택된 depth2를 지연시키는 timeout 값을 설정합니다.
        const delay = currentStatus ? 0 : 300; // depth2가 닫혀있을 때만 지연합니다.

        // setTimeout 함수를 사용하여 지연 후 showDepth2 값을 토글합니다.
        setTimeout(() => {
            this.faqItems.forEach((item, i) => {
                if (i === index) {
                    item.showDepth2 = !item.showDepth2;
                } else {
                    item.showDepth2 = false;
                }
            });
        }, delay);
    },
        // toggleDepth2(index) {
        //     this.faqItems.forEach((item, i) => {
        //         if (i === index) {
        //             item.showDepth2 = !item.showDepth2;
        //         } else {
        //             item.showDepth2 = false;
        //         }
        //     });
        // },
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
    
    }
}
</script>
<style lang="scss" scoped>
.contents{
    padding: 0 0 100px;
.tag__list {
    display: flex;
    justify-content: space-around;
    button {
   color: #555;
   font-size: 19px;
   font-weight: bold;
   margin: 0 -5px;
   padding: 21px 10px;
   background: #fff;
   flex: 0 0 20%;
   border: 1px solid #ddd;
   border-right-color: transparent;
   &:last-child {
     border-right-color:#ddd ;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    }
    &:first-child{
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
   &.active{
    background: #46b7b0;
    color: #fff;
   }
    }
    
}
.info-section{
    padding: 27px 10px 46px 9px;
        .box_a{
            .inBox{
                padding: 20px 0 40px;
                h3{
                    text-align: center;
                    font-size: 30px;
                    color: #444;
                }
                p{ 
                    text-align: center;
                    font-size: 18px;
                    color: #888;
                }
                .box_b{ 
                background: #f7f9f6;
                font-size: 15px;
                margin: 20px;
                float: left;
                width: 30%;
                padding: 30px 35px;
                p{
                    font-size: 20px;
                    color: #838383;
                    font-weight: bold;
                }
                .circle{
                width: 32px;
                height: 32px;
                background: #46b7b0;
                border-radius: 50%; 
                text-align: center;
                line-height: 34px;
                color: #fff;
                display: inline-block;
                }
                .member{
                    a{   
                    display: flex;
                    align-items: center;
                        p{
                        text-align: left;
                        font-size: 22px;
                        margin: 0 0 0 30px;
                        color: #000;
                        span{
                            color: #46b7b0;
                        }
                        
                    }
                }
                }
            }
            }
            .tier{
    padding: 35px;
    clear: both;
    .advantage{
    padding: 20px 0 40px;
    text-align: center;
    h3{
        color: #444;
        font-size: 30px;
        margin: 0 0 5px;

    }
    p{
        color: #888;
        font-size: 18px;
    }
}

    table {
        border-collapse: collapse;
        width: 100%; /* 표의 전체 너비 설정 */
        margin: auto; /* 가운데 정렬을 위한 마진 설정 */
        border-top: 2px solid #000;

        th, td {
        border: 1px solid #e3e3e3;
        padding: 10px;
        text-align: center;


    }
    td{
        color: #888;
        padding: 30px;
        border-right: none;
    }
    th {
        background-color: #f9f9f9;
        color: #555;
        border-left: none;

    }
    }
    .caution{
        padding-top: 35px ;
        h3{
            font-size: 18px;
            color: #555;
        }
        p{
            font-size: 15px;
            color : #888;
        }
    }
}
        }
}
.question__list{
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
                .close{
                    transition: all 0.3s ease;
                }
                }
            }
        
        }
    }

.unquiryBtn{
    margin: 130px 0 80px;
    text-align: center;
    button{
        color: #fff;
        background: #46b7b0;
        padding: 15px 40px;
        font-size: 23px;
        border-radius: 20px;
        border: 1px solid #46b7b0;
        transition: all 0.2s;
        width: 260px;
    }
    button:hover{
            background: #fff;
            color: #46b7b0;
        }
}
}
</style>
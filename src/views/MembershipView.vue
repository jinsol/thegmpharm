<template>
  <div>
    <section-title title="멤버십 안내" />
    <button-title />
  <div class="contents row">
      <div class="info-section">
        <div class="box_a"> 
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
      </div>
      </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/layout/SectionTitle.vue"
import ButtonTitle from "@/components/layout/ButtonTitle.vue";

export default {
    mounted() {
  this.scrollToTop();
},
        data(){
        return {
            allianceTag: '', // 선택된 버튼 정보를 저장할 데이터 속성
            allianceName: [
                { name: '멤버십 안내',link:'/membership' },
                { name: '자주묻는 질문',link:'/membership'  },
                { name: '1:1 문의',link:'/membership'  },
                { name: '기업제휴 문의',link:'/membership'  },
                { name: '공지사항',link:'/membership'  },
            ],
        }
    },
    components:{
        SectionTitle,
        ButtonTitle,
    },
    methods: {
    updateAllianceTag(tag) {
      this.allianceTag = tag;
    },
    scrollToTop() {
    window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
  }
  }
    }
</script>

<style lang="scss" scoped>
.contents{
    padding: 0 0 100px;

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
    }
    @media screen and (max-width:900px){
        .contents{
    padding: 0 0 100px;

.info-section{
    padding: 27px 10px 46px 9px;

        .box_a{
            .inBox{
                padding: 20px 0 40px;
                h3{
                    text-align: center;
                    font-size: 20px;
                    color: #444;
                }
                p{ 
                    text-align: center;
                    font-size: 15px;
                    color: #888;
                }
                .box_b{ 
                background: #f7f9f6;
                font-size: 15px;
                margin: 5px 0;
                float: none;
                width: 100%;
                padding: 20px 15px;
                border-radius: 15px;
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
                    justify-content: center;
                        p{
                        text-align: left;
                        font-size: 20px;
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
    padding: 20px 0 20px;
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
        padding: 15px;
        border-right: none;
        font-size: 10px;
    }
    th {
        background-color: #f9f9f9;
        color: #555;
        border-left: none;
        font-size: 10px;
        word-break: keep-all
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
    }
    }
</style>

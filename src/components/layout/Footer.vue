<template>
  <footer id="footer">
    <div class="footertop">
      <div class="footerlink">
        <ul>
          <li>
            <router-link to="/Terms">이용약관</router-link>
          </li>
          <li>
            <router-link to="/privacy" class="privacy"
              >개인정보취급방침</router-link
            >
          </li>
          <li>
            <router-link to="/information">이용안내</router-link>
          </li>
        </ul>
      </div>
      <div class="footerright">
        <p class="inquiry">
          <router-link to="/alliance">기업제휴문의</router-link>
        </p>
        <div class="hoverBox">
          <a href="https://pf.kakao.com/_AvxbqV" target="_blank" class="kakao">
            <img :src="talkImageSrc" :alt="photo[0].alt" class="talk-image" />
          </a>
        </div>
        <div class="hoverBox">
          <a
            href="https://www.instagram.com/gmpharm_official/"
            target="_blank"
            class="instagram"
          >
            <img :src="instaImageSrc" :alt="photo[0].alt" class="insta-image" />
          </a>
        </div>
      </div>
    </div>
    <div class="footerbot">
      <div class="info">
        <div class="footerlogo">
          <router-link to="#">
            <img :src="photo[0].logo" :alt="photo[0].alt" />
          </router-link>
        </div>

        <div class="cominfo">
          <p>상호명 : <span class="gmpharm">(주)지엠팜</span></p>
          <p>&nbsp;|&nbsp;</p>
          <p>대표이사 : 김세종, 서진혁, 전윤식</p>
          <p>&nbsp;|&nbsp;</p>
          <p>
            사업자등록번호 : 627-86-00115
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=6278600115"
              target="_blank"
              class="confi"
              >[사업자정보확인]</a
            >
          </p>
        </div>
        <div class="cominfo">
          <p>통신판매업신고: 2015-서울서초-1160호</p>
          <p>&nbsp;|&nbsp;</p>
          <p>
            건강식품판매업 : 2015-0098733호 / 2015-0098734호 / 2015-0098866호
          </p>
        </div>
        <div class="cominfo">
          <p>개인정보책임자 : 김세종</p>
          <p>&nbsp;|&nbsp;</p>
          <p>주소 : 06698 서울특별시 서초구 남부순환로287길 37 (방배동)</p>
          <p>&nbsp;|&nbsp;</p>
          <p>이메일문의 : gmpharm1@naver.com</p>
        </div>
        <div class="cominfo"><p>호스팅사업자 : 카페24(주)</p></div>
        <div class="copyrights">
          <p>Copyright GMPHARM. All rights reserved.</p>
        </div>
      </div>
      <div class="special">
        <div class="cs">
          <h2 class="tit">Customer Center</h2>
          <p class="num">1811-7835</p>
          <div class="time">
            <p><span class="em">평일</span> 10:00 ~ 17:30</p>
            <p><span class="em">점심</span> 13:00 ~ 1400</p>
            <p>(토, 일, 공휴일은 휴무입니다.)</p>
          </div>
        </div>
        <div class="bank">
          <p class="bank_tit">은행 입금 계좌</p>
          <h3 class="bank_num">357-078344-01-046</h3>
          <div class="bank_icon">
            <img :src="photo[0].bankImg" :alt="photo[0].alt" />
            예금주:(주)지엠팜
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      photo: [
        {
          talkImage1: "./image/footer_talk.png",
          talkImage2: "./image/footer_talk_h.png",
          instaImage1: "./image/footer_instar.png",
          instaImage2: "./image/footer_instar_h.png",
          alt: "sns",
          bankImg: "./image/footer_bank.png",
          logo: "./image/logo02.png",
        },
      ],
      isTalkImageHovered: false,
      isInstaImageHovered: false,
    };
  },
  computed: {
    talkImageSrc() {
      return this.isTalkImageHovered
        ? this.photo[0].talkImage2
        : this.photo[0].talkImage1;
    },
    instaImageSrc() {
      return this.isInstaImageHovered
        ? this.photo[0].instaImage2
        : this.photo[0].instaImage1;
    },
  },
};
</script>

<style lang="scss" scoped>
#footer {
  height: 500px;
  background: #fafafa;
  border-top: 1px solid #ddd;

  .footertop {
    height: 75px;
    font-size: 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-around;
    .footerlink {
      flex: 0 0 35%;
      display: flex;
      align-items: center;
      ul {
        display: flex;
        li {
          color: #888;
          margin-right: 20px;
          font-weight: bold;
        }
        .privacy {
          color: #444;
        }
      }
    }
    .footerright {
      display: flex;
      align-items: center;
      .inquiry {
        width: 122px;
        height: 47px;
        border-radius: 25px;
        color: #444;
        font-size: 13px;
        text-align: center;
        line-height: 47px;
        border: 1px solid #e9e9e9;
        display: inline-block;
        margin-right: 15px;
        background: #fff;
        transition: all 0.3s;
      }
      .inquiry:hover {
        color: #46b7b0;
        border: 1px solid #46b7b0;
      }
      .hoverBox {
        width: 45px;
        height: 46px;
        margin-right: 15px;
        .kakao {
          .talk-image:hover {
            content: url("./image/footer_talk_h.png");
          }
        }
      }
      .hoverBox {
        width: 45px;
        height: 46px;
        .instagram {
          .insta-image:hover {
            content: url("./image/footer_instar_h.png");
          }
        }
      }
    }
  }
  .footerbot {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 30px;
    .info {
      color: #888;
      .footerlogo {
        width: 140px;
        height: 36px;
        margin: 0 0 30px;
      }
      .cominfo {
        display: flex;
        // align-content: ;
        // align-items: ;
        flex-wrap: wrap;
        font-size: var(--info-size);
        font-family: var(--body-font);
        color: #888;
        .gmpharm {
          color: #555;
        }
        .confi {
          color: #000;
        }
      }
      .copyrights {
        color: #afafaf;
        font-size: 13px;
        margin: 25px 0 0;
      }
    }
  }
  .special {
    .cs {
      .tit {
        color: #666;
        font-size: 14px;
        margin: 0 0 8px;
      }
      .num {
        color: #46b7b0;
        font-size: 33px;
        margin: 0 0 5px;
        font-weight: bold;
      }
      .em {
        color: #333;
        font-size: 14px;
      }
      .time {
        margin: 0 0 50px;
        p {
          color: #888;
          font-size: 14px;
        }
      }
    }
    .bank {
      .bank_tit {
        color: #666;
        font-size: 14px;
        margin: 0 0 8px;
      }
      .bank_num {
        color: #333;
        font-size: 25px;
        margin: 0 0 8px;
      }
      .bank_icon {
        color: #888;
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  #footer {
    height: auto;
    background: #fafafa;
    border-top: 1px solid #ddd;
    .footertop {
      padding: 4%;
      height: auto;
      font-size: var(--info-size);
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      .footerlink {
        flex: 0 0 45%;
        display: flex;
        align-items: center;
        ul {
          display: flex;
          gap: 6px;
          li {
            color: #888;
            margin-right: 0;
            font-weight: bold;
          }
          .privacy {
            color: #444;
          }
        }
      }
      .footerright {
        display: flex;
        align-items: center;
        .inquiry {
          width: 122px;
          height: 47px;
          border-radius: 25px;
          color: #444;
          font-size: 13px;
          text-align: center;
          line-height: 47px;
          border: 1px solid #e9e9e9;
          display: inline-block;
          margin-right: 10px;
          background: #fff;
          transition: all 0.3s;
        }
        .inquiry:hover {
          color: #46b7b0;
          border: 1px solid #46b7b0;
        }
        .hoverBox {
          width: 45px;
          height: 46px;
          margin-right: 5px;
          .kakao {
            .talk-image:hover {
              content: url("./image/footer_talk_h.png");
            }
          }
        }
        .hoverBox {
          width: 45px;
          height: 46px;
          .instagram {
            .insta-image:hover {
              content: url("./image/footer_instar_h.png");
            }
          }
        }
      }
    }
    .footerbot {
      display: flex;
      justify-content: center;
      padding: 4%;
      text-align: center;
      flex-direction: column;
      .info {
        color: #888;
        .footerlogo {
          width: 140px;
          height: 36px;
          margin: 0 0 10px;
          display: inline-block;
        }
        .cominfo {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .gmpharm {
            color: #555;
          }
          .confi {
            color: #000;
          }
        }
        .copyrights {
          color: #afafaf;
          font-size: 8px;
          margin: 15px 0 0;
        }
      }
    }
    .special {
      .cs {
        .tit {
          color: #666;
          font-size: 8px;
          margin: 0 0 8px;
        }
        .num {
          color: #46b7b0;
          font-size: 15px;
          margin: 0 0 5px;
          font-weight: bold;
        }
        .em {
          color: #333;
          font-size: 14px;
        }
        .time {
          margin: 0 0 50px;
          p {
            color: #888;
            font-size: 10px;
          }
        }
      }
      .bank {
        .bank_tit {
          color: #666;
          font-size: 10px;
          margin: 0 0 8px;
        }
        .bank_num {
          color: #333;
          font-size: 10px;
          margin: 0 0 8px;
        }
        .bank_icon {
          color: #888;
          font-size: 10px;
        }
      }
    }
  }
}
</style>

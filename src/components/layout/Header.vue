<template>
  <header :class="{ mobile: isMobile }">
    <ul class="row header_nav">
      <li class="header_nav-row1">
        <ul>
          <li v-if="!isMobile" class="search_section">
            <button>
              <input type="search" class="search_box" placeholder="검색하기" />
              <i class="fa-solid fa-magnifying-glass search_icon"></i>
            </button>
          </li>
          <li class="logo_section">
            <router-link to="/">
              <img :src="`./image/logo_default.png`" alt="지엠팜" />
            </router-link>
          </li>
          <li class="myPage_section">
            <div v-if="!isMobile">
              <span v-if="isLoggedIn == true" class="myPage_section-username"
                >환영합니다,
                <span>{{ username }}</span>
                님</span
              >
              <router-link to="/cart">
                <i
                  class="fa-heart goToCart_BT"
                  :class="{
                    'fa-regular': !cartsCount,
                    'fa-solid': cartsCount,
                  }"
                >
                  <span v-if="cartsCount != 0" class="cartsCount">
                    {{ cartsCount }}
                  </span>
                </i>
              </router-link>
              <router-link v-if="isLoggedIn == false" to="/login">
                <i class="fa-regular fa-user"></i>
              </router-link>
              <button
                v-if="isLoggedIn == true"
                @click="logout"
                class="logout_btn"
              >
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
            <div v-else>
              <button @click="showNav" class="bars_icon">
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </li>
        </ul>
      </li>
      <li class="header_nav-row2">
        <ul v-if="isMobile" class="info_section">
          <li class="top_section-btn_section">
            <button class="mobile_x_btn" @click="closeNav">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </li>
          <li class="top_section-info_section">
            <ul>
              <li class="top_section-info_section-image">
                <i class="fa-solid fa-user"></i>
              </li>
              <li class="top_section-info_section-content">
                <router-link to="/login" v-if="isLoggedIn == false">
                  <span>
                    로그인을 진행해주세요
                    <i class="fa-solid fa-angle-right"></i>
                  </span>
                </router-link>
                <span v-else
                  >환영합니다, <i>{{ username }}</i> 님</span
                >
              </li>
            </ul>
          </li>
        </ul>
        <ul class="menu_section">
          <li class="depth1">
            <router-link to="/aboutus" class="depth1_menu">
              <i
                v-if="isMobile"
                class="fa-regular fa-comment mobile_menuIcon"
              ></i>
              <span>지엠팜</span>
            </router-link>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#" class="depth1_menu">
              <i
                v-if="isMobile"
                class="fa-solid fa-basket-shopping mobile_menuIcon"
              ></i>
              <span>상품보기</span>
              <i class="fa-solid fa-chevron-down mobile_arrowIcon"></i>
            </a>
            <ul class="depth2">
              <li>
                <router-link to="/shopping">쇼핑하기</router-link>
              </li>
              <li><router-link to="/regulardelivery">정기배송</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#" class="depth1_menu">
              <i
                v-if="isMobile"
                class="fa-solid fa-user-group mobile_menuIcon"
              ></i>
              <span>함께하는</span>
              <i class="fa-solid fa-chevron-down mobile_arrowIcon"></i>
            </a>
            <ul class="depth2">
              <li><router-link to="/gmpharmcare">지엠팜케어</router-link></li>
              <li><router-link to="/pilldoc">필독상식</router-link></li>
              <li><router-link to="/teuni">트니프렌즈</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#" class="depth1_menu">
              <i
                v-if="isMobile"
                class="fa-regular fa-face-smile mobile_menuIcon"
              ></i>
              <span>커뮤니티</span
              ><i class="fa-solid fa-chevron-down mobile_arrowIcon"></i>
            </a>
            <ul class="depth2">
              <li><router-link to="/event">이벤트</router-link></li>
              <li><router-link to="/board">자유게시판</router-link></li>
              <li><router-link to="/pregnancy">임신소식</router-link></li>
              <li><router-link to="/ambassador">엠버서더</router-link></li>
              <li><router-link to="/magazine">매거진</router-link></li>
              <li><router-link to="/pharmacist">약사전문칼럼</router-link></li>
            </ul>
          </li>
          <li
            class="depth1"
            @click="header_menu_click"
            @mouseenter="header_menu_enter"
            @mouseleave="header_menu_leave"
          >
            <a href="#" class="depth1_menu">
              <i
                v-if="isMobile"
                class="fa-solid fa-headset mobile_menuIcon"
              ></i>
              <span>고객센터</span>
              <i class="fa-solid fa-chevron-down mobile_arrowIcon"></i>
            </a>
            <ul class="depth2">
              <li><router-link to="/guideline">섭취가이드</router-link></li>
              <li><router-link to="/membership">맴버십 안내</router-link></li>
              <li><router-link to="/questions">자주묻는질문</router-link></li>
              <li><router-link to="/inquiry">1:1 문의</router-link></li>
              <li><router-link to="/alliance">기업제휴문의</router-link></li>
              <li><router-link to="/guideline">공지사항</router-link></li>
            </ul>
          </li>
        </ul>
        <ul v-if="isMobile" class="myPage_section">
          <li>
            <!-- <router-link to="/mypage">마이페이지</router-link> -->
            <router-link to="/cart">
              <i class="fa-heart fa-regular goToCart_BT"></i>
              <span>장바구니</span>
            </router-link>
          </li>
          <li>
            <a
              href="#"
              v-if="isLoggedIn == true"
              @click="logout"
              class="logout_btn"
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>로그아웃</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.$store.dispatch("initLoginState");
  },
  methods: {
    showNav() {
      this.$el.querySelector(".header_nav-row2").classList.add("click");
    },
    closeNav() {
      this.$el.querySelector(".header_nav-row2").classList.remove("click");
    },
    header_menu_enter(event) {
      event.currentTarget.classList.add("active");
    },
    header_menu_leave(event) {
      event.currentTarget.classList.remove("active");
    },
    header_menu_click(event) {
      event.currentTarget.classList.toggle("active");
    },
    logout() {
      if (confirm("로그아웃하시겠습니까?")) {
        this.$store.dispatch("logout");
        this.$router.push("/");
      }
    },
  },
  computed: {
    cartsCount() {
      let set = new Set(this.$store.state.cartItem);
      let items = [...set];
      return items.length;
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    username() {
      return this.$store.getters.loggedInUsername;
    },
    userId() {
      return this.$store.getters.loggedInUserId;
    },
    ...mapState(["isMobile"]),
  },
  watch: {
    $route(to, from) {
      this.$el.querySelector(".header_nav-row2").classList.remove("click");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  width: 100%;
  padding: 0 2%;
  position: relative;
  z-index: 9999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  .header_nav {
    margin: 0 auto;
    & > li > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header_nav-row1 {
      ul {
        li {
          width: 30%;
          padding: 20px 0;
          &.search_section {
            button {
              display: flex;
              align-items: center;
              position: relative;
              cursor: text;
              margin-left: -15px;
              .search_box {
                all: unset;
                background: whitesmoke;
                border-radius: 50px;
                transition: 0.5s;
                width: 100%;
                padding: 10px 15px;
                opacity: 1;
                text-align: left;
              }
              input::-ms-clear,
              input::-ms-reveal {
                display: none;
                width: 0;
                height: 0;
              }
              input::-webkit-search-decoration,
              input::-webkit-search-cancel-button,
              input::-webkit-search-results-button,
              input::-webkit-search-results-decoration {
                display: none;
              }
              .search_icon {
                width: 10%;
                position: absolute;
                right: 15px;
                cursor: pointer;
                color: gray;
              }
            }
          }
          &.logo_section {
            display: flex;
            justify-content: center;
            img {
              height: 20px;
              object-fit: contain;
            }
          }
          &.myPage_section {
            display: flex;
            justify-content: end;
            div {
              display: flex;
              gap: 12px;
              .myPage_section-username {
                font-size: 14px;
                color: gray;
                font-family: var(--body-font);
                span {
                  color: var(--main-color);
                  font-family: var(--main-font);
                  font-weight: bold;
                }
              }
              i {
                font-size: 18px;
                color: gray;
              }
              .goToCart_BT.fa-solid {
                color: var(--main-color);
                position: relative;
                span {
                  position: absolute;
                  inset: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 6px;
                  color: white;
                }
              }
            }
          }
        }
      }
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .header_nav-row2 {
      ul {
        li.depth1 {
          padding: 20px 0;
          position: relative;
          line-height: 1.5;
          .depth1_menu {
            .mobile_arrowIcon {
              font-size: 12px;
              margin-left: 8px;
              color: lightslategrey;
              transition: all 0.3s ease-in-out;
            }
          }
          ul.depth2 {
            visibility: hidden;
            opacity: 0;
            display: none;
            justify-content: center;
            position: absolute;
            background-color: var(--main-color);
            color: white;
            width: max-content;
            padding: 4px 8px;
            border-radius: 50px;
            top: 80%;
            left: calc(50% - 6px);
            transform: translateX(-50%);
            transition: opacity 0.3s ease, visibility 0.3s ease;
            li {
              display: inline-block;
              padding: 8px;
              margin: 0 8px;
              flex: none;
              a {
                display: inline-block;
              }
              &:not(:last-child):after {
                content: "";
                display: inline-block;
                width: 5px;
                height: 5px;
                background-color: white;

                left: 18.5px;
                transform: translateY(-50%);
                position: relative;
              }
            }
          }
          &:last-child ul.depth2 {
            right: 0;
            left: unset;
            transform: unset;
          }
        }
        li.depth1.active {
          .depth1_menu {
            .mobile_arrowIcon {
              transform: rotate(180deg) translateY(1.5px);
            }
          }
          ul.depth2 {
            visibility: visible;
            opacity: 1;
            display: flex;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }
        }
      }
    }
  }
}

header.mobile {
  padding: 0 4%;
  // box-shadow: 5px 5px 5px var(--gray-color);
  .header_nav {
    .header_nav-row2 {
      background-color: white;
      position: fixed;
      width: 95%;
      height: 100%;
      right: 0;
      top: 0;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
      transition: all 0.5s ease-in-out;
      &.click {
        // 모바일 메뉴가 열렸을 때
        transform: translateX(0);
        box-shadow: -8px 0 20px 20px rgba(0, 0, 0, 0.75);
        opacity: 1;
        visibility: visible;
      }
      & > ul {
        padding: 4%;
        display: flex;
        flex-direction: column;
        & > li {
          width: 100%;
        }
      }
      .info_section {
        // background-color: var(--main-color);
        // color: white;
        .top_section-btn_section {
          display: flex;
          justify-content: flex-end;
          .mobile_x_btn {
            font-size: 20px;
            color: gray;
            font-weight: 100;
          }
        }
        .top_section-info_section {
          ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            .top_section-info_section-image {
              background-color: whitesmoke;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              overflow: hidden;
              i {
                font-size: 45px;
                color: var(--gray-color);
              }
            }
            .top_section-info_section-content {
              display: flex;
              flex-wrap: wrap;
              // flex-direction: column;
              padding: 0 2%;

              span {
                width: 100%;
                i {
                  color: var(--main-color);
                }
              }
              a {
                margin-right: 12px;
              }
            }
          }
        }
      }
      .menu_section {
        position: relative;
        &::before {
          content: "";
          border-top: 1px dotted lightgray;
          display: block;
          width: 92%;
          height: 1px;
          position: absolute;
          top: 0;
          left: 4%;
        }
        &::after {
          content: "";
          border-top: 1px dotted lightgray;
          display: block;
          width: 92%;
          height: 1px;
          position: absolute;
          bottom: 0;
          left: 4%;
        }
        .depth1 {
          padding: 0;
          color: gray;

          &:hover {
            color: var(--main-color);
          }
          a {
            padding: 8px;
            display: flex;
            gap: 20px;
            span {
              font-weight: 100;
              font-size: 16px;
            }
            &:hover {
              background: var(--main-color-hover);
            }
            border-radius: 10px;
            &:not(:first-child) {
              justify-content: space-between;
            }
            .mobile_menuIcon {
              width: 5%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .mobile_arrowIcon {
              width: 5%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: auto;
            }
          }

          ul.depth2 {
            background-color: transparent;
            position: relative;
            visibility: hidden;
            display: none;
            width: 100%;
            flex-direction: column;
            padding: 0;
            &::after {
              content: "";
              display: block;
              width: 1px;

              height: 0%;
              background-color: lightgray;
              position: absolute;
              left: 4.5%;
            }
            li {
              width: 100%;
              line-height: 1em;
              padding: 0;
              margin-bottom: 0;
              color: gray;

              a {
                width: auto;
                margin-left: 8%;
                display: block;
                border-radius: 10px;
                &:hover {
                  background: var(--main-color-hover);
                  color: var(--main-color);
                }
              }
              &:not(:last-child):after {
                display: none;
              }
            }
          }
          &.active {
            ul.depth2 {
              visibility: visible;
              display: flex;
            }
            .depth2::after {
              height: 100%;
              transition: 0.5s ease 0.3s;
            }
          }
        }
      }
      .myPage_section {
        li {
          a {
            display: flex;
            gap: 20px;
            color: gray;
            align-items: center;
            span {
              font-weight: 100;
              font-size: 16px;
            }
          }
          padding: 8px;
        }
      }
    }
  }
}
</style>

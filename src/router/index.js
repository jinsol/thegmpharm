import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView.vue";
// 브랜드스토리
import AboutUsView from "@/views/AboutUsView.vue";
// 상품보기 - Product (쇼핑하기, 정기배송)
import ShoppingView from "@/views/product/ShoppingView.vue";
import RegularDeliveryView from "@/views/product/RegularDeliveryView.vue";
// 함께하는 - collaboration (지엠팜케어, 필독상식, 트니프렌즈)
import GmpharmCareView from "@/views/collaboration/GmpharmCareView.vue";
import PillDocView from "@/views/collaboration/PillDocView.vue";
import TeuniView from "@/views/collaboration/TeuniView.vue";
// 커뮤니티 (이벤트, 자유게시판, 임밍아웃, 엠버서더, 매거진, 약사전문칼럼)
import EventView from "@/views/community/EventView.vue";
import BoardView from "@/views/community/BoardView.vue";
import PregnancyView from "@/views/community/PregnancyView.vue";
import AmbassadorView from "@/views/community/AmbassadorView.vue";
import MagazineView from "@/views/community/MagazineView.vue";
import PharmacistView from "@/views/community/PharmacistView.vue";
import BoardCreate from "@/components/community/BoardCreate.vue";
import BoardDetail from "@/components/community/BoardDetail.vue";
import ModifyPost from "@/components/community/ModifyPost.vue";
// 고객센터 (맴버십안내, 자주묻는질문, 1:1문의, 기업제휴문의, 공지사항)
import GuidelineView from "@/views/GuidelineView.vue";
import MembershipView from "@/views/MembershipView.vue";
import QuestionsView from "@/views/QuestionsView.vue";
import InquiryView from "@/views/InquiryView.vue";
//공지사항
import NoticePostView from "@/views/post/NoticePostView.vue";
import NoticePostView2 from "@/views/post/NoticePostView2.vue";
import NoticePostView3 from "@/views/post/NoticePostView3.vue";
import NoticePostView4 from "@/views/post/NoticePostView4.vue";
import NoticePostView5 from "@/views/post/NoticePostView5.vue";
import NoticePostView6 from "@/views/post/NoticePostView6.vue";
import NoticePostView7 from "@/views/post/NoticePostView7.vue";
import NoticePostView8 from "@/views/post/NoticePostView8.vue";
import NoticePostView9 from "@/views/post/NoticePostView9.vue";
import NoticePostView10 from "@/views/post/NoticePostView10.vue";
// 회사관련 (이용약관, 개인정보취급방침, 이용안내, 기업제휴문의)
import TermsView from "@/views/TermsView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import InformationView from "@/views/InformationView.vue";
import AllianceView from "@/views/AllianceView.vue";
// 마이페이지 (cart 등)
import MyPageView from "@/views/mypage/MyPageView.vue";
import CartView from "@/views/mypage/CartView.vue";
import SignUpview from "@/views/mypage/SignUpView.vue";
import Loginview from "@/views/mypage/LoginView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // build
  // base: "/the_gmpharm",
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/aboutus", name: "aboutus", component: AboutUsView },
    { path: "/shopping", name: "shopping", component: ShoppingView },
    {
      path: "/regulardelivery",
      name: "regulardelivery",
      component: RegularDeliveryView,
    },
    { path: "/gmpharmcare", name: "gmpharmcare", component: GmpharmCareView },
    { path: "/pilldoc", name: "pilldoc", component: PillDocView },
    { path: "/teuni", name: "teuni", component: TeuniView },
    { path: "/event", name: "event", component: EventView },
    { path: "/board", name: "board", component: BoardView },
    { path: "/pregnancy", name: "pregnancy", component: PregnancyView },
    { path: "/ambassador", name: "ambassador", component: AmbassadorView },
    { path: "/magazine", name: "magazine", component: MagazineView },
    { path: "/pharmacist", name: "pharmacist", component: PharmacistView },
    { path: "/membership", name: "membership", component: MembershipView },
    { path: "/questions", name: "questions", component: QuestionsView },
    { path: "/inquiry", name: "inquiry", component: InquiryView },
    { path: "/Terms", name: "Terms", component: TermsView },
    { path: "/privacy", name: "privacy", component: PrivacyView },
    { path: "/information", name: "information", component: InformationView },
    { path: "/alliance", name: "allianceview", component: AllianceView },
    { path: "/guideline", name: "guideline", component: GuidelineView },
    { path: "/noticepost", name: "noticepost", component: NoticePostView },
    { path: "/noticepost2", name: "noticepost2", component: NoticePostView2 },
    { path: "/noticepost3", name: "noticepost3", component: NoticePostView3 },
    { path: "/noticepost4", name: "noticepost4", component: NoticePostView4 },
    { path: "/noticepost5", name: "noticepost5", component: NoticePostView5 },
    { path: "/noticepost6", name: "noticepost6", component: NoticePostView6 },
    { path: "/noticepost7", name: "noticepost7", component: NoticePostView7 },
    { path: "/noticepost8", name: "noticepost8", component: NoticePostView8 },
    { path: "/noticepost9", name: "noticepost9", component: NoticePostView9 },
    {
      path: "/noticepost10",
      name: "noticepost10",
      component: NoticePostView10,
    },
    {
      path: "/boardcreate",
      name: "boardcreate",
      component: BoardCreate,
    },
    { path: "/boarddetail/:id", name: "Id", component: BoardDetail },
    { path: "/modify-post/:id", name: "modify-post", component: ModifyPost },
    { path: "/mypage", name: "mypage", component: MyPageView },
    { path: "/cart", name: "cart", component: CartView },
    { path: "/login", name: "login", component: Loginview },
    { path: "/signup", name: "signup", component: SignUpview },
  ],
});

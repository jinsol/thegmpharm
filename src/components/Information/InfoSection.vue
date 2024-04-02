<template>
  <section class="contents">
    <div class="tag__list">
      <button
        v-for="item in infoName"
        :key="item.name"
        @click="updateInfoTag(item.name)"
        :class="{ active: item.name === activeButton }"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="info-section">
      <p v-if="infoTag === '회원가입'">
        <span class="line">회원가입 안내</span>
        &nbsp;
        <span
          >[회원가입] 메뉴를 통해 이용약관, 개인정보보호정책 동의 및 일정 양식의
          가입항목을 기입함으로써 회원에 가입되며, 가입 즉시 서비스를 무료로
          이용하실 수 있습니다.</span
        >
        <span
          >주문하실 때에 입력해야하는 각종 정보들을 일일이 입력하지 않으셔도
          됩니다. 공동구매, 경매행사에 항상 참여하실 수 있습니다. 회원을 위한
          이벤트 및 각종 할인행사에 참여하실 수 있습니다.</span
        >
      </p>
      <p v-else-if="infoTag === '주문 안내'">
        <span class="line">주문안내</span>
        &nbsp;
        <span>상품주문은 다음단계로 이루어집니다.</span>
        &nbsp;
        <span>- Step1: 상품검색</span>
        <span>- Step2: 장바구니에 담기</span>
        <span>- Step3: 회원ID 로그인 또는 비회원 주문</span>
        <span>- Step4: 주문서 작성</span>
        <span>- Step5: 결제방법선택 및 결제</span>
        <span>- Step6: 주문 성공 화면 (주문번호)</span>
        &nbsp;
        <span
          >비회원 주문인경우 6단계에서 주문번호와 승인번호(카드결제시)를 꼭
          메모해 두시기 바랍니다. 단, 회원인 경우 자동 저장되므로 따로 관리하실
          필요가 없습니다.</span
        >
      </p>
      <p v-else-if="infoTag === '결제 안내'">
        <span class="line">결제안내</span>
        &nbsp;
        <span
          >고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
          확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
          아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</span
        >
        &nbsp;
        <span
          >무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은
          가까운 은행에서 직접 입금하시면 됩니다.</span
        >
        <span
          >주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
          7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소
          됩니다.</span
        >
      </p>
      <p v-else-if="infoTag === '배송 안내'">
        <span class="line">배송 안내</span>
        &nbsp;
        <span>배송 방법 : 택배</span>
        <span>배송 지역 : 전국지역</span>
        <span
          >배송 비용 : 조건부 무료 : 주 금액 30,000원 미만일 때 배송비 3,000원을
          추가합니다.</span
        >
        <span>배송 기간 : 3일 ~ 7일</span>
        <span>배송 안내 :</span>
        <span
          >- 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가
          있습니다.</span
        >
        <span
          >고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만,
          상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.</span
        >
      </p>
      <p v-else-if="infoTag === '교환/반품 안내'">
        <span class="line">교환/반품안내</span>
        &nbsp;
        <span class="semiLine">교환 및 반품 주소</span>
        <span>- [06698] 서울특별시 서초구 남부순환로287길 37 (방배동)</span>
        &nbsp;
        <span class="semiLine">교환 및 반품이 가능한 경우</span>
        <span
          >- 계약내용에 관한 서면을 받은 날부터 7일. 단, 그 서면을 받은 때보다
          재화등의 공급이 늦게 이루어진 경우에는 재화등을 공급받거나 재화등의
          공급이 시작된 날부터 7일 이내</span
        >
        <span
          >- 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나
          계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날 부터
          3월이내, 그사실을 알게 된 날 또는 알 수 있었던 날부터 30일이내</span
        >
        &nbsp;
        <span class="semiLine">교환 및 반품이 불가능한 경우</span>
        <span
          >- 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만,
          재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를
          할 수 있습니다)</span
        >
        <span
          >- 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히
          감소한 경우</span
        >
        <span
          >- 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히
          감소한 경우</span
        >
        <span>- 복제가 가능한 재화등의 포장을 훼손한 경우</span>
        <span
          >- 개별 주문 생산되는 재화 등 청약철회시 판매자에게 회복할 수 없는
          피해가 예상되어 소비자의 사전 동의를 얻은 경우</span
        >
        <span
          >- 디지털 콘텐츠의 제공이 개시된 경우, (다만, 가분적 용역 또는 가분적
          디지털콘텐츠로 구성된 계약의 경우 제공이 개시되지 아니한 부분은
          청약철회를 할 수 있습니다.)</span
        >
        &nbsp;
        <span
          >※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
          고객님께서 부담하셔야 합니다.</span
        >
        <span>(색상 교환, 사이즈 교환 등 포함)</span>
      </p>
      <p v-else-if="infoTag === '환불 안내'">
        <span class="line">환불안내</span>
        &nbsp;
        <span
          >환불시 반품 확인여부를 확인한 후 3영업일 이내에 결제 금액을 환불해
          드립니다.</span
        >
        <span
          >신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이
          청구되지 않게 합니다.</span
        >
        <span
          >(단, 신용카드 결제일자에 맞추어 대금이 청구 될수 있으면 이경우 익월
          신용카드 대금청구시 카드사에서 환급처리</span
        >
        <span>됩니다.)</span>
      </p>
      <p v-else-if="infoTag === '기타 안내'">
        <span class="line">기타안내</span>
        &nbsp;
        <span class="semiLine">이용기간</span>
        <span
          >주문으로 발생한 적립금은 배송완료 체크시점으로 부터 20일이 지나야
          실제 사용 가능 적립금으로 변환됩니다. 20일 동안은 미가용 적립금으로
          분류 됩니다. 미가용 적립금은 반품, 구매취소 등을 대비한 실질적인
          구입이 되지 않은 주문의 적립금 입니다.</span
        >
        <span
          >사용가능한 적립금(총 적립금-사용된적립금-미가용적립금)은 상품구매시
          즉시 사용하실 수 있습니다.</span
        >
        &nbsp;
        <span class="semiLine">이용조건</span>
        <span
          >적립금사용시 최소구매가능적립금(구매가능한 적립금 요구선)은 0원
          입니다. 적립금 사용시 최대구매가능적립금(적립금 1회 사용 가능
          최대금액)은 '한도제한없음' 입니다.</span
        >
        &nbsp;
        <span class="semiLine">소멸조건</span>
        <span
          >주문취소/환불시에 상품구매로 적립된 적립금은 함께 취소됩니다. 회원
          탈퇴시에는 적립금은 자동적으로 소멸됩니다. 최종 적립금 발생일로부터
          3년 동안 추가적립금 누적이 없을 경우에도 적립금은 소멸됩니다.</span
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.scrollToTop();
  },
  data() {
    return {
      infoTag: "회원가입",
      activeButton: "회원가입",
      activeTag: "", // 선택된 정보 섹션을 저장할 데이터 속성
      infoName: [
        { name: "회원가입" },
        { name: "주문 안내" },
        { name: "결제 안내" },
        { name: "배송 안내" },
        { name: "교환/반품 안내" },
        { name: "환불 안내" },
        { name: "기타 안내" },
      ],
    };
  },
  methods: {
    updateInfoTag(tag) {
      this.infoTag = tag;
      this.activeButton = tag;
      this.activeTag = tag;
    },
    scrollToTop() {
      window.scrollTo(0, 0); // x, y 좌표를 0으로 설정하여 맨 위로 스크롤합니다.
    },
  },
};
</script>

<style lang="scss" scoped>
.contents {
  height: 660px;
  .tag__list {
    display: flex;
    justify-content: space-between;
    button {
      color: #757575;
      font-size: 15px;
      margin-left: 0px;
      padding: 18px;
      background: #fff;
      flex: 1;
      border: 1px solid #ddd;
      border-right-color: transparent;
      &:last-child {
        border-right-color: #ddd;
      }
      &.active {
        color: #46b7b0;
        border-color: #46b7b0;
        border-bottom-color: transparent;
        + button {
          border-left-color: transparent;
        }
      }
    }
  }
  .info-section {
    padding: 27px 10px 46px 9px;
    p {
      span {
        display: block;
        color: #353535;
        font-size: 15px;
      }
      .line {
        font-weight: bold;
        color: #444;
        font-size: 18px;
      }
      .semiLine {
        font-weight: bold;
        color: #353535;
        font-size: 15px;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .contents {
    padding: 0 0 100px;
    height: 660px;
    .tag__list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      button {
        color: #757575;
        font-size: 15px;
        margin-left: 0px;
        padding: 10px;
        background: #fff;
        flex: 1 0 0%;
        border: 1px solid #ddd;
        border-right-color: transparent;
        &:last-child {
          border-right-color: #ddd;
        }
        &.active {
          color: #46b7b0;
          border-color: #46b7b0;
          border-bottom-color: transparent;
          + button {
            border-left-color: transparent;
          }
        }
      }
    }
    .info-section {
      padding: 20px 10px 0px 9px;
      p {
        span {
          display: block;
          color: #353535;
          font-size: 12px;
        }
        .line {
          font-weight: bold;
          color: #444;
          font-size: 15px;
        }
        .semiLine {
          font-weight: bold;
          color: #353535;
          font-size: 13px;
        }
      }
    }
  }
}
</style>

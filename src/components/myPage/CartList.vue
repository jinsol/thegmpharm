<template>
  <section class="cart_list">
    <ul>
      <li class="cart_list-left">
        <ul classs="cart_list-left-header">
          <li class="cart_list-left-product">상품</li>
          <li class="cart_list-left-price">가격</li>
          <li class="cart_list-left-quantity">수량</li>
          <li class="cart_list-left-totalPrice">합계</li>
          <li class="cart_list-left-remove"></li>
        </ul>
        <ul
          class="cart_list-left-content"
          v-for="(item, index) in cartItem"
          :key="index"
        >
          <li class="cart_list-left-product">
            <div class="imageBox">
              <img :src="item.image_src" :alt="item.name" />
            </div>
            <p class="textBox">{{ item.name }}</p>
          </li>
          <li class="cart_list-left-price">{{ item.price | formatPrice }}</li>
          <li class="cart_list-left-quantity">
            <button @click="decreaseQuantity(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)">+</button>
          </li>
          <li class="cart_list-left-totalPrice">
            {{ (item.price * item.quantity) | formatPrice }}
          </li>
          <li class="cart_list-left-remove">
            <button @click="removeFromCart(index)">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </li>
        </ul>
      </li>
      <li class="cart_list-right">
        <ul class="cart_list-right-content">
          <li class="cart_list-right-content-title">
            <h3>영수증 <span>Receipt</span></h3>
          </li>
          <li>총 {{ cartItemCount }} 종류이고 개수는{{ totalCartLength }}개</li>
          <li>
            <p>합계</p>
            <p>{{ totalCartPrice | formatPrice }}</p>
          </li>
        </ul>
        <ul class="cart_list-right-BT">
          <li>
            <button>결제하기</button>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    cartItem() {
      return this.$store.state.cartItem; // 장바구니 상태를 가져옴
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount; // 장바구니에 있는 항목 수를 가져옴
    },
    totalCartLength() {
      return this.cartItem.reduce((total, item) => total + item.quantity, 0);
    },
    totalCartPrice() {
      return this.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index); // 장바구니에서 항목 제거하는 액션을 호출
    },
    increaseQuantity(index) {
      const item = this.cartItem[index];
      this.$store.commit("increaseQuantity", item);
      this.$set(this.cartItem, index, item); // Vue.set()을 사용하여 변경 사항을 알림
    },
    decreaseQuantity(index) {
      const item = this.cartItem[index];
      if (item.quantity > 1) {
        this.$store.commit("decreaseQuantity", item);
        this.$set(this.cartItem, index, item); // Vue.set()을 사용하여 변경 사항을 알림
      }
    },
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return "";
      }
      if (price > 999) {
        let priceString = String(price);
        let priceArray = priceString.split("").reverse();
        let index = 0;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return priceArray.reverse().join("") + "원";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart_list {
  ul {
    display: flex;
    gap: 2%;
    .cart_list-left {
      width: 75%;
      ul {
        display: flex;
        align-items: center;
        padding: 1em 0;
        border-bottom: 2px solid var(--gray-color);
        color: gray;
        li {
          display: flex;
          align-items: center;
          &.cart_list-left-product {
            flex: 1;
            gap: 20px;
            .imageBox {
              max-width: 140px;
              background-color: whitesmoke;
              padding: 2%;
              border-radius: 10px;
              aspect-ratio: 1/1;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 80%;
              }
            }
            .textBox {
              color: black;
            }
          }
          &.cart_list-left-price {
            width: 10%;
          }
          &.cart_list-left-quantity {
            width: 10%;
          }
          &.cart_list-left-totalPrice {
            width: 10%;
          }
          &.cart_list-left-remove {
            width: 5%;
            justify-content: center;
          }
        }
      }
      .cart_list-left-content {
        .cart_list-left-quantity {
          background-color: whitesmoke;
          border-radius: 50px;
          padding: 2%;
          text-align: center;
          color: black;
          height: 50px;

          button {
            all: unset;
            font-size: 18px;
            width: 25%;
            cursor: pointer;
          }
          span {
            width: 50%;
          }
        }
        .cart_list-left-remove {
          button {
            i {
              background-color: whitesmoke;
              width: 25px;
              height: 25px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .cart_list-right {
      width: 25%;
      ul {
        display: flex;
        flex-direction: column;
        &.cart_list-right-content {
          background-color: whitesmoke;
          border: 1px solid var(--gray-color);
          li {
            padding: 6%;
            display: flex;
            justify-content: space-between;
            &.cart_list-right-content-title {
              h3 {
                span {
                  font-weight: lighter;
                  color: gray;
                }
              }
            }
          }
          li:not(:last-child) {
            border-bottom: 1px solid var(--gray-color);
          }
          li:last-child {
            background-color: lightgray;
          }
        }
        &.cart_list-right-BT {
          margin-top: 6%;

          text-align: center;
          button {
            color: white;
            font-size: 16px;
            display: block;
            padding: 6%;
            width: 100%;
            background-color: var(--main-color);
          }
        }
      }
    }
  }
}
</style>

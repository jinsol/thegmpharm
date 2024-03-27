// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    is1400: false,
    shoppingList: [],
    boardList: [],
    pregnancyList: [],
    cartItem: [],
    isAddedToCart: {},
  },
  mutations: {
    set1400(state, value) {
      state.is1400 = value;
    },
    setMobile(state, value) {
      state.isMobile = value;
    },
    set__ShoppingList(state, payload) {
      state.shoppingList = payload;
    },
    set__BoardList(state, boardList) {
      state.boardList = boardList;
    },
    set__Pregnancy(state, pregnancyList) {
      state.pregnancyList = pregnancyList;
    },
    ADD_POST(state, { newPost, boardType }) {
      newPost.id = state[boardType + "List"].length + 1; // 새로운 id 할당
      state[boardType + "List"].push(newPost); // 해당 게시판에 게시물 추가
    },
    add__Cart(state, payload) {
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item.id === payload.id
      );
      if (existingItemIndex !== -1) {
        state.cartItem[existingItemIndex].quantity++;
      } else {
        payload.quantity = 1;
        state.cartItem.push(payload);
      }
      Vue.set(state.isAddedToCart, payload.id, true);
    },
    remove__Cart(state, payload) {
      state.cartItem.splice(payload, 1);
      Vue.set(state.isAddedToCart, payload.id, false);
    },

    decreaseQuantity(state, item) {
      const cartItemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (cartItemIndex !== -1) {
        if (state.cartItem[cartItemIndex].quantity > 1) {
          state.cartItem[cartItemIndex].quantity--;
        }
      }
    },
    increaseQuantity(state, item) {
      const cartItemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (cartItemIndex !== -1) {
        state.cartItem[cartItemIndex].quantity++;
      }
    },
  },
  actions: {
    init__Shopping({ commit }) {
      axios.get("/assets/data/product_SP.json").then((response) => {
        commit("set__ShoppingList", response.data);
      });
    },
    init__Board({ commit }) {
      axios.get("/assets/data/board.json").then((response) => {
        commit("set__BoardList", response.data);
      });
    },
    init__Pregnancy({ commit }) {
      axios.get("/assets/data/pregnancy.json").then((response) => {
        commit("set__Pregnancy", response.data);
      });
    },
    async addPost({ commit, state }, { newPost, boardType }) {
      try {
        commit("ADD_POST", { newPost, boardType });
        localStorage.setItem(
          boardType === "board" ? "boardList" : "pregnancyList",
          JSON.stringify(
            state[boardType === "board" ? "boardList" : "pregnancyList"]
          )
        );
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
    addToCart(context, item) {
      context.commit("add__Cart", item); // mutation을 호출하여 장바구니에 항목 추가
    },
    removeFromCart(context, index) {
      context.commit("remove__Cart", index); // mutation을 호출하여 장바구니에서 항목 제거
    },
  },
  getters: {
    fnGetShoppingList: (state) => state.shoppingList,
    fnGetBoardList: (state) => state.boardList,
    fnGetPregnancyList: (state) => state.pregnancyList,
    cartItemCount: (state) => state.cartItem.length,
  },
});

// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: false,
    shoppingList: [],
    boardList: [],
    pregnancyList: [],
    cartItem: [],
    isAddedToCart: {},
    users: [],
    isLoggedIn: false,
    username: "",
  },
  mutations: {
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
    addUser(state, user) {
      state.users.push(user);
    },
    login(state, username) {
      state.isLoggedIn = true;
      state.username = username;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
    },
    setLoginState(state, { isLoggedIn, username }) {
      state.isLoggedIn = isLoggedIn;
      state.username = username;
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
      context.commit("add__Cart", item);
    },
    removeFromCart(context, index) {
      context.commit("remove__Cart", index);
    },
    signup({ commit, state }, { id, username, password }) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = { id, username, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      commit("addUser", newUser);
      return Promise.resolve();
    },
    login({ commit }, { username, password }) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (loggedInUser) {
        commit("login", username);
        alert("로그인에 성공하였습니다.");
        window.location.href = "/";
        return true;
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        return false;
      }
    },
    logout({ commit }) {
      commit("logout");
    },
    initLoginState({ commit }) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const username = localStorage.getItem("username");
      commit("setLoginState", { isLoggedIn, username });
    },
  },
  getters: {
    fnGetShoppingList: (state) => state.shoppingList,
    fnGetBoardList: (state) => state.boardList,
    fnGetPregnancyList: (state) => state.pregnancyList,
    cartItemCount: (state) => state.cartItem.length,
    loggedInUsername: (state) => state.username,
    isLoggedIn: (state) => state.isLoggedIn,
  },
});

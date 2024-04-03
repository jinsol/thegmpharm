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
    userId: "",
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
    login(state, payload) {
      state.isLoggedIn = true;
      state.userId = payload.userId;
      state.username = payload.username;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", payload.username);
      localStorage.setItem("userId", payload.userId);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
      state.userId = null;
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
    },
    setLoginState(state, { isLoggedIn, username, userId }) {
      state.isLoggedIn = isLoggedIn;
      state.userId = userId;
      state.username = username;
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
    },
    DELETE_POST(state, { postId, boardType }) {
      if (boardType === "board") {
        state.boardList = state.boardList.filter((post) => post.id !== postId);
        localStorage.setItem("boardList", JSON.stringify(state.boardList));
      } else if (boardType === "pregnancy") {
        state.pregnancyList = state.pregnancyList.filter(
          (post) => post.id !== postId
        );
        localStorage.setItem(
          "pregnancyList",
          JSON.stringify(state.pregnancyList)
        );
      }
    },
    UPDATE_POST(state, { postId, modifiedPost, boardType }) {
      // 보드 타입에 따라서 게시물 목록을 찾아 수정
      const boardList =
        boardType === "board" ? state.boardList : state.pregnancyList;
      const postIndex = boardList.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        // 해당 게시물을 찾았을 때 수정 내용으로 업데이트
        Object.assign(boardList[postIndex], modifiedPost);
      }
    },
  },
  actions: {
    init__Shopping({ commit }) {
      axios.get("./assets/data/product_SP.json").then((response) => {
        commit("set__ShoppingList", response.data);
      });
    },
    init__Board({ commit }) {
      axios.get("./assets/data/board.json").then((response) => {
        commit("set__BoardList", response.data);
      });
    },
    init__Pregnancy({ commit }) {
      axios.get("./assets/data/pregnancy.json").then((response) => {
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
    signup({ commit, state }, { userId, username, password }) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = { userId, username, password };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      commit("addUser", newUser);
      return Promise.resolve();
    },
    login({ commit }, { userId, password }) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedInUser = users.find(
        (user) => user.userId === userId && user.password === password
      );
      if (loggedInUser) {
        commit("login", loggedInUser);
        alert("로그인에 성공하였습니다.");
        window.location.href = "/home";
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
      let username = "";
      let userId = "";
      if (isLoggedIn) {
        username = localStorage.getItem("username");
        userId = localStorage.getItem("userId");
      }
      commit("setLoginState", { isLoggedIn, username, userId });
    },
    async deletePost({ commit, state }, { postId, boardType }) {
      try {
        commit("DELETE_POST", { postId, boardType });
      } catch (error) {
        throw new Error("게시물 삭제에 오류가 발생했습니다.");
      }
    },
    async updatePost({ commit, state }, { postId, modifiedPost, boardType }) {
      // UPDATE_POST mutation 호출하여 게시물 수정
      commit("UPDATE_POST", { postId, modifiedPost, boardType });

      // 로컬 스토리지에 수정된 게시물 리스트 반영
      if (boardType === "board") {
        localStorage.setItem("boardList", JSON.stringify(state.boardList));
      } else if (boardType === "pregnancy") {
        localStorage.setItem(
          "pregnancyList",
          JSON.stringify(state.pregnancyList)
        );
      }
    },
  },
  getters: {
    fnGetShoppingList: (state) => state.shoppingList,
    fnGetBoardList: (state) => state.boardList,
    fnGetPregnancyList: (state) => state.pregnancyList,
    cartItemCount: (state) => state.cartItem.length,
    loggedInUsername: (state) => state.username,
    loggedInUserId: (state) => state.userId,
    isLoggedIn: (state) => state.isLoggedIn,
  },
});

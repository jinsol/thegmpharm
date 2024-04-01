import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null, // 사용자 정보를 저장하는 상태 필드 추가
    posts: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    incrementViews(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.views++;
      }
    }
  }
});
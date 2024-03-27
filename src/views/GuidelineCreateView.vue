<template>
    <div>
      <!-- 글 입력 폼 -->
      <form @submit.prevent="savePost">
        <label for="title">제목:</label>
        <input type="text" id="title" v-model="newPost.title" required>
        
        <label for="author">작성자:</label>
        <input type="text" id="author" v-model="newPost.author" required>
        
        <label for="date">작성일:</label>
        <input type="date" id="date" v-model="newPost.date" required>
        
        <label for="isEvent">이벤트:</label>
        <input type="checkbox" id="isEvent" v-model="newPost.isEvent">
        
        <label for="isRecommended">추천:</label>
        <input type="checkbox" id="isRecommended" v-model="newPost.isRecommended">
        
        <button type="submit">글쓰기</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPost: {
          title: '',
          author: '',
          date: '',
          isEvent: false,
          isRecommended: false
        }
      };
    },
    methods: {
      savePost() {
        // 글을 저장하는 로직을 구현합니다.
        // 저장된 글을 공지사항 목록 페이지로 전달합니다.
        this.$router.push({ name: 'GuidelineList', params: { newPost: this.newPost } });
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  /* 필요한 스타일을 추가하세요 */
  </style>
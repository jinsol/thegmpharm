<template>
    <div>
      <h2>작성된 글 목록</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="post.id">
          <span>{{ index + 1 }}. {{ post.title }}</span>
          <span>{{ post.author }}</span>
          <span>{{ formatDate(post.date) }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [], 
      };
    },
    mounted() {
      
    },
    methods: {
      formatDate(date) {
        
      },
    },
  };
  </script>
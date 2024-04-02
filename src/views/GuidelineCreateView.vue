<template>
	<div>
	  <h2>글 작성하기</h2>

	  <input type="text" v-model="title" placeholder="제목을 입력하세요" />

	  <textarea v-model="content" placeholder="내용을 입력하세요"></textarea>

	  <button @click="submitPost">글쓰기</button>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		title: "",
		content: "",
	  };
	},
	methods: {
	  submitPost() {
		const newPost = {
		  title: this.title,
		  content: this.content,
		};
		this.$store.dispatch("addPost", { newPost, boardType: "board" });
		this.$router.push("/guideline");
	  },
	},
  };
  </script>
<template>
  <div class="row">
    <div class="notice">
      <table>
        <thead>
          <tr>
            <th class="num">번호</th>
            <th class="title">제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedList" :key="index" class="tdBox">
              <td class="num">{{ index + 1 }}</td>
              <td class="title">
                <router-link :to="item.link">{{ item.title }}</router-link>
              </td>
              <td class="author">{{ item.author }}</td>
              <td class="date">{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
      <div class="angle">
        <button @click="prevPage" class="prev"><i class="fa-solid fa-angle-left"></i></button>
        <button @click="nextPage" class="next"> <i class="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      guidelineTable: [
        { title: '[추천] 지엠팜 유소아 필수 면역템', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/noticepost' },
        { title: '[문경 세트] 야미푸 키즈멀티비타민', author: '지엠팜', date: '2024-03-16', isEvent: true, isRecommended: false, link:'/NoticePost2' },
        { title: '[이벤트] 2024년 신년운세 이벤트', author: '지엠팜', date: '2024-03-17', isEvent: true, isRecommended: true , link:'/NoticePost3' },
        { title: '[이벤트] 2024년 트니프렌즈 제품 증정 이벤트', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost4' },
        { title: '[이벤트] 2023년 블랙프라이데이', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost5' },
        { title: '[추천] 지엠팜 찐 추첨템 더폴릭포 마미&대디', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost6' },
        { title: '[이벤트]🤰🏻임산부의 날 특별기획전', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost7' },
        { title: '[이벤트] 신규회원 더징크디이뮨 오디티 증정', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost8' },
        { title: '[공지] 23년 추석 연휴 배송 안내', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost9' },
        { title: '[이벤트] 2023 풍요로운 추석 이벤트', author: '지엠팜', date: '2024-03-15', isEvent: false, isRecommended: true, link:'/NoticePost10' },
        ],
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    paginatedList() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.guidelineTable.slice(startIndex, endIndex);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      const totalPages = Math.ceil(this.guidelineTable.length / this.pageSize);
      if (this.currentPage < totalPages) {
        this.currentPage++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.notice {
  padding: 50px 0;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 18px 30px 18px 10px;
    }
    thead{
      border: 1px solid #e7e7e7;
      background: #f9f9f9;
      border-right: none;
      border
    th {
      text-align: left;

    }
    th.title{
      text-align: center;
    }
    th.num{
      text-align: center;
    }
  }
  td.title{
    text-align: left;
  }
    td {
      word-break: break-all;
      border-bottom: 1px solid #e7e7e7;
      text-align: center;
    }
  }
}
.title{
  width: 60%;
}
.num{
  text-align: center;
  width: 10%;
}
  .angle{
    padding: 30px;
    display: flex;
    justify-content: center;
    button {
      border: 1px solid lightgray;
      color: gray;
      font-weight: 100;
      width: 40px;
      height: 40px;
      font-size: 12px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button.prev{
      margin-right: 10px;
    }
    button.next{
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 900px){
    .notice {
  padding: 20px 0;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 1px 1px 1px 5px;
    }
    thead{
      border: 1px solid #e7e7e7;
      background: #f9f9f9;
      border-right: none;
      display: none;
    th {
      text-align: left;
    }
    th.title{
      text-align: center;
      display: none;
    }
    th.num{
      text-align: center;
      display: none;
    }
  }
.tdBox{  
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
  td.title{
    text-align: left;
  }
    td {
      word-break: break-all;
      border-bottom: 1px solid #e7e7e7;
      text-align: center;
    }
    td.title{
  width: 400%;
  border: none;
  font-size: 18px;
}
td.num{
  text-align: center;
  width: 10%;
  display: none;
}
td.author{
  width: 10%;
  font-size: 10px;
  text-align: left;
  border: none;
  color: #808080;
  font-size: 13px
}
td.date{
  width: 20%;
  font-size: 10px;
  text-align: left;
  border: none;
  color: #808080;
  font-size: 13px
}
  }
}
}
  .angle{
    padding: 30px;
    display: flex;
    justify-content: center;
    button {
      border: 1px solid lightgray;
      color: gray;
      font-weight: 100;
      width: 40px;
      height: 40px;
      font-size: 12px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button.prev{
      margin-right: 10px;
    }
    button.next{
      margin-right: 10px;
    }
  }
  }
</style>
<!-- <template>
  <div>

    <div v-for="post in boardList" :key="post.id" @click="viewPost(post)">
      <h3>{{ post.title }}</h3>
    </div>

    <button @click="goToAddPostPage">글쓰기</button>
  </div>
</template>

<script>
export default {
  computed: {
    boardList() {
      return this.$store.getters.fnGetBoardList;
    }
  },
  methods: {
   

    goToAddPostPage() {
      this.$router.push('/guidelineCreate');
    },
    viewPost(post) {
      
      this.$router.push({ name: 'PostDetail', params: { postId: post.id } });
    }
  }
};
</script> -->
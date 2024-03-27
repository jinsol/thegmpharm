<template>
  <div class="box row">
    <h2>[추천] 지엠팜 유소아 필수 면역템</h2>
    <div class="photo">
      <img src="../../../public/image/240304ev1.jpg" alt="" />
      <router-link to="/guideline"><button>목록으로</button></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  padding: 30px;

  h2 {
    text-align: center;
  }

  .photo {
    padding: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    img {
      // 이미지 스타일링
    }
  }

  button {
    width: 120px;
    border: 1px solid #46b7b0;
    padding: 10px 9px;
    font-size: 14px;
    background: #fff;
    border-radius: 15px;
    margin: 30px;
    color: #46b7b0;
    &:hover {
      background: #46b7b0;
      color: #fff;
    }
  }
}
</style>

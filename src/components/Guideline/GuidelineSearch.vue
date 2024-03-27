<template>
    <div class="movie__search">
        <form @submit.prevent="onSearch">
            <input v-model="inputRef" type="search" placeholder="">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputRef : ""
            }
        },
        methods:{
            onSearch(){
                if (this.inputRef) {
                    console.log(this.inputRef)
                    this.$store.commit("on__Search", this.inputRef)
                    this.$emit("onSearch", 1)
                    this.$emit("update:currentPage", 1)
                    this.inputRef = ""
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.movie__search {
    text-align: center;
    margin-bottom: 70px;
    input {
      background: #fff;
      border-bottom: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      max-width: 300px;
      margin-right: 10px;
      border-width: 0 0 1px;
    }
    button{
       
        border-bottom: 1px solid #e8ecf2;
        background: #fff;
        font-size: 16px;
      padding: 10px 20px;
    }
  }
</style>
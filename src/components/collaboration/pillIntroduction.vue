<template>
  <section class="pill_introduction">
    <ul>
      <li class="pill_introduction-title">
        <ul>
          <img src="@/assets/image/PillDoc_barcode.png" alt="" />
        </ul>
        <ul>
          <img src="@/assets/image/PillDoc_logo.png" alt="" />
        </ul>
      </li>
      <li class="pill_introduction-contents">
        <img src="@/assets/image/PillDoc_main.png" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pill_introduction {
  padding: 2% 0;
  .pill_introduction-title {
    padding: 2% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pill_introduction-contents {
    text-align: center;
    padding: 2% 0;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
}
</style>

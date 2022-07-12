<template>
  <div class="main_box">
    <div class="left_box"></div>
    <div class="right_box"><router-view /></div>
  </div>
</template>

<style lang="scss">
.main_box {
  display: flex;

  .left_box {
    width: 300px;
  }

  .right_box {
    flex: 1;
  }
}
</style>

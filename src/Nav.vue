<template>
  <div class="nav_box">
    <router-link to="/">Home</router-link>
    <router-link to="/variable">Variable</router-link>
    <router-link to="/lifecircle">LifeCircle</router-link>
    <router-link to="/watch">Watch</router-link>
  </div>
</template>

<style lang="scss">
.nav_box {
  display: flex;
  flex-direction: column;

  a {
    margin: 5px 0;
  }
}
</style>

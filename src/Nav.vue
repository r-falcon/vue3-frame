<template>
  <div class="nav_box">
    <!-- 
    router-router-link的配置：
      to：是一个字符串，或一个对象
      replace：点击调用router.replace()而不是router.push()
      active-class：激活后class
      exact-active-class：精准激活后class
    -->
    <router-link to="/">Home</router-link>
    <router-link to="/variable">Variable</router-link>
    <router-link to="/lifecircle">LifeCircle</router-link>
    <router-link to="/watch">Watch</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/setup">Setup</router-link>
    <router-link to="/fragment">Fragment</router-link>
    <router-link to="/teleport">Teleport</router-link>
    <router-link to="/suspense">Suspense</router-link>
    <router-link to="/defineHooks">DefineHooks</router-link>
    <router-link to="/async">AsyncComPonent</router-link>
    <router-link to="/slot">Slots</router-link>
    <router-link to="/directive">Directive</router-link>
    <router-link to="/vmodel">Vmodel</router-link>
    <router-link to="/vforvif">v-for和v-if同时使用</router-link>
    <router-link to="/vbind">v-bind优先级</router-link>
    <router-link to="/communication">组件间通信</router-link>
    <router-link to="/router">路由的使用</router-link>
    <router-link to="/vueuse">VueUse工具库</router-link>
    <router-link to="/request">axios封装接口请求案例</router-link>
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

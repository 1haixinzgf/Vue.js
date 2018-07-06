<template>
  <div id="app">
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade">
        <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import  './style/common'

//.router-fade-enter 进入的那一瞬间 ---name-enter
// .router-fade-enter-active //会在进入的整个过程,完全进入后会移除这个类名
// 类名作用完后会移除
.router-fade-enter-active, .router-fade-leave-active  {
  transition : opacity  .3s;//opacity默认为1
}
.router-fade-enter, .router-fade-leave-active {
  opacity : 0;
}
</style>

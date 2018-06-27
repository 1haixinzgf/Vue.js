<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
// @表示alias地址短链接，在哪里都指向src，让地址引入更加轻松
import Login from '@/views/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>

</style>

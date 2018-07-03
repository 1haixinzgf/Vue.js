<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/dashboard">/dashboard</router-link>
    <router-link v-if="isLogon" to="/login">/login</router-link>
    <router-link v-else to="/logout">/logout</router-link>
    <router-view/>
  </div>
</template>

<script>
import auth from '@/auth'
export default {
  name: 'App',
computed: {
  isLogon() {
   return auth.loggedIn()? true: false
    
  }
}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

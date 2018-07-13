<template>
  <div id="app">
    <p>
      FullName: {{ fullName }}
    </p>
    <p>
      FirstName: <input type="text" v-model="firstName" />
    </p>
    <p>obj.a {{obj.a}}</p>
    <p>obj.a <input type="text" v-model="obj.a"></p>
    <main-component></main-component>
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/Home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar />
      </div>
      <div class="col-sm-9">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import MainComponent from '@/components/MainComponent'
import Sidebar from '@/components/Sidebar'
export default {
  data () {
    return {
      firstName: '海',
      lastName: '心',
      fullName: '',
      obj: {
        a: 2
      }
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   // console.log(newName, oldName)
    //   this.fullName = newName + ' ' + this.lastName
    // } // 看到两个值的变化，可以监听所有的东西
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      handler (newName, oldName) {
        console.log('obj.a change')
      },
      immediate: true,
      deep: true
    }
  },
  // computed: {
  //   fullName () {
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // },
  name: 'App',
  components: {
    Sidebar,
    MainComponent
  }
}
</script>

<style>
</style>

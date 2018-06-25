<template>
  <div id="app">
    <el-button  :loading="isLoading"  type="primary">提交</el-button>
    <el-button icon="el-icon-edit" type="success"
      :loading="isLoading" @click="doLoading"></el-button>
    <el-button :disabled="disabled" type="warning">提交</el-button>
    <el-button :disabled="disabled" type="danger">提交</el-button>
  </div>
</template>

<script>

import Elbutton from "@/components/Elbutton"

export default {
  name: 'App',
  data() {
    return {
    disabled: false,
    isLoading: false
    }
  },
  methods: {
    doLoading() {
      console.log(414);
    }
  },
  components: {
    "el-button": Elbutton
  },
 mounted() {
    setTimeout(() => {
      this.isLoading = false
    },2000)
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

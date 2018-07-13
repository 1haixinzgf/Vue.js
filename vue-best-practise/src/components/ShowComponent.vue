<template>
  <div>
    {{ html }}
  </div>
</template>

<script>
// import Bus from '@/common/bus.js'
export default {
  data () {
    return {
      html: '还没有点击'
    }
  },
  created () { // 在事件发生之前订阅
    // Bus.$on('getTarget', index => {
    //   this.html = `第${index}个元素被点击了`
    // })
    this.$on('global:getTarget', index => {
      this.html = `第${index}个元素被点击了`
      console.log(222)
    })
  }
}
</script>

<style>

</style>

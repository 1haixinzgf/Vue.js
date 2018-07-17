<template>
  <div>
    <template v-if="type !=='textarea'"><!--template 内置组件用于放置指令 -->
      <input class="el-input__inner" @input="handleInput" ref="input">
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (event) {
      
    }
  }
}
</script>

<style>

</style>

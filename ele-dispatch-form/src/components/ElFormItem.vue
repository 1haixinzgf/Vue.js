<template>
  <div class="el-form-item">
    <label class="el-form-item__label" v-if="label || $solts.label">
      <slot name="label">{{label}}</slot>
    </label>
    <div class="el-form-item__content">
      <slot />  
    </div>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  props: {
    label: String,
    prop: String
  },
  mixins: [emitter],//mixins返回methods的集合 引入的emitter中的methods会和组件中的 methods合并
  mounted () {
    this.dispatch('ElForm', 'el.form.addFiled', [this])// o[this]整个组件的实例
  },
  computed: {
    form () {
      let parent = this.$parent;
      let parentName = parent.$options.componentName
      while(parentName !== 'ElForm') {
        parent = parent.$parent
        parentName = parent.$options.componentName
      } 
      console.log(parent)
      return parent
    }
  },
  methods: {
    vaildate (trriger, callback) {
      // 怎么获取rules 当前item对应的rule是什么   el-input的值是什么
      const rules = this.form.rules
      const item_rule = rules[this.prop]
      console.log(item_rule)
    }
  }
}
</script>

<style>

</style>

<template>
  <form class="el-form" :class="[labelPositon? 'el-form--label' + labelPositon: '',{'el-form--inline': inline}]">
      <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'ElForm',
  componentName: 'ElForm',//this.$options---name componentName
  data () {
    return {
      fields: []
    }
  },
  props: {
    labelPositon: String,
    inline: Boolean,
    rules: Object,
    model: Object
  },
  methods: {
    validate () { //父组件通过this.$refs找到这个组建的方法
      this.fields.forEach(field => {
        field.validate('', (message, field) => {
          
        })
      })
    }
  },
  created () {
    this.$on('el.form.addField', (field) => {
      this.fields.push(field)
    })
  }
}
</script>

<style>

</style>

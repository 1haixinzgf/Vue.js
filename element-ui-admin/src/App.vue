<template>
  <div id="app">
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="男"></ele-radio>
      <ele-radio label="女"></ele-radio>
    </ele-radio-group> -->
    <!-- <login></login>
    <p v-html="content"></p> -->



    <!-- <comment>

    </comment> -->



    <article-table></article-table>
  </div>
</template>

<script>
// @表示alias地址短链接，在哪里都指向src，让地址引入更加轻松
import ArticleTable from '@/views/ArticleTable'
import Login from '@/views/Login';
import EleRadioGroup from '@/components/EleRadioGroup';
import EleRadio from '@/components/EleRadio';
import Comment from '@/components/Comment'
export default {
  name: 'App',
  data() {
    return {
      sex: 0,
      content: '<span>美团挂了，还有UC</span>'
    }
  },
  components: {
    Login,
    EleRadioGroup,
    EleRadio,
    Comment,
    ArticleTable
  },
  
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
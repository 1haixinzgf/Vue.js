<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list ></product-list>
    <hr>
    <shopping-cart></shopping-cart>
    <!-- <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
  
</template>

<script>
import header from '@/components/header/header'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
import ProductList from '@/components/ProductList/ProductList'
import {urlParse} from '@/common/js/util'

const response = require('@/common/data/seller.json')

const ERR_OK = 0
export default {
  name: 'App',
  data() {
    return {
      seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
    };
  },
  created() {
    if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data);
      }
      // console.log(this.seller)
      
  },
  components: {
    'v-header' : header,
    ShoppingCart,
    ProductList
  }
}
</script>

<style lang="stylus" >
 @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)


</style>

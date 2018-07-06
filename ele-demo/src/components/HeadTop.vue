<template>
    <header id="head_top">
        <slot name="logo"/>
        <router-link :to="userInfo?'/profile':'/login'" class="head_login"><!-- /profile个人详情 -->
            <span class="login_span" v-if="!userInfo">登录|注册</span>
        </router-link>

    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        // computed是一个json
        // mapState会返回一个接过来的json
        // 将新来的json展开到computed
       ...mapState([
           'userInfo'
       ]) 
    }
}
</script>

<style lang="stylus" scoped>
@import  '../style/mixin'

    .head_logo
        left 0.4em
        ct()
        font-weight 400
        sc(0.7rem, #ffffff)
        wh(2.3rem, 0.7rem)
        
    #head_top
        background-color $blue
        position fixed
        z-index 100
        left 0
        top 0
        wh(100%, 1.95rem)
        .head_login
            right 0.55rem
            sc(0.65rem, #fff)
            ct()
            .login_span
                color #ffffff
</style>

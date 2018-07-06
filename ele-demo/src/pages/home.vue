<template>
    <div>
        <head-top signin-up="home">
            <span slot="logo" class="head_logo">ele.me</span><!--只会放置name为logo的slot -->
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位的城市</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'city'+ guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="cityListul clear">
                <router-link :to="'city'+item.id" v-for="item in hotcity" :key="item.id" tag="li">{{item.name}}</router-link>
            </ul>
        </section>
    </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'
import { cityGuess, hotcity } from '@/api/getData'
export default {
    data() {
        return {
            guessCityid: '',
            guessCity: '',
            hotcity: []
        }
    },
    components: {
        HeadTop
    },

    // 生命周期获取城市不准确，而且耗时的api 阻塞组件渲染
    mounted () {
        cityGuess()
        .then(res => res.json())//fetch之后是二进制流
        .then(data => {
            console.log(data)
            this.guessCityid = data.id
            this.guessCity = data.name
        })
        hotcity()
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.hotcity = data
        })
    }
}
</script>

<style lang="stylus">
@import '../style/mixin'
    .city_nav
        padding-top 2.35rem
        border-top 1px soild $bc
        background-color #fff
        margin-bottom 0.4rem
        .city_tip
            fj()
            line-height 1.45rem
            padding 0 0.45rem
            span:nth-of-type(1)//选择第二个span
                sc(0.5rem, #666666)
            span:nth-of-type(2)
                font-weight 900
                sc(0.475rem, #9f9f9f)

</style>

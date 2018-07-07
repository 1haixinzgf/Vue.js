<template>
    <div class="loginContainer">
        <head-top head-title="登录" goBack="true"> 
            <!-- <span slot="buttons" style="margin-right:10px">登录</span> -->
        </head-top>
        <img :src="captchCodeImg" alt="" v-if="captchCodeImg" style="margin-top:10rem" @click="newcaptchCodeImg"/>
    </div>
</template>

<script>
import HeadTop from '@/components/HeadTop'
import { getcaptchas } from '@/api/getData'
// 业务经验一: navigationBar的封装  history title 居中的 右边的操作buttons
export default {
    data () {
        return {
            captchCodeImg: '',
            codeNumber: null
        }
    },
    components: {
        HeadTop
    },
    methods: {
        async getCaptchaCode () {
            // api
            const res = await getcaptchas();
            console.log(res)
            this.captchCodeImg = res.code
        },
        newcaptchCodeImg() {
            this.getCaptchaCode()
        }
    },
    mounted () {
        this.getCaptchaCode()
    }
}
</script>

<style>

</style>

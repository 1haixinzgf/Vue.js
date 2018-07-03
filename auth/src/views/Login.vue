<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label>
                <input v-model="email" placeholder="email">
            </label>
            <label>
                <input type="password"  v-model="pass" placeholder="password">
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import auth from '@/auth'
export default {
    data() {
        return {
            email: '2725965600@qq.com',
            pass: ''
        }
    },
    methods: {
        // 验证(email, pass)  =>auth.login()
        // 失败，成功 localStorage。setItem('token', 1231)
        // 1.auth.login 传参，  callback
        // 2.跳转 this.$router
        login () {
            auth.login(this.email, this.pass , (loggedIn) => {
                if (loggedIn) {
                    this.$router.replace(this.$route.query.rediect  || '/')
                    // console.log(this.$route.query.rediect )
                }
            })
            console.log(localStorage.getItem('token'))
        }
        
    },
    mounted() {
        console.log(this.$router.query )
    }
    // login 已完成 再来login跳转到首页
    // loginout 退出 清空token
}
</script>

<style>

</style>

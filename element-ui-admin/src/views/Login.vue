<template>
    <div class="login-container">
        <el-form class="login-form"  ref="loginForm"  label-position='left' autoComplete="on"
            :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username"
                autoComplete="on" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password"
                 @keyup.enter.native = "handleLoginhand"></el-input>
            </el-form-item>
            <el-button type="primary" style="width: 100%; margin-bottom:30px"
             @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
        </el-form>
    </div>
</template>
<script>
import {isvalidUsername} from '@/utils/validate';
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback(new Error('请输入正确的用户名'))
            } else {
                callback();
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length <6 ) {
                callback(new Error('密码至少6位'))
            }else {
                callback();
            }
        }
        return {
            loading: false,
            loginRules: {
                username: [{
                    required: true,
                    trigger: 'blur',
                    validator: validateUsername,
                }],
                password: [{
                    required: true,
                    trigger: 'blur',
                    validator: validatePassword
                }]
            },
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        handleLogin() {
            // 要做什么？ 要验证数据
            this.$refs.loginForm.validate(valid => {
                if(valid) {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        },2000);
                    console.log('提交');
                } else {
                    console.log('error submit');
                    return false;
                }
            })  //$refs 找到表单
        }
    }
}
</script>

<style>

</style>

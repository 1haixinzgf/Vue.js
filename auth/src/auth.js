export default {
    loggedIn() {
        return localStorage.token
    },
    login(email, pass, cb) {
        setTimeout(() => {
            if(email == '2725965600@qq.com' && pass == 11111111) {
                const token = Math.random().toString(36).substring(7)
                localStorage.setItem('token', token)
                cb(true)
            } else {
                cb(false)
            }
        }, 500)
        
    },
}

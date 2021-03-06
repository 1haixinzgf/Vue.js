import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-type'] = 'application/json'

const $http = axios.create() // 返回一个axios的实例

export default {
  UserLogin (data) {
    // api 路由 后端express创建的 
    return $http.post('/api/register', data)
  },
  UserRegister (data) {
    return $http.post('/api/login', data)
  },
  getUser () {
    return $http.get('/api/user')
  },
  delUser (data) {
    return $http.post('/api/delUser', data)
  }
}

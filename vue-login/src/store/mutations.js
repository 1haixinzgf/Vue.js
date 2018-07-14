import * as types from './types'

export default {
  [types.LOGIN]: (state, data) => {
    state.token = data // data 登录时获取的token
    localStorage.setItem('token', data)
  },
  [types.LOGOUT]: (state) => {
    state.token = null
    localStorage.removeItem('token')
  },
  [types.USERNAME]: (state, data) => {
    state.userName = data
    localStorage.setItem('userName', data)
  }
}

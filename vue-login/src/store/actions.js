import * as types from './types'
// import api from '@/api'
// commit mutation,   actions 是api设计的路口  负责对外的请求
export default {
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout ({ commit }, data) {
    commit(types.LOGOUT, data)
  },
  UserName ({ commit }, data) {
    commit(types.USERNAME, data)
  }
}

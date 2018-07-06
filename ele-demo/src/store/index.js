import Vuex from 'vuex'
import Vue from 'vue';
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// lbs应用
const state =  {
    latitude: '',
    longitude: '',
    cartList: {},
    userInfo: null,
    shopId: null,
    products: [],
    shopDetail: null
}

// 一个项目中只会有一个状态树
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
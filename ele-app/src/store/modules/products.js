import shop from '../../api/shop'


// Store 里一间库房  modules
// 搬运 actions 动作
// state 状态数据
// getters  获取状态的get方法
// mutations 改变数据  数据的改变记录


const state = {
    all: [],
}

const getters = {
    
}

const actions = {//不能直接改变state的数据
    getAllProducts ( {commit} ) {
        // console.log(1)
        shop.getProducts((products) => {
            // console.log(2)
             commit('setProdcuts', products)
             console.log(products)
        })
    }
    
}

const mutations = {
    setProdcuts (state, products) {
        // console.log(3)
        state.all = products
    },
    decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id);
        product.inventory--;
       
    }
}//只有mutations 才能改变state的数据

export default {
    state,//数据
    getters,
    actions,//搬运工
    mutations
}
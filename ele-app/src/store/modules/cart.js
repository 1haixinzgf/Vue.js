const state = {
    items: [],
    checkoutStatus: null,
}

//对state的计算或者处理
// vuex store 一棵树，树根，然后找到products.all，共享数据
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id);
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: quantity*product.price
            }
        })
    },
    cartTotalPrice: (state,getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity*product.price
        },0)
    }
}
const actions = {
    addProductToCart({ state, commit }, product) {
        // console.log(product)
        // 是否已经在购物车里
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('decrementProductInventory', { id: product.id })
        }
    }
}

//能改变state里面的状态
const mutations = {
    pushProductToCart(state, { id }) {//{id}是{ id: product.id }结构的
        state.items.push({
            id: id,
            quantity: 1
        })
    },
    // incrementItemQuantity(state, { id } ) {
    //     const cartItem = state.items.find(item => item.id === id)
    //     cartItem.quantity ++
    // },
    incrementItemQuantity(state, cartItem) {
        // const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity ++
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
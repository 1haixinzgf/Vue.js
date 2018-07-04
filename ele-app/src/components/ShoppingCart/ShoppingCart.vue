<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-if="!products.length"><i>你个穷逼，啥也没有</i></p>
        <ul v-else>
            <li v-for="product in products" :key="product.id">{{ product.title }}--{{ product.price | currency }}x{{ product.quantity }}</li>
            <span>Total:{{total | currency}}</span>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState({
            //读取状态 map去匹配
                items: state => state.cart.items,
                checkoutStatus: state => state.cart.checkoutStatus
            }),
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    }
}
</script>

<style>

</style>

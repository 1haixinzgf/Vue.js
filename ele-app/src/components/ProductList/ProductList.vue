<template>
    <ul>
        <li v-for="(product, index) in products" :key="index">
            {{ product.title }} - {{ product.price | currency }} - {{product.inventory}}
            <br>
            <button @click="addProductToCart(product)" :disabled="!product.inventory" >
                Add to card
            </button>
        </li>
    </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: mapState({
        //读取状态 map去匹配
            products: state => state.products.all
        }),
    methods: mapActions([
        'addProductToCart'
    ]),
    created () {
        this.$store.dispatch('getAllProducts')
    }
}
</script>

<style>

</style>

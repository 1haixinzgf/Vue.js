<template>
    <div>msite</div>
</template>

<script>
import { cityGuess } from '@/api/getData'
export default {
    data () {
        return{
            geohash: ''
        }
    },
    async beforeMount () {
        // /city/25?a=1  25是params查询参数url的一部分   ？之后是query是查询字符串对查询条件的补充
        if(this.$route.query.geohash) {
            this.geohash = this.$route.query.geohash
            console.log(this.geohash)
        } else {
           const data = await cityGuess();
           console.log(data)
           this.geohash = `${data.latitude},${data.longitude}`
        }
    }
}
</script>

<style>

</style>

<template>
    <div>Dashboard</div>
</template>

<script>
export default {
     mounted() {
         setTimeout(() =>{
             this.$router.replace('/')
         },2000)
        console.log(this.$router)
    }
}
</script>

<style>

</style>

<template>
    <div @click="logout">logout</div>
</template>

<script>
export default {
    methods: {
        logout() {console.log(localStorage.getItem('token'))
            localStorage.removeItem('token');
            
        }
    }
}
</script>

<style>

</style>

<template>
    <div>
        <comment-list v-for="(item,index) in list" :key="index" :content="item"></comment-list>
        <div v-if="list.length==0" class="empty-msg">当前没有评论</div>
    </div>
</template>

<script>
import CommentList from './CommentList'
export default {
    props: {
        list: {
            type: Array
        }
    },
    components: {
        CommentList
    }
}
</script>

<style>

</style>

<template>
    <div>
        <comment-form @addComment="addComment">
        </comment-form>
        <comment-lists :list="list">
        </comment-lists>
        <pagenation :totalCount="totalCount" :currentPage="currentPage" :pagesize="pagesize" @turnPage="turnPage"></pagenation>
    </div>
</template>

<script>
import CommentForm from './CommentForm';
import CommentLists from './CommentLists';
import Pagenation from './Pagenation';
export default {
    data() {
        return {
            // totaldata 所有的数据 => 当前页面的评论 list
            list: [],
            // Pagenation无法独立
            pagesize: 3,
            totalData: [],
            totalCount:0,
            currentPage: 1
        }
    },
    methods: {
        addComment(msg) {       
            this.totalData.unshift({'text': msg});
            this.totalCount = this.totalData.length;
            if (this.totalCount < this.pagesize) {
            this.list = this.totalData;
            } 
            else {
            this.list = this.totalData.slice(0, this.pagesize);             
            }
            this.currentPage = 1;
        },
        turnPage(curr) {
            this.currentPage = curr;
            let num = this.pagesize*curr  
            this.list = this.totalData.slice(num - this.pagesize,num);
        }
    },
    components: {
        CommentForm,
        CommentLists,
        Pagenation,
    }
}
</script>

<style>

</style>

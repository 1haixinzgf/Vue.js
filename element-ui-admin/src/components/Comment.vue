<template>
    <div>
        <comment-form @addComment="addComment">
        </comment-form>
        <comment-lists :list="list">
        </comment-lists>
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
            this.list.reverse();
            this.totalData.push({'text': msg});
            this.totalCount = this.totalData.length;
            if (this.totalCount < this.pagesize) {
            this.list = this.totalData;
            } 
            else {
            this.list = this.totalData.slice(this.totalCount - this.pagesize);             
            }
            this.currentPage = 1;
            this.list.reverse();
        },
        turnPage(curr) {
            this.totalData = this.totalData.reverse()
            this.currentPage = curr;
            let num = 3*curr
            if(this.totalCount-3*curr > 0) {
                this.list = this.totalData.slice(num - 3,num);
            } else {
                this.list = this.totalData.slice(num - 3);
            }
            this.totalData = this.totalData.reverse()
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

<template>
    <div>
        <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment"/>
      <CommentList :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>
<script>
import AddComment from "./views/AddComment/index"
import CommentList from "./views/CommentList/index"
export default {
    data(){
        return {
            comments:[{
                id:0,
                username:"jack",
                content:"hello"
            },{
                id:1,
                username:"lucy",
                content:"hi"
            }
            ]
        }
    },
    methods:{
      addComment(comment){
        this.comments.unshift({...comment,id:Date.now()})
      },
      deleteComment(id){
        this.comments=this.comments.filter(comment=>{
          return comment.id!==id
        })
      }
    },
    components:{
         AddComment,
         CommentList
    }
}
</script>
<style>
</style>
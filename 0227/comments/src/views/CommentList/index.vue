<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-if="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment"/>
        </ul>
    </div>
</template>

<script>
import CommentItem from "../CommentItem/CommentItem"
export default {
  mounted(){
    this.$globalEventBus.$on("comment",this.addComment)
    this.$globalEventBus.$on("deleteComment",this.deleteComment)
  },
  methods:{
    addComment(comment){
      this.comments.unshift({...comment,id:Date.now()})
    },
    deleteComment(id){
      this.comments=this.comments.filter(item=>{
       return item.id!==id
      })
    }
  },
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
    components:{
        CommentItem
    } 
}
</script>
<style>
.reply {
  margin-top: 0px;
}
</style>
<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" v-model="comments.username" placeholder="用户名">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comments.content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="submitHandle">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>
<script>
export default {
  data(){
    return {
      comments:{
        username:"",
        content:""
      }
    }
  },
  methods:{
    submitHandle(){
      if((this.comments.username.trim()&&this.comments.content.trim())!=""){
        this.$globalEventBus.$emit("comment",this.comments)
        this.comments.username="",
        this.comments.content=""
      }else{
        alert("输入的用户名和内容都不能为空")
      }
     
    }
  }

}
</script>
<style></style>
<template>
  <div>
     <el-button type="primary" @click="tipHandle">主要按钮</el-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods:{
    tipHandle(){
      this.$message({
          //是否有自己关闭的 功能
          // showClose: true,
          message: '这是一条消息提示',
          type: 'success',
          //消息弹出停留时间（单位为ms），默认3s，可以自己设置
          duration:100000,
          //弹框距离浏览器顶部距离，默认为20px，最小也为20px
          offset:20,
          //iconClass	自定义图标的类名，会覆盖 type,给提示文字左边添加小图标，本身是绿色的√
          iconClass:"el-icon-user",
          //customClass是给弹框自定义一个类名，通过类名设置样式
          customClass:"hello"
        });
    }
  }
}
</script>

<style>
/* .hello{
  width:800px;
  height:200px;
  background-color: yellow;
} */
/* .style{
  background-color: yellow;
  width:20px;
  height:120px;
  border:1px solid red
} */
</style>

<template>
  <div>
    <div>Meaasge...</div>
    <!-- 通过路由参数传参，需要在路由表中定义路由参数,再在这里通过模板字符串传递所需的参数 -->
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- 拼接字符串形式来定义跳转的路径 -->
        <!-- <router-link
          :to="`/about/message/detail/${message.id}?name=laozhao&like=chishi`"
          >{{ message.title }}</router-link
        > -->
        <!-- 对象形式定义跳转的路径 -->
        <router-link
          :to="{
            name: 'detail',
            params: { id: message.id },
            query: {
              age: 12,
            },
          }"
          >{{message.title}}</router-link
        >
        <button @click="toDetailHandle(message.id)">点击跳转</button>
      </li>
    </ul>
    <div><router-view gender="女"></router-view></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        {
          id: 1,
          title: "001",
        },
        {
          id: 2,
          title: "002",
        },
      ],
    };
  },
  methods:{
    toDetailHandle(id){
      this.$router.history.replace(`/about/message/detail/${id}`)
      // this.$router.history.replace({name:"detail",params:{id}})
    }
  }
};
</script>

<style>
</style>
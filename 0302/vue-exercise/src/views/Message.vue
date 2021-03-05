<template>
  <div>
    <div>message老赵翻牌子</div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link :to="`/home/message/detail/${message.title}?name=laozhao&age=3`"
          >{{ message.title }}--{{ message.id }}</router-link
        > -->
         <router-link :to="{name:'detail',params:{title:message.title},query:{gender:'nv'}}"
          >{{ message.title }}--{{ message.id }}</router-link
        >
        <button @click="titleHandle(message.title)">点击{{message.title}}</button>
      </li>

    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "石榴姐" },
        { id: 2, title: "龅牙妹" },
      ];
    }, 500);
  },
  methods:{
    titleHandle(title){
      this.$router.history.replace({name:"detail",params:{title}})
    }
  }
};
</script>

<style>
</style>
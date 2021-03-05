<template>
  <div class="row">
    <p v-if="isShowText">请输入用户名</p>
    <p v-else-if="isloading">loading....</p>
    <div v-else class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      users: [],
      isShowText: true,
      isloading: false,
    };
  },
  mounted() {
    this.$globalEventBus.$on("searchName", this.searchNameHandle);
  },
  methods: {
    searchNameHandle(searchName) {
      if (searchName === "") {
        alert("输入的值不能为空");
        return;
      }
      this.isloading = true;
      this.isShowText = false;
      axios
      //如果使用代理服务器则使用相对路径即可
      //如果要写全部则使用客户端的地址
        .get(`/api/search/name?q=${searchName}`)
        .then((response) => {
          this.isloading = false;
          this.users = response.data.items.map((user) => {
            return {
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
              html_url: user.html_url,
            };
          });
        })
        .catch((error) => {
          if (error.message === "Network Message") {
            alert("网络连接失败");
          }
        });
    },
  },
};
</script>

<style>
</style>
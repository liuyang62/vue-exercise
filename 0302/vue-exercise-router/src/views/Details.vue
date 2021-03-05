<template>
  <div>
    <ul>
      <li v-for="(value, key) in detail" :key="key">{{ key }}---{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props:["name","id","like","gender"],
  data() {
    return {
      details: [
        { id: 1, title: "title1", content: "content1" },
        { id: 2, title: "title2", content: "content2" },
        { id: 3, title: "title3", content: "content3" },
      ],
      detail: {},
    };
  },
  mounted() {
    //     setTimeout(()=>{
    //         this.details=[
    //             {id:1,title:"title1",content:"content1"},
    //             {id:2,title:"title2",content:"content2"},
    //             {id:3,title:"title3",content:"content3"},
    //         ]
    //     },2000)
    //     const id=+this.$route.params.id
    //     this.detail=this.details.find(item=>{
    //         return id===item.id
    //     })
  },
  watch: {
    $route: {
      handler(value) {
        const id = +value.params.id;
        this.detail = this.details.find((item) => {
          return id === item.id;
        });
      //查询字符串传参数，通过this.$route.query.**获取传过来的参数
      //  const{name,like}=value.query
      //  console.log(name,like)
      //通过props给定义路由的文件添加props，在实例上则可以直接通过this.**获取到对应的参数
      // console.log(this.name,this.like)
      console.log(this.gender)
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>
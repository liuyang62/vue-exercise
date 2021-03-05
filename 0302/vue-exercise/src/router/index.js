import vue from "vue"
import vueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Message from "../views/Message.vue"
import News from "../views/News.vue"
import Details from "../views/Details.vue"
vue.use(vueRouter)
export default new vueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      children:[
        {
          path:"/home/message",
          component:Message,
          children:[
            {
              path:"/home/message/detail/:title",
              name:"detail",
              component:Details,
              props($route){
                return{
                  ...$route.query,
                  ...$route.params
                }
              }
            }
          ]
        },
        {
          path:"/home/news",
          component:News
        }
      ]
    },
    {
      path:"/about",
      component:About
    }
  ]
})
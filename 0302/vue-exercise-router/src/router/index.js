import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Message from "../views/Message.vue"
import News from "../views/News.vue"
import Details from "../views/Details.vue"
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/about",
            component:About,
            children:[
                {
                    path:"message",
                    component:Message,
                    children:[
                        {
                            //第一种方法：路由参数params传参方法
                            name:"detail",
                            path:"detail/:id",
                            component:Details,
                            props($route){
                                return {
                                    ...$route.params,
                                    ...$route.query
                                }
                            }
                        }
                       
                    ]
                },
                {
                    path:"news",
                    component:News
                }
            ]
        },
        {
            path:"",
            redirect:"/home"
        }
    ]
})
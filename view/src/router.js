import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import com1 from "./components/com1.vue";
import com2 from "./components/com2.vue";
import login from "./components/login.vue";
import musicList from "./components/musicList.vue";
import musicDetailList from "./components/musicDetailList.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/com1",
        component: com1
    },
    {
        path: "/com2",
        component: com2
    },
    {
        path:"/login",
        component: login
    },
    {
        path:"/musicDetailList",
        component: musicDetailList
    },
    {
        path: "/musicList",
        component: musicList,
    },
    {
        path: '/', 
        redirect: '/login' 
    }
]

let router =  new VueRouter({
    routes
})
export default router;
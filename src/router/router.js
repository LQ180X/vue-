import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Welcome from '../views/welcome/Welcome'
Vue.use(Router)// 引用路由
export default new Router({
    routes:[{
        path:'/login',
        name:'Login',
        component:Login
    },
        {
            path: '/',
            name: 'Home',
            component: Home,
            // 实现路由重定向,当访问home页面时,让其跳转到welcome页面
            redirect:{path:'welcome'},
            children:[
                {path:'welcome',
                name:'Welcome',
                component:Welcome
                }
            ]
    }]
})
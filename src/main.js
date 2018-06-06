import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './styles/reset.scss'
// 引入路由
import router from "./router/router.js"
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入store文件,整个应用程序中都会有store
import store from '@/store/store.js'

// 引用element-ui 
Vue.use(ElementUI)
Vue.config.productionTip = false

// 注册一个全局守卫,作用是在路由跳转前,对路由进行判断,防止为登陆的用户跳转到其他页面去

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('myToken')
  // 如果已经登陆,不干涉你,让你随便访问
    if(token) {
      next()
    } else {
      if(to.path!=='/login') {
        //如果没有登陆,但访问了其他需要登陆的页面,就让你条转到登陆页面
        next('/login')
      } else {
        // 如果进入到的时候登陆页面,则让你继续操作
        next()
      }
    }
})
new Vue({
  components:{App},
  // 注入路由
  router,
  // 注入store
  store,
  render: h => h(App),
  // 注入路由
}).$mount('#app')

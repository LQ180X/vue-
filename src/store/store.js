// 关于vuex的使用,非常重要,里面包含的内容有mutations函数,
// actions异步操作的函数
// getters计算属性函数
//store里包含的东西有state(数据),actions,mutations

// 引入相关文件
import Vue from "vue"
import Vuex from "vuex"

// 通过Vue.use应用文件
Vue.use(Vuex)
// 创建vuex里的数据(state),state是一个对象


// 要求,实现当点击登录的时候,将用户名显示在home页面的右上角
const state = {
    // 直接获取localStorage里的数据,将其赋值给username
    username: localStorage.getItem('username')||"" //有数据就返回数据,没有数据就返回字符串
}
// mutations专门操作state里的数据
const mutations = {
    setUserName(state,username) {
        state.username = username
       
        
    }
}
// actions操作mutations
const actions = {}
// 计算属性,与computed具有相同的功能
const getters = {
    // username:(state) => localStorage.getItem('usename')
}
// 将处理的的东西暴露出去
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
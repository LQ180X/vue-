import axios from 'axios'
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// 添加请求拦截器
 let token = localStorage.getItem('myToken')
axios.interceptors.request.use(function (config) {
    //将token给到一个前后台约定好的key中,作为请求发送 
    if (token) {
        // 此处的config是一个对象,Authorizatin=token由接口提供
        config.headers['Authorization'] = token
    }
    return config;
}, 
    function (error) {
        return Promise.reject(error);
})



// 封装ajax代码
export const checkUser = function(params) {
    return axios.post('/login',params).then(function(res){
        return res.data
    })
}


// 获取用户列表
export const getUserList = params=>{
    return axios.get('users',params).then(res=>res.data)
}
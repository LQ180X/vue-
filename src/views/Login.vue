<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="form" class="form">
            <el-form-item>
                <img src="../assets/avatar.jpg" class="login-img">
            </el-form-item>
            <el-form-item prop="username">
                <el-input v-model="form.username" prefix-icon="el-icon-phone-outline" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password" prefix-icon="el-icon-view" placeholder="密码"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="loginSubmit('form')" :plain="true" class="btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {checkUser} from '@/api/index.js'
    export default {
        data() {
            return {
                form: {
                username: '',
                password:'',
                ruleForm:''
                },
                rules: {
                    username:[{ required: true, message: '请输入用户名', trigger: 'blur' }],
                    password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
                }
            }
        },    
        methods: {
            
            loginSubmit(formName) {
                // 实现点击按钮时判断用户是输入用户名和密码,判断用是否输入用户名和密码,如果没有输入,则将提示信息显示出来
        //实现当点击登陆按钮得时候,将数据提交到后台并判断用户输入得登陆名与密码是否正确,用户和密码正确,则跳转值首页                
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!')
                        checkUser(this.form).then(res=>{
                            console.log(res);
                            console.log(res.meta.status);
                            // 如果跳转成功,将token保存在localStorage里面
                            if(res.meta.status===200){
                                
                                this.$message(res.meta.msg),                    
                                    // 编程式导航
                                    this.$router.push('/')
                                    localStorage.setItem('myToken',res.data.token)
                            } else {
                                 this.$message(res.meta.msg)
                            }
                        })
                    } else {
                    console.log('error submit!!')
                    return false
                    }
                })
            }
        }   
           
    }
</script>
<style lang="scss" scoped>
    .login{
        width:100%;
        height: 100%;
        background: #2f4050;
        position: fixed;
   .form{
        width: 400px;
        padding: 0px 40px 15px 40px;
        margin: 200px auto;
        background: #fff;
    .login-img{
        position: relative;
        left: 50%;
        width: 120px;
        height: 120px;
        margin-left: -60px;
        margin-top: -60px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 10px solid #fff;
        box-shadow: 0 1px 5px #ccc;
        overflow: hidden;
    }
    .btn{
      width:100%;
    }
  }
}
</style>




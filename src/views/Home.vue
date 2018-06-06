<template>
  <div class="home">
     <el-container>
       <!-- 侧边栏 -->
            <el-aside width="200px">
                <div class="logo"></div>
                <el-col :span="24">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    :collapse="isCollapse"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item class="el-icon-menu" index="1-1">用户列表</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item class="el-icon-menu" index="2-1">选项1</el-menu-item>
                        <el-menu-item class="el-icon-menu" index="2-2">选项2</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item class="el-icon-menu" index="3-1">选项1</el-menu-item>
                        <el-menu-item class="el-icon-menu" index="3-2">选项2</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item class="el-icon-menu" index="4-1">选项1</el-menu-item>
                        <el-menu-item class="el-icon-menu" index="4-2">选项2</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item class="el-icon-menu" index="5-1">选项1</el-menu-item>
                        <el-menu-item class="el-icon-menu" index="5-2">选项2</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
                </el-col>
            </el-aside>
      
            <el-container>
                <!-- header -->
                <el-header>
                    <i class="el-icon-circle-plus-outline toggle-btn" @click=toggleClapse></i>
                    <div class="system-title">电商后台管理系统</div>
                    <span class="welcome">
                      您好,{{$store.state.username}}
                    </span>
                    <el-button type="text" @click="logout">退出</el-button>
                </el-header>
                <!-- 中间内容区域 -->
                <el-main>
                  <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>
<script>
 import {getUserList} from '../api/index'
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  mounted(){
    let params = {params:{query:'',pagenum:1,pagesize:1}}
    getUserList(params).then(res=>{
      
    })
  },
  methods: {
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleClapse(){
        this.isCollapse =!this.isCollapse
      },
      // 实现点击退出按钮,退出home页面,并清空localstorge里的token数据,跳转到登录页面
      logout() {
        // 运用编程式导航进行跳转
        this.$router.push('/login')
        localStorage.removeItem('myToken');
      }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  background-color: #e5e5e5;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border-right: 0;
.el-icon-menu:before {
    margin-right: 10px;
}
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .logo {
    height: 60px;
    background: url(../assets/logo.png);
    background-size: cover;
    background-color: white;
  }
  .toggle-btn {
    padding: 0 10px;
    margin-left: -20px;
    font-size: 36px;
    line-height: 60px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #00635a;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .welcome {
    color: white;
  }
}
</style>
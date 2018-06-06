<template>
  <div class="home">
        <el-container>
        <el-aside width="200px">
            <div class="logo">
            </div>
        </el-aside>
        <el-container>
            <el-header><div class="system-title">电商后台管理系统</div></el-header>
            <el-main>Main</el-main>
        </el-container>
        </el-container>
  </div>
</template>
<script>
import { getUserList } from "../api/index.js";
export default {
  data() {
    return {
      
    };
  },
  mounted(){
    let params = {params:{query:'',pagenum:1,pagesize:1}}
    getUserList(params).then(res=>{
      
    })
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
<template>
  <el-container>
    <el-aside>
      <div class="layout-aside">
        <div class="left-logo">
          <img src="../../assets/img/logo_admin.png" alt />
        </div>
        <el-menu background-color="#323745" text-color="#adafb5" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item>发布文章</el-menu-item>
            <el-menu-item>内容列表</el-menu-item>
            <el-menu-item>评论管理</el-menu-item>
            <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>粉丝管理</span>
            </template>
            <el-menu-item>图文数据</el-menu-item>
            <el-menu-item>粉丝概况</el-menu-item>
            <el-menu-item>粉丝列表</el-menu-item>
            <el-menu-item>粉丝画像</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">账户信息</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less">
.layout-aside {
  height: 100vh;
  width: 200px;
  background-color: #323745;
  .left-logo {
    background-color: #2e2f32;
    text-align: center;
    padding: 15px 0;
    img {
      height: 30px;
    }
  }
}
</style>

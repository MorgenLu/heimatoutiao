<template>
  <el-container>
    <el-aside style="width:200px;height:100vh;background-color:#323745">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header style="padding:0">
        <layout-header></layout-header>
        <el-main style="margin:0;padding:0">
          <router-view></router-view>
        </el-main>
      </el-header>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less">
</style>

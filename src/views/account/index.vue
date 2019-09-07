<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">用户信息</template>
    </bread-crumb>
    <el-form class="account-center">
      <el-form-item label="头像" class="account-img">
        <el-upload class="avatar-uploader" action>
          <img class="avatar" />
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="简  介">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="邮  箱">
        <el-input style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input style="width:300px" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.account-center {
  margin-left: 200px;
  .avatar {
    border-radius: 50%;
    border: 1px solid #cccccc;
    width: 90px;
    height: 90px;
    display: block;
  }
}
</style>

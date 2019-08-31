<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:20px">
        <el-form-item>
          <el-input placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="验证码" style="width:280px;float:left"></el-input>
          <el-button style="float:right" type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.login {
  background: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 450px;
    height: 330px;
    text-align: center;
    img {
      width: 200px;
    }
  }
}
</style>

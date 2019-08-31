<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:20px" :model="formData" ref="formData" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="formData.mobile" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="formData.code" placeholder="验证码" style="width:280px;float:left"></el-input>
          <el-button style="float:right" type="primary">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formData.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack()
      } else {
        callBack(new Error('您必须无条件同意被坑'))
      }
    }
    return {
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式不对'
          }
        ],
        code: [
          {
            pattern: /^\d{6}$/,
            message: '请输入正确的验证码'
          },
          {
            required: true,
            message: '验证码不能为空'
          }
        ],
        check: [
          {
            validator
          }
        ]
      }
    }
  }
}
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

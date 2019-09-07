<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">用户信息</template>
    </bread-crumb>
    <el-form ref="userForm" :model="list" class="account-center" :rules="userRules">
      <!-- <el-form-item label="头像" class="account-img" v-model="list.photo">
        <el-upload class="avatar-uploader" action>
          <img class="avatar" :src="list.photo" />
        </el-upload>
      </el-form-item>-->
      <el-form-item label="用户名" prop="name">
        <el-input v-model="list.name" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="intro">
        <el-input v-model="list.intro" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="list.email" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="list.mobile" style="width:300px" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveUserInfo">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: {
        name: '',
        photo: '',
        intro: '',
        email: '',
        mobile: ''
      },
      userRules: {
        name: [
          {
            required: true,
            message: '用户名不能为空'
          },
          {
            min: 2,
            max: 10,
            message: '用户名长度必须为2-10位'
          }
        ],
        email: [
          {
            pattern: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
            message: '邮箱格式不正确'
          },
          {
            required: true,
            message: '用户名不能为空'
          }
        ]
      }
    }
  },
  methods: {
    getAccountProfile () {
      this.$axios({
        url: '/user/profile'
      }).then(res => {
        this.list = res.data
      })
    },
    saveUserInfo () {
      this.$refs.userForm.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/user/profile',
            method: 'patch',
            data: this.list
          }).then(() => {
            this.$message({
              type: 'success',
              message: '恭喜您保存用户信息成功'
            })
          })
        }
      })
    }
  },
  created () {
    this.getAccountProfile()
  }
}
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

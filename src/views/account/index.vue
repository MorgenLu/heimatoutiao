<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">用户信息</template>
    </bread-crumb>
    <el-form :model="list" class="account-center">
      <!-- <el-form-item label="头像" class="account-img" v-model="list.photo">
        <el-upload class="avatar-uploader" action>
          <img class="avatar" :src="list.photo" />
        </el-upload>
      </el-form-item>-->
      <el-form-item label="用户名">
        <el-input v-model="list.name" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="list.intro" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="list.email" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="list.mobile" style="width:300px" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
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

<template>
  <el-row type="flex" class="layout-header" justify="space-between">
    <el-col class="left" :span="6">
      <i class="el-icon-s-fold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('user-token')}`
        }
      })
        .then(res => {
          console.log(res)
          this.userInfo = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less">
.layout-header {
  padding: 0;
  margin: 0;
  .left {
    display: flex;
    align-items: center;
    .icon {
      font-size: 22px;
      margin-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      margin-right: 10px;
      width: 40px;
    }
  }
}
</style>

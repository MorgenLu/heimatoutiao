<template>
  <el-card class="box-card">
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="date" label="标题" width="700px"></el-table-column>
      <el-table-column prop="name" label="评论状态"></el-table-column>
      <el-table-column prop="address" label="总评论数"></el-table-column>
      <el-table-column prop="name" label="粉丝评论数"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.box-card {
  margin-top: 20px;
}
</style>

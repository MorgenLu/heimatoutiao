<template>
  <el-card class="publish">
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <el-form label-width="80px" class="publish_form">
      <el-form-item label="标题">
        <el-input style="width:600px"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" style="width:800px" :rows="10"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group>
          <el-radio label="单图"></el-radio>
          <el-radio label="三图"></el-radio>
          <el-radio label="无图"></el-radio>
          <el-radio label="自动"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
        <el-select v-model="formData.channel_id">
          <el-option :label="item.name" :value="item.id" v-for="item in channels" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">发表</el-button>
        <el-button>存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        channel_id: null
      }
    }
  },
  methods: {
    getPublishChannel () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        console.log(res)
        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getPublishChannel()
  }
}
</script>

<style lang="less" scoped>
.publish {
  .publish_form {
    margin: 50px 0 0 200px;
  }
}
</style>

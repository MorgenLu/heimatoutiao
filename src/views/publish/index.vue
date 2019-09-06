<template>
  <el-card class="publish">
    <bread-crumb slot="header">
      <template slot="title">发表文章</template>
    </bread-crumb>
    <el-form
      label-width="80px"
      class="publish_form"
      :model="formData"
      :rules="publishRules"
      ref="publishForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" style="width:600px"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="center">
        <el-input v-model="formData.content" type="textarea" style="width:800px" :rows="10"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id">
          <el-option :label="item.name" :value="item.id" v-for="item in channels" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publish">发表</el-button>
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
        channel_id: null,
        title: '',
        content: '',
        cover: {
          type: 0,
          images: []
        }
      },
      publishRules: {
        title: [{ required: true, message: '标题不能为空' }],
        content: [{ required: true, message: '标题不能为空' }],
        channel_id: [{ required: true, message: '标题不能为空' }]
      }
    }
  },
  methods: {
    getPublish (articleId) {
      this.$axios({
        url: `/articles/${articleId}`
      }).then(res => {
        this.formData = res.data
      })
    },
    publish () {
      this.$refs.publishForm.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/articles',
            method: 'post',
            params: {
              draft: false
            },
            data: this.formData
          }).then(() => {
            this.$router.push('/home/articles')
          })
        }
      })
    },
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
    let { articleId } = this.$route.params
    if (articleId) {
      this.getPublish(articleId)
    }
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

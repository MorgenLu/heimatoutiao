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
      <el-form-item label="内容" prop="content">
        <quill-editor
          v-model="formData.content"
          style="width:800px;height:200px;margin-bottom:110px"
        ></quill-editor>
      </el-form-item>
      <el-form-item label="封面" prop="cover">
        <el-radio-group v-model="formData.cover.type" @change="changeCoverType">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <cover-image :images="formData.cover.images" @onCoverImage="receiveImg"></cover-image>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
        <el-select v-model="formData.channel_id">
          <el-option :label="item.name" :value="item.id" v-for="item in channels" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publish(false)">发表</el-button>
        <el-button @click="publish(true)">存入草稿</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    let func = function (rule, value, callBack) {
      if (value.type === 1) {
        if (value.images.length === 1 && value.images[0]) {
          callBack()
        } else {
          callBack(new Error('对不起,您未设置单图的封面'))
        }
      } else if (value.type === 3) {
        if (
          value.images.length === 3 &&
          value.images[0] &&
          value.images[1] &&
          value.images[2]
        ) {
          callBack()
        } else {
          callBack(new Error('对不起,您未设置全三图的封面'))
        }
      } else {
        if (value.images.length > 0) {
          callBack(new Error('对不起,您的封面设置有误'))
        } else {
          callBack()
        }
      }
    }
    return {
      channels: [],
      draft: false,
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
        channel_id: [{ required: true, message: '标题不能为空' }],
        cover: [
          {
            validator: func
          }
        ]
      }
    }
  },
  methods: {
    // 接收cover-image的数据url和index
    receiveImg (url, index) {
      this.formData.cover.images = this.formData.cover.images.map(function (
        item,
        i
      ) {
        if (i === index) {
          return url
        }
        return item
      })
    },
    // 切换封面类型  根据当前类型决定 images结构
    changeCoverType () {
      if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['']
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', '']
      } else {
        this.formData.cover.images = []
      }
    },
    // 获取点击修改跳过来后的内容
    getPublish (articleId) {
      this.$axios({
        url: `/articles/${articleId}`
      }).then(res => {
        this.formData = res.data
      })
    },
    // 发布文章
    publish (draft) {
      this.$refs.publishForm.validate(isOk => {
        let { articleId } = this.$route.params
        if (isOk) {
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: {
              draft
            },
            data: this.formData
          }).then(() => {
            this.$router.push('/home/articles')
          })
        }
      })
    },
    // 获取频道
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

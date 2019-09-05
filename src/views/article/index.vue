<template>
  <el-card class="article">
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <!-- 搜索工具栏 -->
    <el-form>
      <el-form-item label="文章状态">
        <el-radio-group @change="changeCondition" v-model="searchForm.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select @change="changeCondition" v-model="searchForm.channel_id">
          <el-option v-for="item in clannels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <div class="block">
          <el-date-picker
            @change="changeCondition"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="searchForm.dateRange"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
      </el-form-item>
    </el-form>
    {{searchForm}}
    <div>共找到x条符合条件的内容</div>
    <div class="article-list">
      <div class="article_center" v-for="(item,index) in list" :key="index">
        <div class="left">
          <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt />
          <div class="left_center">
            <span>{{item.title}}</span>
            <el-tag type="success">{{item.status | statusText}}</el-tag>
            <span>{{item.pubdate}}</span>
          </div>
        </div>
        <div class="right">
          <span>
            <i class="el-icon-edit"></i>修改
          </span>
          <span>
            <i class="el-icon-edit"></i>删除
          </span>
        </div>
      </div>
    </div>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        @current-change="changePage"
        layout="prev, pager, next"
        :total="page.total"
        :current-page="page.page"
        :page-size="page.pageSize"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      defaultImg: require('../../assets/img/404.png'),
      searchForm: {
        status: 5,
        channel_id: null,
        dateRange: []
      },
      clannels: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.page = newPage
      this.getConditionArticle()
    },
    getclannels () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.clannels = res.data.channels
      })
    },
    // 改变搜索条件时
    changeCondition () {
      this.getConditionArticle()
    },
    // 根据条件查询数据
    getConditionArticle () {
      let params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status,
        channel_id: this.searchForm.channel_id,
        begin_pubdate:
          this.searchForm.dateRange.length > 0
            ? this.searchForm.dateRange[0]
            : null,
        end_pubdate:
          this.searchForm.dateRange.length > 1
            ? this.searchForm.dateRange[1]
            : null,
        page: this.page.page,
        per_page: this.page.pageSize
      }
      this.getArticles(params)
    },
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getArticles()
    this.getclannels()
  },
  filters: {
    statusText: function (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  .article_center {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      img {
        width: 180px;
        height: 100px;
        border-radius: 4px;
      }
      .left_center {
        height: 100px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-around;
      }
    }
    .right {
      float: right;
    }
  }
}
</style>

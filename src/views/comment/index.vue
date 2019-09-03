<template>
  <el-card class="box-card">
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="title" label="标题" width="700px"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <el-button type="text">修改评论</el-button>
          <el-button
            @click="openOrClose(obj.row)"
            type="text"
            :style="{color: obj.row.comment_status ? '#E6A23C' : '#409EFF'}"
          >{{obj.row.comment_status ? '关闭评论':'开启评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
        :current-page="page.page"
        :page-size="page.pageSize"
        @current-change="changePage"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        page: 1, // 当前页码
        pageSize: 10, // 当前每页条数
        total: 0 // 总条数
      }
    }
  },

  methods: {
    changePage (newPage) {
      this.page.page = newPage
      this.getComments()
    },
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${mess}评论?`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        }).then(res => {
          this.getComments()
        })
      })
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.list = res.data.results
        // // this.page.total = result.data.total_count;
        this.page.total = res.data.total_count
        console.log(res)
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
.box-card {
  margin-top: 20px;
}
</style>

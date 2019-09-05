<template>
  <el-card class="article">
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <!-- 搜索工具栏 -->
    <el-form>
      <el-form-item label="文章状态">
        <el-radio-group v-model="searchForm">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select v-model="searchForm.region"></el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </el-form-item>
    </el-form>
    <div>共找到x条符合条件的内容</div>
    <div class="article_center">
      <div class="left">
        <img src="../../assets/img/404.png" alt />
        <div class="left_center">
          <span>标题</span>
          <el-tag type="success">标签二</el-tag>
          <span>2019-09-04 22:50:51</span>
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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {}
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

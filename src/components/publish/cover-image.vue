<template>
  <div class="cover-image">
    <div @click="showDialog(index)" class="image-item" v-for="(item,index) in images" :key="index">
      <img :src="item ? item : defaultImg" alt />
    </div>
    <el-dialog @close="hideDialog" :visible="dialogVisbile" width="1000px">
      <select-image @onSelectImg="receiveImg"></select-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['images'],
  data () {
    return {
      dialogVisbile: false,
      selectIndex: -1,
      defaultImg: require('../../assets/img/pic_bg.png')
    }
  },
  methods: {
    // 继续向publish传值
    receiveImg (url) {
      this.$emit('onCoverImage', url, this.selectIndex)
      this.hideDialog()
    },
    hideDialog () {
      this.dialogVisbile = false
    },
    showDialog (index) {
      this.dialogVisbile = true
      this.selectIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image {
  display: flex;
  .image-item {
    width: 200px;
    height: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

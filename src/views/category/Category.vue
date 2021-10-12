<template>
  <div>
    <!-- 头部 -->
    <nav-bar class="category-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 左边导航 -->
    <category-side-bar :categoryList="categoryList" @handleCategoryClick="handleCategoryClick"/>
    <!-- 右边商品分类详情 -->
    <scroll class="content" :probe-type="0" :pull-up-load="false" ref="scroll" :scrollheight="'calc(100vh - 93px)'">
      <category-side-content :subCategoryList="subCategoryList"/>
    </scroll>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CategorySideBar from './childComps/CategorySideBar.vue'
import CategorySideContent from './childComps/CategorySideContent.vue'

import Scroll from 'components/common/scroll/Scroll'
import {getAllCategory, getSubCategory} from 'network/category'
import {itemListenerMixin} from 'common/mixin'
export default {
  name: 'Category',
  mixins: [itemListenerMixin],
  components: {
    NavBar,
    CategorySideBar,
    CategorySideContent,
    Scroll
  },
  methods: {
    getSubCategory(key) {
      getSubCategory(key).then(res => {
        this.subCategoryList = res.data.list;
      })
    },
    handleCategoryClick(maitKey){
      this.getSubCategory(maitKey);
    },
  },
  created() {
    getAllCategory().then(res=> {
      this.categoryList = res.data.category.list;
      this.subCategoryMaitKey = res.data.category.list[0].maitKey;
      return this.subCategoryMaitKey;
    }).then(key=>{
      this.getSubCategory(key);
    })
  },
  data() {
    return {
      categoryList: [],
      subCategoryMaitKey: '',
      subCategoryList: [],
    }
  },
  deactivated() {
    // 取消首页事件总线的监听，与首页商品图片加载分开
    this.$bus.$off('itemImgLoad', this.imgItemListener);
    },
}
</script>
<style scoped>
  .category-bar {
    color: #fff;
    background-color: var(--color-tint);
    position: relative;
    z-index: 9;
  }
  .content {
    position: fixed;
    top: 44px;
    right: 0;
    width: 70%;
  }
</style>

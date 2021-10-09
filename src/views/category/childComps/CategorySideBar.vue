<template>
  <div class="sidebar">
    <div v-for="(item, index) in categoryList" :key="index">
      <div class="item-title" @click="itemClick(index, item)" :class="{itemSelected: currentIndex === index}">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategorySideBar',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    },
    // currentIndex: {
    //   type: Number,
    //   default: 0
    // }
  },
  methods: {
    itemClick(index, item) {
      this.currentIndex = index
      this.maitKey = item.maitKey
      this.$emit('handleCategoryClick', item.maitKey);
    },
  },
  data() {
    return {
      currentIndex: 0,
      maitKey: ''
    }
  },
}
</script>

<style scoped>
  .sidebar {
    font-size: 18px;
    text-align: center;  
    line-height: 36px;
    color: #000;
  }
  .item-title {
    height: calc((100vh - 93px) / 16);
    background: #f6f6f6;
    width: 30%;
    border-left: 4px solid #f6f6f6;
    
  }
  .itemSelected {
    background-color: #ffffff;
    border-left: 4px solid var(--color-tint);
  }
</style>

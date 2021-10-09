<template>
  <div class="DetailNavBar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <span v-for="(item, index) in titles" :key="index" class="itemspan" :class="{isitemcolor:currentitem === index}" @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentitem: 0
    }
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    itemClick(index) {
      this.currentitem = index
      this.$emit('navItemClick', this.currentitem);
    }
  },
}
</script>

<style scoped>
  .DetailNavBar {
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  .center {
    text-align: center;
    font-size: 15px;
  }
  .itemspan {
    padding: 0 10px;
  }
  .left img {
    position: relative;
    top: 7px;
    left: 12px;
  }
  .isitemcolor {
    color: var(--color-high-text);
  }
</style>>

<template>
<div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @currentIndex="currentIndex" class="tabControl" v-show="isShowTabControl" ref="tabControl1"/>
    <scroll  class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore" :scrollheight="'calc(100vh - 93px)'" >
      <home-swiper :banners="banners"  @SwiperImgLoad="SwiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature/>
      <tab-control :titles="['流行', '新款', '精选']" @currentIndex="currentIndex" ref="tabControl2"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
</div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/Featrue.vue'

import BackTop from 'components/content/backTop/BackTop'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import NavBar from 'components/common/navbar/NavBar'
import {debounce} from 'common/utils'
import {getHomeMultidata,getHomeGoods} from 'network/home'


export default {
  name: 'Home',
  components: {
    BackTop,
    Scroll,
    TabControl,
    GoodsList,
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list: []},
        'new': {page:0, list: []},
        'sell': {page:0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      isShowTabControl: false,
      TabControlTopY: 0,
      backY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
      
    // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
  },
  methods: {
    //事件监听的相关方法
    SwiperImgLoad() {
      this.TabControlTopY = this.$refs.tabControl2.$el.offsetTop - 40
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000

      this.isShowTabControl = (-position.y) > this.TabControlTopY
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    currentIndex(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //网络请求的相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
      
    })
  },
  activated() {
    //回到离开前的位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.backY, 0)
  },
  deactivated() {
    // 记录离开前的位置
    this.backY = this.$refs.scroll.scroll.y
  },
}
</script>

<style>
  #home {
    height: 100vh;
    padding-top: 44px;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 9;
  }
  .content {
    overflow: hidden;
    
  }
  .tabControl {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>

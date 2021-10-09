<template>
  <div class="zIndex">
    <detail-nav-bar @navItemClick="navItemClick" ref="navBar"/>
    <scroll class="content" :probe-type="3" :pull-up-load="false" ref="scroll" :scrollheight="'calc(100vh - 93px)'" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shops="shops"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-goods-params :goodsParams="goodsParams" ref="params"/>
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"/>
      <detail-recommend :detailRecommend="detailRecommend" ref="recommend"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTopClick"/>
    <detail-bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailRecommend from './childComps/DetailRecommend.vue'
import BackTop from 'components/content/backTop/BackTop'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import {backtopmixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import {getDetail, Goods, Shops, GoodsParam, getGoodsRecommend} from 'network/Detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailRecommend,
    BackTop,
    DetailBottomBar,
  },
  mixins: [backtopmixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      detailRecommend: [],
      detailListY: [0],
      currentitem: 0
    }
  },
  methods: {
    addCart() {
      //加入购物车
      const product = {} 
      product.image = this.topImages[0]
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      product.realPrice = this.goods.realPrice;

      this.$store.dispatch('addCart', product).then((res)=>{
        this.$toast.show(res, 2000);
        
      })
    },
    navItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailListY[index], 100)
    },
    contentScroll(position) {
      //回到顶部按钮的监听
      this.isShowBackTop = position.y < -1000
      //监听滚动到的位置
      let positionY = -position.y;
      let length = this.detailListY.length;
        //hack做法，
      for(let i = 0; i<length; i++){
        if(this.currentitem !== i && positionY>=this.detailListY[i] && positionY<this.detailListY[i+1]){
          this.currentitem = i;
          this.$refs.navBar.currentitem = i 
        }
      }
      

    },
    imageLoad() {
      //监听图片加载完成并获取到顶部的高度
      this.detailListY.push(this.$refs.params.$el.offsetTop -44,this.$refs.commentInfo.$el.offsetTop - 44 ,this.$refs.recommend.$el.offsetTop -44)
      //滚动hack做法，空间换时间
      this.detailListY.push(Number.MAX_VALUE)
      this.$refs.scroll.refresh()
    },  
    getDetails() {
      getDetail(this.iid).then(res => {
      const data = res.result
      //轮播图数据获取
      this.topImages = res.result.itemInfo.topImages
      //标题信息栏获取
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //商家信息栏获取
      this.shops = new Shops(data.shopInfo)
      //店铺信息获取
      this.detailInfo = data.detailInfo
      //商品参数获取
      this.goodsParams =new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //评论信息获取
      this.commentInfo = data.rate;
      //推荐商品信息
      getGoodsRecommend().then(res => {
        this.detailRecommend = res.data.list;
      })

    }).catch(err => {
      console.log(err);
    })
    }
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid
    //根据iid获得数据
    this.getDetails()
    
  },

}
</script>

<style scoped>
  .zIndex {
    height: 100vh;
    position: relative;
    z-index: 5;
  }
  .content {
    overflow: hidden;
  }
</style>
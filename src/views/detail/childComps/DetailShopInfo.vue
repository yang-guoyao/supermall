<template>
  <div class="DetailShopInfo">
    <div class="shop-nav">
      <img :src="shops.shopLogo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="detailshop">
      <div class="shop-left">
        <span>
          <div>{{sells()}}</div>
          <div>总销量</div>
        </span>
        <span>
          <div>{{shops.goods}}</div>
          <div>全部宝贝</div>
        </span>
      </div>
      <div class="shop-right">
        <table>
          <tr v-for="(item, index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :style="item.isBetter && {color:'#e75855'}">{{item.score}}</td>
            <td class="cost-per"><span :style="item.isBetter && {background:'#e75855'}">{{item.isBetter?"高":"低"}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom"><span class="btn">进店逛逛</span></div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    //判断总销量是否大于一万
    sells() {
      this.num = this.shops.sells / 10000;
      if (this.num > 1) {
        return this.num.toFixed(1) + '万'
      }
      else {
        return this.shops.sells
      }
    }
  },
  data() {
    return {
      num: 0
    }
  },
}
</script>

<style scoped>
  .DetailShopInfo {
    background-color: #fff;
    border-top: 4px solid rgba(100, 100, 100, .08);
  }
  .shop-nav {
    margin: 30px 10px 15px;
  }
  .shop-nav img {
    width: 60px;
    border-radius: 30px;
    border: 2px solid rgba(100, 100, 100, .1);
  }
  .shop-nav span {
    position: relative;
    top: -24px;
    left: 14px;
    font-size: 18px;
    color: #818181;
  }
  .detailshop {
    display: flex;
  }
  .shop-left {
    height: 55px;
    flex: 1;
    display: flex;
    margin: 15px 20px 15px;
    border-right: 1px solid rgba(100, 100, 100, .2);
  }
  .shop-left span {
    text-align: center;
    flex: 1;
  }
  .shop-left span :nth-child(1) {
    margin-bottom: 15px;
    font-size: 20px;
  }
  .shop-left span :nth-child(2) {
    font-size: 14px;
  }
  .shop-right {
    font-size: 14px;
    flex: 1;
  }
  .shop-right table {
    margin-left: 15px;
  }
  .score {
    padding: 5px 10px;
    color:#64a134;
  } 
  .cost-per span {
    color: #fff;
    background-color: #64a134;
  }
  .shop-bottom {
    text-align: center;
    padding: 20px 0 20px;
    border-bottom: 4px solid rgba(100, 100, 100, .08);
  }
  .btn {
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: rgba(100, 100, 100, .08);
    border-radius: 15px;
  }
</style>>

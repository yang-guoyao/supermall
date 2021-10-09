<template>
  <div class="bottombar">
    <div class="bottombar-left">
      <span>
        <i class="icon service"></i>
        <div>客服</div>
      </span>
      <span>
        <i class="icon shop"></i>
        <div>店铺</div>
      </span>
      <span @click="collectClick">
        <i class="icon" :class="{collect: iscurrent}"></i>
        <div>收藏</div>
      </span>
    </div>
    <div class="bottombar-right">
      <span class="cart" @click="addCart">加入购物车</span>
      <span class="buy">购买</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  methods: {
    collectClick() {
      this.iscurrent = !this.iscurrent
    },
    addCart() {
      this.$emit('addCart');
    }
  },
  data() {
    return {
      iscurrent: false
    }
  },
}
</script>

<style scoped>
  .bottombar { 
    height: 58px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    line-height: 58px;
    background-color: #fff;
  }
  .bottombar>div {
    flex: 1;
    display: flex;
  }
  .bottombar span {
    flex: 1;
  }
  .bottombar-left {
    font-size: 14px;
  }
  .bottombar-left .icon { 
    display: block;
    height: 22px;
    width: 22px;
    margin: 10px auto -16px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
  }
  .cart {
    color: #000;
    background-color: #ffe53f;
  }
  .buy {
    color: #fff;
    background-color: var(--color-tint);
  }
  .bottombar-left .service {
    background-position-y: -52px;
  }
  .bottombar-left .shop {
    background-position-y: -98px;
  }
  .bottombar .collect {
    background-position-y: -26px;
  }
</style>
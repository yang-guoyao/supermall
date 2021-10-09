<template>
  <div class="goods-item" @click="goodsitemClick">
    <img v-lazy="(goodsitem.show && goodsitem.show.img) || goodsitem.image " alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsitem: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsitemClick() {
      this.$router.push('/detail/' + this.goodsitem.iid)
    },
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    }
  },
}
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    width: 47%;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 13px;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 2px;
  }
   .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
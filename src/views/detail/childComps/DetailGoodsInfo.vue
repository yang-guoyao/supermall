<template>
  <div class="DetailGoodsInfo">
    <div :v-if="Object.keys(detailInfo).length !== 0">
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage && detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage" :key="item.key">
      <div v-for="(item, index) in item.list" :key="index" class="itemImg">
        <img v-lazy="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.imglength++
      if (this.imglength === Object.keys(this.detailInfo.detailImage[0].list).length) {
        this.$emit('imageLoad');
      }
      
    }
  },
  data() {
    return {
      imglength: 0
    }
  },
}
</script>

<style scoped>
  .DetailGoodsInfo {
    padding: 30px 10px 0;
    background-color: #fff;
  }
  .desc {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .info-key {
    font-weight: 600;
    margin-bottom: 10px;

  }
  .itemImg img {
    width: 100%;
  }
</style>
<template>
  <div class="DetailBaseInfo">
    <div class="title">{{goods.title}}</div>
    <div >
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns && goods.columns[0]}}</span>
      <span>{{goods.columns && goods.columns[1]}}</span>
      <span>{{goods.services && goods.services[ goods.services.length-1].name}}</span>
    </div>
    <div class="info-service" v-if="goods.services">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="icon" v-if="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      
    }
  },

}
</script>

<style scoped>
.DetailBaseInfo {
  background-color: #fff;
  padding: 0 10px;
}
  .title {
    padding: 15px 0;
    font-size: 18px;
    color: #000;
  }
  .n-price {
    font-size: 25px;
    color: var(--color-high-text);
    padding-right: 5px;
  }
  .o-price {
    font-size: 7px;
    text-decoration: line-through;
  }
  .discount {
    background-color: var(--color-high-text);
    color: #fff;
    padding: 3px;
    border-radius: 9px;
    font-size: 8px;
    top: -7px;
    right: -7px;
  }
  .columns {
    margin-top: 15px;
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
     font-size: 13px;
     line-height: 30px;
  }
  .info-service {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 30px;
  }
  .info-service-item img{
    position: relative;
    top: 3px;
    left: 0;
    width: 15px;
  }
</style>
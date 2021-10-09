<template>
  <div class="CartListItem" >
    <div class="item-check">
      <check-btn :ischeck="itemcartList.isSelected" @click.native="handleSelectGoods(itemcartList)"/>
    </div>
    <div class="item-img">
      <img :src="itemcartList.image" alt="">
    </div>
    <div class="item-right">
      <div class="item-title">{{itemcartList.title}}</div>
      <div class="item-desc">{{itemcartList.desc}}</div>
      <div>
        <span class="item-price">{{itemcartList.price}}</span>
        <span class="item-num">x{{itemcartList.num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkbtn/CheckBtn'

export default {
  name: 'CartListItem',
  components: {
    CheckBtn
  },
  props: {
    itemcartList: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    handleSelectGoods(item){
      item.isSelected = !item.isSelected;    
    }
  },
}
</script>

<style scoped>
  .CartListItem {
    width: 100%;
    display: flex;
    padding: 10px 0;
    height: 140px;
    border-bottom: 1px solid rgba(100, 100, 100, .2);
  }
  .item-check {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
  .item-img img {
    height: 120px;
    width: 80px;
    border-radius: 5px;
    margin-right: 14px;
  }
  .item-right {
    width: 65%;
  }
  .item-title,
  .item-desc {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item-title {
    color: #000;
    font-size: 18px;
  }
  .item-desc {
    font-size: 14px;
    margin: 15px 0 40px;
  }
  .item-price {
    font-size: 18px;
    color: #f26e2c;
  }
  .item-num {
    font-size: 18px;
    float: right;
  }
</style>


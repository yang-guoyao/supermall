<template>
  <div class="CartBottom">
    <div class="bottom-check">
      <check-btn :ischeck="isselectall" @click.native="isselectallclick"/>
      <span class="bottom-txt">全选</span>
    </div>
    <div class="bottom-price"> 
      <span>合计: ￥{{totalPrice}}</span>
    </div>
    <div class="bottom-btn" @click="bottomBtnClick">去付款({{iscounts}})</div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkbtn/CheckBtn'
import {mapGetters} from 'vuex'
export default {
  name: 'CartBottom',
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters(['cartList','cartListLength']),
    // 全选按钮
    isselectall() {
      if(this.cartListLength && this.cartList.every(item => item.isSelected)) {
        return true
      }
      return false
    },
    //总金额
    totalPrice() {
      return this.cartList.filter(item=>item.isSelected).reduce((prev,curr)=>{
        return prev + curr.realPrice * curr.num;
      }, 0).toFixed(2);
    },
    //选中的商品数量
    iscounts() {
      return this.cartList.filter(item => item.isSelected).reduce((prev,curr)=>{
        return prev + curr.num
      },0)
    }
  },
  methods: {
    isselectallclick () {
      if (this.isselectall) {
        this.cartList.map(item => item.isSelected = false)
      }else {
        this.cartList.map(item => item.isSelected = true)
      }
    },
    bottomBtnClick() {
      if (this.iscounts){
        this.$toast.show('去结算', 2000)
      }else{
        this.$toast.show('还未选择商品', 2000)
      }
    }
  },
}
</script>

<style scoped>
  .CartBottom {
    width: 100%;
    height: 40px;
    background-color: #eeeeee;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    font-size: 14px;
    z-index: 9;
    
  }
  .bottom-check {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .bottom-txt {
    margin-left: 5px;
  }
  .bottom-price {
    margin-left: 20px;
    line-height: 40px;
  }
  .bottom-btn {
    background-color: #ff5100;
    color: #fff;
    line-height: 40px;
    position: absolute;
    right: 0;
    width: 100px;
    text-align: center;
  }
</style>
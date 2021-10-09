<template>
  <div class="cartlist">
    <scroll  :probe-type="0" :pull-up-load="false"  :scrollheight="'calc(100vh - 133px)'"  ref="scroll">
      <div class="empty" v-if="!cartListLength">
        <p>购物车居然是空的 (°o°) ~@</p>
        <p>再忙，也记得买点什么犒赏自己</p>
        <button @click="tohome">去逛逛</button>
      </div>
      <div v-for="(item, index) in cartList" :key="index" >
       <cart-list-item :itemcartList="item" :cartListLength="cartListLength" />
      </div>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'CartList',
  components: {
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(['cartList','cartListLength'])
  },
  methods: {
    tohome() {
      this.$router.push('/home')
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },

}
</script>

<style scoped>
  .cartlist {
    overflow: hidden;
    position: relative;
  }
  .empty {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    color: #000;
    font-size: 14px;
    
  }
  .empty p {
    margin-bottom: 6px;
     white-space: nowrap;
  }
  .empty button {
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid rgba(100, 100, 100, .7);
    margin-top: 20px;
  }
</style>
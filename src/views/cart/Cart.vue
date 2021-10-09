<template>
  <div>
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartListLength}})</div></nav-bar>
    <cart-list/>
    <cart-bottom/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList.vue'
import CartBottom from './childComps/CartBottom.vue'

import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottom,
  },
  computed: {
    ...mapGetters(['cartListLength'])
  }
}
</script>
<style scoped>
  .cart-nav {
    background: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 1;
  }
  
</style>

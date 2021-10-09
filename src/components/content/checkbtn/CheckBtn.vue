<template>
  <div class="CheckBtn" :class="{bordercheck: !ischeck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  props: {
    ischeck: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
}
</script>

<style scoped>
  .CheckBtn {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
    
  }
  .bordercheck {
    border: 2px solid rgba(100, 100, 100, .3);
    background-color: transparent;
    
  }
  .CheckBtn img {
    margin: 3px 1px 0;
  }
</style>
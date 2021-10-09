<template>
  <div class="DetailRecommend">
    <goods-list :goods="detailRecommend"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'DetailRecommend',
  components: {
    GoodsList,
  },
   props: {
      detailRecommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>

<style>
  .DetailRecommend {
    background-color: #fff;
  }
</style>
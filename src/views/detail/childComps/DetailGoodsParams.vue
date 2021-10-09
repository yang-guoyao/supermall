<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length">
    <div class="rules">
      <table v-if="goodsParams.sizes && goodsParams.sizes.length">
        <tr v-for="(tr, index) in goodsParams.sizes[0]" :key="index">
          <td v-for="(td,index) in tr" :key="index">{{td}}</td>
        </tr>
      </table>
    </div> 
    <div class="params" v-if="Object.keys(goodsParams.infos).length && goodsParams.infos.length">
    <table>
      <tr v-for="(info, index) in goodsParams.infos" :key="index">
        <td class="key">{{info.key}}</td>
        <td class="value">{{info.value}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-params {
    background-color: #fff;
    padding: 0 10px;
    border-bottom: solid 4px rgba(100, 100, 100, .08);
  }
  .rules table {
    width: 100%;
  }
  .rules table tr td, .params table tr td {
    padding: 8px 16px;
    border-bottom: 1px solid rgba(100,100,100, .1);
  }
  .params table {
    width: 100%;
  }
  .params table tr .key {
    width: 30%;
  }
  .params table tr .value {
    width: 70%;
    color: var(--color-high-text);
  }
</style>
<template>
  <div class="item-category">
    <a :href="contentitem.link">
      <img :src="contentitem.image" alt="" @load="imgload">
      <p>{{contentitem.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CategorySideContentItem',
  props: {
    contentitem: {
      type: Object,
      defaylt() {
        return {}
      }
    }
  },
  methods: {
    imgload() {
      this.$bus.$emit('itemImgLoad');
    }
  }
}
</script>

<style scoped>
  .item-category {
    width: 90px;
    text-align: center;
  }
  .item-category img{
    width: 100%;
  }
  .item-category p {
    color: #000;
    margin: 15px 0;
  }
</style>
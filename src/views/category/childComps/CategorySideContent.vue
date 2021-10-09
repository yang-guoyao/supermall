<template>
  <div class="sidecontent">
    <div v-for="(item, index) in subCategoryList" :key="index">
      <category-side-content-item :contentitem="item"/>
    </div>
  </div>
</template>

<script>
import CategorySideContentItem from './CategorySideContentItem.vue'

export default {
  name: 'CategorySideContent',
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CategorySideContentItem
  }
}
</script>

<style scoped>
  .sidecontent {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    padding: 2px;
  }
</style>
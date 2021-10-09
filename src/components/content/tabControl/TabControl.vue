<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="index" :class="{avtive: currentIndex === index}" class="tabcontrol-item" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;

      this.$emit('currentIndex', index);
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
}
</script>

<style>
  .tabcontrol {
    display: flex;
    height: 40px;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabcontrol-item {
    flex: 1;
  }
  .avtive {
    color: var(--color-high-text);
  }
  .avtive span {
    padding: 0 2px 2px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
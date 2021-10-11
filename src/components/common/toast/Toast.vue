<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      isshow: false,
      message: ''
    }
  },
  methods: {
    show(message, timer) {
      this.message = message
      this.isshow = true 

      setTimeout(() => {
        this.isshow = false
      }, timer);
    }
  },
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 999;
    border-radius: 10px;
    padding: 10px 20px;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(100, 100, 100, .6);
    /* 动画效果 */
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation: showtimer 3s 1s 1 forwards;
    transition: all .3s;

  }
  @keyframes showtimer
  {
    0% { 
      background-color: rgba(100, 100, 100, .5);
      color: rgba(255,255,255, 0.6);
      }
    20% { 
      background-color: rgba(100, 100, 100, .4);
      color: rgba(255, 255, 255, 0.4);
      }
    40% {
      background-color: rgba(100, 100, 100, .3);
      color: rgba(255,255,255, 0.3);
       }
    60% {
      background-color: rgba(100, 100, 100, .2);
      color: rgba(255,255,255, 0.2);
       }
    80% {
      background-color: rgba(100, 100, 100, .1);
      color: rgba(255,255,255, 0.1);
       }
    100% {
      background-color: rgba(100, 100, 100, .0);
      color: rgba(255,255,255, 0.0);
       }
  }
</style>
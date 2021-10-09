<template>
  <div class="profilebottom">
    <div class="bottom-superior">
      <div>
        <img src="~assets/img/profile/message.svg" alt="">
        我的消息
      </div>
      <div>
        <img src="~assets/img/profile/pointer.svg" alt="">
        积分商城
      </div>
      <div>
        <img src="~assets/img/profile/vip.svg" alt="">
        会员卡
      </div>
    </div>
    <div class="bottom-down">
      <div>
        <img src="~assets/img/profile/pointer.svg" alt="">
        积分商城
      </div>
      <div>
        <img src="~assets/img/profile/vip.svg" alt="">
        会员卡
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBottom'
}
</script>

<style scoped>
  .profilebottom {
    font-size: 15px;
    color: #000;
  }
  .bottom-superior {
    border-bottom: 15px solid #f2f2f2;
  }
  .bottom-superior div,
  .bottom-down {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #f2f2f2;
  }
  .profilebottom img {
    width: 22px;
    position: relative;
    top: 5px;
    margin: 0 5px 0 15px;
  }
</style>
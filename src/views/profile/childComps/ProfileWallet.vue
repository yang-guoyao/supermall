<template>
  <div class="profilewallet">
    <div>
      <div class="wallet-item"><span>0.00</span>元</div>
      <div>我的余额</div>
    </div>
    <div>
      <div class="wallet-item"><span>0</span>个</div>
      <div>我的优惠</div>
    </div>
    <div>
      <div class="wallet-item"><span>0</span>分</div>
     <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileWallet'
}
</script>

<style scoped>
  .profilewallet {
    display: flex;
    text-align: center;
    border-bottom: 15px solid #f2f2f2;
    height: 100px;
    align-items: center;
    font-size: 14px;
  }
  .profilewallet>div {
    flex: 1;
    border-right: 3px solid #f2f2f2;
  }
  .wallet-item span {
    color: #fc7b5f;
    font-size: 22px;
    font-weight: 700;
  }
  .wallet-item {
    margin-bottom: 5px;
  }
</style>
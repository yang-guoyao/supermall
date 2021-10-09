<template>
  <div class="profile">
      <div class="profile-avatar">
        <img src="~assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="profile-login">
        <span>登录/注册</span>
        <div class="profile-phone">
          <img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号
        </div>
        <span class="profile-more">></span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation'
}
</script>

<style scoped>
 .profile {
    background-color: var(--color-tint);
    color: #fff;
    padding: 20px 10px;
    display: flex;
  }
  .profile-avatar img {
    width: 80px;
  }
  .profile-login {
    margin: 20px 10px 0;
    font-size: 19px;
  }
  .profile-phone img {
    position: relative;
    top: 6px;
    left: -5px;
    width: 22px;
  }
  .profile-phone {
    font-size: 14px;
  }
  .profile-more {
    font-size: 30px;
    position: absolute;
    right: 20px;
    top: 90px;
  }
</style>
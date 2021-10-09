<template>
  <div>
    <nav-bar class="profile-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-information/>
    <profile-wallet/>
    <profile-bottom/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileInformation from './childComps/ProfileInformation.vue'
import ProfileWallet from './childComps/ProfileWallet.vue'
import ProfileBottom from './childComps/ProfileBottom.vue'
export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileInformation,
    ProfileWallet,
    ProfileBottom
  }
}
</script>
<style scoped>
  .profile-bar {
    color: #fff;
    background-color: var(--color-tint);
    position: relative;
    z-index: 9;
  }
</style>

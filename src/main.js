import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLezyLoad from 'vue-lazyload'

//添加事件总线
Vue.prototype.$bus = new Vue()
//安装toast
Vue.use(toast);
//解决移动端300ms延迟
FastClick.attach(document.body)
//图片懒加载
Vue.use(VueLezyLoad, {
  loading: require('./assets/img/common/placeholder.png')
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')

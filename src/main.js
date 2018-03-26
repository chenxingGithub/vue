// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import List from '@/views/List.vue'
const Detail = r => require.ensure([], () => r(require('@/views/Detail.vue')), 'Detail')
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
	{
    path : '',
    component : List
  },
  {
    path : '/Detail/:id',
    component : Detail
  },
];
const router = new VueRouter({
  hashbang: false,
  history: true,
  routes:routes
});
const app = new Vue({
  router
}).$mount('#app')
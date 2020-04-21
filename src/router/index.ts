import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import QrPage from '../views/QrPage.vue';
import TestQR from '../views/TestQR.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/QrPage', name: 'QrPage', component: QrPage},
    {path: '/TestQR', name: 'TestQR', component: TestQR},
  ]
})

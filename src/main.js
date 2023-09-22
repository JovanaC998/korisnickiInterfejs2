import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/Home.vue";
import ServiceComponent from "./components/Service.vue";
import PriceComponent from "./components/Price.vue";
import CartComponent from "./components/Cart.vue";
import ProductComponent from "./components/Product.vue";
import LoginComponent from "./components/Login.vue";
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Store from './Store/store.js';

const app = createApp(App);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomeComponent },
  { path: "/service", component: ServiceComponent, props: true },
  { path: "/price", component: PriceComponent, props: true },
  { path: "/cart", component: CartComponent , meta:{ auth:true  }},
  { path: "/product", component: ProductComponent },
  { path: "/login", component: LoginComponent ,  meta:{ signin:true} },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  Store.dispatch('user/autoLogin').then(() => {
    if (to.meta.auth && !Store.getters['user/isAuth']) {
      next('/login');
    } else if (to.meta.signin && Store.getters['user/isAuth']) {
      next('/cart');
    } else {
      next();
    }
  });
});
app.component('ValidationProvider', ValidationProvider);
app.component('ValidationObserver', ValidationObserver);


app.use(router);
app.use(Store);

app.mount("#app");
export default router;

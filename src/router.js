import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/shop",
      alias: "/shop",
      name: "shop",
      component: () => import("./components/Shop")
    }
  ]
});
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// @Views
import PokeHome from "../views/PokeHome.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PokeHome",
    component: PokeHome,
  },
  {
    path: "/PokeList",
    name: "PokeList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokeList.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

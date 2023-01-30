import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "@/pages/HomeView";
import VideosView from "@/pages/VideosView";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/videos",
    component: VideosView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

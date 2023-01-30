import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeView from "@/pages/HomeView";
import VideosView from "@/pages/VideosView";
import SobreView from "@/pages/SobreView";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/videos",
    component: VideosView,
  },
  {
    path: "/sobre",
    component: SobreView,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

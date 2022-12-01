import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/Portfolio.vue"),
    },
    {
      path: "/textImage",
      name: "textImage",
      component: () => import("../views/TextImage.vue"),
    },
    {
      path: "/testPage",
      name: "testPage",
      component: () => import("../views/TestPage.vue"),
    },
  ],
});

export default router;

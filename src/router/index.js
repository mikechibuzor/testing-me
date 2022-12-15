import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/jewelry",
      name: "jewelry",
      component: () => import("@/views/JewelryView.vue"),
    },
    {
      path: "/electronics",
      name: "electronics",
      component: () => import("@/views/ElectronicsView.vue"),
    },
  ],
});

export default router;

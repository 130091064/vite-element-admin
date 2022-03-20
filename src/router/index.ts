import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Login from "@/pages/login.vue";
import PrimaryLayout from "@/layouts/primaryLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/",
    component: PrimaryLayout,
    name: "index",
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("../pages/home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import KataLog from "./components/KataLog.vue";
import ManajemenBuku from "./components/ManajemenBuku.vue";

const routes = [
  {
    path: "/",
    name: "KataLog",
    component: KataLog,
  },
  {
    path: "/manajemen-buku",
    name: "ManajemenBuku",
    component: ManajemenBuku,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

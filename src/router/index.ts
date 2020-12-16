import { createRouter, createWebHistory } from "vue-router";
import Home from '../apps/home/views/index.vue'
import List from '../apps/list/views/index.vue'

const routes = [
  {
    path: "/",
    name: "home",
    // component: () => import('../apps/home/views/index.vue'),
    component: Home,
  },
  {
    path: "/list",
    name: "list",
    // component: () => import('../apps/list/views/index.vue'),
    component: List,
  },
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import('../apps/home/app.vue'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('../apps/home/views/index.vue'),
  //     }
  //   ],
  // },
  // {
  //   path: "/list",
  //   name: "list",
  //   component: () => import('../apps/list/app.vue'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('../apps/list/views/index.vue'),
  //     }
  //   ],
  // },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
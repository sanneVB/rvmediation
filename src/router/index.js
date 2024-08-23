import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mediator",
    name: "mediator",
    // route level code-splitting
    // this generates a separate chunk (mediator.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mediatorview" */ "@/views/MediatorView.vue"),
  },
  {
    path: "/nmv",
    name: "nmv",
    component: () => import("@/views/NmvView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/privacystatement",
    name: "privacystatement",
    component: () => import("@/views/PrivacyStatementView.vue"),
  },
  {
    path: "/algemenevoorwaarden",
    name: "algemenevoorwaarden",
    component: () => import("@/views/TermsAndConditionsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //history: createWebHistory("/"),
  routes,
});

export default router;

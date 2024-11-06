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
  {
    path: '/:pathMatch(.*)*',
    component: HomeView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // check that path is different, so this doesn't scroll to top every time
    // a query parameter is changed
    if (to.path !== from.path) {
      if (
        // if this is a push/pop state (forward/back), use the saved position
        savedPosition ||
        (
          // don't change screen position when closing/opening a modal
          to.meta?.savePosition ||
          to.params?.savePosition
        )
      ) {
        return savedPosition;
      }
  
      // If the url has a #sub-section scroll to there
      if (to.hash) {
        return { el: to.hash, top: 80 };
      }
  
      // otherwise always scroll to the top of the page
      return new Promise((resolve) => {
        // Resolving a promise is needed for some async routes.
        // Has no negative impact on synchronous routes.
        resolve({ left: 0, top: 0 });
      });
    } else if (to.hash !== from.hash) {
      return { el: to.hash, top: 80 };
    }
  } 
});

export default router;

import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  { 
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: ()=> import('../views/NotFound.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=> import('../views/NotFound.vue')
  }
];

const router = createRouter({
  
  //history: createWebHistory(process.env.BASE_URL), // Use for local
  history: createWebHashHistory('/vue-facts-router/'), // Use for GitHub
  routes,
});

export default router;

import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// import routes from "./routes";
// import MainLayout from "../layouts/MainLayout.vue";
// import Menu from "@/layouts/TheMenu.vue";
import Home from "../pages/index.vue";
  
// const test2 = () => import('@/components/FormCard/test.vue')
const isClient = typeof window !== 'undefined'
const routerHistory = isClient ? createWebHistory() : createMemoryHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,

        // Menu,
        // Footer,
      },
    },
    {
      path: "/test",
      component: Home,
      name: "test",
    },
    
  ],
});

// FIXME : use pinia user getters
// requiresAuth: user.role == 'user' || user.role == 'admin'

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }

//   if (to.matched.some((record) => record.meta.requiresAdmin)) {

//     if (store.getters.isAdmin) {
//       next();
//       return;
//     }
//     next("/login");
//   }

//   if (to.matched.some((record) => record.meta.requiresGuest)) {
//     if (!store.getters.isGuest) {
//       next();
//       return;
//     }
//     next("/");
//   }
// });
// console.log('export router', router);
export default router;

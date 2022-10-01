import App from './App.vue'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import router from './router/index.js';

const app = createApp(App)
const store = createPinia()
store.use(({ store }) => {
    store.$router = markRaw(router)
  })

app.use(router).use(store)  
// app.mount('#app')

// router.beforeResolve((to, from, next) => {
//     let diffed = false;
//     const matched = router.resolve(to).matched;
//     const prevMatched = router.resolve(from).matched;
  
//     if (from && !from.name) {
//       return next();
//     }
//     const activated = matched.filter((c, i) => {
//       return diffed || (diffed = prevMatched[i] !== c);
//     });
//     if (!activated.length) {
//       return next();
//     }
//     const matchedComponents: any = [];
//     matched.map((route) => {
//       matchedComponents.push(...Object.values(route.components));
//     });
//     const asyncDataFuncs = matchedComponents.map((component: any) => {
//       const asyncData = component.asyncData || null;
//       if (asyncData) {
//         const config = {
//           store,
//           route: to
//         };
//         if (isPromise(asyncData) === false) {
//           return Promise.resolve(asyncData(config));
//         }
//         return asyncData(config);
//       }
//     });
//     try {
//       Promise.all(asyncDataFuncs).then(() => {
//         next();
//       });
//     } catch (err) {
//       next(err as any);
//     }
//   });

  
router.isReady().then(() => {
    app.mount('#app', true);
});

// router.isReady().then(() => {
//     app.mount('#app', true);
//   });
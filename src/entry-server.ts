import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import App from './App.vue'
import { createPinia } from 'pinia';
// import router  from './router';
// @ts-ignore
import router from './router/index.js';

/**
 * Render page with naive ui
 */
// console.log('start entry');

export const render = async () => {
  
  const store = createPinia();
  console.log('done store');

  // console.log('start router', router);
  // const router = router;
  console.log('done router');
  
  const app = createSSRApp(App)
  console.log('done app');
  
  app.use(router).use(store);
  //app.use(store);
  const { collect } = setup(app)
  const appHtml = await renderToString(app)
  const cssHtml = collect()
  return {
    cssHtml,
    appHtml
  }
}

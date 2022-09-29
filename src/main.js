import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
// import myPlugin from "@/plugins/plugin";
import App from './App.vue'
import router from './router'

const app = createApp(App)

// window.isMobileScreen = function (w) {
//   if (w < 720) {
//     return true
//   } else {
//     return false
//   }
// }

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(naive)
app.mount('#app')

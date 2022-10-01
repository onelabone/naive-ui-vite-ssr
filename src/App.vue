<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Go to Home</router-link>

  </nav>

  <div class="container pt-12px pb-12px">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>

  <!-- <n-space vertical style="padding: 16px; max-width: 360px">

    <n-button>Naive UI SSR fwerwer </n-button>
    <n-cascader :options="cascaderOptions" />
    <n-select :options="selectOptions" />
    <n-input-number />
  </n-space> -->
</template>

<script setup>
import { useCounterStore } from './stores/counter.js'
import { onMounted, h, defineComponent } from 'vue'
import {
  NButton,
  NSpace,
  NInputNumber,
  NCascader,
  NSelect
} from 'naive-ui'

import { useRouter } from 'vue-router' //this dont work
// import router from './router';
const store = useCounterStore()
console.log('lllllllllllllllllllll');
console.log('use router', useRouter());
onMounted(() => {
  const router = useRouter()
  router.push('/test')

  // router.push('/test')
})

/**
 * A Vue app with naive ui
 */

const cascaderOptions = [
  {
    label: '0',
    value: '0',
    children: [
      {
        label: '0-0',
        value: '0-0',
      },
      {
        label: '0-1',
        value: '0-1',
      }
    ]
  }
]
const selectOptions = [
  {
    label: '0',
    value: '0',
  },
  {
    label: '1',
    value: '1',
  }
]


</script>


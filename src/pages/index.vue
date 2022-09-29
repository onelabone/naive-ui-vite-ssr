<template>
    <div>
        xxxxxxxxx
        ffffffff
    </div>
    <n-space vertical style="padding: 16px; max-width: 360px">
        {{store.counter+500}}
        <n-button>TTTTTTTTTTTTTTTTT Naive UI SSR ffffffff</n-button>
        <n-cascader :options="cascaderOptions" />
        <n-select :options="selectOptions" />
        <n-input-number />
    </n-space>
</template>
  
<script setup >
import { useCounterStore } from '../stores/counter.js'
import { onMounted, h, defineComponent } from 'vue'
import {
    NButton,
    NSpace,
    NInputNumber,
    NCascader,
    NSelect
} from 'naive-ui'

const store = useCounterStore()

onMounted(() => {
    console.log('mounted pages index');
    // router.push('/quick-view')
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
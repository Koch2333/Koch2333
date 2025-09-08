<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <n-layout-content>
        <HelloWorld msg="Koch2333" />
        <Contact />
        <PGPKey />
        <p class="build-id">Built with love, Build ID: Git@{{ commitId }}.</p>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import { useOsTheme, darkTheme, NConfigProvider, NLayout, NLayoutContent } from 'naive-ui'

import HelloWorld from './components/HelloWorld.vue'
import Contact from './components/Contact.vue'
import PGPKey from './components/PGPKey.vue'

const commitId = __APP_COMMIT_HASH__

// 根据系统主题设置 Naive UI 主题
const osTheme = useOsTheme()
const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
</script>

<style scoped>

.build-id {
  margin-top: 12px;
  opacity: 0.8;
  font-size: 14px;
}

/* 移动端优化 */
@media screen and (max-width: 768px) {
  .n-layout-content {
    padding: 16px;
  }
}
</style>

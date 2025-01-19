<script setup>
import { NIcon, NSpace } from 'naive-ui'
import { Github, Telegram, Twitter } from '@vicons/fa'
</script>

<template>
  <n-space justify="start">
    <n-icon size="32">
      <a href="https://github.com/Koch2333" target="_blank"><Github />
      </a>
      <a href="https://t.me/@Koch2333" target="_blank"><Telegram />
      </a>
      <a href="https://x.com/koch2333" target="_blank">
        <Twitter />
      </a>
    </n-icon>
  </n-space>
</template>

<style scoped>

</style>
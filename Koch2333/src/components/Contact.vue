<script setup>
import { Github, Telegram, Twitter } from '@vicons/fa'
import { EmailRound } from '@vicons/material'
</script>

<template>
  <h2>Contact me</h2>
  <n-space justify="center">
    <a href="https://koch2333.cn/redirect/githubProfile" target="_blank" class="text-inherit no-underline hover:opacity-80">
      <n-icon size="32">
      <Github />
      </n-icon></a>
    <a href="mailto:Koch233333@gmail.com" class="text-inherit no-underline hover:opacity-80">
      <n-icon size="32">
        <EmailRound />
      </n-icon></a>
      <a href="https://koch2333.cn/redirect/telegram" target="_blank" class="text-inherit no-underline hover:opacity-80">
        <n-icon size="32">
          <Telegram />
        </n-icon></a>
      <a href="https://koch2333.cn/redirect/x" target="_blank" class="text-inherit no-underline hover:opacity-80">
        <n-icon size="32">
        <Twitter />
        </n-icon></a>
  </n-space>
</template>

<style scoped>

</style>
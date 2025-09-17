<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="md:flex">
    <a href="https://koch2333.cn//redirect/avatar" target="_blank">
      <n-avatar src="https://assets.koch2333.cn/avatar.webp" class="size-48" round>
      </n-avatar></a>
  <div class="m-1 text-left leading-4 md:shrink-0">
        <h2>{{msg}}</h2>
        <p>👋Hi there!This is Koch2333.Nice to meet you!</p>
        <p>You can call me Koch or kaochi(?)</p>
        <p>I'm a senior high school student and frontend stack developer.</p>
        <p>Now I'm studying and using Vue 3, also studying many other language.</p>
        <p>Such as Java and Dart (with flutter)</p>
      </div>
  </div>
  </template>

<style scoped>

</style>

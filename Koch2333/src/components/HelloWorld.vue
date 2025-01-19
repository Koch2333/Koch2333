<script setup>
import { ref } from 'vue'
import { NAvatar, NSpace ,darkTheme } from 'naive-ui'
defineProps({
  msg: String,
})
const count = ref(0)
const theme = darkTheme
</script>

<template>
<n-space>
  <n-avatar src="https://avatars.githubusercontent.com/u/54238405?v=4" class="size-48" round></n-avatar>
  <div class="m-1 text-left leading-4">
  <h2>{{msg}}</h2>
    <p>👋Hi there!This is Koch2333.Nice to meet you!</p>
    <p>You can call me Koch or kaochi(?)</p>
      <p>I'm a senior student and frontend stack developer.</p>
    <p>Now I'm studying and using Vue 3, also studying many other language.</p>
    <p>Such as Java and Dart (with flutter)</p>
  </div>
</n-space>



</template>

<style scoped>

</style>

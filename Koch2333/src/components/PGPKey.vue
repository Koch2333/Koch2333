<script setup>
import { NCard, NCode, } from 'naive-ui'
</script>

<template>
  <p class="text-left text-lg-0">My OpenPGP Public Key is available on keys.openpgp.org, if needed, you can use it to message me.</p>
  <n-card>
    <n-code code="$ gpg --keyserver hkps://keys.openpgp.org/ --recv-keys 083D616B77312866DF92520772855C0BC2F991F3" language="bash">
    </n-code>
  </n-card>
</template>

<style scoped>

</style>
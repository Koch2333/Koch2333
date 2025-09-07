<script setup>
import { NCard, NCode } from 'naive-ui'
const commitId = __APP_COMMIT_HASH__;
</script>

<template>
  <div>
    <p class="text-left text-lg">My OpenPGP Public Key is available on keys.openpgp.org, if needed, you can use it to message me.</p>
    <n-card>
      <div class="code-container">
        <n-code
            code="$ gpg --keyserver hkps://keys.openpgp.org/ --recv-keys 083D616B77312866DF92520772855C0BC2F991F3"
            language="bash"
        />
      </div>
    </n-card>
  </div>
  <div>Built with love, Build ID: Git@{{ commitId }}.</div>
</template>

<style>

.code-container {
  max-height: 300px;
  overflow: auto;
  border-radius: 4px;
}
.code-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.code-container::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 4px;
}

.code-container::-webkit-scrollbar-track {
  background: transparent;
}
</style>
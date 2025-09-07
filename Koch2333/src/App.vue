<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <HelloWorld msg="Koch2333" />
      <Contact />
        <PGPKey />
      <footer />
    </n-layout>
  </n-config-provider>
</template>

<script>
import {darkTheme, useOsTheme, NConfigProvider} from "naive-ui";
import {computed, defineComponent} from "vue";
import HelloWorld from './components/HelloWorld.vue';
import Contact from './components/Contact.vue';
import PGPKey from './components/PGPKey.vue';
import footer from './components/footer.vue';

export default defineComponent({
  components: {
    HelloWorld,
    Contact,
    PGPKey,
    footer,
    NConfigProvider
  },
  setup() {
    // 获取操作系统主题
    const osThemeRef = useOsTheme();

    // 根据操作系统主题设置 Naive UI 主题
    const theme = computed(() => osThemeRef.value === "dark" ? darkTheme : null);

    return {
      theme,
      osTheme: osThemeRef
    };
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px)
{
  :root{
    display: block;
  }
}
</style>

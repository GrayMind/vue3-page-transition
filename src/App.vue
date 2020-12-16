<template>
  <router-view v-slot="{ Component }">
    <transition name="fold-left" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
  :root {
    --overlay-bg: #1867c0;
    --transition-duration: .35s;
  }
</style>
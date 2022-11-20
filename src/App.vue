<template>
  <div class="app-layout">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
<style scoped>
.app-layout {
  display: flex;
  height: 100%;
}
.sidebar {
  width: 240px;
  height: 100%;
}
</style>

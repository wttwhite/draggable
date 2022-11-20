<template>
  <div>
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  name: 'config-singer',
  created() {
    console.log('router', this.$route.params.type)
  },
}
</script>
<style lang="scss" scoped></style>

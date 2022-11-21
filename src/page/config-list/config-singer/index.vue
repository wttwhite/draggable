<template>
  <div>
    <div class="left"></div>
    <div class="center">
      <vue-draggable-resizable resizable>
        <div>22</div>
      </vue-draggable-resizable>
    </div>
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

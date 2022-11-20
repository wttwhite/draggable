<template>
  <div>
    <div>
      <el-button @click="addClick">新增</el-button>
    </div>
    <div>
      <ul>
        <li
          class="list"
          v-for="(item, index) in pageList"
          :key="index"
          @click="liClick(item)"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'config-list',
  data() {
    return {
      pageList: [{ id: '1' }],
    }
  },
  methods: {
    addClick() {
      this.$router.push({
        name: 'config-singer',
        params: {
          type: 'add',
        },
      })
    },
    liClick(item) {
      this.$router.push({
        name: 'config-singer',
        params: {
          id: item.id,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.list {
  width: 150px;
  height: 150px;
  background: blanchedalmond;
}
</style>

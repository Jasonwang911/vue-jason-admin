<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <el-menu
          mode="vertical"
          :show-timeout="200"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
          <siderbar-item></siderbar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script type="text/ecmascript-6">
import SiderbarItem from './SiderbarItem'

export default {
  name: 'sidebar',
  data() {
    return {

    }
  },
  components: {
    SiderbarItem
  }
}
</script>

<style scoped lang="scss">
</style>

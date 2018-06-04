<template>
  <section class="app-main" style="min-height: 100%">
      
      layout
    <sidebar></sidebar>
    <router-view></router-view>
  </section>
</template>

<script>
import { Sidebar } from './components'

export default {
  name: 'AppMain',
  components: {
    Sidebar
  }
}
</script>

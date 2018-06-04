<template>
  <section class="app-main" style="min-height: 100%">
      layout
     <router-view :key="key"></router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

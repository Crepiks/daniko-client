<template>
  <div class="page">
    <daniko-header />
    <nuxt />
  </div>
</template>

<script>
import danikoHeader from '../components/common/daniko-header.vue'

export default {
  components: {
    'daniko-header': danikoHeader,
  },
}
</script>

<style lang="scss">
.page {
  padding: 0 2%;
  margin: auto;
  max-width: 1140px;
  min-height: 100vh;
}
</style>
<template>
  <div class="page">
    <daniko-header />
    <nuxt />
    <daniko-footer />
  </div>
</template>

<script>
import danikoHeader from '@/components/common/header/daniko-header'
import danikoFooter from '@/components/common/footer/daniko-footer'

export default {
  components: {
    'daniko-header': danikoHeader,
    'daniko-footer': danikoFooter,
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
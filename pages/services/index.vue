<template>
  <div class="services-page">
    <h1 class="services-title">Услуги</h1>
    <daniko-services-grid :services="services" />
  </div>
</template>

<script>
import danikoServicesGrid from '@/components/services/services-grid/daniko-services-grid'
import services from '@/data/services.js'

export default {
  components: {
    'daniko-services-grid': danikoServicesGrid,
  },

  data() {
    return {
      services: services,
    }
  },
}
</script>

<style lang="scss" scoped>
.services {
  &-page {
    padding-bottom: 100px;
  }

  &-title {
    padding: 50px 0;
    font-size: 40px;
  }
}
</style>
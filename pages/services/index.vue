<template>
  <div class="services-page">
    <h1 class="services-title">Услуги</h1>
    <daniko-services-grid :services="services" />
  </div>
</template>

<script>
import DanikoServicesGrid from '@/components/services/services-grid/daniko-services-grid'
import services from '@/data/services.js'

export default {
  components: {
    'daniko-services-grid': DanikoServicesGrid,
  },
  data: () => ({
    services: services,
  }),
}
</script>

<style lang="scss" scoped>
.services-page {
  padding-bottom: 100px;
}

.services-title {
  margin-bottom: 30px;
  font-size: 30px;
  color: $main-dark;
}

@media all and (max-width: 500px) {
  .services-title {
    margin-bottom: 22px;
    font-size: 24px;
  }
}
</style>
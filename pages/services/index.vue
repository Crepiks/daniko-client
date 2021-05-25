<template>
  <div class="services-page">
    <h1 class="services-title">Услуги</h1>
    <services-grid :services="services" />
  </div>
</template>

<script>
import ServicesGrid from '@/components/services/services-grid/services-grid'
import { getServices } from '@/requests/services.js'

export default {
  components: {
    'services-grid': ServicesGrid,
  },
  async asyncData({ params, $axios }) {
    const services = await getServices($axios)
    return services
  },
}
</script>

<style lang="scss" scoped>
.services-page {
  padding-bottom: 100px;
}

.services-title {
  margin: 20px 0 30px;
  font-size: 30px;
  color: $main-dark;
}

@media all and (max-width: 500px) {
  .services-title {
    margin-bottom: 16px;
    font-size: 22px;
  }
}
</style>

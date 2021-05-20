<template>
  <div class="services">
    <h1 class="services__title">Услуги врача</h1>
    <div class="services__grid">
      <short-card
        v-for="service in services"
        :key="service.id"
        :id="service.id"
        :title="service.name"
      />
    </div>
  </div>
</template>

<script>
import ShortCard from '@/components/common/short-card/short-card'

export default {
  components: {
    'short-card': ShortCard,
  },
  props: {
    services: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.services__title {
  margin-bottom: 20px;
  color: $main-dark;
  font-size: 25px;
  font-weight: 500;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px;
  column-gap: 14px;
  row-gap: 14px;
}

@media all and (max-width: 1000px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
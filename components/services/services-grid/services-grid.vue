<template>
  <div class="grid">
    <service-card
      v-for="service in services"
      :key="service.id"
      :imagePath="service.imagePath"
      :name="service.name"
      :id="service.id"
    />
  </div>
</template>

<script>
import ServiceCard from '@/components/services/service-card/service-card'

export default {
  components: {
    'service-card': ServiceCard,
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  column-gap: 20px;
  row-gap: 20px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .grid {
    grid-auto-rows: 200px;
  }
}
</style>
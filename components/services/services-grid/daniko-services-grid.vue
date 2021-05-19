<template>
  <div class="grid">
    <daniko-service-card
      v-for="service in services"
      :key="service.id"
      :imagePath="service.imagePath"
      :name="service.name"
      :id="service.id"
    />
  </div>
</template>

<script>
import DanikoServiceCard from '@/components/common/service-card/daniko-service-card'

export default {
  components: {
    'daniko-service-card': DanikoServiceCard,
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
  column-gap: 20px;
  row-gap: 40px;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
<template>
  <div class="grid">
    <daniko-service-card
      v-for="service in services"
      :key="service.id"
      :imagePath="service.imagePath"
      :name="service.name"
    />
  </div>
</template>

<script>
import danikoServiceCard from '@/components/common/service-card/daniko-service-card'

export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },

  components: {
    'daniko-service-card': danikoServiceCard,
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
</style>
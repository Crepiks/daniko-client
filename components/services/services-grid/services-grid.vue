<template>
  <div class="grid">
    <service-card
      v-for="service in activeCards == 'paid'
        ? paidServices
        : activeCards == 'free'
        ? freeServices
        : services"
      :key="service.id"
      :imagePath="
        service.images.length > 0
          ? baseUrl + service.images[0].path
          : defaultServiceImage
      "
      :name="service.title"
      :id="service.id"
      :price="service.price"
    />
  </div>
</template>

<script>
import ServiceCard from '@/components/services/service-card/service-card'
import defaultServiceImage from '@/static/images/default-service-image.png'
import config from '@/config/config'

export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
    activeCards: {
      type: String,
      required: true,
    },
  },

  components: {
    'service-card': ServiceCard,
  },

  data: () => ({
    defaultServiceImage: defaultServiceImage,
    baseUrl: config.apiUrl,
  }),

  computed: {
    freeServices() {
      return this.services.filter((service) => service.price == 0)
    },

    paidServices() {
      return this.services.filter((service) => service.price > 0)
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
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>

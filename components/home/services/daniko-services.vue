<template>
  <section class="services">
    <div class="services-header">
      <h2 class="services-title">Наши услуги</h2>
      <nuxt-link class="link" to="/services">
        <span class="link-label">Ко всем услугам</span>
        <i class="bx bx-right-arrow-alt link-icon"></i>
      </nuxt-link>
    </div>
    <div class="services-cards">
      <daniko-service-card
        v-for="service in servicesRow"
        :key="service.id"
        :imagePath="service.imagePath"
        :name="service.name"
        :id="service.id"
      />
    </div>
  </section>
</template>

<script>
import DanikoServiceCard from '@/components/common/service-card/daniko-service-card'
import services from '@/data/services.js'

export default {
  components: {
    'daniko-service-card': DanikoServiceCard,
  },
  data: () => ({
    services: services,
  }),
  computed: {
    servicesRow() {
      return this.services.slice(0, 4)
    },
  },
}
</script>

<style lang="scss" scoped>
.services {
  margin: auto;
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.services-header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.services-title {
  color: $main-dark;
  font-size: 25px;
}

.services-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}

.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.link:hover {
  opacity: 0.7;
}

.link-label {
  margin-right: 10px;
  color: $primary;
  font-size: 18px;
  font-weight: 600;
}

.link-icon {
  color: $primary;
  font-size: 20px;
}

@media (max-width: 1024px) {
  .services-title {
    font-size: 30px;
  }

  .link-label {
    font-size: 20px;
  }

  .link-icon {
    font-size: 26px;
  }
}

@media (max-width: 900px) {
  .services-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .services-title {
    font-size: 24px;
  }

  .link-label {
    font-size: 16px;
  }

  .services-header {
    margin-bottom: 30px;
  }
}
</style>

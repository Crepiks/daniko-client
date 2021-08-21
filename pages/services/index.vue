<template>
  <div class="services-page">
    <div class="services__header">
      <h1 class="services__title">Услуги</h1>
      <div class="services__header-buttons">
        <div
          @click="showingServicesType = 'paid'"
          class="services__button"
          :class="{ services__button_active: showingServicesType == 'paid' }"
        >
          Платные
        </div>
        <div
          @click="showingServicesType = 'free'"
          class="services__button"
          :class="{ services__button_active: showingServicesType == 'free' }"
        >
          Бесплатные
        </div>
      </div>
    </div>
    <services-grid :services="services" :activeCards="showingServicesType" />
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

  data: () => ({
    showingServicesType: 'paid',
  }),
}
</script>

<style lang="scss" scoped>
.services-page {
  padding-bottom: 100px;
}

.services__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.services__title {
  margin: 20px 0 30px;
  font-size: 30px;
  color: $main-dark;
}

.services__header-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.services__button {
  padding: 7px 14px;
  margin-left: 10px;
  color: $primary;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  opacity: 0.8;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &_active {
    border-color: $primary;
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
}

@media all and (max-width: 500px) {
  .services__title {
    margin-bottom: 16px;
    font-size: 22px;
  }
}
</style>

<template>
  <div class="provided-services" v-if="providedServices">
    <h1 class="provided-services-title">Услуги врача</h1>
    <div class="provided-services-services">
      <daniko-short-card
        v-for="service in providedServices"
        :key="service.id"
        :title="service.name"
        :id="service.id"
      />
    </div>
  </div>
</template>

<script>
import danikoShortCard from '@/components/common/short-card/daniko-short-card.vue'

export default {
  props: {
    providedServices: {
      type: Array,
      required: false,
      default: [],
    },
  },

  components: {
    'daniko-short-card': danikoShortCard,
  },
}
</script>

<style lang="scss" scoped>
.provided-services {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 25px;
    font-weight: 500;
  }

  &-services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
<template>
  <div class="provided-services">
    <h1 class="provided-services-title">Услуги врача</h1>
    <div class="provided-services-services">
      <daniko-short-card title="Рентген" />
      <daniko-short-card title="Экспертиза Covid-19" />
      <daniko-short-card title="Вправливание руки" />
      <daniko-short-card title="Вправливание руки" />
    </div>
  </div>
</template>

<script>
import danikoShortCard from '@/components/common/short-card/daniko-short-card.vue'

export default {
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
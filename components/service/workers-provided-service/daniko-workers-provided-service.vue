<template>
  <div class="provided-workers">
    <h1 class="provided-workers-title">Предоставляющие услугу врачи</h1>
    <div class="provided-workers-workers">
      <daniko-short-card title="Кажимухан Азат" job="Педиатр" />
      <daniko-short-card title="Онласын Саяжан" job="Терапевт" />
      <daniko-short-card title="Макулова Айжан" job="Хирург" />
      <daniko-short-card title="Берханов Азамат" job="Терапевт" />
      <daniko-short-card title="Аулбекова Жайна" job="Педиатр" />
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
.provided-workers {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 25px;
    font-weight: 500;
  }

  &-workers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
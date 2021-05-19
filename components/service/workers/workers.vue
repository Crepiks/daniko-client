<template>
  <div class="workers" v-if="workers">
    <h1 class="workers-title">Предоставляющие услугу врачи</h1>
    <div class="workers-grid">
      <short-card
        v-for="worker in workers"
        :key="worker.id"
        :id="worker.id"
        :title="worker.name"
        :job="worker.job"
      />
    </div>
  </div>
</template>

<script>
import ShortCard from '@/components/common/short-card/short-card.vue'

export default {
  components: {
    'short-card': ShortCard,
  },
  props: {
    workers: {
      type: Array,
      required: false,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped>
.workers {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.workers-title {
  margin-bottom: 20px;
  color: $main-dark;
  font-size: 25px;
  font-weight: 500;
}

.workers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px;
  column-gap: 14px;
  row-gap: 14px;
}

@media all and (max-width: 1000px) {
  .workers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and (max-width: 768px) {
  .workers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
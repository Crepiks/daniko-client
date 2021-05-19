<template>
  <div class="grid">
    <daniko-worker-card
      v-for="worker in workers"
      :key="worker.id"
      :imagePath="worker.imagePath"
      :name="worker.name"
      :job="worker.job"
      :id="worker.id"
    />
  </div>
</template>

<script>
import DanikoWorkerCard from '@/components/common/worker-card/daniko-worker-card'

export default {
  components: {
    'daniko-worker-card': DanikoWorkerCard,
  },
  props: {
    workers: {
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
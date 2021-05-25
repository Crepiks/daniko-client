<template>
  <div class="grid">
    <worker-card
      v-for="worker in workers"
      :key="worker.id"
      :id="worker.id"
      :image-path="worker.image ? worker.image.path : defaultWorkerImage"
      :name="worker.firstName + ' ' + worker.lastName"
      :job="worker.branch"
    />
  </div>
</template>

<script>
import WorkerCard from '@/components/workers/worker-card/worker-card'
import defaultWorkerImage from '@/static/images/default-worker-image.png'

export default {
  components: {
    'worker-card': WorkerCard,
  },
  props: {
    workers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultWorkerImage: defaultWorkerImage,
    }
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
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

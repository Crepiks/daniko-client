<template>
  <div class="workers-page">
    <h1 class="workers-title">Специалисты</h1>
    <workers-grid :workers="workers" />
  </div>
</template>

<script>
import WorkersGrid from '@/components/workers/workers-grid/daniko-workers-grid'
import { getWorkers } from '@/requests/workers.js'

export default {
  components: {
    'workers-grid': WorkersGrid,
  },
  async asyncData({ params, $axios }) {
    const workers = await getWorkers($axios)
    return workers
  },
}
</script>

<style lang="scss" scoped>
.workers-page {
  padding-bottom: 100px;
}

.workers-title {
  margin: 20px 0 30px;
  font-size: 30px;
  color: $main-dark;
}

@media all and (max-width: 500px) {
  .workers-title {
    margin-bottom: 16px;
    font-size: 22px;
  }
}
</style>

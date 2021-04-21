<template>
  <div class="workers-page">
    <h1 class="workers-title">Специалисты</h1>
    <daniko-workers-grid :workers="workers" />
  </div>
</template>

<script>
import danikoWorkersGrid from '@/components/workers/workers-grid/daniko-workers-grid'
import workers from '@/data/workers.js'

export default {
  components: {
    'daniko-workers-grid': danikoWorkersGrid,
  },

  data() {
    return {
      workers: workers,
    }
  },
}
</script>

<style lang="scss" scoped>
.workers {
  &-page {
    padding-bottom: 100px;
  }

  &-title {
    padding: 50px 0;
    font-size: 40px;
  }
}
</style>
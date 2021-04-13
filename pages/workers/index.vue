<template>
  <div class="workers-page">
    <h1 class="workers-title">Специалисты</h1>
    <daniko-workers-grid :workers="mock" />
  </div>
</template>

<script>
import danikoWorkersGrid from '@/components/workers/workers-grid/daniko-workers-grid'
import testWorkerImage from '@/static/images/test-worker-image.png'

export default {
  components: {
    'daniko-workers-grid': danikoWorkersGrid,
  },

  data() {
    return {
      mock: [
        {
          id: 1,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 2,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 3,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 4,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 5,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 6,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 7,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 8,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 9,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
        {
          id: 10,
          name: 'Кажимухан Азат',
          job: 'Хирург',
          imagePath: testWorkerImage,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.workers {
  &-title {
    padding: 50px 0;
    font-size: 40px;
  }
}
</style>
<template>
  <div class="worker-page">
    <div class="worker-main">
      <daniko-worker-main-info
        :imagePath="worker.imagePath"
        :name="worker.name"
        :job="worker.job"
        :description="worker.description"
      />
    </div>
    <div class="worker-extra">
      <daniko-schedule />
    </div>
  </div>
</template>

<script>
import danikoWorkerMainInfo from '@/components/worker/worker-main-info/daniko-worker-main-info.vue'
import testWorkerImage from '@/static/images/test-worker-image.png'
import danikoSchedule from '@/components/common/schedule/daniko-schedule.vue'

export default {
  components: {
    'daniko-worker-main-info': danikoWorkerMainInfo,
    'daniko-schedule': danikoSchedule,
  },

  data() {
    return {
      worker: {
        imagePath: testWorkerImage,
        name: 'Кажимухан Азат',
        job: 'Хирург',
        description:
          'Более 10 лет стажа, магистратура за границей и сотни успешных операций. Буду рад вас дечить!',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.worker {
  &-page {
    padding: 30px 0;
    display: flex;
  }

  &-main {
    width: 250px;
  }

  &-extra {
    padding-left: 50px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}
</style>
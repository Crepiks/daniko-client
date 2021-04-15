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
      <daniko-schedule class="worker-schedule" :schedule="schedule" />
      <daniko-worker-provided-services />
    </div>
  </div>
</template>

<script>
import danikoWorkerMainInfo from '@/components/worker/worker-main-info/daniko-worker-main-info.vue'
import testWorkerImage from '@/static/images/test-worker-image.png'
import danikoSchedule from '@/components/common/schedule/daniko-schedule.vue'
import danikoWorkerProvidedServices from '@/components/worker/worker-provided-services/daniko-worker-provided-services.vue'

export default {
  components: {
    'daniko-worker-main-info': danikoWorkerMainInfo,
    'daniko-schedule': danikoSchedule,
    'daniko-worker-provided-services': danikoWorkerProvidedServices,
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
      schedule: {
        monday: '14.00:17.00',
        tuesday: '14.00:17.00',
        wednesday: '14.00:17.00',
        thursday: '14.00:17.00',
        friday: '14.00:17.00',
        saturday: '',
        sunday: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.worker {
  &-page {
    padding: 30px 0 0 0;
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

  &-schedule {
    margin-bottom: 50px;
  }
}
</style>
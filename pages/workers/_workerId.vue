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
      <daniko-schedule class="worker-schedule" :schedule="worker.schedule" />
      <daniko-worker-provided-services
        :providedServices="worker.providedServices"
      />
    </div>
  </div>
</template>

<script>
import danikoWorkerMainInfo from '@/components/worker/worker-main-info/daniko-worker-main-info.vue'
import danikoSchedule from '@/components/common/schedule/daniko-schedule.vue'
import danikoWorkerProvidedServices from '@/components/worker/worker-provided-services/daniko-worker-provided-services.vue'
import worker from '@/data/worker.js'

export default {
  components: {
    'daniko-worker-main-info': danikoWorkerMainInfo,
    'daniko-schedule': danikoSchedule,
    'daniko-worker-provided-services': danikoWorkerProvidedServices,
  },

  data() {
    return {
      worker: worker,
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
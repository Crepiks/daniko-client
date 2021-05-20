<template>
  <div class="worker-page">
    <div class="worker-main">
      <worker-info
        :name="worker.name"
        :job="worker.job"
        :description="worker.description"
        :image-path="worker.imagePath"
      />
    </div>
    <div class="worker-extra">
      <schedule class="worker-schedule" :schedule="worker.schedule" />
      <services :services="worker.services" />
    </div>
  </div>
</template>

<script>
import WorkerInfo from '@/components/workers/worker-info/worker-info'
import Schedule from '@/components/common/schedule/schedule'
import Services from '@/components/workers/services/services'
import worker from '@/data/worker.js'

export default {
  components: {
    'worker-info': WorkerInfo,
    schedule: Schedule,
    services: Services,
  },
  data: () => ({
    worker: worker,
  }),
}
</script>

<style lang="scss" scoped>
.worker-page {
  padding: 30px 0 0 0;
  display: flex;
}

.worker-main {
  width: 350px;
}

.worker-extra {
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.worker-schedule {
  margin-bottom: 40px;
}

@media all and (max-width: 600px) {
  .worker-page {
    display: block;
  }

  .worker-main {
    width: 100%;
  }

  .worker-extra {
    margin: 40px 0 0;
  }
}
</style>
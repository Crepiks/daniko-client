<template>
  <div class="worker-page">
    <div class="worker-main">
      <worker-info
        :name="worker.lastName + ' ' + worker.firstName"
        :job="worker.branch"
        :description="worker.description"
        :image-path="
          worker.image ? baseUrl + worker.image.path : defaultWorkerImage
        "
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
import defaultWorkerImage from '@/static/images/default-worker-image.png'
import { getWorker } from '@/requests/workers.js'
import config from '@/config/config'

export default {
  components: {
    'worker-info': WorkerInfo,
    schedule: Schedule,
    services: Services,
  },

  data: () => ({
    baseUrl: config.apiUrl,
    defaultWorkerImage: defaultWorkerImage,
  }),

  async asyncData({ params, $axios }) {
    const worker = await getWorker(params.workerId, $axios)
    return worker
  },
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

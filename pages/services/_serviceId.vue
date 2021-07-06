<template>
  <div class="service-page">
    <div class="service-main">
      <service-info
        :title="service.title"
        :description="service.description"
        :images="service.images"
      />
    </div>
    <div class="service-extra">
      <schedule class="service-schedule" :schedule="service.schedule" />
      <workers :workers="service.workers" />
    </div>
  </div>
</template>

<script>
import ServiceInfo from '@/components/services/service-info/service-info'
import Schedule from '@/components/common/schedule/schedule'
import Workers from '@/components/services/workers/workers'
import { getService } from '@/requests/services.js'

export default {
  components: {
    'service-info': ServiceInfo,
    schedule: Schedule,
    workers: Workers,
  },

  async asyncData({ params, $axios }) {
    const service = await getService(params.serviceId, $axios)
    return service
  },
}
</script>

<style lang="scss" scoped>
.service-page {
  padding: 30px 0 0 0;
  display: flex;
}

.service-main {
  width: 350px;
}

.service-extra {
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.service-schedule {
  margin-bottom: 40px;
}

@media all and (max-width: 600px) {
  .service-page {
    display: block;
  }

  .service-main {
    width: 100%;
  }

  .service-extra {
    margin: 40px 0 0;
  }
}
</style>

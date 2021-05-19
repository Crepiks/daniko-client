<template>
  <div class="service-page">
    <div class="service-main">
      <service-info
        :name="service.name"
        :description="service.description"
        :image-path="service.imagePath"
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
import service from '@/data/service.js'

export default {
  components: {
    'service-info': ServiceInfo,
    schedule: Schedule,
    workers: Workers,
  },
  data: () => ({
    service: service,
  }),
}
</script>

<style lang="scss" scoped>
.service-page {
  padding: 30px 0 0 0;
  display: flex;
}

.service-main {
  width: 250px;
}

.service-extra {
  width: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.service-schedule {
  margin-bottom: 50px;
}
</style>
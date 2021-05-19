<template>
  <div class="service-page">
    <div class="service-main">
      <daniko-service-main-info
        :imagePath="service.imagePath"
        :name="service.name"
        :description="service.description"
      />
    </div>
    <div class="service-extra">
      <daniko-schedule class="service-schedule" :schedule="service.schedule" />
      <daniko-workers-provided-service
        :providedWorkers="service.providedWorkers"
      />
    </div>
  </div>
</template>

<script>
import DanikoServiceMainInfo from '@/components/service/service-main-info/daniko-service-main-info.vue'
import DanikoSchedule from '@/components/common/schedule/daniko-schedule.vue'
import DanikoWorkersProvidedService from '@/components/service/workers-provided-service/daniko-workers-provided-service.vue'
import service from '@/data/service.js'

export default {
  components: {
    'daniko-service-main-info': DanikoServiceMainInfo,
    'daniko-schedule': DanikoSchedule,
    'daniko-workers-provided-service': DanikoWorkersProvidedService,
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
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.service-schedule {
  margin-bottom: 50px;
}
</style>
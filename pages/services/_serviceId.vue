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
import danikoServiceMainInfo from '@/components/service/service-main-info/daniko-service-main-info.vue'
import danikoSchedule from '@/components/common/schedule/daniko-schedule.vue'
import danikoWorkersProvidedService from '@/components/service/workers-provided-service/daniko-workers-provided-service.vue'
import service from '@/data/service.js'

export default {
  components: {
    'daniko-service-main-info': danikoServiceMainInfo,
    'daniko-schedule': danikoSchedule,
    'daniko-workers-provided-service': danikoWorkersProvidedService,
  },

  data() {
    return {
      service: service,
    }
  },
}
</script>

<style lang="scss" scoped>
.service {
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
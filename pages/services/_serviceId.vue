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
      <daniko-schedule class="service-schedule" :schedule="schedule" />
      <daniko-workers-provided-service />
    </div>
  </div>
</template>

<script>
import danikoServiceMainInfo from '@/components/service/service-main-info/daniko-service-main-info.vue'
import testServiceImage from '@/static/images/test-service-image.jpg'
import danikoSchedule from '@/components/common/schedule/daniko-schedule.vue'
import danikoWorkersProvidedService from '@/components/service/workers-provided-service/daniko-workers-provided-service.vue'

export default {
  components: {
    'daniko-service-main-info': danikoServiceMainInfo,
    'daniko-schedule': danikoSchedule,
    'daniko-workers-provided-service': danikoWorkersProvidedService,
  },

  data() {
    return {
      service: {
        imagePath: testServiceImage,
        name: 'Рентген',
        description:
          'Для проведения ренгена Daniko использует лучшую аппаратуру завезенную из-за границы',
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
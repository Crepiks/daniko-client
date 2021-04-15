<template>
  <div class="services-page">
    <h1 class="services-title">Услуги</h1>
    <daniko-services-grid :services="mock" />
  </div>
</template>

<script>
import danikoServicesGrid from '@/components/services/services-grid/daniko-services-grid'
import testServiceImage from '@/static/images/test-service-image.jpg'

export default {
  components: {
    'daniko-services-grid': danikoServicesGrid,
  },

  data() {
    return {
      mock: [
        {
          id: 1,
          name: 'Обследование',
          imagePath: testServiceImage,
        },
        {
          id: 2,
          name: 'Рентген',
          imagePath: testServiceImage,
        },
        {
          id: 3,
          name: 'Покрытие гипсом',
          imagePath: testServiceImage,
        },
        {
          id: 4,
          name: 'ЭКГ обследование',
          imagePath: testServiceImage,
        },
        {
          id: 5,
          name: 'Обследование',
          imagePath: testServiceImage,
        },
        {
          id: 6,
          name: 'Рентген',
          imagePath: testServiceImage,
        },
        {
          id: 7,
          name: 'Покрытие гипсом',
          imagePath: testServiceImage,
        },
        {
          id: 8,
          name: 'ЭКГ обследование',
          imagePath: testServiceImage,
        },
        {
          id: 9,
          name: 'Покрытие гипсом',
          imagePath: testServiceImage,
        },
        {
          id: 10,
          name: 'ЭКГ обследование',
          imagePath: testServiceImage,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.services {
  &-page {
    padding-bottom: 100px;
  }
  
  &-title {
    padding: 50px 0;
    font-size: 40px;
  }
}
</style>
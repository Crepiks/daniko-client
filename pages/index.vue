<template>
  <div class="home-page">
    <daniko-welcome />
    <daniko-services-section />
    <daniko-workers-section />
  </div>
</template>

<script>
import danikoWelcome from '@/components/home/welcome/daniko-welcome'
import danikoServicesSection from '@/components/home/services-section/daniko-services-section'
import danikoWorkersSection from '@/components/home/workers-section/daniko-workers-section'

export default {
  components: {
    'daniko-welcome': danikoWelcome,
    'daniko-services-section': danikoServicesSection,
    'daniko-workers-section': danikoWorkersSection,
  },
}
</script>

<style lang="scss" scoped>
</style>
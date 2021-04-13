<template>
  <div class="home-page">
    <daniko-welcome />
    <daniko-services-section />
  </div>
</template>

<script>
import danikoWelcome from '@/components/home/welcome/daniko-welcome'
import danikoServicesSection from '@/components/home/services-section/daniko-services-section'

export default {
  components: {
    'daniko-welcome': danikoWelcome,
    'daniko-services-section': danikoServicesSection,
  },
}
</script>

<style lang="scss" scoped>
</style>
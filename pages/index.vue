<template>
  <div class="home-page">
    <daniko-welcome />
    <daniko-services-section />
    <daniko-workers-section />
    <daniko-reviews />
  </div>
</template>

<script>
import danikoWelcome from '@/components/home/welcome/daniko-welcome'
import danikoServicesSection from '@/components/home/services-section/daniko-services-section'
import danikoWorkersSection from '@/components/home/workers-section/daniko-workers-section'
import danikoReviews from '@/components/home/reviews/daniko-reviews'

export default {
  components: {
    'daniko-welcome': danikoWelcome,
    'daniko-services-section': danikoServicesSection,
    'daniko-workers-section': danikoWorkersSection,
    'daniko-reviews': danikoReviews,
  },
}
</script>

<style lang="scss" scoped>
</style>
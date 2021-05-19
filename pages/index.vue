<template>
  <div class="home-page">
    <daniko-welcome />
    <daniko-services />
    <daniko-workers />
    <daniko-reviews />
  </div>
</template>

<script>
import DanikoWelcome from '@/components/home/welcome/daniko-welcome'
import DanikoServices from '@/components/home/services/daniko-services'
import DanikoWorkers from '@/components/home/workers/daniko-workers'
import DanikoReviews from '@/components/home/reviews/daniko-reviews'

export default {
  components: {
    'daniko-welcome': DanikoWelcome,
    'daniko-services': DanikoServices,
    'daniko-workers': DanikoWorkers,
    'daniko-reviews': DanikoReviews,
  },
}
</script>
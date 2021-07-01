<template>
  <div class="home-page">
    <daniko-welcome />
    <daniko-services :services="services.services" />
    <daniko-workers :workers="workers.workers" />
    <daniko-reviews />
  </div>
</template>

<script>
import DanikoWelcome from '@/components/home/welcome/daniko-welcome'
import DanikoServices from '@/components/home/services/daniko-services'
import DanikoWorkers from '@/components/home/workers/daniko-workers'
import DanikoReviews from '@/components/home/reviews/daniko-reviews'
import { getWorkers } from '@/requests/workers'
import { getServices } from '@/requests/services'

export default {
  components: {
    'daniko-welcome': DanikoWelcome,
    'daniko-services': DanikoServices,
    'daniko-workers': DanikoWorkers,
    'daniko-reviews': DanikoReviews,
  },
  async asyncData({ params, $axios }) {
    const [workersData, servicesData] = await Promise.all([
      getWorkers($axios),
      getServices($axios),
    ])
    return { workers: workersData, services: servicesData }
    return workers
  },
}
</script>

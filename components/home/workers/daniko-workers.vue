<template>
  <section class="workers">
    <div class="workers__header">
      <h2 class="workers__title">Специалисты</h2>
      <nuxt-link class="workers__link" to="/workers">
        <span class="workers__link-label">Все специалисты</span>
        <i class="bx bx-right-arrow-alt workers__link-icon"></i>
      </nuxt-link>
    </div>
    <div class="workers__cards">
      <worker-card
        v-for="worker in workersRow"
        :id="worker.id"
        :key="worker.id"
        :image-path="
          worker.image.path ? baseUrl + worker.image.path : defaultWorkerImage
        "
        :name="worker.firstName + ' ' + worker.lastName"
        :job="worker.branch"
      />
    </div>
  </section>
</template>

<script>
import WorkerCard from '@/components/workers/worker-card/worker-card'
import defaultWorkerImage from '@/static/images/default-worker-image.png'
import config from '@/config/config'

export default {
  props: {
    workers: {
      type: Array,
      required: true,
    },
  },

  components: {
    'worker-card': WorkerCard,
  },

  data: () => ({
    defaultWorkerImage: defaultWorkerImage,
    baseUrl: config.apiUrl,
  }),

  computed: {
    workersRow() {
      return this.workers.slice(0, 4)
    },
  },
}
</script>

<style lang="scss" scoped>
.workers {
  margin: auto;
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.workers__header {
  margin-bottom: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.workers__title {
  color: $main-dark;
  font-size: 25px;
}

.workers__cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 350px;
  column-gap: 20px;
  row-gap: 20px;
}

.workers__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 200ms ease-in-out;
  cursor: pointer;
}

.workers__link:hover {
  opacity: 0.7;
}

.workers__link-label {
  margin-right: 10px;
  color: $primary;
  font-size: 18px;
  font-weight: 600;
}

.workers__link-icon {
  color: $primary;
  font-size: 20px;
}

@media (max-width: 1024px) {
  .workers__title {
    font-size: 30px;
  }

  .workers__link-label {
    font-size: 20px;
  }

  .workers__link-icon {
    font-size: 26px;
  }
}

@media (max-width: 900px) {
  .workers__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .workers__header {
    margin-bottom: 30px;
  }

  .workers__title {
    font-size: 24px;
  }

  .workers__link-label {
    font-size: 16px;
  }

  .workers__cards {
    grid-auto-rows: 200px;
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>

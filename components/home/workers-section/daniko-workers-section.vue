<template>
  <section class="workers">
    <div class="workers-header">
      <h2 class="workers-title">Специалисты</h2>
      <nuxt-link class="link" to="/workers">
        <span class="link-label">Ко всем специалистам</span>
        <i class="bx bx-right-arrow-alt link-icon"></i>
      </nuxt-link>
    </div>
    <div class="workers-cards">
      <daniko-worker-card
        v-for="worker in workersRow"
        :key="worker.id"
        :imagePath="worker.imagePath"
        :name="worker.name"
        :job="worker.job"
        :id="worker.id"
      />
    </div>
  </section>
</template>

<script>
import danikoWorkerCard from '@/components/common/worker-card/daniko-worker-card'
import workers from '@/data/workers.js'

export default {
  components: {
    'daniko-worker-card': danikoWorkerCard,
  },
  data() {
    return {
      workers: workers,
    }
  },

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

  &-header {
    margin-bottom: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-title {
    color: $main-dark;
    font-size: 25px;
  }

  &-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
}

.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &-label {
    margin-right: 10px;
    color: $primary;
    font-size: 18px;
    font-weight: 600;
  }

  &-icon {
    color: $primary;
    font-size: 20px;
  }
}
</style>
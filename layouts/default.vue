<template>
  <div class="page">
    <div class="page-container">
      <daniko-header />
      <nuxt />
    </div>
    <daniko-footer />
  </div>
</template>

<script>
import danikoHeader from '@/components/common/header/daniko-header'
import danikoFooter from '@/components/common/footer/daniko-footer'

export default {
  components: {
    'daniko-header': danikoHeader,
    'daniko-footer': danikoFooter,
  },
}
</script>

<style lang="scss">
.page {
  margin: auto;
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .page {
    max-width: auto;
    padding: 0 20px;
  }
}

@media (max-width: 400px) {
  .page {
    max-width: auto;
    padding: 0 10px;
  }
}
</style>
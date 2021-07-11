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
import Header from '@/components/common/header/header'
import Footer from '@/components/common/footer/footer'

export default {
  components: {
    'daniko-header': Header,
    'daniko-footer': Footer,
  },
}
</script>

<style lang="scss">
.page {
  margin: auto;
  max-width: 1000px;
  min-height: 100vh;
  box-sizing: border-box;
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
    padding: 0 14px;
  }
}
</style>
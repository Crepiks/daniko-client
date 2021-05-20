<template>
  <div class="main-info">
    <div
      class="main-info-image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <h1 class="main-info-title">{{ name }}</h1>
    <h3 class="main-info-subtitle">{{ job }}</h3>
    <p class="main-info-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  color: $main-dark;
}

.main-info-image {
  margin: 0 0 20px 0;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-position: center top;
}

.main-info-title {
  margin: 0 0 5px 0;
  font-size: 25px;
}

.main-info-subtitle {
  margin: 0 0 10px 0;
  font-size: 16px;
}

.main-info-description {
  font-size: 16px;
  font-weight: lighter;
  line-height: 130%;
  opacity: 0.8;
}
</style>
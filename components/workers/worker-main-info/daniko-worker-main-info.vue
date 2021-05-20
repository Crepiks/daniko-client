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
  width: 250px;
  display: flex;
  flex-direction: column;
  color: $main-dark;

  &-image {
    margin: 0 0 20px 0;
    width: 250px;
    height: 270px;
    border-radius: 10px;
    background-size: cover;
    background-position: center top;
  }

  &-title {
    margin: 0 0 5px 0;
    font-size: 25px;
  }

  &-subtitle {
    margin: 0 0 10px 0;
    font-size: 16px;
  }

  &-description {
    font-size: 16px;
    font-weight: lighter;
    line-height: 130%;
    opacity: 0.8;
  }
}
</style>
<template>
  <div class="main-info">
    <div
      class="main-info__image"
      :style="{
        backgroundImage: `url(${
          images.length > 0 ? baseUrl + images[0].path : defaultServiceImage
        })`,
      }"
    ></div>
    <h1 class="main-info__title">{{ title }}</h1>
    <p class="main-info__description">{{ description }}</p>
  </div>
</template>

<script>
import config from '@/config/config'
import defaultServiceImage from '@/static/images/default-service-image.png'

export default {
  props: {
    images: {
      type: Array,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    baseUrl: config.apiUrl,
    defaultServiceImage: defaultServiceImage,
  }),
}
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  color: $main-dark;
}

.main-info__image {
  margin: 0 0 20px 0;
  height: 270px;
  border-radius: 10px;
  background-size: cover;
  background-position: center top;
}

.main-info__title {
  margin: 0 0 10px 0;
  font-size: 25px;
}

.main-info__description {
  font-size: 16px;
  font-weight: lighter;
  line-height: 130%;
  opacity: 0.8;
}
</style>

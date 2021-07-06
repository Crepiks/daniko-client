<template>
  <div class="main-info">
    <div
      class="main-info__image"
      :style="{
        backgroundImage: `url(${
          images.length > 0 ? baseUrl + activeImage : defaultServiceImage
        })`,
      }"
    ></div>
    <div class="main-info__images">
      <div
        class="main-info__image-small"
        v-for="image in images"
        :key="image.id"
        :style="{ backgroundImage: `url(${baseUrl + image.path})` }"
        @click="activeImage = image.path"
      ></div>
    </div>
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
    activeImage: '',
  }),

  mounted() {
    this.images.length > 0
      ? (this.activeImage = this.images[0].path)
      : (this.activeImage = this.defaultServiceImage)
  },
}
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  color: $main-dark;
}

.main-info__image {
  margin-bottom: 10px;
  height: 270px;
  border-radius: 10px;
  background-size: cover;
  background-position: center top;
  background-color: #dbdbdb;
}

.main-info__images {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.main-info__image-small {
  margin-right: 12px;
  margin-bottom: 10px;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  background-size: cover;
  cursor: pointer;
  transition: 200ms ease-in-out;
  background-color: #dbdbdb;

  &:hover {
    opacity: 0.7;
  }
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

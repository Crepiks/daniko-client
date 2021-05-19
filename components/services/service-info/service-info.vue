<template>
  <div class="main-info">
    <div
      class="main-info__image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <h1 class="main-info__title">{{ name }}</h1>
    <p class="main-info__description">{{ description }}</p>
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
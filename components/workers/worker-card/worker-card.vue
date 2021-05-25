<template>
  <nuxt-link :to="`/workers/${id}`" class="worker-card">
    <div
      class="worker-card__image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="worker-card__text">
      <h3 class="worker-card__title">{{ name }}</h3>
      <span class="worker-card__subtitle">{{ job }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.worker-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fafafd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  text-decoration: none;
  overflow: hidden;
  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
}

.worker-card__image {
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center top;
}

.worker-card__text {
  position: relative;
  width: 100%;
  height: 30%;
  padding: 5%;
  box-sizing: border-box;
}

.worker-card__title {
  margin-bottom: 3px;
  color: $main-dark;
  font-size: 18px;
  font-weight: 500;
}

.worker-card__subtitle {
  color: $main-dark;
  font-size: 14px;
  font-weight: 400;
}

@media all and (max-width: 500px) {
  .worker-card {
    &:hover {
      transform: none;
    }
  }

  .worker-card__title {
    margin: 0;
    font-size: 14px;
  }

  .worker-card__subtitle {
    font-size: 10px;
  }
}
</style>

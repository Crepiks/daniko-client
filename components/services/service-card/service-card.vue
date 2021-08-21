<template>
  <nuxt-link :to="`/services/${id}`" class="service-card">
    <div
      class="service-card__image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="service-card__text">
      <h3 class="service-card__title">{{ name }}</h3>
      <p class="service-card__price">{{ price > 0 ? price + ' тг' : '' }}</p>
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
    id: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.service-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  text-decoration: none;
  transition: 150ms ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
}

.service-card__image {
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center top;
}

.service-card__text {
  position: relative;
  width: 100%;
  height: 30%;
  padding: 5%;
  box-sizing: border-box;
}

.service-card__title {
  color: $main-dark;
  font-size: 18px;
  font-weight: 500;
}

.service-card__price {
  margin-top: 10px;
  color: $main-dark;
  font-size: 16px;
}

@media all and (max-width: 500px) {
  .service-card {
    &:hover {
      transform: none;
    }
  }

  .service-card__title {
    font-size: 14px;
  }
}
</style>

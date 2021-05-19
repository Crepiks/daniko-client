<template>
  <div class="service-card">
    <div
      class="service-card__image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="service-card__text">
      <h3 class="service-card__title">{{ name }}</h3>
      <nuxt-link :to="`/services/${id}`" class="service-card__link">
        <span class="service-card__link-label">Подробнее</span>
        <i class="service-card__link-icon bx bx-right-arrow-alt"></i>
      </nuxt-link>
    </div>
  </div>
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

.service-card__link {
  position: absolute;
  bottom: 17%;
  right: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ease-in-out;
}

.service-card__link:hover {
  opacity: 0.7;
}

.service-card__link-label {
  margin-right: 5px;
  color: $primary;
  font-size: 14px;
}

.service-card__link-icon {
  color: $primary;
  font-size: 20px;
}

@media all and (max-width: 500px) {
  .service-card__title {
    font-size: 14px;
  }

  .service-card__link-label {
    font-size: 12px;
  }

  .service-card__link-icon {
    font-size: 16px;
  }
}
</style>
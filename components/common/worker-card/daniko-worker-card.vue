<template>
  <div class="card">
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${imagePath})` }"
    ></div>
    <div class="card-text">
      <h3 class="card-title">{{ name }}</h3>
      <span class="card-subtitle">{{ job }}</span>
      <div class="card-link link">
        <span class="link-label">Подробнее</span>
        <i class="link-icon bx bx-right-arrow-alt"></i>
      </div>
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
    job: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fafafd;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  &-image {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center top;
  }

  &-text {
    position: relative;
    width: 100%;
    height: 30%;
    padding: 5%;
    box-sizing: border-box;
  }

  &-title {
    color: $main-dark;
    font-size: 16px;
    font-weight: 500;
  }

  &-subtitle {
    color: $main-dark;
    font-size: 13px;
    font-weight: 400;
  }

  &-link {
    position: absolute;
    bottom: 15%;
    right: 5%;
  }
}

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-label {
    margin-right: 5px;
    color: $primary;
    font-size: 14px;
  }

  &-icon {
    color: $primary;
    font-size: 20px;
  }
}
</style>
<template>
  <div class="short-card">
    <h3 class="short-card-title">{{ title }}</h3>
    <span v-if="job" class="short-card-subtitle">{{ job }}</span>
    <div class="short-card-link link">
      <span class="link-label">Подробнее</span>
      <i class="link-icon bx bx-right-arrow-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    job: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.short-card {
  position: relative;
  padding: 15px 20px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 80px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: $white;

  &-title {
    color: $main-dark;
    margin: none;
    font-size: 16px;
    font-weight: 500;
  }

  &-subtitle {
    color: $main-dark;
    margin-top: 5px;
    font-size: 12px;
  }

  &-link {
    position: absolute;
    bottom: 15px;
    right: 15px;
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
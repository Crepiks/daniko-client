<template>
  <div class="header">
    <div class="header-logo">
      <daniko-logo />
    </div>
    <div class="links">
      <nuxt-link class="link" to="">Услуги</nuxt-link>
      <nuxt-link class="link" to="">Специалисты</nuxt-link>
      <nuxt-link class="link" to="">Фотогалерея</nuxt-link>
      <nuxt-link class="link" to="">Контакты</nuxt-link>
    </div>
  </div>
</template>

<script>
import danikoLogo from '@/components/common/daniko-logo.vue'

export default {
  components: {
    'daniko-logo': danikoLogo,
  },
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &-logo {
    height: 50%;
    cursor: pointer;
  }
}

.links {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
}

.link {
  color: $main-dark;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}
</style>
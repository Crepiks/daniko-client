<template>
  <header class="header">
    <div class="header-logo">
      <daniko-logo />
    </div>
    <div class="header-links">
      <nuxt-link class="header-link" to="/home">Главная</nuxt-link>
      <nuxt-link class="header-link" to="/services">Услуги</nuxt-link>
      <nuxt-link class="header-link" to="/workers">Специалисты</nuxt-link>
      <nuxt-link class="header-link" to="/gallery">Фотогалерея</nuxt-link>
      <nuxt-link class="header-link" to="/about">О Данико</nuxt-link>
      <nuxt-link class="header-link" to="/contacts">Контакты</nuxt-link>
    </div>
    <i
      class="bx header-menu-icon"
      :class="{ 'bx-menu': !isMobileMenuOpen, 'bx-x': isMobileMenuOpen }"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    ></i>
    <div
      class="header-menu"
      :class="{ 'header-menu-active': isMobileMenuOpen }"
    >
      <div class="header-menu-links">
        <nuxt-link class="header-menu-link" to="/home">Главная</nuxt-link>
        <nuxt-link class="header-menu-link" to="/services">Услуги</nuxt-link>
        <nuxt-link class="header-menu-link" to="/workers"
          >Специалисты</nuxt-link
        >
        <nuxt-link class="header-menu-link" to="/gallery"
          >Фотогалерея</nuxt-link
        >
        <nuxt-link class="header-menu-link" to="/about">О Данико</nuxt-link>
        <nuxt-link class="header-menu-link" to="/contacts">Контакты</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/common/logo/logo'

export default {
  components: {
    'daniko-logo': Logo,
  },
  data: () => ({
    isMobileMenuOpen: false,
  }),
  watch: {
    $route() {
      this.isMobileMenuOpen = false
    },
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
    height: 40px;
    cursor: pointer;
  }

  &-links {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &-link {
    color: $main-dark;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    transition: 200ms ease-in-out;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  &-menu {
    display: none;

    &-icon {
      display: none;
    }
  }
}

.nuxt-link-active {
  color: $primary !important;
}

@media (max-width: 1024px) {
  .header {
    &-links {
      display: none;
    }

    &-menu {
      position: fixed;
      right: -400px;
      top: 0;
      padding: 40px;
      height: 100vh;
      width: 380px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      background-color: $white;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
      transition: 400ms ease-in-out;
      z-index: 4;

      &-active {
        transform: translateX(-380px);
      }

      &-icon {
        position: relative;
        display: block;
        font-size: 38px;
        cursor: pointer;
        transition: 200ms ease-in-out;
        z-index: 5;

        &:hover {
          opacity: 0.5;
        }
      }

      &-links {
        padding-top: 80px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }

      &-link {
        margin-bottom: 30px;
        color: $main-dark;
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>

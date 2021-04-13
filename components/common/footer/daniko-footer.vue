<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-socials">
        <a class="social-link" href="#">
          <div class="footer-social social">
            <div class="social-icon-container">
              <img
                src="@/static/icons/instagram-icon.svg"
                alt="Instagram"
                class="social-icon"
              />
            </div>
            <span class="social-label">Instagram</span>
          </div>
        </a>
        <a class="social-link" href="#">
          <div class="footer-social social">
            <div class="social-icon-container">
              <img
                src="@/static/icons/facebook-icon.svg"
                alt="Facebook"
                class="social-icon"
              />
            </div>
            <span class="social-label">Facebook</span>
          </div>
        </a>
      </div>
      <div class="footer-links">
        <nuxt-link class="footer-link" to="/services">Услуги</nuxt-link>
        <nuxt-link class="footer-link" to="/workers">Специалисты</nuxt-link>
        <nuxt-link class="footer-link" to="/galery">Фотогалерея</nuxt-link>
        <nuxt-link class="footer-link" to="/contacts">Контакты</nuxt-link>
      </div>
    </div>
    <div class="footer-copyright">
      Copyright {{ getCurrentYear }}. Все права защищены.
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getCurrentYear() {
      const year = new Date()
      return year.getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 150px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;

  &-main {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-socials {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
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

    &:hover {
      opacity: 0.7;
    }
  }

  &-copyright {
    color: $main-dark;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.6;
  }
}

.social {
  display: flex;
  align-items: center;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &-link {
    text-decoration: none;
  }

  &-icon {
    height: 60%;
    width: 60%;
    background: transparent;

    &-container {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: $primary;
    }
  }

  &-label {
    color: $main-dark;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
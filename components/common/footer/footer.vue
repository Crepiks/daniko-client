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
  padding-top: 50px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
}

.footer-main {
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer-socials {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

.footer-copyright {
  color: $main-dark;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.6;
}

.social {
  display: flex;
  align-items: center;
  transition: 200ms ease-in-out;
}

.social:hover {
  opacity: 0.7;
}

.social-link {
  text-decoration: none;
}

.social-icon {
  height: 60%;
  width: 60%;
  background: transparent;
}

.social-icon-container {
  margin-right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: $primary;
}

.social-label {
  color: $main-dark;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .social-icon-container {
    width: 45px;
    height: 45px;
  }
}
</style>

<template>
  <section class="welcome">
    <div class="welcome-text">
      <h1 class="welcome-title">
        Профессиональное лечение от лучших
        <span class="welcome-title welcome-important">специалистов</span>
      </h1>
      <p class="welcome-paragraph">
        Профессиональное лечение по всем направлениям от лучших специалистов в
        Таразе
      </p>
      <daniko-button to="services">К услугам</daniko-button>
    </div>
    <img
      src="@/static/images/welcome-image.svg"
      alt="Daniko"
      class="welcome-image"
    />
  </section>
</template>

<script>
import DanikoButton from '@/components/common/button/button'

export default {
  components: {
    'daniko-button': DanikoButton,
  },
}
</script>

<style lang="scss" scoped>
.welcome {
  padding-top: 12%;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.welcome-text {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-title {
  margin-bottom: 15px;
  color: $main-dark;
  font-size: 40px;
  font-weight: bold;
}

.welcome-important {
  color: $primary;
}

.welcome-paragraph {
  margin-bottom: 35px;
  color: $main-dark;
  font-size: 18px;
  opacity: 0.6;
}

@media (max-width: 1024px) {
  .welcome {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .welcome-text {
    width: 70%;
    text-align: center;
  }

  .welcome-image {
    width: 50%;
    margin-bottom: 50px;
  }

  .welcome-title {
    margin-bottom: 10px;
    font-size: 36px;
  }

  .welcome-paragraph {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 130%;
  }
}

@media (max-width: 700px) {
  .welcome-text {
    width: 80%;
    text-align: center;
  }

  .welcome-image {
    width: 70%;
    margin-bottom: 50px;
  }
}

@media (max-width: 500px) {
  .welcome-text {
    width: 90%;
    text-align: center;
  }

  .welcome-image {
    width: 80%;
    margin-bottom: 50px;
  }

  .welcome-title {
    font-size: 30px;
  }

  .welcome-paragraph {
    font-size: 16px;
  }
}
</style>

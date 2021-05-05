<template>
  <section class="welcome">
    <div class="welcome-content">
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
    </div>
  </section>
</template>

<script>
import danikoButton from '@/components/common/button/daniko-button'

export default {
  components: {
    'daniko-button': danikoButton,
  },
}
</script>

<style lang="scss" scoped>
.welcome {
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);

  &-content {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-text {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-title {
    margin-bottom: 15px;
    color: $main-dark;
    font-size: 40px;
    font-weight: bold;
  }

  &-important {
    color: $primary;
  }

  &-paragraph {
    margin-bottom: 35px;
    color: $main-dark;
    font-size: 22px;
    opacity: 0.6;
  }
}

@media (max-width: 1024px) {
  .welcome {
    &-content {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

    &-image {
      margin-bottom: 50px;
    }

    &-text {
      margin: 0;
      width: 80%;
      text-align: center;
    }

    &-title {
      margin-bottom: 30px;
      font-size: 45px;
    }

    &-paragraph {
      margin-bottom: 60px;
      font-size: 28px;
      line-height: 130%;
    }
  }
}
</style>

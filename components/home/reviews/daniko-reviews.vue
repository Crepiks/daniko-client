<template>
  <section class="reviews">
    <h2 class="reviews-title">Отзывы наших клиентов</h2>
    <div class="swiper-container">
      <i class="swiper-button bx bx-chevron-left" slot="button-prev"></i>
      <swiper ref="reviewsSwiper" class="swiper" :swiperOptions="swiperOption">
        <swiper-slide class="slide">
          <p class="slide-text">
            Заболел коронавирусом и Данико меня вылечил. Снова могу есть, пить и
            писать комментарии в интернете, спасибо медицинскому центру Данико
            за помощь и лечение!
          </p>
          <span class="slide-author">Меркулов Сергей</span>
        </swiper-slide>
        <swiper-slide class="slide">
          <p class="slide-text">
            Вылечил детей в Данико, быстро и качественно. Спасибо за лечение!
          </p>
          <span class="slide-author">Арыстанов Айбек</span>
        </swiper-slide>
        <swiper-slide class="slide">
          <p class="slide-text">
            Рада, что нашла Данико. Прошла полное обследование и узнала о
            серьезной болезни, которую сразу там же и вылечила.
          </p>
          <span class="slide-author">Айтханова Айлара</span>
        </swiper-slide>
      </swiper>
      <i class="swiper-button bx bx-chevron-right" slot="button-next"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.bx-chevron-right',
          prevEl: '.bx-chevron-left',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.reviewsSwiper.$swiper
    },
  },
}
</script>

<style lang="scss" scoped>
.reviews {
  padding: 100px 0;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    margin-bottom: 45px;
    color: $main-dark;
    font-size: 25px;
  }
}

.swiper {
  width: 100% !important;
  &-container {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  &-button {
    color: $main-dark;
    font-size: 40px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
}

.slide {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &-text {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    line-height: 130%;
  }

  &-author {
    color: $main-dark;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
  }
}
</style>
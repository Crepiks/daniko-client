<template>
  <section class="reviews">
    <h2 class="reviews-title">Отзывы наших клиентов</h2>
    <div class="swiper-container">
      <i
        class="swiper-button bx bx-chevron-left"
        :class="{ 'swiper-button-disabled': activeReview == 1 }"
        @click="previous"
      ></i>
      <div class="swiper">
        <transition name="fade" mode="out-in">
          <div class="slide" v-if="activeReview == 1" key="1">
            <p class="slide-text">
              {{ reviews[0].review }}
            </p>
            <span class="slide-author">{{ reviews[0].author }}</span>
          </div>
          <div class="slide" v-else-if="activeReview == 2" key="2">
            <p class="slide-text">
              {{ reviews[1].review }}
            </p>
            <span class="slide-author">{{ reviews[1].author }}</span>
          </div>
          <div class="slide" v-else-if="activeReview == 3" key="3">
            <p class="slide-text">
              {{ reviews[2].review }}
            </p>
            <span class="slide-author">{{ reviews[2].author }}</span>
          </div>
        </transition>
      </div>
      <i
        class="swiper-button bx bx-chevron-right"
        :class="{ 'swiper-button-disabled': activeReview == 3 }"
        @click="next"
      ></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          review:
            'Заболел коронавирусом и Данико меня вылечил. Снова могу есть, пить и писать комментарии в интернете, спасибо медицинскому центру Данико за помощь и лечение!',
          author: 'Меркулов Сергей',
        },
        {
          id: 2,
          review:
            'Вылечил детей в Данико, быстро и качественно. Спасибо за лечение!',
          author: 'Арыстанов Айбек',
        },
        {
          id: 3,
          review:
            'Рада, что нашла Данико. Прошла полное обследование и узнала о серьезной болезни, которую сразу там же и вылечила.',
          author: 'Айтханова Айлара',
        },
      ],
      activeReview: 1,
    }
  },

  methods: {
    previous() {
      if (this.activeReview != 1) {
        this.activeReview--
      }
    },

    next() {
      if (this.activeReview != 3) {
        this.activeReview++
      }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    outline: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }

    &-disabled {
      opacity: 0.5;
      cursor: default;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}

.slide {
  width: 100% !important;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

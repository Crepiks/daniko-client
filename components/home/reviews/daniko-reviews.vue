<template>
  <section class="reviews">
    <h2 class="reviews-title">Отзывы наших клиентов</h2>
    <div class="swiper">
      <i class="swiper-button bx bx-chevron-left"></i>
      <div class="slide">
        <p class="slide-text">
          Заболел коронавирусом и Данико меня вылечил. Снова могу есть, пить и
          писать комментарии в интернете, спасибо медицинскому центру Данико за
          помощь и лечение!
        </p>
        <span class="slide-author">Меркулов Сергей</span>
      </div>
      <i class="swiper-button bx bx-chevron-right"></i>
    </div>
  </section>
</template>

<script>
export default {}
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
  padding: 0 45px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
<template>
  <div class="contacts-page">
    <div class="contacts-text">
      <h1 class="contacts-title">Свяжитесь с нами</h1>
      <div class="contact">
        <span class="contact-label">Номер телефона:</span>
        <span class="contact-data">+7 (707)-205-07-16</span>
      </div>
      <div class="contact">
        <span class="contact-label">Электронная почта:</span>
        <span class="contact-data">daniko@mail.ru</span>
      </div>
      <div class="contact">
        <span class="contact-label">Почтовый индекс:</span>
        <span class="contact-data">080020</span>
      </div>
      <div class="contact">
        <span class="contact-label">Адрес:</span>
        <span class="contact-data">ул. Пушкина, дом 21</span>
      </div>
      <div class="map">
        <yandex-map
          :coords="mapCoords"
          :zoom="mapZoom"
          style="width: 100%; height: 100%"
        >
          <ymap-marker marker-id="1" :coords="markerCoords"></ymap-marker>
        </yandex-map>
      </div>
    </div>
    <img
      src="@/static/images/contacts-image.svg"
      alt="Контакты"
      class="contacts-image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapCoords: [42.890259, 71.341873],
      mapZoom: 16,
      markerCoords: [42.890259, 71.341873],
    }
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  &-page {
    margin: 30px 0 0 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-title {
    margin: none;
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 30px;
    font-weight: 700;
  }

  &-image {
    width: 50%;
  }
}

.contact {
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $main-dark;
  font-size: 18px;

  &-label {
    margin-right: 10px;
  }

  &-data {
    color: $primary;
  }
}

.map {
  margin-top: 30px;
  width: 350px;
  height: 250px;
  border-radius: 10px;
  background-color: #dbdbdb;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}
</style>
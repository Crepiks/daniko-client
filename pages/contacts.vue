<template>
  <div class="contacts-page">
    <div class="contacts-text">
      <h1 class="contacts-title">Свяжитесь с нами</h1>
      <div class="contact">
        <span class="contact-label">Номер телефона:</span>
        <span class="contact-data">{{ contacts.phone || '—' }}</span>
      </div>
      <div class="contact">
        <span class="contact-label">Электронная почта:</span>
        <span class="contact-data">{{ contacts.email || '—' }}</span>
      </div>
      <div class="contact">
        <span class="contact-label">Почтовый индекс:</span>
        <span class="contact-data">{{ contacts.postIndex || '—' }}</span>
      </div>
      <div class="contact">
        <span class="contact-label">Адрес:</span>
        <span class="contact-data">{{ contacts.address || '—' }}</span>
      </div>
      <div class="map">
        <yandex-map
          :coords="contacts.lat ? [contacts.lat, contacts.lon] : [0, 0]"
          :zoom="16"
          style="width: 100%; height: 100%"
        >
          <ymap-marker
            marker-id="1"
            :coords="contacts.lat ? [contacts.lat, contacts.lon] : [0, 0]"
          ></ymap-marker>
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
import { getContacts } from '@/requests/contacts.js'

export default {
  async asyncData({ params, $axios }) {
    const contacts = await getContacts($axios)
    return contacts
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts-page {
  margin: 30px 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contacts-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contacts-title {
  margin: none;
  margin-bottom: 20px;
  color: $main-dark;
  font-size: 30px;
  font-weight: 700;
}

.contacts-image {
  width: 50%;
}

.contact {
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $main-dark;
  font-size: 18px;
}

.contact-label {
  margin-right: 10px;
}

.contact-data {
  color: $primary;
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

@media all and (max-width: 800px) {
  .contacts-text {
    width: 100%;
  }

  .contacts-title {
    font-size: 22px;
  }

  .contacts-image {
    display: none;
  }

  .contact {
    font-size: 14px;
  }

  .map {
    width: 300px;
  }
}
</style>

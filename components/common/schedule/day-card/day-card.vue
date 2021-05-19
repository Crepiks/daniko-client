<template>
  <div class="day-card" :class="{ 'day-card_disabled': !time }">
    <h4 class="day-card__title">{{ title }}</h4>
    <span v-if="time" class="day-card__time">
      с {{ timeFrom }} до {{ timeFrom }}
    </span>
    <span v-else class="day-card__time">Нет приема</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    timeFrom() {
      if (this.time) {
        return this.time.split(':')[0]
      }
    },
    timeTo() {
      if (this.time) {
        return this.time.split(':')[1]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.day-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid $primary;
  border-radius: 10px;
}

.day-card_disabled {
  border-color: #33333345;
}

.day-card__title {
  margin-bottom: 5px;
  color: $main-dark;
  font-size: 14px;
}

.day-card__time {
  color: $main-dark;
  font-size: 12px;
  text-align: center;
  opacity: 0.8;
}
</style>
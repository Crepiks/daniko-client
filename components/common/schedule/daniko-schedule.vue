<template>
  <div class="schedule">
    <h2 class="schedule-title">График работы</h2>
    <div class="schedule-days">
      <daniko-schedule-day
        day="Понедельник"
        :appointment="['14:00', '17:00']"
      />
      <daniko-schedule-day
        day="Вторник"
        :appointment="['14:00', '17:00']"
      />
      <daniko-schedule-day
        day="Среда"
        :appointment="['14:00', '17:00']"
      />
      <daniko-schedule-day
        day="Четверг"
        :appointment="['14:00', '17:00']"
      />
      <daniko-schedule-day
        day="Пятница"
        :appointment="['14:00', '17:00']"
      />
      <daniko-schedule-day day="Суббота" />
      <daniko-schedule-day day="Воскресенье" />
    </div>
  </div>
</template>

<script>
import danikoScheduleDay from '@/components/common/schedule/schedule-day/daniko-schedule-day.vue'

export default {
  components: {
    'daniko-schedule-day': danikoScheduleDay,
  },
}
</script>

<style lang="scss" scoped>
.schedule {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-title {
    margin-bottom: 20px;
    color: $main-dark;
    font-size: 25px;
    font-weight: 500;
  }

  &-days {
    display: flex;
    justify-content: space-between;
  }
}
</style>
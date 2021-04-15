<template>
  <div class="schedule">
    <h2 class="schedule-title">График работы</h2>
    <div class="schedule-days">
      <daniko-schedule-day
        v-for="(day, index) in days"
        :key="index"
        :day="dayLiterals[day]"
        :appointment="schedule[day] ? schedule[day].split(':') : []"
      />
    </div>
  </div>
</template>

<script>
import danikoScheduleDay from '@/components/common/schedule/schedule-day/daniko-schedule-day.vue'

export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },

  components: {
    'daniko-schedule-day': danikoScheduleDay,
  },

  data() {
    return {
      days: [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ],
      dayLiterals: {
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',
        saturday: 'Суббота',
        sunday: 'Воскресенье',
      },
    }
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
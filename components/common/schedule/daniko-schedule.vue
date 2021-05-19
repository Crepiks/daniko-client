<template>
  <div class="schedule">
    <h2 class="schedule-title">График работы</h2>
    <div class="schedule-days">
      <day-card
        v-for="day in days"
        :key="day"
        :title="dayNames[day]"
        :time="schedule[day]"
      />
    </div>
  </div>
</template>

<script>
import DayCard from '@/components/common/schedule/day-card/day-card'

const defaultSchedule = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
}

export default {
  components: {
    'day-card': DayCard,
  },
  props: {
    schedule: {
      type: Object,
      required: false,
      default: () => defaultSchedule,
    },
  },
  data: () => ({
    days: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ],
    dayNames: {
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница',
      saturday: 'Суббота',
      sunday: 'Воскресенье',
    },
  }),
}
</script>

<style lang="scss" scoped>
.schedule {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.schedule-title {
  margin-bottom: 20px;
  color: $main-dark;
  font-size: 25px;
  font-weight: 500;
}

.schedule-days {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 80px;
  column-gap: 14px;
  row-gap: 14px;
}

@media all and (max-width: 1024px) {
  .schedule-days {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (max-width: 768px) {
  .schedule-days {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
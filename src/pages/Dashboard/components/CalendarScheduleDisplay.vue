<template>
  <div>
    <q-date
      flat
      @change="handleCalendarChange"
      v-model="selectedDate"
      event-color="primary"
      :events="daysWithEvents"
      class="br-10 q-mt-xl"
    />
    <div class="event-list">
      <div class="event" v-for="event in matchingEvents" :key="event.id">
        {{ event.location }} - {{ event.time }}
        {{ event.notes }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarScheduleDisplay",
  props: {
    schedule: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  mounted() {
    console.log("here", this.schedule);
  },
  computed: {
    // Returns an array of dates that have events for CalendarScheduleDisplay
    daysWithEvents() {
      const events = this.schedule.map((event) => event.date);
      return events;
    },
    //returns events that match the selected day
    matchingEvents() {
      return this.schedule.filter((event) => event.date === this.selectedDate);
    },
  },
  watch: {
    schedule() {
      this.daysWithEvents = this.schedule.map((event) => {
        return event.date;
      });
    },
  },
  methods: {
    handleCalendarChange(date) {
      this.selectedDate = date;
    },
  },
};
</script>

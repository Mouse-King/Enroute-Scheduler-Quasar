<template>
  <q-page>
    <div class="container" v-if="!hasSetupSchedule">
      <div class="panels">
        <div class="left-panel q-pa-md q-ml-lg">
          <div class="heading-one">
            Schedule
            <q-btn
              class="secondary-button"
              label="Edit Schedule"
              no-caps
              flat
              @click="hasSetupSchedule = true"
            />
          </div>

          <ScheduleTable class="q-mt-md" :schedule="schedule" />
        </div>
        <div class="right-panel text-right">
          <CalendarScheduleDisplay :schedule="schedule" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="q-pa-xl">
        <SetupSchedule @submit-schedule="submitSchedule" />
      </div>
    </div>
  </q-page>
</template>

<script>
import CalendarScheduleDisplay from "./components/CalendarScheduleDisplay.vue";
import ScheduleTable from "./components/ScheduleTable.vue";
import SetupSchedule from "./components/SetupSchedule.vue";

export default {
  name: "Dashboard",
  components: {
    ScheduleTable,
    SetupSchedule,
    CalendarScheduleDisplay,
  },
  data() {
    return {
      hasSetupSchedule: false, // whether or not the user has been onboarded
      schedule: [
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2023/01/02",
          time: "11:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
        {
          id: 1,
          location: "Location 1",
          date: "2023/03/01",
          time: "12:00",
          duration: "1 hour",
          notes: "Notes 1",
          phone: "123-456-7890",
        },
        {
          id: 2,
          location: "Location 2",
          date: "2021/01/02",
          time: "13:00",
          duration: "30 minutes",
          notes: "Notes 2",
          phone: "123-456-7890",
        },
      ],
      selectedDate: "",
    };
  },

  methods: {
    async submitSchedule(schedule) {
      await this.$api.scheduling.InitSchedule({ schedule });
      this.hasSetupSchedule = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.panels {
  display: flex;
  flex-direction: row;
}
.left-panel {
  width: 70vw;
}

.right-panel {
  width: 30vw;
  border-left: 2px solid #f4f6fa;
  height: 100vh;
  padding-right: 24px;
}
.calendar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.schedule-table {
  border: 2px solid #f4f6fa;
  width: 60vw;
}
.event-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.selected-date {
  font-weight: bold;
  margin-bottom: 10px;
}
.event {
  margin-bottom: 5px;
}

.heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<template>
  <q-card class="box-shadow br-10">
    <q-card-section v-if="!showSetupForm">
      <div class="text-center">
        <div class="heading-two">Start optimizing your routes</div>
        <div>
          Easily setup a virtual scheduler that restricts availablity based on
          your location
        </div>
        <q-btn
          class="primary-button q-mt-md"
          no-caps
          label="Setup Schedule"
          @click="showSetupForm = true"
        />
      </div>
    </q-card-section>
    <q-card-section v-else>
      <div class="text-h6 text-primary">Setup Schedule</div>
      <q-form @submit.prevent>
        <q-select
          outlined
          v-model="schedule.meetingDuration"
          label="Meeting Duration (in minutes)"
          :rules="[(val) => !!val || 'Meeting duration is required']"
          :options="meetingOptions"
        />
        <div class="q-mt-md">
          <div class="text-h6 text-primary">Set Availability</div>
          <div v-for="day in dayOptions">
            <div class="q-mt-sm">
              <div class="body-text">{{ day }}:</div>
              <div v-for="availability in getAvailability(day)">
                <div>
                  {{ availability.startTime }} to {{ availability.endTime }}
                </div>
                <div>Zipcodes: {{ availability.zipcodes }}</div>
              </div>
              <q-btn
                class="primary-button"
                no-caps
                size="sm"
                label="Add Availability"
                @click="setShowAvailabilityPopup(day)"
              />
            </div>
          </div>
        </div>
        <div class="text-right q-mt-md">
          <q-btn
            class="primary-button"
            label="Submit"
            type="submit"
            @click="submitSchedule"
          />
        </div>
      </q-form>
    </q-card-section>
    <q-dialog v-model="showAvailabilityPopup">
      <AddAvailabilityPopup
        @add-availability="addAvailability"
        @cancel="showAvailabilityPopup = false"
      />
    </q-dialog>
  </q-card>
</template>
<script>
import AddAvailabilityPopup from "./AddAvailabilityPopup/AddAvailabilityPopup.vue";
export default {
  name: "SetupSchedule",
  components: {
    AddAvailabilityPopup,
  },
  data() {
    return {
      showSetupForm: true,
      showAvailabilityPopup: false,
      activeDay: "Monday",
      meetingOptions: ["15", "30", "45", "60"],
      dayOptions: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      schedule: {
        availability: [],
      },
    };
  },
  methods: {
    addAvailability(availability) {
      console.log("received", availability);
      const { startTime, endTime, zipcodes, date } = availability;
      this.showAvailabilityPopup = false;
      try {
        this.schedule?.availability.push({
          day: this.activeDay,
          startTime,
          endTime,
          zipcodes,
          date,
        });
      } catch (e) {
        console.log(e);
      }

      console.log("schedule", this.schedule);
    },
    hasAvailability(day) {
      return (
        this.schedule?.availability?.findIndex((item) => item.day === day) > -1
      );
    },
    getAvailability(day) {
      return this.schedule?.availability?.filter((item) => item.day === day);
    },
    setShowAvailabilityPopup(day) {
      this.activeDay = day;
      this.showAvailabilityPopup = true;
    },
    submitSchedule() {
      console.log("submitting schedule", this.schedule);
      this.$emit("submit-schedule", this.schedule);
    },
  },
};
</script>

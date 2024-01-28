<template>
  <q-card class="box-shadow br-10 q-pa-md card">
    <q-card-section class="q-mx-md" v-if="!showAddLocation">
      <div class="text-center">
        <div class="heading-two">Add Availability</div>
        <q-form>
          <div class="row justify-center">
            <div class="col-12 col-sm-6">
              <label class="text-subtitle2">Start Time:</label>
              <TimePicker v-model="startTime" label="Start Time" />
            </div>
            <div class="col-12 col-sm-6">
              <label class="text-subtitle2">End Time:</label>
              <TimePicker v-model="endTime" label="End Time" />
            </div>
          </div>

          <div class="row">
            <q-input
              v-model="zipcodes"
              label="Location (Zip codes separated by commas)"
              color="primary"
              filled
              dense
              class="q-mt-md col-8"
            />
            <div class="q-mt-lg q-ml-md">
              <q-btn
                label="Add Location"
                class="secondary-button"
                size="sm"
                flat
                no-caps
              />
            </div>
          </div>

          <q-select
            v-model="meetingDuration"
            label="Meeting Duration (minutes)"
            color="primary"
            :options="durationOptions"
            filled
            dense
            class="q-mt-md"
          />

          <q-btn
            class="secondary-button q-mt-md q-mr-md"
            no-caps
            flat
            label="Cancel"
            @click="$emit('cancel')"
          />
          <q-btn
            class="primary-button q-mt-md"
            no-caps
            flat
            label="Add Availability"
            @click="addAvailability"
          />
        </q-form>
      </div>
    </q-card-section>
    <q-card-section> <AddLocation /> </q-card-section>
  </q-card>
</template>

<script>
import TimePicker from "../../../../components/shared/TimePicker.vue";
import AddLocation from "./components/AddLocation.vue";

export default {
  name: "AddAvailabilityPopup",
  components: {
    TimePicker,
    AddLocation,
  },
  data() {
    return {
      showAddLocation: true,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      zipcodes: "",
      meetingDuration: "",
      durationOptions: [
        { label: "15 minutes", value: 15 },
        { label: "30 minutes", value: 30 },
        { label: "45 minutes", value: 45 },
        { label: "60 minutes", value: 60 },
      ],
    };
  },
  methods: {
    addAvailability() {
      const availability = {
        date: new Date(),
        startTime: this.startTime,
        endTime: this.endTime,
        zipcodes: this.zipcodes,
        meetingDuration: this.meetingDuration,
      };

      this.$emit("add-availability", availability);
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 600px;
}
</style>

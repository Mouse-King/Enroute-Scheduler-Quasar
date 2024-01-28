<template>
  <q-card class="box-shadow br-10">
    <q-card-section class="q-mx-md">
      <div class="text-center">
        <div class="heading-two">Add Location</div>
        <q-form>
          <q-input
            v-model="location"
            label="Zip Code or City"
            color="primary"
            filled
            class="q-mt-md"
          />
          <div>
            <q-select
              v-model="radius"
              label="Add Radius (miles)"
              color="primary"
              :options="radiusOptions"
              filled
              class="q-mt-md"
            />
            <div class="caption text-left body-text-caption">
              This will add the zip code you typed and all other zip codes
              within that distance
            </div>
          </div>

          <div class="q-mt-md">
            <q-btn
              class="primary-button"
              no-caps
              label="Find Nearby Zip Codes"
              @click="findNearbyZipCodes"
            />
          </div>
          <div class="q-mt-md">
            <q-select
              v-model="selectedZipCodes"
              label="Select Zip Codes"
              color="primary"
              :options="zipCodeOptions"
              multiple
              filled
              class="q-mt-md"
            />
          </div>
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
            label="Add Location"
            @click="addLocation"
          />
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import axios from "axios";

export default {
  name: "AddLocation",
  data() {
    return {
      location: "",
      radius: 5,
      radiusOptions: [
        { label: "5 miles", value: 5 },
        { label: "10 miles", value: 10 },
        { label: "20 miles", value: 20 },
        { label: "50 miles", value: 50 },
      ],
      selectedZipCodes: [],
      zipCodeOptions: [],
    };
  },
  methods: {
    async findNearbyZipCodes() {
      const res = await this.$api.maps.GetZipCodesInRadius(89521, 5);
      console.log("res", res);
    },
    addLocation() {
      this.$emit("add-location", this.selectedZipCodes);
    },
  },
};
</script>

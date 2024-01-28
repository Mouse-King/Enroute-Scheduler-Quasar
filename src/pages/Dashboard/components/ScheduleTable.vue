<template>
  <div>
    <div>Your upcoming appointments({{ schedule.length }})</div>
    <q-table
      flat
      outline
      :rows="sortedSchedule"
      :columns="columns"
      hide-pagination
      row-key="id"
      class="schedule-table br-10 q-mt-md"
    />
  </div>
</template>

<script>
export default {
  name: "ScheduleTable",
  props: {
    schedule: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    sortedSchedule() {
      //take into account both date and time
      return this.schedule.sort((a, b) => {
        return (
          new Date(a.date + " " + a.time) - new Date(b.date + " " + b.time)
        );
      });
    },
  },
  data() {
    return {
      columns: [
        {
          name: "Date",
          label: "Date",
          field: "date",
          align: "left",
          sortable: true,
        },
        {
          name: "Time",
          label: "Time",
          field: "time",
          align: "left",
          sortable: true,
        },
        {
          name: "Location",
          label: "Location",
          field: "location",
          align: "left",
          sortable: true,
        },

        {
          name: "Duration",
          label: "Duration",
          field: "duration",
          align: "left",
          sortable: true,
        },
        {
          name: "Notes",
          label: "Notes",
          field: "notes",
          align: "left",
          sortable: true,
        },
        {
          name: "Phone",
          label: "Phone",
          field: "phone",
          align: "left",
          sortable: true,
        },
      ],
      pagination: {
        page: 1,
        rowsPerPage: 10,
        sortBy: "date",
        descending: false,
      },
    };
  },
};
</script>

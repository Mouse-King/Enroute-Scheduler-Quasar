<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-white text-black"
      style="border-bottom: 2px solid #a8c0ff40"
    >
      <q-toolbar class="q-pa-md">
        <q-toolbar-title>ProRouting</q-toolbar-title>
        <q-space />
        <q-btn no-caps flat label="Kyle Wilson" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

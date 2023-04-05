<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-center bg-transparent q-pt-md">
      <q-img src="~assets/cblogo.png" width="122px" />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {};
  },
});
</script>

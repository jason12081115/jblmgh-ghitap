<!-- <script setup>
import routes from "src/router/routes.js";
import { computed, onMounted } from "vue";

const tabs = computed(() => {
  return routes
    .filter((item) => {
      return item.path === "/auth";
    })
    .map((item) => {
      return item.children;
    })
    return children[0]
});
</script> -->

<script setup>
import routes from "src/router/routes.js";
import { computed } from "vue";

const tabs = computed(() => {
  const layout = routes.filter((item) => {
    return item.path === "/auth";
  });

  const children = layout.map((item) => {
    return item.children;
  });

  return children[0];
});
</script>

<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.path"
          :to="'/auth/' + tab.path"
          :label="tab.name"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

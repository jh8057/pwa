<template>
  <navigation-bar />

  <RouterView />

  <!-- <fix-nav-bar /> -->
</template>

<script lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import FixNavBar from "./components/FixNavBar.vue";
export default defineComponent({
  components: {
    NavigationBar,
    FixNavBar,
  },
});
</script>

<style>
header {
  text-align: center;
}
</style>

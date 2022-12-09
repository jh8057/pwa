<template>
  <top-navigation />

  <RouterView />

  <!-- <fix-nav-bar /> -->
</template>

<script lang="ts">
import TopNavigation from "./components/TopNavigation.vue";
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import BottomNavBar from "./components/BottomNavBar.vue";
export default defineComponent({
  components: {
    TopNavigation,
    BottomNavBar,
  },
});
</script>

<style>
header {
  text-align: center;
}
</style>

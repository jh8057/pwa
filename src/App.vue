<template>
  <navigation-bar />

  <RouterView />

  <!-- <fix-nav-bar /> -->
</template>

<script lang="ts">
import navigationBar from "./components/navigationBar.vue";
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import FixNavBar from "./components/fixNavBar.vue";
export default defineComponent({
  components: {
    navigationBar,
    FixNavBar,
  },
});
</script>

<style>
header {
  text-align: center;
}
</style>

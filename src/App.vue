<template>
  <navigation-bar />

  <RouterView />
</template>

<script lang="ts">
import navigationBar from "./components/navigationBar.vue";
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    navigationBar,
  },
});
</script>

<style>
header {
  text-align: center;
}
</style>

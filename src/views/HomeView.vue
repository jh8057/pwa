<template>
  <main>
    <the-welcome />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
export default defineComponent({
  components: {
    TheWelcome,
  },
});
</script>

<style></style>

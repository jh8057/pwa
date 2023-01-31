<template>
  <h1>Text Image</h1>
  <main>
    <text-image-canvas />
  </main>
</template>

<script lang="ts">
import TextImageCanvas from "../components/TextImageCanvas.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    TextImageCanvas,
  },
  // - p5 challenge : [link](https://www.youtube.com/watch?v=55iwMYv8tGI)
});
</script>

<style></style>

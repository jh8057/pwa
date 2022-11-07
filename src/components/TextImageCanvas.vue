<template>
  <div id="p5-container"></div>
</template>

<script lang="ts">
import { createP5 } from "./composable/TextImage";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      createP5("p5-container", 100, 100, "green");
    });
  },
};
</script>

<style scoped>
#p5-container {
  width: 90vw;
  height: 74vh;
  background-color: black;
}
</style>

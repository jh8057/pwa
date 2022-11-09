<template>
  <div id="p5-container"></div>
</template>

<script lang="ts">
import useTextImage from "./composable/useTextImage";
import { onMounted } from "vue";
export default {
  setup() {
    const { p5, createP5, draw } = useTextImage();
    onMounted(() => {
      p5.value = createP5("p5-container", 500, 400, "green");
      draw(p5.value);
    });
  },
};
</script>

<style scoped>
#p5-container {
  width: 500px;
  height: 400px;
  background-color: black;
}
</style>

<template>
  <div class="matter__wrap">
    <h2>2D - Matter.js</h2>
    <div class="matter__canvas" id="matterCanvas"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useMatterjs from "../composable/useMatterjs";
const { matter } = useMatterjs();

onMounted(() => {
  matter();
});
</script>

<style scoped>
.matter__canvas {
  width: 100%;
}
</style>

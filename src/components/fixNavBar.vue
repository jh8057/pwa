<template>
  <!-- <button class="menuBtn">MENU</button> -->
  <ul class="navigationBar">
    <li>Home</li>
    <li>Portfolio</li>
    <li>TextImage</li>
    <li>More</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.navigationBar {
  position: fixed;
  display: flex;
  text-decoration: none;
  list-style: none;
  gap: 10px;
}

.navigationBar li {
  cursor: pointer;
}
</style>

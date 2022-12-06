<template>
  <section class="skeleton">
    <div class="skeleton--card">
      <h2>title</h2>
      <p>content : skeleton UI</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.skeleton {
  width: 100%;
  height: 100%;
}
.skeleton--card {
  width: 300px;
  height: 150px;
  margin: auto;
  border: 1px solid black;
}
</style>

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

<style scoped>
main {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: auto;
  gap: 10px;
}
</style>

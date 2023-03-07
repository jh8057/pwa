<template>
  <h3>Loading...</h3>
  {{ loading }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      loading: "loading",
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = "fin";
      return;
    }, 1000);
  },
});
</script>

<style></style>

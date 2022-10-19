<template>
  <article>
    <h1>Welcome!</h1>
    <div v-if="list.test">test</div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      list: { test: false },
    };
  },
});
</script>

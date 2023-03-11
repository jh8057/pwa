<template>
  <div>
    <button @click="changeComponent">change Component</button>
    <component :is="current"></component>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    "date-dynamic": defineAsyncComponent({
      loader: () => import("./DatePicker.vue"),
      loadingComponent: () => import("./LoadingText.vue"),
      errorComponent: () => import("./ErrorText.vue"),
      delay: 200,
      timeout: 3000,
    }),
    "chart-dynamic": defineAsyncComponent(() => import("./ChartPie.vue")),
  },
  data() {
    return {
      current: "date-dynamic",
    };
  },
  methods: {
    changeComponent() {
      if (this.current === "chart-dynamic") {
        this.current = "date-dynamic";
      } else {
        this.current = "chart-dynamic";
      }
    },
  },
});
</script>

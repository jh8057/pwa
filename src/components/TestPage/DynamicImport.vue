<template>
  <div>
    <button @click="changeComponent">change Component</button>
    <component :is="current"></component>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
export default {
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
      this.current =
        this.current === "chart-dynamic" ? "date-dynamic" : "chart-dynamic";
    },
  },
};
</script>

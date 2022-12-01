<template>
  <h1>Test Page</h1>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { onMounted } from "vue";
import usePromise from "../components/composable/usePromise";
export default {
  setup() {
    const { delayPromise } = usePromise();
    onMounted(() => {
      let promise = delayPromise;
      console.log(promise);
      promise().then((res) => {
        console.log(res);
      });
    });
  },
};
</script>

<style></style>

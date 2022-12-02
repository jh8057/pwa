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
      console.log("---promise start : true---");
      promise(true)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
      console.log("---promise start : false---");
      promise(false)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    });
  },
};
</script>

<style></style>

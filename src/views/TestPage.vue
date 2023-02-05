<template>
  <h1>Test Page</h1>
  <section>
    <chart-pie />
  </section>
  <section>
    <date-picker />
  </section>
  <section>
    <toast-editor />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import usePromise from "../components/composable/usePromise";
import ChartPie from "../components/TestPage/ChartPie.vue";
import DatePicker from "../components/TestPage/DatePicker.vue";
import ToastEditor from "../components/TestPage/ToastEditor.vue";

const { delayPromise, timeoutPromise } = usePromise();

onMounted(() => {
  promiseTest();
});

const promiseTest = () => {
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

  Promise.race([timeoutPromise, promise(false)])
    .then((res) => {
      console.log("success", res);
    })
    .catch((e) => {
      console.error("error:timeout", e);
    });
};
</script>

<style scoped>
section {
  padding-bottom: 60px;
  border-bottom: 1px gray solid;
}
</style>

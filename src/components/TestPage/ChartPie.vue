<template>
  <h2>Chart.js</h2>
  <div class="chartWrap">
    <Pie v-if="loaded" :data="chartData" :options="charOption" />
  </div>
  <button @click="changeChartDataSize">change Data</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useChartjs from "../composable/useChartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);

const { chartData, charOption, changeChartDataSize } = useChartjs();
let loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});
</script>

<style>
.chartWrap {
  margin: auto;
  width: 50%;
}
</style>

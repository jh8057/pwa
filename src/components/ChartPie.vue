<template>
  <div class="chartWrap">
    <Pie :data="chartData" :options="charOption" />
  </div>
  <button @click="changeChartDataSize">change Data</button>
</template>

<script setup lang="ts">
import {computed,watch} from 'vue'
import useChartjs from "./composable/useChartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);

const { chartData, charOption, changeChartDataSize } = useChartjs();

/**
* TODO: Add Re-rendering
*/
watch(chartData , ()=>{
  console.log('dataChange',chartData)
})
</script>

<style>
.chartWrap{
  margin: auto;
  width : 50%;
}
</style>

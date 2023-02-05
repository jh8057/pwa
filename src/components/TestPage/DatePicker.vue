<template>
  <h2>Date Picker</h2>
  <Datepicker class="datepicker__wrapper" v-model="date"></Datepicker>
</template>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style scoped>
.datepicker__wrapper {
  width: 50%;
  margin: auto;
}
</style>

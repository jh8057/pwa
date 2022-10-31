<template>
  <content-one class="ani m20 h30" />
  <content-two class="ani m20 h30" />
  <content-Three class="ani m20 h30" />
  <content-Four class="ani m20 h100" />
</template>

<script lang="ts">
import ContentOne from "../components/ContentOne.vue";
import ContentTwo from "../components/ContentTwo.vue";
import ContentThree from "../components/ContentThree.vue";
import ContentFour from "../components/ContentFour.vue";
export default {
  components: {
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
  },
};
</script>

<style>
.m20 {
  margin: 20px;
}
.h30 {
  height: 30vh;
}
.h100 {
  margin-top: 20vh;
  height: 50vh;
}
</style>

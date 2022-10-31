<template>
  <content-one class="mt100 h30" />
  <content-two class="ani m20 mb100 h30" />
  <content-Three class="m20 h30" ref="contentThree" />
  <content-Four class="m20 h50" />
  <content-Five v-if="five" class="ani m20 h30" />
  <empty-page v-else />
  <content-Six class="m20 h50" />
  <content-Seven class="m20 h60" />

  <footer-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentOne from "../components/ContentOne.vue";
import ContentTwo from "../components/ContentTwo.vue";
import ContentThree from "../components/ContentThree.vue";
import ContentFour from "../components/ContentFour.vue";
import ContentFive from "../components/ContentFive.vue";
import ContentSix from "../components/ContentSix.vue";
import ContentSeven from "../components/ContentSeven.vue";
import EmptyPage from "../components/EmptyPage.vue";
import FooterSection from "../components/FooterSection.vue";

export default defineComponent({
  components: {
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
    ContentFive,
    ContentSix,
    ContentSeven,
    EmptyPage,
    FooterSection,
  },
  data() {
    return {
      five: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.checkScrollPosition);
    });
  },
  methods: {
    checkScrollPosition() {
      let element = this.$refs.contentThree as any;
      let threePosition =
        element?.$el.offsetTop + element?.$el.offsetHeight / 4;
      if (window.scrollY > threePosition) {
        setTimeout(() => {
          this.five = true;
        }, 800);
      }
    },
  },
});
</script>

<style>
.m20 {
  margin: 20px;
}

.mt100 {
  margin-top: 100px;
}
.mb100 {
  margin-bottom: 100px;
}
.h30 {
  min-height: 30vh;
}
.h50 {
  margin-top: 10vh;
  min-height: 30vh;
}

.h60 {
  margin-top: 30vh;
  min-height: 30vh;
}
</style>

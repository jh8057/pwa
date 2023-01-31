<template>
  <main>
    <content-one class="mt180 h30" ref="contentOne" />
    <content-two class="mt180 h30 op0" ref="contentTwo" />
    <content-Three class="h30 op0" ref="contentThree" />
    <content-Four class="mt180 pb100 h30 op0" ref="contentFour" />
    <content-Five class="mt180 pb100 h30 op0" ref="contentFive" />
    <content-Six class="mt180 h40 op0" ref="contentSix" />
  </main>

  <footer-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentOne from "../components/Scroll/ContentOne.vue";
import ContentTwo from "../components/Scroll/ContentTwo.vue";
import ContentThree from "../components/Scroll/ContentThree.vue";
import ContentFour from "../components/Scroll/ContentFour.vue";
import ContentFive from "../components/Scroll/ContentFive.vue";
import ContentSix from "../components/Scroll/ContentSix.vue";
import FooterSection from "../components/Scroll/FooterSection.vue";

export default defineComponent({
  components: {
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
    ContentFive,
    ContentSix,
    FooterSection,
  },
  data() {
    return {};
  },
  mounted() {
    this.ScrollEvent();
  },
  methods: {
    ScrollEvent() {
      let observer = new IntersectionObserver((e) => {
        e.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("ani");
          }
        });
      });
      let two = this.$refs.contentTwo as any;
      observer.observe(two.$el);
      let three = this.$refs.contentThree as any;
      observer.observe(three.$el);
      let four = this.$refs.contentFour as any;
      observer.observe(four.$el);
      let five = this.$refs.contentFive as any;
      observer.observe(five.$el);
      let six = this.$refs.contentSix as any;
      observer.observe(six.$el);
    },
  },
});
</script>

<style>
.m20 {
  margin: 20px;
}
.mt180 {
  margin-top: 180px;
}
.pb100 {
  padding-bottom: 100px;
}
.h30 {
  min-height: 30vh;
}
.h40 {
  min-height: 40vh;
}
.op0 {
  opacity: 0;
}
</style>

<template>
  <main>
    <content-one class="mt180 h30" ref="contentOne" />
    <content-two class="mt180 h30 op0" ref="contentTwo" />
    <content-Three class="h30 op0" ref="contentThree" />
    <content-Four class="mt180 h30 op0" ref="contentFour" />
    <content-Five class="mt180 h30 op0" ref="contentFive" />
    <content-Six class="mt180 h50 op0" ref="contentSix" />
    <content-Seven class="mt180 h50 op0" ref="contentSeven" />
  </main>

  <footer-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentOne from "../components/toss/ContentOne.vue";
import ContentTwo from "../components/toss/ContentTwo.vue";
import ContentThree from "../components/toss/ContentThree.vue";
import ContentFour from "../components/toss/ContentFour.vue";
import ContentFive from "../components/toss/ContentFive.vue";
import ContentSix from "../components/toss/ContentSix.vue";
import ContentSeven from "../components/toss/ContentSeven.vue";
import FooterSection from "../components/toss/FooterSection.vue";

export default defineComponent({
  components: {
    ContentOne,
    ContentTwo,
    ContentThree,
    ContentFour,
    ContentFive,
    ContentSix,
    ContentSeven,
    FooterSection,
  },
  data() {
    return {};
  },
  mounted() {
    this.scrollEvent();
  },
  methods: {
    scrollEvent() {
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
      let seven = this.$refs.contentSeven as any;
      observer.observe(seven.$el);
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
.mb100 {
  margin-bottom: 100px;
}
.h30 {
  min-height: 30vh;
}
.h50 {
  min-height: 50vh;
}
.op0 {
  opacity: 0;
}
</style>

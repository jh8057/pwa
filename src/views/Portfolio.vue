<template>
  <main>
    <content-one class="y50 mt100 h30" ref="contentOne" />
    <content-two class="y50 m20 mb100 h30" ref="contentTwo" />
    <content-Three class="y50 m20 h30" ref="contentThree" />
    <content-Four class="y50 m20 h50" ref="contentFour" />
    <content-Five class="y50 m20 h30" ref="contentFive" />
    <content-Six class="y50 m20 h50" ref="contentSix" />
    <content-Seven class="y50 m20 h60" ref="contentSeven" />
  </main>

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
        console.log("event", e);
        e.forEach((el, index) => {
          if (el.isIntersecting) {
            console.log("Is ON DisPlay", el.target, index);
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
.y50 {
  position: relative;
  padding-top: 50px;
}
</style>

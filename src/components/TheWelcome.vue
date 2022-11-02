<template>
  <h1>만나서 반갑습니다.</h1>
  <h2>
    <span :class="[{ ability: ani }, 'colorBlue']">{{ myAbility }}</span>
    김재현입니다.
  </h2>
  <div class="mt20">
    <RouterLink to="/portfolio" class="blueButton">포트폴리오 보기</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
export default defineComponent({
  props: {
    something: { type: String, default: "" },
  },
  data() {
    return {
      ability: ["꾸준한", "노력하는", "꼼꼼한", "발전하는", "능동적인"],
      randomNum: 0,
      ani: false,
    };
  },
  computed: {
    myAbility() {
      return this.ability[this.randomNum];
    },
  },
  mounted() {
    setInterval(this.replaceRandomNum, 2000);
  },
  methods: {
    replaceRandomNum() {
      this.ani = true;
      this.randomNum = Math.floor(Math.random() * 5);
      setTimeout(() => {
        this.ani = false;
      }, 1500);
    },
  },
});
</script>

<style scoped>
.ability {
  animation-duration: 0.4s;
  animation-name: Flash;
}
@keyframes Flash {
  0% {
    color: black;
    opacity: 0;
  }
  40% {
    color: #c9e2ff;
  }
  80% {
    color: #3182f6;
  }
  100% {
    color: #1b64da;
    opacity: 1;
  }
}

.colorBlue {
  color: #1b64da;
}
.blueButton {
  margin: 10px;
  padding: 11px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  background-color: #3182f6;
  color: #f9fafb;
  border-radius: 10px;
  text-decoration: none;
}
.mt20 {
  margin-top: 20px;
}
</style>

<template>
  <section>
    <img class="upDown" src="@/assets/img/scrollBar.png" />
    <h4><span class="emp">스크롤 액션</span>과 함께 말이죠.</h4>
  </section>
</template>

<style scoped>
.upDown {
  position: relative;
  animation: updown 1s ease-in Infinite Alternate;
}
@keyframes updown {
  0% {
    top: -10px;
  }
  100% {
    top: 10px;
  }
}
</style>

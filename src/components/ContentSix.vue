<template>
  <div>
    <p>
      제가 경험한 핵심 기술에 대해 나열하자면,
      <span class="emp">nuxt.js</span>에서 asyncData를 다루어보며 SSR을
      경험해보았으며, 웹 페이지가 그려지는 life-cylce도 이해하였습니다.
      <span class="emp">typescript</span>를 다루며 타입의 중요성을 알게되었으며,
      <span class="emp">docker</span>에서 nginx를 동작시켜 정적 파일을
      배포해보면서 웹 페이지가 제작되고 배포되는 과정까지를 경험해보았습니다.
    </p>
    <div class="imgList">
      <img src="@/assets/img/nuxtlogo.png" />
      <img src="@/assets/img/typescriptlogo.png" />
      <img class="dockerImg" src="@/assets/img/dockerlogo.png" />
    </div>
  </div>
</template>

<style scope>
a {
  text-decoration: none;
}

.imgList {
  display: flex;
  justify-content: center;
  object-fit: cover;
  gap: 60px;
  flex-wrap: wrap;
}

.dockerImg {
  width: 230px;
  height: 100px;
}
</style>

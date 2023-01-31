<template>
  <section>
    <h3 class="head">
      개발자로 성장하기 위해 여러 기술들을 다루어 보았습니다.
    </h3>
    <ul class="four__list">
      <li>
        <span class="emp">Nuxt.js</span>에서 SSR 환경을 경험해보았으며,<br />
        웹 페이지가 그려지는 life-cylce과 DOM에 대해 이해하였습니다. <br />
        <img src="@/assets/img/nuxtlogo.png" />
      </li>
      <li>
        <span class="emp">웹팩</span>을 공부하고,<br />
        초기 로딩 속도를 위해 lazy Component, code split 에 대해서
        배웠습니다.<br />
        <img
          src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png"
          alt="webpack"
        />
      </li>
      <li>
        <span class="emp">Three.js</span> 에 관심을 갖고<br />
        blender를 통해 만든 glft 파일을 가져와서 구현을 해보았습니다.<br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"
          alt="webpack"
        />
      </li>
      <li>
        <span class="emp">Typescript</span>를 다루며 타입의 중요성을
        알게되었으며, <span class="emp">docker</span>에서 nginx를 동작시켜 정적
        파일을 배포해보면서 웹 페이지가 제작되고 배포되는 과정까지를
        경험해보았습니다.

        <div class="imgList">
          <img src="@/assets/img/typescriptlogo.png" />
          <img class="dockerImg" src="@/assets/img/dockerlogo.png" />
        </div>
      </li>
      <li>
        마지막으로, 현재는 <span class="emp">알고리즘</span>을 학습하면서
        효율적인 코딩을 위한 방법을 배우고 있습니다.<br />
        <img class="pt10" src="@/assets/img/algorithms.png" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.head {
  padding-left: 30px;
}
.four__list {
  list-style: none;
  text-decoration: none;
}
.four__list li {
  padding-bottom: 25px;
}
a {
  text-decoration: none;
}
.pt10 {
  padding-top: 10px;
}
.imgList {
  display: flex;
  justify-content: center;
  object-fit: cover;
  gap: 60px;
  flex-wrap: wrap;
  padding-top: 20px;
}

.dockerImg {
  width: 300px;
  height: 100px;
}
.mt30 {
  margin-top: 30px;
}
.wd80 {
  width: 80%;
}
</style>

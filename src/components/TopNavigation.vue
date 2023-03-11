<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="(menu, i) in menulist"
          :key="menu.name"
          :to="menu.link"
          class="menu"
          ><span
            :class="['menu__name', { selected: menu.name === selected }]"
            >{{ menu.name }}</span
          ><span v-if="i !== menulist.length - 1"> | </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
export default defineComponent({
  data() {
    return {
      menulist: [
        { name: "Home", link: "/" },
        { name: "Portfolio", link: "/portfolio" },
        // { name: "TextImage", link: "/textImage" },
        { name: "Graphic", link: "/graphic" },
        { name: "TestPage", link: "/testPage" },
      ],
      selected: "Home",
    };
  },
  watch: {
    $route(to, from) {
      let str = to.name;
      let firstChar = str.charAt(0);
      let others = str.slice(1);
      this.selected = firstChar.toUpperCase() + others;
    },
  },
});
</script>

<style scoped>
.wrapper {
  margin: 10px;
}
.menu {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.selected {
  color: #1b64da;
}
</style>

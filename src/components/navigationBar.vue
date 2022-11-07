<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink
          v-for="(menu, i) in menulist"
          :key="menu.name"
          :to="menu.link"
          class="menu"
          @click="doSelect(menu.name)"
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
        { name: "TextImage", link: "/textImage" },
      ],
      selected: "Home",
    };
  },
  methods: {
    doSelect(name: string) {
      this.selected = name;
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

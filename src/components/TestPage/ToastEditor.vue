<template>
  <div class="EditorPage">
    <h1>Toast Editor</h1>
    <div id="editor"></div>
  </div>
</template>

<script lang="ts">
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  mounted() {
    const editor = new Editor({
      el: document.querySelector("#editor") as HTMLElement,
      height: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
    });

    editor.getMarkdown();
  },
});
</script>

<script setup>
import CodeBlock from "./CodeBlock.vue";
import { ref } from "vue";

defineProps(["codeContent", "exampleContent"]);

const viewMode = ref("example");

function setViewMode(v) {
  viewMode.value = v;
}
</script>

<template>
  <div class="example-box">
    <div class="example-box-buttons" style="margin-bottom: 10px">
      <button class="btn-switch" @click="setViewMode('example')">
        Example
      </button>
      <button class="btn-switch" @click="setViewMode('code')">Code</button>
    </div>
    <div style="display: flex; flex-direction: column">
      <template v-if="viewMode === 'example'">
        <slot name="exampleContent">{{ exampleContent }}</slot>
      </template>
      <template v-else>
        <CodeBlock :code="codeContent"></CodeBlock>
      </template>
    </div>
  </div>
</template>

<style>
.example-box {
  background: hsl(0, 0%, 8%);
}
pre[class*="language-jsx"] {
  border: none;
  box-shadow: none;
}
</style>

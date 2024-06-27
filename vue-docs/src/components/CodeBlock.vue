<template>
  <prism language="jsx" :code="code">{{ code }}</prism>
</template>

<script setup>
import "prismjs";
import "prismjs/components/prism-jsx.min"; // Ensure JSX syntax is supported
import Prism from "vue-prism-component";
import "prismjs/themes/prism-twilight.css";

defineProps(["code"]);
</script>

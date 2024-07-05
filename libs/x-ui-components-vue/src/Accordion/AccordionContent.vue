<script setup>
const props = defineProps(["expanded"]);
</script>

<template>
  <div v-show="expanded" :class="['accordion-content', { open: expanded }]">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

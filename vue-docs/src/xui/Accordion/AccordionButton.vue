<script setup>
const props = defineProps(["onTitleClick"]);
</script>

<template>
  <button class="btn-accordion" @click="onTitleClick">
    <slot></slot>
  </button>
</template>

<style scoped>
@import "./styles.css";
</style>

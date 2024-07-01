<template>
  <button class="btn-accordion" @click="onTitleClick">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(["onTitleClick"]);
</script>

<style scoped>
@import "./styles.css";
</style>

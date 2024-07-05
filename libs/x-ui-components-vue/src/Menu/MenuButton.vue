<script setup>
const props = defineProps(["onMenuButtonClick"]);
</script>

<template>
  <button className="menu-button" @click="onMenuButtonClick">
    <slot></slot>
  </button>
</template>

<style scoped>
@import "./styles.css";
</style>

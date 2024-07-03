<script setup>
import { defineProps } from "vue";

const props = defineProps(["open"]);
</script>

<template>
  <div v-if="open" class="menu-dropdown">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

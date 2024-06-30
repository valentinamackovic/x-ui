<template>
  <div v-if="open" class="menu-dropdown">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["open"]);
</script>

<style scoped>
@import "./styles.css";
</style>

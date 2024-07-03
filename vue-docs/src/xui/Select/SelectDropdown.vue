<script setup>
import { defineProps } from "vue";

const props = defineProps({
  visible: Boolean,
});
</script>

<template>
  <div v-if="visible" class="select-dropdown">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

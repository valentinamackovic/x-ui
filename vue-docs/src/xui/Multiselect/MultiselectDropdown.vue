<script setup>
const props = defineProps({
  areOptionsVisible: Boolean,
});
</script>

<template>
  <div v-if="areOptionsVisible" class="multiselect-dropdown">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

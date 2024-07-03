<template>
  <div v-if="areOptionsVisible" class="multiselect-dropdown">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  areOptionsVisible: Boolean,
});
</script>

<style scoped>
@import "./styles.css";
</style>

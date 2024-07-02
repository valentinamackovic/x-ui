<template>
  <button class="modal-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
@import "./styles.css";
</style>

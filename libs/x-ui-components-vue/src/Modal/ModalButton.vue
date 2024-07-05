<template>
  <button class="modal-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
@import "./styles.css";
</style>

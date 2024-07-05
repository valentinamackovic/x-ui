<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  onClick: Function,
});

const emits = defineEmits(["click"]);

const handleClick = () => {
  props.onClick();
};
</script>

<template>
  <section class="multiselect-input-item">
    <slot></slot>
    <button class="multiselect-input-item-x-btn" @click="handleClick">
      <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!-- !Font Awesome Free  -->
        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
      </svg>
    </button>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>

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
      <font-awesome-icon class="accordion-icon" icon="times" />
    </button>
  </section>
</template>

<style scoped>
@import "./styles.css";
</style>

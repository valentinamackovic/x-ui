<script setup>
import { defineProps, withDefaults } from "vue";

const props = defineProps({
  selected: Boolean,
  onClick: Function,
});

const isSelected = props.selected;

const handleClick = () => {
  props.onClick?.();
};
</script>

<template>
  <option
    :class="['select-option', { selected: isSelected }]"
    @click="handleClick"
  >
    <slot></slot>
  </option>
</template>

<style scoped>
@import "./styles.css";
</style>

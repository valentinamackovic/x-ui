<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  disabled: Boolean,
  selected: Boolean,
});

const emits = defineEmits(["click"]);

const handleClick = () => {
  if (!props.disabled) {
    emits("click");
  }
};
</script>

<template>
  <div
    :class="['multiselect-option', { disabled: disabled, selected: selected }]"
    @click="handleClick"
    v-if="!disabled"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

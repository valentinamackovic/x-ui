<template>
  <div
    :key="item.id"
    :class="['menu-option', { disabled: isDisabled }]"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, withModifiers } from "vue";

const props = defineProps({
  item: Object,
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

function handleClick() {
  if (!props.isDisabled) {
    emit("click", props.item);
  }
}
</script>

<style scoped>
@import "./styles.css";
</style>

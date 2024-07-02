<template>
  <div class="select-input-wrapper">
    <input
      class="select-input"
      type="text"
      :value="displayValue"
      @input="() => {}"
      @click="handleClick"
      :disabled="disabled"
      readonly
    />
  </div>
</template>

<script setup>
import { defineProps, computed, watch } from "vue";

const props = defineProps({
  value: Object,
  onClick: Function,
  disabled: Boolean,
});

const handleClick = () => {
  props.onClick?.();
};

const displayValue = computed(() => props?.value?.value ?? "");
</script>

<style scoped>
@import "./styles.css";
</style>

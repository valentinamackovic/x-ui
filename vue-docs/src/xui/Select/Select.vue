<template>
  <div class="select-wrapper">
    <div v-if="component">
      <div class="select-input-wrapper">
        <input
          class="select-input"
          type="text"
          :value="displayValue"
          @click="handleInputClick"
          :disabled="disabled"
          readonly
        />
      </div>
      <div v-show="areOptionsVisible" ref="dropdownRef" class="select-dropdown">
        <div
          v-for="option in options"
          :key="option.id"
          :class="['select-option', { selected: inputValue?.id === option.id }]"
          @click="handleOptionClick(option)"
        >
          {{ option.value }}
        </div>
      </div>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, reactive, computed } from "vue";

const props = defineProps({
  options: Array,
  defaultValue: Object,
  value: Object,
  open: Boolean,
  disabled: Boolean,
  onChange: Function,
  onInputClick: Function,
  component: Boolean,
  isStatic: Boolean,
  children: Array,
});

const inputValue = ref(props.defaultValue);
const areOptionsVisible = ref(props.open ?? false);
const dropdownRef = ref(null);

watch(
  () => props.open,
  (newOpen) => {
    if (newOpen !== undefined) areOptionsVisible.value = newOpen;
  }
);

watch(
  () => props.value,
  (newValue) => {
    if (newValue !== undefined) inputValue.value = newValue;
  }
);

const handleInputClick = () => {
  if (!props.isStatic) {
    areOptionsVisible.value = !areOptionsVisible.value;
  }
  props.onInputClick?.();
};

const handleOptionClick = (option) => {
  if (!props.isStatic) {
    inputValue.value = option;
    areOptionsVisible.value = false;
  }
  props.onChange?.(option);
};

const handleClickOutside = (event) => {
  if (
    !props.isStatic &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target)
  ) {
    areOptionsVisible.value = false;
  }
};

const handleKeyDown = (event) => {
  if (!props.isStatic && event.key === "Escape") {
    areOptionsVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleKeyDown);
});

const displayValue = computed(() => inputValue.value?.value ?? "");
</script>

<style scoped>
@import "./styles.css";
</style>

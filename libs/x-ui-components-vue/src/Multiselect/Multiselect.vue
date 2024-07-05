<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from "vue";

const props = defineProps({
  options: Array,
  defaultValue: Array,
  value: Array,
  open: Boolean,
  disabled: Boolean,
  onChange: Function,
  onInputClick: Function,
  isStatic: Boolean,
  enableSearch: Boolean,
  clearAll: Boolean,
  maxSelectedItems: Number,
  component: Boolean,
});

const searchValue = ref("");
const dropdownRef = ref(null);
const initialValue = props.options?.filter((option) =>
  props.defaultValue?.includes(option.id)
);
const value = ref(initialValue);
const areOptionsVisible = ref(props.open || false);

const visibleOptions = computed(() => {
  return props.enableSearch && searchValue.value
    ? props.options.filter((option) =>
        option.value.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    : props.options;
});

const maxSelectionReached = computed(
  () => props.maxSelectedItems && value.value.length >= props.maxSelectedItems
);

watch(
  () => props.open,
  (newVal) => {
    if (newVal !== undefined) areOptionsVisible.value = newVal;
  }
);

onMounted(() => {
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
    if (!props.isStatic && event.key === "Escape")
      areOptionsVisible.value = false;
  };
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
  onUnmounted(() => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  });
});

const onOptionClick = (option) => {
  if (maxSelectionReached.value && !value.value.find((v) => v.id === option.id))
    return;
  const alreadySelected = value.value.find((v) => v.id === option.id);
  value.value = alreadySelected
    ? value.value.filter((v) => v.id !== option.id)
    : [...value.value, option];
  areOptionsVisible.value = false;
  searchValue.value = "";
  props.onChange?.(value.value, option);
};

const unselectOption = (option) => {
  value.value = value.value.filter((v) => v.id !== option.id);
};

const onSearch = (event) => {
  areOptionsVisible.value = true;
  searchValue.value = event.target.value;
};

const clearAllSelectedOptions = (event) => {
  event.stopPropagation();
  value.value = [];
};

const handleInputClick = () => {
  if (!props.disabled && !props.isStatic) {
    areOptionsVisible.value = !areOptionsVisible.value;
  }
  props.onInputClick?.();
};

const isSelected = (option) => {
  return value.value.some((v) => v.id === option.id);
};
</script>

<template>
  <div class="multiselect-wrapper">
    <div
      v-if="component"
      class="multiselect-input-wrapper"
      :class="{ 'clear-all-enabled': clearAll }"
    >
      <section
        class="multiselect-input-section"
        :class="{ 'clear-all-enabled': clearAll }"
        @click="handleInputClick"
      >
        <section class="multiselect-input-items">
          <div v-for="v in value" :key="v.id" class="multiselect-input-item">
            {{ v.value }}
            <button
              class="multiselect-input-item-x-btn"
              @click="unselectOption(v)"
            >
              <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <!-- !Font Awesome Free  -->
                <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </button>
          </div>
        </section>
        <input
          v-if="enableSearch"
          :size="searchValue.length > 0 ? searchValue.length : 1"
          class="multiselect-input"
          type="text"
          v-model="searchValue"
          @input="onSearch"
        />
        <button
          v-if="clearAll"
          class="multiselect-input-item-x-btn clear-all-enabled"
          @click="clearAllSelectedOptions"
        >
          <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!-- !Font Awesome Free  -->
            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </button>
      </section>
    </div>
    <div
      v-if="areOptionsVisible"
      class="multiselect-dropdown"
      ref="dropdownRef"
    >
      <div
        v-for="option in visibleOptions"
        :key="option.id"
        :class="[
          'multiselect-option',
          { disabled: maxSelectionReached, selected: isSelected(option) },
        ]"
        @click="onOptionClick(option)"
      >
        {{ option.value }}
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

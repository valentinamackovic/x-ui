<script setup>
import { computed } from "vue";

const props = defineProps({
  clearAll: Boolean,
  disabled: Boolean,
  enableSearch: Boolean,
  searchValue: String,
});

const emits = defineEmits([
  "update:searchValue",
  "inputClick",
  "clearAllClick",
  "search",
]);

const inputSize = computed(() => {
  return props.searchValue && props.searchValue.length > 0
    ? props.searchValue.length
    : 1;
});

const handleInputClick = () => {
  if (!props.disabled) {
    emits("inputClick");
  }
};

const handleSearch = (event) => {
  emits("update:searchValue", event.target.value);
  emits("search", event.target.value);
};

const onClearAllClick = () => {
  emits("clearAllClick");
};
</script>

<template>
  <div
    :class="['multiselect-input-wrapper', { 'clear-all-enabled': clearAll }]"
  >
    <section
      :class="['multiselect-input-section', { 'clear-all-enabled': clearAll }]"
      @click="handleInputClick"
    >
      <section class="multiselect-input-items">
        <slot></slot>
      </section>
      <input
        v-if="enableSearch"
        :size="inputSize"
        class="multiselect-input"
        type="text"
        v-bind="searchValue"
        @input="handleSearch"
      />
      <button
        v-if="clearAll"
        class="multiselect-input-item-x-btn clear-all-enabled"
        @click="onClearAllClick"
      >
        <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!-- !Font Awesome Free  -->
          <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
      </button>
    </section>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

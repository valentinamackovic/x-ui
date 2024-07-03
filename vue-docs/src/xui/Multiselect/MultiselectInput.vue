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
        <font-awesome-icon icon="circle-xmark" />
      </button>
    </section>
  </div>
</template>

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

<style scoped>
@import "./styles.css";
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps({
  component: Boolean,
  items: Array,
  onItemClick: Function,
  disabledItems: Array,
  open: Boolean,
  onClose: Function,
});

const areOptionsVisible = ref(props.open ?? false);
const dropdownRef = ref(null);

function close() {
  areOptionsVisible.value = false;
  props.onClose?.();
}

onMounted(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      close();
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) close(); // ESC key
  };

  // Add when the component mounts
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
});

function onMenuButtonClick() {
  areOptionsVisible.value = !areOptionsVisible.value;
}

function isDisabled(item) {
  return props.disabledItems != null && props.disabledItems?.includes(item.id);
}

function handleItemClick(item) {
  if (!isDisabled(item)) {
    props.onItemClick?.(item);
    close();
  }
}
</script>

<template>
  <div class="menu-wrapper">
    <slot v-if="!component"></slot>
    <template v-if="component">
      <button class="menu-button" @click="onMenuButtonClick">
        <slot></slot>
      </button>
      <div v-if="areOptionsVisible" ref="dropdownRef" class="menu-dropdown">
        <div
          v-for="item in items"
          :key="item.id"
          :class="{ 'menu-option': true, disabled: isDisabled(item) }"
          @click="handleItemClick(item)"
        >
          {{ item.value }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.menu-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-button {
  background-color: transparent;
  border: 1px solid #334155;
  border-radius: 0.5em;
  padding: 6px 14px;
  cursor: pointer;
  color: inherit;
  width: fit-content;
}

.menu-dropdown {
  margin-top: 1px;
  padding: 4px 0;
  background-color: #33415530;
  border-radius: 0.5em;
  position: absolute;
  top: 100%; /* Position directly below the input field */
  left: 0;
  right: 0;
  z-index: 1000;
  width: fit-content;
}

.menu-option {
  padding: 4px 14px;
  font-size: 14px;
  width: fit-content;
  cursor: default;
  width: auto;
}
.menu-option + .menu-option {
  margin-top: 2px;
}
.menu-option:hover,
.menu-option.selected {
  background-color: #33415540;
}
.menu-option.disabled {
  opacity: 80%;
}
.menu-option.disabled:hover {
  background-color: transparent;
}
</style>

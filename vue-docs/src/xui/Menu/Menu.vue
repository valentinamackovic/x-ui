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
  isStatic: Boolean,
});

const areOptionsVisible = ref(props.open ?? false);
const dropdownRef = ref(null);

function close() {
  if (Boolean(props.isStatic) === false) {
    areOptionsVisible.value = false;
  }
  props.onClose?.();
}

onMounted(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      close();
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) close();
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);
});

function onMenuButtonClick() {
  if (Boolean(props.isStatic) === false) {
    areOptionsVisible.value = !areOptionsVisible.value;
  }
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
@import "./styles.css";
</style>

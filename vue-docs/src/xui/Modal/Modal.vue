<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  title: String,
  isOpen: Boolean,
  onClose: Function,
  component: Boolean,
  isStatic: Boolean,
});
const open = ref(props.isOpen ?? false);

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue !== undefined) open.value = newValue;
  }
);

const close = () => {
  if (!props.isStatic) {
    open.value = false;
  }
  props.onClose?.();
};

const handleKeyDown = (event) => {
  if (event.key === "Escape" && !props.isStatic && props.component) close(); // ESC key
};

const handleClickOutside = (event) => {
  if (
    event.target.id === "modal-backdrop" &&
    !props.isStatic &&
    props.component
  )
    close();
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <Teleport to="body" v-if="open">
    <div
      id="modal-backdrop"
      class="modal-backdrop"
      @mousedown="handleClickOutside"
    >
      <div v-if="component" class="modal-content" @click.stop>
        <div class="modal-title">{{ title }}</div>
        <slot></slot>
        <div class="modal-footer">
          <button class="modal-button" @click="close">OK</button>
        </div>
      </div>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </Teleport>
</template>

<style scoped>
@import "./styles.css";
</style>

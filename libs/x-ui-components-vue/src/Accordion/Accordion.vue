<script setup>
import { ref, watch, defineProps } from "vue";

const props = defineProps({
  expanded: Boolean,
  title: String,
  component: Boolean,
  isStatic: Boolean,
  onTitleClick: Function,
});

const expanded = ref(props.expanded ?? false);

watch(
  () => props.expanded,
  (newVal) => {
    if (newVal !== undefined) {
      expanded.value = newVal;
    }
  }
);

const handleClick = () => {
  if (!props.isStatic) {
    expanded.value = !expanded.value;
  }
  props.onTitleClick?.();
};
</script>

<template>
  <div class="accordion-wrapper">
    <template v-if="component">
      <button class="btn-accordion" @click="handleClick">
        <template v-if="expanded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon">
            <!-- Font awesome icon -->
            <path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="accordion-icon">
            <!-- Font awesome icon -->
            <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
          </svg>
        </template>
        {{ title }}
      </button>
      <div v-show="expanded">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>

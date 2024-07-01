<template>
  <div class="accordion-wrapper">
    <template v-if="component">
      <button class="btn-accordion" @click="handleClick">
        <template v-if="expanded">
          <font-awesome-icon class="accordion-icon" icon="angle-up" />
        </template>
        <template v-else>
          <font-awesome-icon class="accordion-icon" icon="angle-down" />
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

<style scoped>
@import "./styles.css";
</style>

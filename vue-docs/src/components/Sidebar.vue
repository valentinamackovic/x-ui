<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeItem = computed(() => {
  return route.path || "/";
});
</script>

<template>
  <div className="sidebar">
    <div className="sidebar-content">
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/overview' }"
        href="/overview"
      >
        Overview
      </a>
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/menu' }"
        href="/menu"
      >
        Menu
      </a>
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/select' }"
        href="/select"
      >
        Select
      </a>
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/accordion' }"
        href="/accordion"
      >
        Accordion
      </a>
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/modal' }"
        href="/modal"
      >
        Modal
      </a>
      <a
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/multiselect' }"
        href="/multiselect"
      >
        Multiselect
      </a>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #cbd5e1;
  display: flex;
}
</style>

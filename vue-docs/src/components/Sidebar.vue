<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const activeItem = computed(() => {
  return route.path || "/";
});

function goToRoute(route) {
  router.push(route);
}
</script>

<template>
  <div className="sidebar">
    <div className="sidebar-content">
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/overview' }"
        @click="goToRoute('/overview')"
      >
        Overview
      </div>
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/menu' }"
        @click="goToRoute('/menu')"
      >
        Menu
      </div>
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/select' }"
        @click="goToRoute('/select')"
      >
        Select
      </div>
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/accordion' }"
        @click="goToRoute('/accordion')"
      >
        Accordion
      </div>
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/modal' }"
        @click="goToRoute('/modal')"
      >
        Modal
      </div>
      <div
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === '/multiselect' }"
        @click="goToRoute('/multiselect')"
      >
        Multiselect
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-item-active div {
  text-decoration: none;
  color: #cbd5e1;
  display: flex;
}
</style>

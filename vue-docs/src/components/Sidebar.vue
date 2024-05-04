<script setup lang="ts">
import { ref } from "vue";

const activeItem = ref("overview");

function setActiveItem(item: string) {
  // Access/mutate the value of a ref via
  // its .value property.
  activeItem.value = item;
}
</script>

<template>
  <div className="sidebar">
    <div className="sidebar-content">
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'overview' }"
        @click="setActiveItem('overview')"
      >
        Overview
      </p>
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'menu' }"
        @click="setActiveItem('menu')"
      >
        Menu
      </p>
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'select' }"
        @click="setActiveItem('select')"
      >
        Select
      </p>
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'accordion' }"
        @click="setActiveItem('accordion')"
      >
        Accordion
      </p>
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'modal' }"
        @click="setActiveItem('modal')"
      >
        Modal
      </p>
      <p
        class="sidebar-item"
        :class="{ 'sidebar-item-active': activeItem === 'multiselect' }"
        @click="setActiveItem('multiselect')"
      >
        Multiselect
      </p>
    </div>
  </div>
</template>

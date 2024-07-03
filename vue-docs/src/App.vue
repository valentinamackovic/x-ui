<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <header class="title">
    <a
      href="http://localhost:3000"
      :style="{
        position: 'absolute',
        left: '14px',
        color: 'inherit',
        fontSize: '30px',
      }"
    >
      <font-awesome-icon class="accordion-icon" icon="arrow-left" />
    </a>
    <div>X UI</div>
  </header>
  <div className="main-page-wrapper">
    <Sidebar />
    <div className="main-page-content">
      <RouterView />
    </div>
  </div>
</template>

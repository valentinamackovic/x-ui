<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <header class="title">X UI</header>
  <div className="main-page-wrapper">
    <Sidebar />
    <div className="main-page-content">
      <RouterView />
    </div>
  </div>
</template>

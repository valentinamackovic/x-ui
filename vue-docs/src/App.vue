<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <header class="title">X UI</header>
  <div className="divider"></div>
  <nav>
    <Sidebar />
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToRoute(route) {
  router.push(route);
}
</script>

<template>
  <main>
    <h1 className="main-page-content-title">Overview</h1>
    <p>
      X UI offers ready-to-use components that are both easy to implement and
      flexible, allowing for enhanced control and composability.
    </p>
    <div className="overview-wrapper">
      <div className="overview-item" @click="goToRoute('/menu')">
        <h3>Menu</h3>
        <div>
          <img src="/menuExample.png" className="overview-image" />
        </div>
      </div>
      <div className="overview-item" @click="goToRoute('/select')">
        <h3>Select</h3>
        <div>
          <img src="/selectExample.png" className="overview-image" />
        </div>
      </div>
      <div className="overview-item" @click="goToRoute('/accordion')">
        <h3>Accordion</h3>
        <div>
          <img src="/accordionExample.png" className="overview-image" />
        </div>
      </div>
      <div className="overview-item" @click="goToRoute('/modal')">
        <h3>Modal</h3>
        <div>
          <img src="/modalExample.png" className="overview-image" />
        </div>
      </div>
      <div className="overview-item" @click="goToRoute('/multiselect')">
        <h3>Multiselect</h3>
        <div>
          <img src="/multiselectExample.png" className="overview-image" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.overview-item div {
  background-color: hsl(0, 0%, 8%);
}
</style>

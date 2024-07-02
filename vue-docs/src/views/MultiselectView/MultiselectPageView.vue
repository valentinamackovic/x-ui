<template>
  <div id="app">
    <h1 className="main-page-content-title">Menu</h1>
    <p>A versatile menu for navigation.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Basic example</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center"><Multiselect :options="options" component /></div>
      </template>
    </Example>
  </div>
</template>

<script setup>
import Example from "../../components/Example.vue";
import Multiselect from "../../xui/Multiselect/Multiselect.vue";

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
];
</script>

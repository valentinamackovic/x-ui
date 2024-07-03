<script setup>
import Example from "../../components/Example.vue";
import Multiselect from "../../xui/Multiselect/Multiselect.vue";
import StaticMultiselect from "./StaticMultiselect.vue";
import ComposableMultiselect from "./ComposableMultiselect.vue";

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
];

const initialValue = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
];

const onChange = (v) => {
  window.alert("Changed: ", v.value);
};
</script>

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
    <p>Initial state set to open</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" component open />
        </div>
      </template>
    </Example>
    <p>Initial value set to the first two options</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect
            :options="options"
            :defaultValue="initialValue"
            component
          />
        </div>
      </template>
    </Example>
    <p>Disabled example</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" disabled component />
        </div>
      </template>
    </Example>
    <p>Trigger an alert on value change</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" :onChange="onChange" component />
        </div>
      </template>
    </Example>
    <p>Enable searching the options</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" enableSearch component />
        </div>
      </template>
    </Example>
    <p>Enable clearing all of the selected options with clear all button</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" clearAll component />
        </div>
      </template>
    </Example>
    <p>Set the maximum number of selected items</p>
    <Example codeContent="j">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" :maxSelectedItems="1" component />
        </div>
      </template>
    </Example>
    <p>Ignore the internal logic with static property</p>
    <StaticMultiselect />
    <h3>Use as a composable</h3>
    <ComposableMultiselect />
  </div>
</template>

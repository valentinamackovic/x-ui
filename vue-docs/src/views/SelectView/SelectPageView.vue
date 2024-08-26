<script setup>
import ComponentApiTable from "../../components/ComponentApiTable.vue";
import Example from "../../components/Example.vue";
import { Select } from "x-ui-components-vue";
import StaticSelect from "./StaticSelect.vue";
import ComposableSelect from "./ComposableSelect.vue";
import { api, inputApi, dropdownApi, optionApi } from "./api.js";

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
];

const onChange = (option) => {
  window.alert("Changed " + option.value);
};

const basicExample = `
<script setup>
  import { Select } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
  ];
<\/script>

<template>
  <Select :options="options" component />
</template>
`;

const initialStateToOpenExample = `
<script setup>
  import { Select } from "x-ui-components-vue";
  
  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
  ];
<\/script>

<template>
  <Select :options="options" :open="true" component />
</template>
`;
const initialValueToFirstOptionExample = `
<script setup>
  import { Select } from "x-ui-components-vue";
  
  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
  ];
<\/script>

<template>
  <Select :options="options" defaultValue="1" component />
</template>
`;

const disabledExample = `
<script setup>
  import { Select } from "x-ui-components-vue";
  
  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
  ];
<\/script>

<template>
  <Select :options="options" defaultValue="1" disabled component />
</template>
`;

const onChangeExample = `
<script setup>
  import { Select } from "x-ui-components-vue";
  
  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
  ];

  const onChange = (option) => {
    window.alert("Changed " + option.value);
  };
<\/script>

<template>
  <Select :options="options" :onChange="onChange" component />
</template>
`;
</script>

<template>
  <h1 className="main-page-content-title">Select</h1>
  <p>A dropdown for displaying choices.</p>
  <h2>Examples</h2>
  <h3>Use as a component</h3>
  <p>Basic example</p>
  <Example :codeContent="basicExample">
    <template v-slot:exampleContent>
      <div class="center">
        <Select :options="options" component />
      </div>
    </template>
  </Example>
  <p>Initial state set to open</p>
  <Example :codeContent="initialStateToOpenExample">
    <template v-slot:exampleContent>
      <div class="center">
        <Select :options="options" :open="true" component />
      </div>
    </template>
  </Example>
  <p>Initial value set to the first option</p>
  <Example :codeContent="initialValueToFirstOptionExample">
    <template v-slot:exampleContent>
      <div class="center">
        <Select :options="options" defaultValue="1" component />
      </div>
    </template>
  </Example>
  <p>Disabled example</p>
  <Example :codeContent="disabledExample">
    <template v-slot:exampleContent>
      <div class="center">
        <Select :options="options" defaultValue="1" disabled component />
      </div>
    </template>
  </Example>
  <p>Trigger an alert on value change</p>
  <Example :codeContent="onChangeExample">
    <template v-slot:exampleContent>
      <div class="center">
        <Select :options="options" :onChange="onChange" component />
      </div>
    </template>
  </Example>
  <p>Ignore the internal logic with static property</p>
  <StaticSelect />
  <h3>Use as a composable</h3>
  <ComposableSelect />
  <div className="component-api">
    <h2>Component API</h2>
    <h3>Select</h3>
    <ComponentApiTable :values="api" />
    <h3>Select Input</h3>
    <ComponentApiTable :values="inputApi" />
    <h3>Select Dropdown</h3>
    <ComponentApiTable :values="dropdownApi" />
    <h3>Select Option</h3>
    <ComponentApiTable :values="optionApi" />
  </div>
</template>

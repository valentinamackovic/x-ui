<script setup>
import ComponentApiTable from "../../components/ComponentApiTable.vue";
import Example from "../../components/Example.vue";
import { Multiselect } from "x-ui-components-vue";
import StaticMultiselect from "./StaticMultiselect.vue";
import ComposableMultiselect from "./ComposableMultiselect.vue";
import { api, inputApi, dropdownApi, optionApi } from "./api.js";

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
];

const initialValue = ["1", "2"];

const onChange = (v) => {
  window.alert("Changed: ", v.value);
};

const basicExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" component />
</template>
`;

const initialStateOpenExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" component open />
</template>
`;

const initialStateToFirstTwoOptionsExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];

  const initialValue = ["1", "2"];
<\/script>

<template>
  <Multiselect
    :options="options"
    :defaultValue="initialValue"
    component
  />
</template>
`;

const disabledExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" disabled component />
</template>
`;

const onChangeFunctionExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];

  const onChange = (v) => {
    window.alert("Changed: ", v.value);
  };
<\/script>

<template>
  <Multiselect :options="options" :onChange="onChange" component />
</template>
`;

const searchEnabledExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" enableSearch component />
</template>
`;

const clearAllEnabledExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" clearAll component />
</template>
`;

const maxItemsExample = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];
<\/script>

<template>
  <Multiselect :options="options" :maxSelectedItems="1" component />
</template>
`;
</script>

<template>
  <div id="app">
    <h1 className="main-page-content-title">Select</h1>
    <p>A dropdown for displaying choices.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Basic example</p>
    <Example :codeContent="basicExample">
      <template v-slot:exampleContent>
        <div class="center"><Multiselect :options="options" component /></div>
      </template>
    </Example>
    <p>Initial state set to open</p>
    <Example :codeContent="initialStateOpenExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" component open />
        </div>
      </template>
    </Example>
    <p>Initial value set to the first two options</p>
    <Example :codeContent="initialStateToFirstTwoOptionsExample">
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
    <Example :codeContent="disabledExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" disabled component />
        </div>
      </template>
    </Example>
    <p>Trigger an alert on value change</p>
    <Example :codeContent="onChangeFunctionExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" :onChange="onChange" component />
        </div>
      </template>
    </Example>
    <p>Enable searching the options</p>
    <Example :codeContent="searchEnabledExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" enableSearch component />
        </div>
      </template>
    </Example>
    <p>Enable clearing all of the selected options with clear all button</p>
    <Example :codeContent="clearAllEnabledExample">
      <template v-slot:exampleContent>
        <div class="center">
          <Multiselect :options="options" clearAll component />
        </div>
      </template>
    </Example>
    <p>Set the maximum number of selected items</p>
    <Example :codeContent="maxItemsExample">
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
    <div className="component-api">
      <h2>Component API</h2>
      <h3>Multiselect</h3>
      <ComponentApiTable :values="api" />
      <h3>Multiselect Input</h3>
      <ComponentApiTable :values="inputApi" />
      <h3>Multiselect Item</h3>
      <ComponentApiTable :values="itemApi" />
      <h3>Multiselect Dropdown</h3>
      <ComponentApiTable :values="dropdownApi" />
      <h3>Multiselect Option</h3>
      <ComponentApiTable :values="optionApi" />
    </div>
  </div>
</template>

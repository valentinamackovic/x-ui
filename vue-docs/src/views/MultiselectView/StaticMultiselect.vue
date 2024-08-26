<script setup>
import Example from "../../components/Example.vue";
import { Multiselect } from "x-ui-components-vue";

import { ref } from "vue";

const value = ref([]);
const areOptionsVisible = ref(false);

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
];

const onOptionClick = (option) => {
  if (!value.value.find((v) => v.id === option.id)) return;
  const alreadySelected = value.value.find((v) => v.id === option.id);
  value.value = alreadySelected
    ? value.value.filter((v) => v.id !== option.id)
    : [...value.value, option];
  areOptionsVisible.value = false;
  searchValue.value = "";
};

const handleInputClick = () => {
  areOptionsVisible.value = !areOptionsVisible.value;
};

const example = `
<script setup>
  import { Multiselect } from "x-ui-components-vue";

  import { ref } from "vue";

  const value = ref([]);
  const areOptionsVisible = ref(false);

  const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];

  const onOptionClick = (option) => {
    if (!value.value.find((v) => v.id === option.id)) return;
    const alreadySelected = value.value.find((v) => v.id === option.id);
    value.value = alreadySelected
      ? value.value.filter((v) => v.id !== option.id)
      : [...value.value, option];
    areOptionsVisible.value = false;
    searchValue.value = "";
  };

  const handleInputClick = () => {
    areOptionsVisible.value = !areOptionsVisible.value;
  };
<\/script>

<template>
  <Multiselect
    :options="options"
    :onChange="onOptionClick"
    :onInputClick="handleInputClick"
    :value="value"
    :open="areOptionsVisible"
    isStatic
    component
  />
</template>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <div class="center">
        <Multiselect
          :options="options"
          :onChange="onOptionClick"
          :onInputClick="handleInputClick"
          :value="value"
          :open="areOptionsVisible"
          isStatic
          component
        />
      </div>
    </template>
  </Example>
</template>

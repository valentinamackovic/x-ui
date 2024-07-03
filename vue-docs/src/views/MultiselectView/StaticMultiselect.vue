<script setup>
import Example from "../../components/Example.vue";
import Multiselect from "../../xui/Multiselect/Multiselect.vue";

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
</script>

<template>
  <Example codeContent="j">
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

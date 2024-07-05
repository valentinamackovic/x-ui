<script setup>
import Example from "../../components/Example.vue";
import { Select } from "x-ui-components-vue";

import { ref } from "vue";

const selected = ref();
const optionsVisible = ref(false);

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
];

const onInputClick = () => {
  optionsVisible.value = !optionsVisible.value;
};

const onChange = (v) => {
  selected.value = v;
  optionsVisible.value = false;
};
</script>

<template>
  <Example codeContent="s">
    <template v-slot:exampleContent>
      <div class="center">
        <Select
          :options="options"
          :onChange="onChange"
          :onInputClick="onInputClick"
          :value="selected"
          :open="optionsVisible"
          isStatic
          component
        />
      </div>
    </template>
  </Example>
</template>

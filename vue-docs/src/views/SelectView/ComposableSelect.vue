<script setup>
import Example from "../../components/Example.vue";
import {
  Select,
  SelectDropdown,
  SelectInput,
  SelectOption,
} from "x-ui-components-vue";

import { ref, watch } from "vue";

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

const example = `
<script setup>
  import {
    Select,
    SelectDropdown,
    SelectInput,
    SelectOption,
  } from "x-ui-components-vue";

  import { ref, watch } from "vue";

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
<\/script>


<template>
  <Select>
    <SelectInput :onClick="onInputClick" :value="selected" />
    <SelectDropdown :visible="optionsVisible">
      <SelectOption
        v-for="option in options"
        :key="option.id"
        :onClick="() => onChange(option)"
      >
        {{ option.value }}
      </SelectOption>
    </SelectDropdown>
  </Select>
</template>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <div class="center">
        <Select>
          <SelectInput :onClick="onInputClick" :value="selected" />
          <SelectDropdown :visible="optionsVisible">
            <SelectOption
              v-for="option in options"
              :key="option.id"
              :onClick="() => onChange(option)"
            >
              {{ option.value }}
            </SelectOption>
          </SelectDropdown>
        </Select>
      </div>
    </template>
  </Example>
</template>

<template>
  <Example codeContent="j">
    <template v-slot:exampleContent>
      <div class="center">
        <Multiselect>
          <MultiselectInput
            :onInputClick="handleInputClick"
            :areOptionsVisible="areOptionsVisible"
          >
            <MultiselectItem
              v-for="item in value"
              :key="item.id"
              :onClick="() => unselectOption(item)"
            >
              {{ item.value }}
            </MultiselectItem>
          </MultiselectInput>
          <MultiselectDropdown :areOptionsVisible="areOptionsVisible">
            <MultiselectOption
              v-for="option in options"
              :key="option.id"
              @click="() => onOptionClick(option)"
              :class="['multiselect-option', { selected: isSelected(option) }]"
            >
              {{ option.value }}
            </MultiselectOption>
          </MultiselectDropdown>
        </Multiselect>
      </div>
    </template>
  </Example>
</template>

<script setup>
import Example from "../../components/Example.vue";
import Multiselect from "../../xui/Multiselect/Multiselect.vue";
import MultiselectInput from "../../xui/Multiselect/MultiselectInput.vue";
import MultiselectDropdown from "../../xui/Multiselect/MultiselectDropdown.vue";
import MultiselectItem from "../../xui/Multiselect/MultiselectItem.vue";
import MultiselectOption from "../../xui/Multiselect/MultiselectOption.vue";

import { ref } from "vue";

const value = ref([]);
const areOptionsVisible = ref(false);

const options = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
];

const onOptionClick = (option) => {
  const alreadySelected = value.value.find((v) => v.id === option.id);
  value.value = alreadySelected
    ? value.value.filter((v) => v.id !== option.id)
    : [...value.value, option];
  areOptionsVisible.value = false;
};

const handleInputClick = () => {
  areOptionsVisible.value = !areOptionsVisible.value;
};

const isSelected = (option) => {
  return value.value.some((v) => v.id === option.id);
};

const unselectOption = (option) => {
  value.value = value.value.filter((v) => v.id !== option.id);
};
</script>

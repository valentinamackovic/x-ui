<script setup>
import { ref } from "vue";
import Example from "../../components/Example.vue";
import { Menu, MenuButton, MenuDropdown, MenuItem } from "x-ui-components-vue";

const isOpen = ref(false);
const selectedItem = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  window.alert("item was clicked: " + item.value);
};

const exampleCode = `
<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuDropdown, MenuItem } from "x-ui-components-vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  window.alert("item was clicked: " + item.value);
};
<\/script>

<template>
  <Menu>
    <MenuButton :onMenuButtonClick="toggleMenu">
      <template v-slot:default> Click me to open menu </template>
    </MenuButton>

    <MenuDropdown :open="isOpen">
      <MenuItem
          :item="{ id: '1', value: 'Action 1' }"
          @click="handleItemClick"
      >
          First Action
      </MenuItem>
      <MenuItem
          :item="{ id: '2', value: 'Action 2' }"
          @click="handleItemClick"
      >
          Second Action
      </MenuItem>
    </MenuDropdown>
  </Menu>
</template>
`;
</script>

<template>
  <Example :codeContent="exampleCode">
    <template v-slot:exampleContent>
      <div class="center">
        <Menu>
          <MenuButton :onMenuButtonClick="toggleMenu">
            <template v-slot:default> Click me to open menu </template>
          </MenuButton>

          <MenuDropdown :open="isOpen">
            <MenuItem
              :item="{ id: '1', value: 'Action 1' }"
              @click="handleItemClick"
            >
              First Action
            </MenuItem>
            <MenuItem
              :item="{ id: '2', value: 'Action 2' }"
              @click="handleItemClick"
            >
              Second Action
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </div>
    </template>
  </Example>
</template>

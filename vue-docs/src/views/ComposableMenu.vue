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

<script setup>
import { ref } from "vue";
import Example from "../components/Example.vue";
import Menu from "../xui/Menu/Menu.vue";
import MenuButton from "../xui/Menu/MenuButton.vue";
import MenuItem from "../xui/Menu/MenuItem.vue";
import MenuDropdown from "../xui/Menu/MenuDropdown.vue";

const isOpen = ref(false);
const selectedItem = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  window.alert("item was clicked: " + item.value);
};

const exampleCode = `
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
`;
</script>

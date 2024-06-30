<script setup>
import Example from "../components/Example.vue";
import ComposableMenuExample from "./ComposableMenu.vue";
import Menu from "../xui/Menu/Menu.vue";
import { ref } from "vue";

const items = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
];
const disabledItems = [1, 2];

const onClose = () => {
  window.alert("closed");
};

const handleItemClick = () => window.alert("Clicked");

const basicExampleCode = `
<Menu :items="items" :onItemClick="handleItemClick" component>
    <template v-slot:default> Click me to open menu </template>
</Menu>
`;
const disabledItemsExampleCode = `
<div class="center">
    <Menu
        :items="items"
        :onItemClick="handleItemClick"
        :disabledItems="disabledItems"
        component
    >
        <template v-slot:default> Click me to open menu </template>
    </Menu>
</div>
`;
const defaultOpenExampleCode = `
<div class="center">
    <Menu
        :items="items"
        :onItemClick="handleItemClick"
        :open="true"
        component
    >
        <template v-slot:default> Click me to open menu </template>
    </Menu>
</div>
`;
</script>

<template>
  <div id="app">
    <h1 className="main-page-content-title">Menu</h1>
    <p>A versatile menu for navigation.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Basic example</p>
    <Example :codeContent="basicExampleCode">
      <template v-slot:exampleContent>
        <div class="center">
          <Menu :items="items" :onItemClick="handleItemClick" component>
            <template v-slot:default> Click me to open menu </template>
          </Menu>
        </div>
      </template>
    </Example>
    <p>Disabled items</p>
    <Example :codeContent="disabledItemsExampleCode">
      <template v-slot:exampleContent>
        <div class="center">
          <Menu
            :items="items"
            :onItemClick="handleItemClick"
            :disabledItems="disabledItems"
            component
          >
            <template v-slot:default> Click me to open menu </template>
          </Menu>
        </div>
      </template>
    </Example>
    <p>Open set to true</p>
    <Example :codeContent="defaultOpenExampleCode">
      <template v-slot:exampleContent>
        <div class="center">
          <Menu
            :items="items"
            :onItemClick="handleItemClick"
            :open="true"
            component
          >
            <template v-slot:default> Click me to open menu </template>
          </Menu>
        </div>
      </template>
      <template v-slot:default>
        <!-- This could be additional information or controls related to the Example -->
        Explore the code to see how it works!
      </template>
    </Example>
    <p>Trigger a function when the menu popup is closed</p>
    <Example :codeContent="basicExampleCode">
      <template v-slot:exampleContent>
        <div class="center">
          <Menu
            :items="items"
            :onItemClick="handleItemClick"
            :onClose="onClose"
            component
          >
            <template v-slot:default> Click me to open menu </template>
          </Menu>
        </div>
      </template>
      <template v-slot:default>
        <!-- This could be additional information or controls related to the Example -->
        Explore the code to see how it works!
      </template>
    </Example>
    <p>Ignore the internal logic with static property</p>
    <Example :codeContent="basicExampleCode">
      <template v-slot:exampleContent>
        <div class="center">
          <Menu
            :isStatic="true"
            :items="items"
            :onItemClick="handleItemClick"
            component
          >
            <template v-slot:default> Click me to open menu </template>
          </Menu>
        </div>
      </template>
      <template v-slot:default>
        <!-- This could be additional information or controls related to the Example -->
        Explore the code to see how it works!
      </template>
    </Example>
    <h3>Use as a composable</h3>
    <ComposableMenuExample />
  </div>
</template>

<style>
/* Add any additional styles for your app here */
</style>

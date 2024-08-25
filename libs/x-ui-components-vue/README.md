### Introduction

This library provides a suite of UI components designed specifically for Vue. Both ready-to-use and customizable, these components are developed as part of a thesis project and are ideal for development and experimental environments, though they may not yet be suitable for production use.

### Installation

To integrate these components into your Vue project, use the following command to install:

```bash
npm install x-ui-components-vue
```

Then, import the styles in your main JavaScript file:

```bash
import "x-ui-components-vue/dist/x-ui-components-vue.es.css";
```

### Components

This library features five key components: modal, menu, select, multiselect, and accordion. For detailed documentation, code examples, and live demos, please visit the [documentation site](https://x-ui-components-vue.netlify.app/).

## Usage Example

Below is a simple example demonstrating how to use the Menu component:

```js
<script setup>
import Example from "../../components/Example.vue";
import { Menu, MenuButton, MenuDropdown, MenuItem } from "x-ui-components-vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  window.alert("item was clicked: " + item.value);
};
</script>

<template>
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

```

### API

### Accordion

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `expanded` | Whether accordion is expanded | `boolean` | `false` |
| `title` | Title of the collapsible section | `string` | `""` |
| `onTitleClick` | Triggers when the title is clicked | `function` | `() => {}` |


### Accordion Button

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `onClick` | Triggers when the title is clicked | `function` | `() => {}` |

### Accordion Content

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `visible` | Whether the content is visible | `boolean` | `false` |

#### Menu

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component`     | If the value is false only children of the main component will be rendered | `boolean`     | `false`                    |
| `isStatic`      | If true, the component becomes a shell and ignores all the internal logic  | `boolean`     | `false`                    |
| `open`          | Whether or not the menu is open                                            | `boolean`     | `false`                    |
| `items`         | Menu items                                                                 | `{ id: number | string, value: string }[]` | `[]`           |
| `disabledItems` | Disabled menu items                                                        | `number[]     | string[]`                  | `[]`           |
| `onClose`       | Triggers when the dropdown menu is closed                                  | `function`    | `() => {}`                 |
| `onItemClick`   | Triggers when a menu item is clicked                                       | `function`    | `(id: string               | number) => {}` |
| `onButtonClick` | Triggers when the menu button is clicked                                   | `function`    | `() => {}`                 |

#### Menu Button

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
|`onMenuButtonClick` | Triggers when the button is clicked | `function` | `() => {}` |

#### Menu Dropdown

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
|`open` | Whether or not the dropdown is visible | `boolean` |`false`|


#### Menu Item

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `item` | Menu item | `funcstion` |`{ id: number | string, value: string }`|
| `isDisabled` | Whether the item is disabled | `boolean` | `false` |

### Modal

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `isOpen` | Whether the modal is visible or not | `boolean` | `false` |
| `title` | Title of the modal | `string` | `""` |
| `onClose` | Triggers when the modal is closed | `function` | `() => {}` |

### Multiselect

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `options` | Select options | `{ id: string | number, value: string }[]` | `[]` |
| `open` | Whether the select dropdown is visible or not | `boolean` | `false` |
| `disabled` | Whether the select is disabled | `boolean` | `false` |
| `value` | Selected value | `{ id: string | number, value: string }` | `undefined` |
| `defaultValue` | Initial value | `{ id: string | number, value: string }` | `undefined` |
| `onChange` | Triggers when the value is changed | `function` | `(value: { id: string | number, value: string }) => {}` |
| `onInputClick` | Triggers when the input is clicked | `function` | `() => {}` |
| `enableSearch` | Whether searching the options is enabled | `boolean` | `false` |
| `onSearch` | Triggers on each search input change | `function` | `(value: string) => {}` |
| `clearAll` | Whether clear all selected options is enabled | `boolean` | `false` |
| `maxSelectedItems` | Number of maximum selected options allowed | `number` | `undefined` |


### Multiselect Input

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `inputClick` | Triggers when the input is clicked | `function` | `() => {}` |
| `disabled` | Whether the input is disabled | `boolean` | `false` |
| `enableSearch` | Whether searching the options is enabled | `boolean` | `false` |
| `onSearch` | Triggers on each search input change | `function` | `(value: string) => {}` |
| `searchValue` | Search value | `string` | `""` |
| `onClearAll` | Triggered when clear button is clicked | `function` | `() => {}` |
| `clearAll` | Whether clear all selected options is enabled | `boolean` | `false` |

### Multiselect Dropdown

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `areOptionsVisible` | Whether the options are visible | `boolean` | `false` |

### Multiselect Option

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `disabled` | Whether the input is disabled | `boolean` | `false` |
| `selected` | Whether the input is selected | `boolean` | `false` |

### Select

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `options` | Select options | `{ id: string | number, value: string }[]` | `[]` |
| `open` | Whether the select dropdown is visible or not | `boolean` | `false` |
| `disabled` | Whether the select is disabled | `boolean` | `false` |
| `value` | Selected value | `{ id: string | number, value: string }` | `undefined` |
| `defaultValue` | Initial value | `{ id: string | number, value: string }` | `undefined` |
| `onChange` | Triggers when the value is changed | `function` | `(value: { id: string | number, value: string }) => {}` |
| `onInputClick` | Triggers when the input is clicked | `function` | `() => {}` |

### Select Input

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `value` | Selected value | `{ id: string | number, value: string }` | `undefined` |
| `onClick` | Triggers when the input is clicked | `function` | `() => {}` |
| `disabled` | Whether the select is disabled | `boolean` | `false` |

### Select Dropdown

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `visible` | Whether the select dropdown is visible or not | `boolean` | `false` |

### Select Option

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `onClick` | Triggers when the item is clicked | `function` | `() => {}` |
| `selected` | Whether the option is selected | `boolean` | `false` |


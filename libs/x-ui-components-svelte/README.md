### Introduction

This library provides a suite of UI components designed specifically for Svelte. Both ready-to-use and customizable, these components are developed as part of a thesis project and are ideal for development and experimental environments, though they may not yet be suitable for production use.

### Installation

To integrate these components into your Svelte project, use the following command to install:

```bash
npm install x-ui-components-svelte
```

### Components

This library features five key components: modal, menu, select, multiselect, and accordion. For detailed documentation, code examples, and live demos, please visit the [documentation site](https://x-ui-components-svelte.netlify.app/).

## Usage Example

Below is a simple example demonstrating how to use the Menu component:

```js
<script lang="ts">
import { Menu, MenuButton, MenuDropdown, MenuItem } from 'x-ui-components-svelte'
import type { Item } from '../../xui/menu/types';

let isOpen = false;

function toggleOpen() {
    isOpen = !isOpen;
}

function handleItemClick(item: Item) {
    isOpen = false; // Close the dropdown on item click
    window.alert('Item clicked ' + item.value)
}
</script>
  
<Menu>
    <MenuButton onMenuButtonClick={toggleOpen}>
    Composable
    </MenuButton>
    <MenuDropdown open={isOpen}>
    <MenuItem 
        onClick={handleItemClick}
        item={{ id: "1", value: "Action 1" }}
    >
        First Action
    </MenuItem>
    </MenuDropdown>
</Menu>
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
| `expanded` | Whether the content is visible | `boolean` | `false` |

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
| `onClick` | Triggers when the item is clicked | `function` | `(id: string | number) => {}` |

### Modal

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `isOpen` | Whether the modal is visible or not | `boolean` | `false` |
| `title` | Title of the modal | `string` | `""` |
| `onClose` | Triggers when the modal is closed | `function` | `() => {}` |

### Modal Button

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `onButtonClick` | Triggers when the button is clicked | `function` | `() => {}` |

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
| `disabled` | Whether the input is disabled | `boolean` | `false` |
| `enableSearch` | Whether searching the options is enabled | `boolean` | `false` |
| `searchValue` | Search value | `string` | `""` |
| `onClearAll` | Triggered when clear button is clicked | `function` | `() => {}` |
| `clearAll` | Whether clear all selected options is enabled | `boolean` | `false` |


### Multiselect Item

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `onClick` | Triggered when the item is clicked | `function` | `() => {}` |

### Multiselect Dropdown

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `areOptionsVisible` | Whether the options are visible | `boolean` | `false` |

### Multiselect Option

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `disabled` | Whether the input is disabled | `boolean` | `false` |
| `selected` | Whether the input is selected | `boolean` | `false` |
| `onClick` | Triggered when the option is clicked | `function` | `() => {}` |

### Select

| Prop Name | Description | Type | Default |
| :--------- | :----------- | :---- | :------- |
| `component` | If the value is false only children of the main component will be rendered | `boolean` | `false` |
| `isStatic` | If true the component becomes a shell and ignores all the internal logic | `boolean` | `false` |
| `options` | Select options | `{ id: string | number, value: string }[]` | `[]` |
| `open` | Whether the select dropdown is visible or not | `boolean` | `false` |
| `disabled` | Whether the select is disabled | `boolean` | `false` |
| `valueProp` | Selected value | `{ id: string | number, value: string }` | `undefined` |
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



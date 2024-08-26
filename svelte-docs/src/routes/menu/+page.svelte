<script lang="ts">
import { Menu } from 'x-ui-components-svelte'
import Example from '../../components/Example.svelte';
import ComposableMenu from './ComposableMenu.svelte';
import ComponentApiTable from '../../components/ComponentApiTable.svelte';
import { api, buttonApi, dropdownApi, itemApi } from './api';

let areOptionsVisible = false

let items = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' }
];

let disabledItems = [2]; // Assume Item 2 is disabled

function onItemClick(id: number | string) {
    window.alert('Item clicked:' + id)
}

function onMenuButtonClick() {
    areOptionsVisible = !areOptionsVisible
}

function onClose() {
    window.alert('Menu closed')
}

const basicExample = `
<script lang="ts">
    import { Menu } from 'x-ui-components-svelte'

    function onItemClick(id: number | string) {
        window.alert('Item clicked:' + id)
    }
<\/script>

<Menu 
    items={items} 
    component={true}
    onItemClick={onItemClick}
>
    Menu Options
</Menu>
`

const disabledItemsExample = `
<script lang="ts">
    import { Menu } from 'x-ui-components-svelte'

    let disabledItems = [2];
<\/script>

<Menu 
    items={items} 
    component={true}
    disabledItems={disabledItems}
>
    Menu Options
</Menu>
`

const openExample = `
<script lang="ts">
    import { Menu } from 'x-ui-components-svelte'

    let disabledItems = [2];
<\/script>

<Menu 
    items={items} 
    component={true}
    open={true}
>
    Menu Options
</Menu>
`

const onCloseExample = `
<script lang="ts">
    import { Menu } from 'x-ui-components-svelte'

    function onClose() {
        window.alert('Menu closed')
    }
<\/script>

<Menu 
    items={items} 
    component={true}
    onClose={onClose}
>
    Menu Options
</Menu>
`

const staticExample = `
<script lang="ts">
    import { Menu } from 'x-ui-components-svelte'

    let areOptionsVisible = false

    let items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];

    let disabledItems = [2]; // Assume Item 2 is disabled

    function onItemClick(id: number | string) {
        window.alert('Item clicked:' + id)
    }

    function onMenuButtonClick() {
        areOptionsVisible = !areOptionsVisible
    }

    function onClose() {
        window.alert('Menu closed')
    }
<\/script>

<Menu 
    items={items} 
    component={true}
    onItemClick={onItemClick}
    onButtonClick={onMenuButtonClick}
    open={areOptionsVisible}
    isStatic={true}
>
    Menu Options
</Menu>
`

const composableExample = `
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
  <\/script>

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
  `
</script>
  

<h1 class="main-page-content-title">Menu</h1>
<p>A versatile menu for navigation.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent={basicExample}>
    <div slot="exampleContent">  
        <Menu 
            items={items} 
            component={true}
            onItemClick={onItemClick}
            >
            Menu Options
        </Menu>
    </div>
</Example>
<p>Disabled items</p>
<Example codeContent={disabledItemsExample}>
    <div slot="exampleContent">  
        <Menu 
            items={items} 
            component={true}
            disabledItems={disabledItems}
            >
            Menu Options
        </Menu>
    </div>
</Example>
<p>Open set to true</p>
<Example codeContent={openExample}>
    <div slot="exampleContent">  
        <Menu 
            items={items} 
            component={true}
            open={true}
            >
            Menu Options
        </Menu>
    </div>
</Example>
<p>Trigger a function when the menu popup is closed</p>
<Example codeContent={onCloseExample}>
    <div slot="exampleContent">  
        <Menu 
            items={items} 
            component={true}
            onClose={onClose}
            >
            Menu Options
        </Menu>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<Example codeContent={staticExample}>
    <div slot="exampleContent">  
        <Menu 
            items={items} 
            component={true}
            onItemClick={onItemClick}
            onButtonClick={onMenuButtonClick}
            open={areOptionsVisible}
            isStatic={true}
            >
            Menu Options
        </Menu>
    </div>
</Example>
<h3>Use as a composable</h3>
<Example codeContent={composableExample}>
    <div slot="exampleContent">  
        <ComposableMenu />
    </div>
</Example>
<div class="component-api">
    <h2>Component API</h2>
    <h3>Menu</h3>
    <ComponentApiTable values={api} />
    <h3>Menu Button</h3>
    <ComponentApiTable values={buttonApi} />
    <h3>Menu Dropdown</h3>
    <ComponentApiTable values={dropdownApi} />
    <h3>Menu Item</h3>
    <ComponentApiTable values={itemApi} />
</div>
  
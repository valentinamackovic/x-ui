<script lang="ts">
import Menu from '../../xui/menu/Menu.svelte';
import Example from '../../components/Example.svelte';
import ComposableMenu from './ComposableMenu.svelte';

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
</script>
  

<h1 class="main-page-content-title">Menu</h1>
<p>A versatile menu for navigation.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
    <div slot="exampleContent">  
        <ComposableMenu />
    </div>
</Example>

  
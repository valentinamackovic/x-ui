<script lang="ts">
    import Menu from '../../xui/menu/Menu.svelte';
    import MenuItem from '../../xui/menu/MenuItem.svelte';
    import MenuButton from '../../xui/menu/MenuButton.svelte';
    import MenuDropdown from '../../xui/menu/MenuDropdown.svelte';
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
  
  <div class="center">
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
  </div>
  
  <style>
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  
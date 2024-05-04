<script lang="ts">
	import SidebarItem from './SidebarItem.svelte';

    const ItemsEnum = {
        Overview: 'Overview',
        Modal: 'Modal',
        Menu: 'Menu',
        Select: 'Select',
        Accordion: 'Accordion',
        Multiselect: 'Multiselect',
    };
    type ItemEnumType = typeof ItemsEnum[keyof typeof ItemsEnum]

    let activeItem: ItemEnumType = ItemsEnum.Overview;

    function setActiveItem(item: ItemEnumType) {
        activeItem = item;
    }
</script>

<div class="sidebar">
    <div class="sidebar-content">
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Overview} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Overview)}
                >
                    Overview
            </button>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Menu} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Menu)}
                >
                    Menu
            </button>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Select} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Select)}
                >
                    Select
            </button>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Accordion} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Accordion)}
                >
                    Accordion
            </button>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Modal} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Modal)}
                >
                    Modal
            </button>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <button 
                class:sidebar-item-active={activeItem === ItemsEnum.Multiselect} 
                class="sidebar-item sidebar-button"
                on:click={() => setActiveItem(ItemsEnum.Multiselect)}
                >
                    Multiselect
            </button>
        </SidebarItem>
    </div>
</div>

<style>
    .sidebar-button {
        background-color: transparent;
        color: white;
        box-shadow: none;
        border: none;
        width: 100%;
        text-align: start; 
    }
    .sidebar-button:hover {
        background-color: #334155;
    }
    .sidebar-item-active {
        background-color: #475569;
    }
</style>
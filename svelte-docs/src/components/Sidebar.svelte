<script lang="ts">
    import { afterNavigate } from '$app/navigation';
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

    function getCurrentRoute() {
		const path = window.location.pathname;
		switch (path) {
			case '/overview':
				return ItemsEnum.Overview;
			case '/modal':
				return ItemsEnum.Modal;
			case '/menu':
				return ItemsEnum.Menu;
			case '/select':
				return ItemsEnum.Select;
			case '/accordion':
				return ItemsEnum.Accordion;
			case '/multiselect':
				return ItemsEnum.Multiselect;
			default:
				return ItemsEnum.Overview;
		}
	}

	afterNavigate(() => {
		const currentRoute = getCurrentRoute();
		activeItem = currentRoute;
	});
</script>

<div class="sidebar">
    <div class="sidebar-content">
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Overview} 
                class="sidebar-item sidebar-button"
                href="/overview"
                >
                    Overview
            </a>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Menu} 
                class="sidebar-item sidebar-button"
                href="/menu"
                >
                Menu
            </a>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Select} 
                class="sidebar-item sidebar-button"
                href="/select"
                >
                    Select
            </a>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Accordion} 
                class="sidebar-item sidebar-button"
                href="/accordion"
                >
                    Accordion
            </a>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Modal} 
                class="sidebar-item sidebar-button"
                href="/modal"
                >
                    Modal
            </a>
        </SidebarItem>
        <SidebarItem let:hovering={active}>
            <a 
                class:sidebar-item-active={activeItem === ItemsEnum.Multiselect} 
                class="sidebar-item sidebar-button"
                href="/multiselect"
                >
                    Multiselect
            </a>
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
.sidebar-button, a {
    display: block;
    text-decoration: none;
    font-size: inherit;
}
</style>
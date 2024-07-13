<script lang="ts">
  import "./styles.css"
  import { onMount, onDestroy } from 'svelte';
  import type { Item } from './types';

  export let disabledItems: number[] | string[] = [];
  export let items: Item[] = [];
  export let onItemClick: (id: string | number) => void = (id) => {};
  export let onButtonClick: () => void = () => {};
  export let open: boolean = false;
  export let onClose: () => void = () => {};
  export let isStatic: boolean = false;
  export let component: boolean = false;

  let areOptionsVisible = open ?? false;
  let dropdownRef: HTMLDivElement;

  $: if (open !== undefined) {
    areOptionsVisible = open;
  }

  function close() {
    if (!isStatic) {
      areOptionsVisible = false;
    }
    onClose?.();
  }

  function onMenuButtonClick() {
    if (!isStatic) {
      areOptionsVisible = !areOptionsVisible;
    }
    onButtonClick?.();
  }

  onMount(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
        close();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.keyCode === 27) { // ESC key
        close();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function isDisabled(item: Item) {
    //@ts-ignore
    return disabledItems && disabledItems?.includes(item.id);
  }
</script>

<div class="menu-wrapper" {...$$props}>
  {#if component}
    <button class="menu-button" on:click={onMenuButtonClick}>
      <slot />
    </button>
    {#if areOptionsVisible && items}
      <div bind:this={dropdownRef} class="menu-dropdown">
        {#each items as item}
          {#if isDisabled(item)}
            <div class="menu-option disabled">
              {item.value}
            </div>
          {:else}
            <div 
              class="menu-option" 
              on:click={() => onItemClick?.(item.id)}
              on:keydown={event => event.key === 'Enter' || event.key === 'Space' && onItemClick?.(item.id)}
              role="button"
              tabindex="0"
              >
                {item.value}
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  {:else}
    <slot />
  {/if}
</div>
  
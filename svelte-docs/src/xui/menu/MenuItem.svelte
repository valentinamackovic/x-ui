<script lang="ts">
import "./styles.css"
  import type { Item } from "./types";

export let item: Item;
export let isDisabled: boolean = false; // Default to false if not provided
export let onClick: (item: Item) => void;

function handleClick() {
    if (!isDisabled) {
        onClick(item);
    }
}
</script>

<div
    class="menu-option {isDisabled ? 'disabled' : ''}"
    on:click={handleClick}
    >
    <slot></slot>
</div>
  

  
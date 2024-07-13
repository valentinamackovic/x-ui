<script lang="ts">
import "./styles.css"

export let clearAll: boolean = false;
export let enableSearch: boolean = false;
export let searchValue: string = "";

let inputValue = searchValue; 

$: inputSize = inputValue && inputValue.length > 0 ? inputValue.length : 1;

function onClearAllClick() {
    dispatch('clearAllClick');
}

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

// on:click attr is the proper way to forward events in svelte (found in docs)
</script>

<div class={['multiselect-input-wrapper', clearAll ? 'clear-all-enabled' : ''].join(' ')}>
    <section
        class={['multiselect-input-section', clearAll ? 'clear-all-enabled' : ''].join(' ')}
        on:click
        on:keydown
        role="button"
        tabindex="0"
        >
            <section class="multiselect-input-items">
                <slot></slot>
            </section>
        {#if enableSearch}
            <input
                class="multiselect-input"
                type="text"
                bind:value={inputValue}
                size={inputSize}
            />
        {/if}
        {#if clearAll}
            <button
                class="multiselect-input-item-x-btn clear-all-enabled"
                on:click={onClearAllClick}
            >
                <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <!-- !Font Awesome Free  -->
                    <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                </svg>
            </button>
        {/if}
    </section>
</div>
  

  
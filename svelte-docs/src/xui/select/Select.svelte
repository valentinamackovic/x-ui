<script lang="ts">
import './styles.css'
import { onMount, onDestroy } from 'svelte';
import type { Option } from './types'

export let options: Option[] = [];
export let defaultValue: string | number | undefined = undefined;
export let valueProp: Option | undefined = undefined;
export let open: boolean | undefined = false;
export let disabled: boolean = false;
export let onChange: (value: Option) => void = (v) => {};
export let onInputClick: () => void = () => {};
export let component: boolean = false;
export let isStatic: boolean = false;

let value: Option | undefined = options?.find(option => option.id === defaultValue);
let areOptionsVisible = open;
let dropdownRef: HTMLDivElement;

$: if (open !== undefined) {
    areOptionsVisible = open;
}

$: if (valueProp !== undefined) {
    value = valueProp;
}

function toggleDropdownVisibility() {
    if (!isStatic) {
        areOptionsVisible = !areOptionsVisible;
    }
    onInputClick?.();
}

function selectOption(option: Option) {
    if (!isStatic) {
        value = option;
        areOptionsVisible = false;
    }
    onChange?.(option);
}

function handleClickOutside(event: MouseEvent) {
    if (!isStatic && dropdownRef && !dropdownRef.contains(event.target as Node)) {
        areOptionsVisible = false;
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (!isStatic && event.key === 'Escape') {
        areOptionsVisible = false;
    }
}

onMount(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
    };
});
</script>

<div class="select-wrapper">
{#if component}
    <div class="select-input-wrapper">
        <input
            class="select-input"
            type="text"
            value={value?.value ?? ""}
            on:click={toggleDropdownVisibility}
            disabled={disabled}
            readonly
        />
        {#if areOptionsVisible}
            <div bind:this={dropdownRef} class="select-dropdown">
                {#each options as option}
                    <div
                        class="select-option {option.id === value?.id ? 'selected' : ''}"
                        on:click={() => selectOption(option)}
                        on:keydown={event => event.key === 'Enter' || event.key === 'Space' && selectOption(option)}
                        tabindex="0"
                        role="button"
                    >
                        {option.value}
                    </div>
                {/each}
            </div>
        {/if}
    </div>
{:else}
    <slot></slot>
{/if}
</div>
  
<script lang="ts">
import { onMount } from 'svelte';
import "./styles.css"
import type { Option } from './types'; 

export let options: Option[] = [];
export let defaultValue: string[] = [];
export let value: Option[] = [];
export let open: boolean = false;
export let disabled: boolean = false;
export let onChange: (value: Option) => void = () => {};
export let onInputClick: () => void = () => {};
export let isStatic: boolean = false;
export let enableSearch: boolean = false;
export let clearAll: boolean = false;
export let maxSelectedItems: number | undefined = undefined;
export let component: boolean = false;

let searchValue = '';
let expanded = open;
let selectedValues = defaultValue.map(id => options.find(option => option.id === id))?.filter(element => element !== undefined);
let dropdownRef: HTMLDivElement;

$: if (value !== undefined) {
    selectedValues = value;
}

$: visibleOptions = enableSearch && searchValue 
    ? options.filter(option => option.value.toLowerCase().includes(searchValue.toLowerCase()))
    : options;

$: maxSelectionReached = maxSelectedItems !== undefined && selectedValues.length >= maxSelectedItems;

$: expanded = open; 

// for this to get updated whenever:
// - selectedValues change
// - maxSelectionReached is reached
// both need to be directly used, calling the function that uses them (like isSelected) does not trigger the logic on each selection
$: dropdownOptions = visibleOptions.map(option => ({
    ...option,
    disabled: !selectedValues.some(v => v.id === option.id) && maxSelectionReached,
    selected: selectedValues.some(v => v.id === option.id)
  }));
  
function handleClickOutside(event: MouseEvent) {
    if (!isStatic && dropdownRef && !dropdownRef.contains(event.target as Node)) {
        expanded = false;
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (!isStatic && event.key === 'Escape') {
        expanded = false;
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

const onOptionClick = (option: Option) => {
  if(!isStatic) {
    if (maxSelectionReached && !value.find((v) => v.id === option.id)) return;

    const alreadySelected = value.find((v) => v.id === option.id);
    selectedValues = alreadySelected
        ? selectedValues.filter((v) => v.id !== option.id)
        : [...selectedValues, option];

    searchValue = "";
  }
  onChange?.(option);
};

function clearAllSelectedOptions() {
    selectedValues = [];
}

function handleInputClick() {
    if(!disabled && !isStatic) expanded = !expanded;
    onInputClick();
}

const unselectOption = (option: Option) => {
    selectedValues = selectedValues?.filter((v) => v.id !== option.id);
};
</script>

<div class="multiselect-wrapper" {...$$props}>
    {#if component}
        <div class="multiselect-input-wrapper" class:clear-all-enabled={clearAll}>
            <section 
                class="multiselect-input-section" 
                on:click={handleInputClick}
                on:keydown={event => event.key === 'Enter' || event.key === 'Space' && handleInputClick()}
                role="button"
                tabindex="0"
            >
                <section class="multiselect-input-items">
                    {#each selectedValues as value (value.id)}
                        <div class="multiselect-input-item">
                            {value.value}
                            <button class="multiselect-input-item-x-btn" on:click|stopPropagation={() => unselectOption(value)}>
                                <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <!-- !Font Awesome Free  -->
                                    <path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </div>
                    {/each}
                </section>
                {#if enableSearch}
                    <input
                        class="multiselect-input"
                        type="text"
                        bind:value={searchValue}
                        size={searchValue.length || 1}
                    />
                {/if}
                {#if clearAll}
                    <button class="multiselect-input-item-x-btn clear-all-enabled" on:click|stopPropagation={clearAllSelectedOptions}>
                        <svg class="multiselect-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!-- !Font Awesome Free  -->
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                    </button>
                {/if}
            </section>
        </div>
        {#if expanded}
            <div class="multiselect-dropdown" bind:this={dropdownRef}>
                {#each dropdownOptions as option (option.id)}
                    <div 
                        class="multiselect-option"
                        class:selected={option.selected} 
                        class:disabled={option.disabled} 
                        on:click={() => onOptionClick(option)}
                        role="button"
                        tabindex="0"
                        on:keydown={event => event.key === 'Enter' || event.key === 'Space' && onOptionClick(option)}
                    >
                        {option.value}
                    </div>
                {/each}
            </div>
        {/if}
    {:else}
        <slot></slot>
    {/if}
</div>
  
  
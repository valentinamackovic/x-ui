<script lang="ts">
import './styles.css';
import { onMount, onDestroy } from 'svelte';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export let title: string = "";
export let isOpen: boolean = false;
export let onClose: () => void = () => {};
export let component: boolean = false;
export let isStatic: boolean = false;

const open: Writable<boolean> = writable(isOpen);

$: open.set(isOpen);

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" && !isStatic && component) close();
}

function close() {
    if (!isStatic) {
        open.set(false);
    }
    onClose?.();
}
// todo: fix it, it does not work
function handleClickOutside(event: MouseEvent) {
    const backdrop = document.getElementById('modal-backdrop');
    if (event.target === backdrop && !isStatic && component) close();
}

onMount(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleClickOutside);
    };
});
</script>

<svelte:window on:keydown={handleKeyDown} />
<div 
    id="modal-backdrop" 
    class="modal-backdrop" 
    role="button"
    tabindex="0" 
    on:keydown={handleKeyDown}
    on:mousedown={handleClickOutside} 
    style:display={$open ? 'flex' : 'none'}
>
{#if component}
    <div class="modal-content" >
        <div class="modal-title">{title}</div>
            <slot></slot>
        <div class="modal-footer">
            <button class="modal-button" on:click={close}>OK</button>
        </div>
    </div>
{:else}
    <slot></slot>
{/if}
</div>
  

  
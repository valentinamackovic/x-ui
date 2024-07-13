<script lang="ts">
import "./styles.css"
import type {Option} from './types'

export let value: Option | undefined;
export let disabled: boolean = false;
export let onClick: () => void = () => {};

</script>

<div class="select-input-wrapper" {...$$props}>
    <input
        class="select-input"
        type="text"
        value={value?.value ?? ""}
        on:click={onClick}
        disabled={disabled}
        readonly
    />
</div>

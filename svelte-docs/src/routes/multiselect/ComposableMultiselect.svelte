<script lang="ts">
import Multiselect from '../../xui/multiselect/Multiselect.svelte';
import MultiselectInput from '../../xui/multiselect/MultiselectInput.svelte';
import MultiselectDropdown from '../../xui/multiselect/MultiselectDropdown.svelte';
import MultiselectOption from '../../xui/multiselect/MultiselectOption.svelte';
import MultiselectItem from '../../xui/multiselect/MultiselectItem.svelte';
import type { Option } from "../../xui/multiselect/types";

let open: boolean = false;
let values: Option[] = [];

const options: Option[] = [
    { value: "Option 1", id: "1" },
    { value: "Option 2", id: "2" },
];

const onOptionClick = (option: Option) => {
    const index = values.findIndex((val) => val.id === option.id);
    if (index === -1) {
        values = [...values, option];
    } else {
        values = values.filter((val) => val.id !== option.id);
    }
    open = false;
};

function toggleOpen() {
    open = !open;
}
</script>

<Multiselect>
    <MultiselectInput  
        on:click={toggleOpen}
        on:keydown={event => event.key === 'Enter' || event.key === 'Space' && toggleOpen()}
    >
        {#each values as value (value.id)}
            <MultiselectItem onClick={() => onOptionClick(value)}>
                {value.value}
            </MultiselectItem>
        {/each}
    </MultiselectInput>
    <MultiselectDropdown areOptionsVisible={open}>
        {#each options as option (option.id)}
            <MultiselectOption onClick={() => onOptionClick(option)}>
                {option.value}
            </MultiselectOption>
        {/each}
    </MultiselectDropdown>
</Multiselect>
  
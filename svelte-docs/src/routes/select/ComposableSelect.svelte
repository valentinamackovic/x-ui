<script lang="ts">
import Select from '../../xui/select/Select.svelte';
import SelectInput from '../../xui/select/SelectInput.svelte';
import SelectDropdown from '../../xui/select/SelectDropdown.svelte';
import SelectOption from '../../xui/select/SelectOption.svelte';
  import type { Option } from '../../xui/select/types';

let areOptionsVisible = false;
let value: Option | undefined = undefined;

function toggleDropdown() {
    areOptionsVisible = !areOptionsVisible;
}

function selectOption(option: Option) {
    value = option;
    areOptionsVisible = false; 
}
</script>

<Select>
    <SelectInput
        onClick={toggleDropdown}
        value={value}
    >
        {value?.value}
    </SelectInput>
    <SelectDropdown open={areOptionsVisible}>
        <SelectOption
            onClick={() => selectOption({ value: "Option 1", id: "1" })}
        >
            Option 1
        </SelectOption>
    </SelectDropdown>
</Select>
  
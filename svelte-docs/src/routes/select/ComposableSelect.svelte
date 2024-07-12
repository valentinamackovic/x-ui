<script lang="ts">
import { Select, SelectDropdown, SelectInput, SelectOption } from "x-ui-components-svelte"
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
  
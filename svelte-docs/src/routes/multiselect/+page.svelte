<script lang="ts">
import Example from "../../components/Example.svelte";
import { Multiselect, SelectOption } from "x-ui-components-svelte"
import type { Option } from "../../xui/multiselect/types";
import ComposableMultiselect from "./ComposableMultiselect.svelte";
import ComponentApiTable from "../../components/ComponentApiTable.svelte";
import { api, inputApi, itemApi, dropdownApi, optionApi } from "./api";

let expanded = false
let values: Option[] = []

const options = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
    { id: "4", value: "Option 4" },
]

const onInputClick = () => expanded = !expanded

const onOptionClick = (option: Option) => {
    const alreadySelected = values.find((v) => v.id === option.id);
    values = alreadySelected
        ? values.filter((v) => v.id !== option.id)
        : [...values, option];
}

const basicExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    component
/>
`

const initialOpenExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    open={true}
    component={true}
/>
`

const initialValueFirstTwoOptionsExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    defaultValue={["1", "2"]}
    component={true}
/>
`


const disabledExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    disabled={true}
    component={true}
/>
`

const onChangeExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    onChange={(o) => window.alert("Changed " + o.value)}
    component={true}
/>
`

const searchEnabledExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    enableSearch={true}
    component={true}
/>
`

const clearAllExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    clearAll
    component={true}
/>
`

const maxItemsExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]
<\/script>

<Multiselect
    options={options}
    maxSelectedItems={2}
    component={true}
/>
`

const staticExample = `
<script lang="ts">
    import Example from "../../components/Example.svelte";

    let expanded = false
    let values: Option[] = []

    const options = [
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
        { id: "4", value: "Option 4" },
    ]

    const onInputClick = () => expanded = !expanded

    const onOptionClick = (option: Option) => {
        const alreadySelected = values.find((v) => v.id === option.id);
        values = alreadySelected
            ? values.filter((v) => v.id !== option.id)
            : [...values, option];
    }
<\/script>

<Multiselect
    value={values}
    onChange={onOptionClick}
    open={expanded}
    onInputClick={onInputClick}
    options={options}
    isStatic
    component
/>
`

const composableExample = `
<script lang="ts">
    import { Multiselect, MultiselectDropdown, MultiselectInput, MultiselectItem, MultiselectOption } from "x-ui-components-svelte";
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
<\/script>

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
`
</script>

<h1 class="main-page-content-title">Select</h1>
<p>A dropdown for displaying choices.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent={basicExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                component
            />
        </div>
    </div>
</Example>
<p>Initial state set to open</p>
<Example codeContent={initialOpenExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                open={true}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Initial value set to the first two options</p>
<Example codeContent={initialValueFirstTwoOptionsExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                defaultValue={["1", "2"]}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Disabled example</p>
<Example codeContent={disabledExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                disabled={true}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Trigger an alert on value change</p>
<Example codeContent={onChangeExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                onChange={(o) => window.alert("Changed " + o.value)}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Enable searching the options</p>
<Example codeContent={searchEnabledExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                enableSearch={true}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Enable clearing all of the selected options with clear all button</p>
<Example codeContent={clearAllExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                clearAll
                component={true}
            />
        </div>
    </div>
</Example>
<p>Set the maximum number of selected items</p>
<Example codeContent={maxItemsExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                options={options}
                maxSelectedItems={2}
                component={true}
            />
        </div>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<Example codeContent={staticExample}>
    <div slot="exampleContent">
        <div class="center">
            <Multiselect
                value={values}
                onChange={onOptionClick}
                open={expanded}
                onInputClick={onInputClick}
                options={options}
                isStatic
                component
            />
        </div>
    </div>
</Example>
<h3>Use as a composable</h3>
<Example codeContent={composableExample}>
    <div slot="exampleContent">
        <div class="center">
            <ComposableMultiselect />
        </div>
    </div>
</Example>
<div class="component-api">
  <h2>Component API</h2>
  <h3>Multiselect</h3>
  <ComponentApiTable values={api} />
  <h3>Multiselect Input</h3>
  <ComponentApiTable values={inputApi} />
  <h3>Multiselect Item</h3>
  <ComponentApiTable values={itemApi} />
  <h3>Multiselect Dropdown</h3>
  <ComponentApiTable values={dropdownApi} />
  <h3>Multiselect Option</h3>
  <ComponentApiTable values={optionApi} />
</div>

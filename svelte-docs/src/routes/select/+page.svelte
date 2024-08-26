<script lang="ts">
import Example from '../../components/Example.svelte'
import { Select } from "x-ui-components-svelte"
import type { Option } from '../../xui/select/types';
import ComposableSelect from './ComposableSelect.svelte';
import ComponentApiTable from '../../components/ComponentApiTable.svelte';
import { api, dropdownApi, inputApi, optionApi } from './api';

let open = false
let selectedOption: Option | undefined = undefined

const items = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' }
];

const onInputClick = () => { open =! open }
const onOptionClick = (option: Option) => { 
        selectedOption = option 
        open = false
    } 

const basicExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];
<\/script>

<Select options={items} component={true}/>
`

const initialOpenExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];
<\/script>

<Select options={items} component={true} open={true}/>
`

const initialValueToFirstOptionExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];
<\/script>

<Select options={items} defaultValue={1} component={true}/>
`

const disabledExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];
<\/script>

<Select options={items} component={true} disabled={true}/>
`

const onChangeExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];
<\/script>

<Select options={items} component={true} onChange={(v)=> window.alert('Changed ' + v.value)}/>
`


const staticExample = `
<script lang="ts">
    import { Select } from "x-ui-components-svelte"

    let open = false
    let selectedOption: Option | undefined = undefined

    const items = [
        { id: 1, value: 'Item 1' },
        { id: 2, value: 'Item 2' },
        { id: 3, value: 'Item 3' }
    ];

    const onInputClick = () => { open =! open }
    const onOptionClick = (option: Option) => { 
        selectedOption = option 
        open = false
    } 
<\/script>

 <Select 
    open={open}
    onInputClick={onInputClick}
    options={items} 
    valueProp={selectedOption}
    onChange={onOptionClick} 
    component={true} 
    isStatic={true}
/>
`

const composableExample = `
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
<\/script>

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
            <Select options={items} component={true}/>
        </div>
    </div>
</Example>
<p>Initial state set to open</p>
<Example codeContent={initialOpenExample}>
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} open={true}/>
        </div>
    </div>
</Example>
<p>Initial value set to the first option</p>
<Example codeContent={initialValueToFirstOptionExample}>
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} defaultValue={1} component={true}/>
        </div>
    </div>
</Example>
<p>Disabled example</p>
<Example codeContent={disabledExample}>
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} disabled={true}/>
        </div>
    </div>
</Example>
<p>Trigger an alert on value change</p>
<Example codeContent={onChangeExample}>
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} onChange={(v)=> window.alert('Changed ' + v.value)}/>
        </div>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<Example codeContent={staticExample}>
    <div slot="exampleContent">
        <div class="center">
            <Select 
                open={open}
                onInputClick={onInputClick}
                options={items} 
                valueProp={selectedOption}
                onChange={onOptionClick} 
                component={true} 
                isStatic={true}
            />
        </div>
    </div>
</Example>
<h3>Use as a composable</h3>
<Example codeContent={composableExample}>
    <div slot="exampleContent">
        <div class="center">
            <ComposableSelect />
        </div>
    </div>
</Example>
<div class="component-api">
  <h2>Component API</h2>
  <h3>Select</h3>
  <ComponentApiTable values={api} />
  <h3>Select Input</h3>
  <ComponentApiTable values={inputApi} />
  <h3>Select Dropdown</h3>
  <ComponentApiTable values={dropdownApi} />
  <h3>Select Option</h3>
  <ComponentApiTable values={optionApi} />
</div>

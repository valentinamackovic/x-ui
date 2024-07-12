<script lang="ts">
import Example from "../../components/Example.svelte";
import { Multiselect, SelectOption } from "x-ui-components-svelte"
import type { Option } from "../../xui/multiselect/types";
import ComposableMultiselect from "./ComposableMultiselect.svelte";

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

</script>

<h1 class="main-page-content-title">Select</h1>
<p>A dropdown for displaying choices.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
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
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <ComposableMultiselect />
        </div>
    </div>
</Example>

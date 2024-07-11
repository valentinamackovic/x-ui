<script lang="ts">
import Example from '../../components/Example.svelte'
import Select from '../../xui/select/Select.svelte'
  import type { Option } from '../../xui/select/types';
  import ComposableSelect from './ComposableSelect.svelte';

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
</script>

<h1 class="main-page-content-title">Select</h1>
<p>A dropdown for displaying choices.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true}/>
        </div>
    </div>
</Example>
<p>Initial state set to open</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} open={true}/>
        </div>
    </div>
</Example>
<p>Initial value set to the first option</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} defaultValue={1} component={true}/>
        </div>
    </div>
</Example>
<p>Disabled example</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} disabled={true}/>
        </div>
    </div>
</Example>
<p>Trigger an alert on value change</p>
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <Select options={items} component={true} onChange={(v)=> window.alert('Changed ' + v.value)}/>
        </div>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<Example codeContent="g">
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
<Example codeContent="g">
    <div slot="exampleContent">
        <div class="center">
            <ComposableSelect />
        </div>
    </div>
</Example>

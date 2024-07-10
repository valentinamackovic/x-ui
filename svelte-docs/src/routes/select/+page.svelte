<script lang="ts">
import Example from '../../components/Example.svelte'
import Select from '../../xui/select/Select.svelte'

let items = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' }
];
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
<h3>Use as a composable</h3>

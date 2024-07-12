<script lang="ts">
import Example from "../../components/Example.svelte";
import { Accordion } from "x-ui-components-svelte";
import ComposableAccordion from "./ComposableAccordion.svelte";

let expanded = false

const onClick = () => {
    expanded = !expanded
}
</script>

<h1 class="main-page-content-title">Accordion</h1>
<p>A content area which can be collapsed and expanded.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent="g">
    <div slot="exampleContent">  
        <Accordion 
            title="Lorem ipsum"
            component={true}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
        </Accordion>
    </div>
</Example>
<p>Initial state set to expanded</p>
<Example codeContent="g">
    <div slot="exampleContent">  
        <Accordion 
            title="Lorem ipsum"
            expanded={true}
            component={true}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
        </Accordion>
    </div>
</Example>
<p>Example without a title.</p>
<Example codeContent="g">
    <div slot="exampleContent">  
        <Accordion 
            component={true}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
        </Accordion>
    </div>
</Example>
<p>Ignore the internal logic with static property</p>
<Example codeContent="g">
    <div slot="exampleContent">  
        <Accordion
            expanded={expanded}
            onTitleClick={onClick}
            title="Lorem ipsum"
            component={true}
            isStatic={true}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
            suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
            iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
        </Accordion>
    </div>
</Example>
<h3>Use as a composable</h3>
<Example codeContent="g">
    <div slot="exampleContent">  
        <ComposableAccordion />
    </div>
</Example>

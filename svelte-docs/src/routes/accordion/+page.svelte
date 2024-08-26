<script lang="ts">
import Example from "../../components/Example.svelte";
import { Accordion } from "x-ui-components-svelte";
import ComposableAccordion from "./ComposableAccordion.svelte";
import ComponentApiTable from "../../components/ComponentApiTable.svelte";
import { api, buttonApi, contentApi } from "./api";

let expanded = false

const onClick = () => {
    expanded = !expanded
}

const basicExample = `
<script lang="ts">
    import { Accordion } from "x-ui-components-svelte";
<\/script>

<Accordion 
    title="Lorem ipsum"
    component={true}
>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
    suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
    iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
</Accordion>
`

const initialStateOpenExample = `
<script lang="ts">
    import { Accordion } from "x-ui-components-svelte";
<\/script>

<Accordion 
    title="Lorem ipsum"
    component={true}
    expanded={true}
>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
    suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
    iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
</Accordion>
`

const withoutTitleExample = `
<script lang="ts">
    import { Accordion } from "x-ui-components-svelte";
<\/script>

<Accordion 
    component={true}
>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
    suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
    iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
</Accordion>
`

const staticExample = `
<script lang="ts">
    import { Accordion } from "x-ui-components-svelte";

    let expanded = false

    const onClick = () => {
        expanded = !expanded
    }
<\/script>

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
`

const composableExample = `
<script lang="ts">
    import { Accordion, AccordionButton, AccordionContent } from "x-ui-components-svelte";

    let expanded = false;

    function toggleExpanded() {
        expanded = !expanded;
    }
<\/script>

<Accordion>
    <AccordionButton onClick={toggleExpanded}>
        Basic example
    </AccordionButton>
    <AccordionContent expanded={expanded}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Exercitationem deleniti corporis rerum vel temporibus perspiciatis
        enim earum. Aliquid consequatur ipsa voluptatibus, earum quibusdam
        atque saepe inventore, cupiditate unde, reprehenderit repellat!
    </AccordionContent>
</Accordion>
`
</script>

<h1 class="main-page-content-title">Accordion</h1>
<p>A content area which can be collapsed and expanded.</p>
<h2>Examples</h2>
<h3>Use as a component</h3>
<p>Basic example</p>
<Example codeContent={basicExample}>
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
<Example codeContent={initialStateOpenExample}>
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
<Example codeContent={withoutTitleExample}>
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
<Example codeContent={staticExample}>
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
<Example codeContent={composableExample}>
    <div slot="exampleContent">  
        <ComposableAccordion />
    </div>
</Example>
<div class="component-api">
    <h2>Component API</h2>
    <h3>Accordion</h3>
    <ComponentApiTable values={api} />
    <h3>Accordion Button</h3>
    <ComponentApiTable values={buttonApi} />
    <h3>Accordion Content</h3>
    <ComponentApiTable values={contentApi} />
</div>

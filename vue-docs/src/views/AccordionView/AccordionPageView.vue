<script setup>
import Example from "../../components/Example.vue";
import Accordion from "../../xui/Accordion/Accordion.vue";
import StaticAccordion from "./StaticAccordion.vue";
import ComposableAccordion from "./ComposableAccordion.vue";

const basicExample = `
<Accordion title="This is the accordion title" component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
    unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
    omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
    maiores.
</Accordion>
`;

const initialExpandedExample = `
<Accordion
    title="This is the accordion title"
    :expanded="true"
    component
>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
    unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
    omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
    maiores.
</Accordion>
`;

const withoutTitleExample = `
<Accordion component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
    unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
    omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
    maiores.
</Accordion>
`;
</script>

<template>
  <div id="app">
    <h1 className="main-page-content-title">Menu</h1>
    <p>A versatile menu for navigation.</p>
    <h2>Examples</h2>
    <h3>Use as a component</h3>
    <p>Basic example</p>
    <Example :codeContent="basicExample">
      <template v-slot:exampleContent>
        <Accordion title="This is the accordion title" component>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
          omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
          maiores.
        </Accordion>
      </template>
    </Example>
    <p>Initial state set to expanded</p>
    <Example :codeContent="initialExpandedExample">
      <template v-slot:exampleContent>
        <Accordion
          title="This is the accordion title"
          :expanded="true"
          component
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
          omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
          maiores.
        </Accordion>
      </template>
    </Example>
    <p>Example without a title.</p>
    <Example :codeContent="withoutTitleExample">
      <template v-slot:exampleContent>
        <Accordion component>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
          unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
          omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
          maiores.
        </Accordion>
      </template>
    </Example>
    <p>Ignore the internal logic with static property</p>
    <StaticAccordion />
    <h3>Use as a composable</h3>
    <ComposableAccordion />
  </div>
</template>

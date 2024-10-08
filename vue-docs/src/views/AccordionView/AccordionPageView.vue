<script setup>
import ComponentApiTable from "../../components/ComponentApiTable.vue";
import Example from "../../components/Example.vue";
import { Accordion } from "x-ui-components-vue";
import StaticAccordion from "./StaticAccordion.vue";
import ComposableAccordion from "./ComposableAccordion.vue";
import { api, buttonApi, contentApi } from "./api.js";

const basicExample = `
<script setup>
  import { Accordion } from "x-ui-components-vue";
<\/script>

<template>
  <Accordion title="This is the accordion title" component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
    unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
    omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
    maiores.
  </Accordion>
</template>
`;

const initialExpandedExample = `
<script setup>
  import { Accordion } from "x-ui-components-vue";
<\/script>

<template>
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
</template
`;

const withoutTitleExample = `
<script setup>
  import { Accordion } from "x-ui-components-vue";
<\/script>

<template>
  <Accordion component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos
    unde suscipit quisquam tenetur, autem dolore labore sapiente explicabo
    omnis iusto amet repudiandae dignissimos dolores ex tempora fugit eum
    maiores.
  </Accordion>
</template>
`;
</script>

<template>
  <div id="app">
    <h1 className="main-page-content-title">Accordion</h1>
    <p>A content area which can be collapsed and expanded.</p>
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
    <div className="component-api">
      <h2>Component API</h2>
      <h3>Accordion</h3>
      <ComponentApiTable :values="api" />
      <h3>Accordion Button</h3>
      <ComponentApiTable :values="buttonApi" />
      <h3>Accordion Content</h3>
      <ComponentApiTable :values="contentApi" />
    </div>
  </div>
</template>

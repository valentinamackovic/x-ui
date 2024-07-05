<script setup>
import Example from "../../components/Example.vue";
import { Accordion } from "x-ui-components-vue";

import { ref } from "vue";

const expanded = ref(false);

const handleClick = () => {
  expanded.value = !expanded.value;
};

const example = `
<Accordion
  title="This is the accordion title"
  :isStatic="true"
  :expanded="expanded"
  :onTitleClick="handleClick"
  component
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
  suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
  iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
</Accordion>
`;
</script>

<template>
  <Example :codeContent="example">
    <template v-slot:exampleContent>
      <Accordion
        title="This is the accordion title"
        :isStatic="true"
        :expanded="expanded"
        :onTitleClick="handleClick"
        component
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos unde
        suscipit quisquam tenetur, autem dolore labore sapiente explicabo omnis
        iusto amet repudiandae dignissimos dolores ex tempora fugit eum maiores.
      </Accordion>
    </template>
  </Example>
</template>

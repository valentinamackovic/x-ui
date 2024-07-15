<script setup>
defineProps(["values"]);
</script>

<template>
  <div class="table-component">
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value in values">
          <td className="prop">{{ value.prop }}</td>
          <td className="description">{{ value.description }}</td>
          <td>
            <code>{{ value.type }}</code>
          </td>
          <td>
            <code>{{ value.default }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

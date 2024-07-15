<script lang="ts">
import '../shared.css'
import type { ComponentApiDefinition } from "./types";

export let values: ComponentApiDefinition[] = [];
</script>
    
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
            {#each values as value}
                <tr>
                    <td class="prop">{value.prop}</td>
                    <td class="description">{value.description}</td>
                    <td>
                    <code>{value.type}</code>
                    </td>
                    <td>
                    <code>{value.default}</code>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
    
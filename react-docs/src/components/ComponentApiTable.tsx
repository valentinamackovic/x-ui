export interface ComponentApiDefinition {
  prop: string;
  description?: string;
  type: string;
  default: string;
}

interface ComponentApiTableProps {
  values: ComponentApiDefinition[];
}

export const ComponentApiTable = ({ values }: ComponentApiTableProps) => {
  return (
    <div className="table-component">
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
          {values.map((value) => (
            <tr>
              <td className="prop">{value.prop}</td>
              <td className="description">{value.description}</td>
              <td>
                <code>{value.type}</code>
              </td>
              <td>
                <code>{value.default}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

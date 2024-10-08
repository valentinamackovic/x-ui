import { useState } from "react";
import Example from "../../components/Example";
import { Multiselect } from "x-ui-components-react";
import { ComponentApiTable } from "../../components/ComponentApiTable";
import { api, dropdownApi, inputApi, itemApi, optionApi } from "./api";

const MultiselectStaticExample = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any[]>([]);

  return (
    <Multiselect
      isStatic
      component
      onChange={(newValue) => setValue(newValue)}
      onInputClick={() => setOpen(!open)}
      value={value}
      open={open}
      options={[
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
        { id: "3", value: "Option 3" },
      ]}
    />
  );
};

const MultiselectComposableExample = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<any[]>([]);

  const options = [
    { value: "Option 1", id: "1" },
    { value: "Option 2", id: "2" },
  ];

  const onOptionClick = (option: any) => {
    const alreadySelected = values.find((val) => val.id === option.id);
    const newValue =
      alreadySelected === undefined
        ? [...values, option]
        : values.filter((val) => val.id !== alreadySelected.id);

    setValues(newValue);
    setOpen(false);
  };

  return (
    <Multiselect>
      <Multiselect.Input onInputClick={() => setOpen(!open)}>
        {values.map((v) => (
          <Multiselect.Item onClick={() => onOptionClick(v)} key={v.id}>
            {v.value}
          </Multiselect.Item>
        ))}
      </Multiselect.Input>
      <Multiselect.Dropdown areOptionsVisible={open}>
        {options.map((o) => (
          <Multiselect.Option onClick={() => onOptionClick(o)} key={o.id}>
            {o.value}
          </Multiselect.Option>
        ))}
      </Multiselect.Dropdown>
    </Multiselect>
  );
};

export const MultiselectPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Select</h1>
      <p>A dropdown for displaying choices.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Basic example</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              component
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Initial state set to open</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              component
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                open
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Initial value set to the first two options</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              component
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
              defaultValue={["1", "2"]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
                defaultValue={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Disabled example</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              disabled
              component
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
              defaultValue={["1"]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                disabled
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                ]}
                defaultValue={[{ id: "1", value: "Option 1" }]}
              />
            </div>
          )
        }
        `}
      />
      <p>Trigger an alert on value change</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              component
              onChange={(value) =>
                window.alert(
                  `New value: ${value.map(
                    (v) => `id: ${v.id}, name: ${v.value} `
                  )}`
                )
              }
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                component
                onChange={(value) =>
                  window.alert(
                    \`New value: \${value.map(
                      (v) => \`id: \${v.id}, name: \${v.value} \`
                    )}\`
                  )
                }
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Enable searching the options</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              enableSearch
              component
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                enableSearch
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Enable clearing all of the selected options with clear all button</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              clearAll
              component
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                clearAll
                component
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Set the maximum number of selected items</p>
      <Example
        exampleContent={
          <div className="center">
            <Multiselect
              component
              maxSelectedItems={2}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
                { id: "4", value: "Option 4" },
              ]}
            />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <div className="center">
              <Multiselect
                component
                maxSelectedItems={2}
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                  { id: "3", value: "Option 3" },
                  { id: "4", value: "Option 4" },
                ]}
              />
            </div>
          )
        }
        `}
      />
      <p>Ignore the internal logic with static property</p>
      <Example
        exampleContent={
          <div className="center">
            <MultiselectStaticExample />
          </div>
        }
        codeContent={`
        import { Multiselect } from "x-ui-components-react"

        export default function Example() {
          return (
            <Multiselect
              isStatic
              component
              onChange={(newValue) => setValue(newValue)}
              onInputClick={() => setOpen(!open)}
              value={value}
              open={open}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
                { id: "3", value: "Option 3" },
              ]}
            />
          )
        }
        `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={
          <div className="center">
            <MultiselectComposableExample />
          </div>
        }
        codeContent={`as`}
      />
      <div className="component-api">
        <h2>Component API</h2>
        <h3>Multiselect</h3>
        <ComponentApiTable values={api} />
        <h3>Multiselect Input</h3>
        <ComponentApiTable values={inputApi} />
        <h3>Multiselect Item</h3>
        <ComponentApiTable values={itemApi} />
        <h3>Multiselect Dropdown</h3>
        <ComponentApiTable values={dropdownApi} />
        <h3>Multiselect Option</h3>
        <ComponentApiTable values={optionApi} />
      </div>
    </>
  );
};

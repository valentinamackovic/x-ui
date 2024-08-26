import { useState } from "react";
import Example from "../../components/Example";
import { Select } from "x-ui-components-react";
import { ComponentApiTable } from "../../components/ComponentApiTable";
import { api, dropdownApi, inputApi, optionApi } from "./api";

const SelectComposableExample = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [value, setValue] = useState<any>("aajjsk");

  return (
    <Select>
      <Select.Input
        onClick={() => setAreOptionsVisible(!areOptionsVisible)}
        value={value}
      />
      <Select.Dropdown visible={areOptionsVisible}>
        <Select.Option
          key="1"
          onClick={() => setValue({ value: "Option 1", id: "1" })}
        >
          Option 1
        </Select.Option>
      </Select.Dropdown>
    </Select>
  );
};

const SelectStaticExample = () => {
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);
  const [value, setValue] = useState<any>();

  return (
    <Select
      isStatic
      onInputClick={() => setAreOptionsVisible(true)}
      onChange={(option) => {
        setValue(option);
        setAreOptionsVisible(false);
      }}
      open={areOptionsVisible}
      value={value}
      options={[
        { id: "1", value: "Option 1" },
        { id: "2", value: "Option 2" },
      ]}
      component
    />
  );
};

export const SelectPage = () => {
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
            <Select
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          </div>
        }
        codeContent={`
          import { Select } from "x-ui-components-react"

          export default function Example() {
            return (
              <div className="center">
                <Select
                  options={[
                    { id: "1", value: "Option 1" },
                    { id: "2", value: "Option 2" },
                  ]}
                  component
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
            <Select
              open
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          return ( 
            <div className="center">
              <Select
                open
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                ]}
                component
              />
            </div>
          )
        }
        `}
      />
      <p>Initial value set to the first option</p>
      <Example
        exampleContent={
          <div className="center">
            <Select
              defaultValue={"1"} // sta ako ne postoji opcija u listi opcija?
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          return ( 
            <div className="center">
              <Select
                defaultValue={{ id: "1", value: "Option 1" }}
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                ]}
                component
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
            <Select
              disabled
              defaultValue={"1"}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          return ( 
            <div className="center">
              <Select
                disabled
                defaultValue={{ id: "1", value: "Option 1" }}
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                ]}
                component
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
            <Select
              onChange={(value) =>
                window.alert(`id: ${value.id}; value: ${value.value}`)
              }
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          return ( 
            <div className="center">
              <Select
                onChange={(value) =>
                  window.alert(\`id: \${value.id}; value: \${value.value}\`)
                }
                options={[
                  { id: "1", value: "Option 1" },
                  { id: "2", value: "Option 2" },
                ]}
                component
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
            <SelectStaticExample />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          const [areOptionsVisible, setAreOptionsVisible] = useState(false);
          const [value, setValue] = useState<any>();
        
          return (
            <Select
              isStatic
              onInputClick={() => setAreOptionsVisible(true)}
              onChange={(option) => {
                setValue(option);
                setAreOptionsVisible(false);
              }}
              open={areOptionsVisible}
              value={value}
              options={[
                { id: "1", value: "Option 1" },
                { id: "2", value: "Option 2" },
              ]}
              component
            />
          )
        }
        `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={
          <div className="center">
            <SelectComposableExample />
          </div>
        }
        codeContent={`
        import { Select } from "x-ui-components-react"

        export default function Example() {
          const [areOptionsVisible, setAreOptionsVisible] = useState(false);
          const [value, setValue] = useState<any>("aajjsk");
        
          return (
            <Select component>
              <Select.Input
                onClick={() => setAreOptionsVisible(!areOptionsVisible)}
                value={value}
              />
              <Select.Dropdown visible={areOptionsVisible}>
                <Select.Option
                  key="1"
                  onClick={() => setValue({ value: "Option 1", id: "1" })}
                >
                  Option 1
                </Select.Option>
              </Select.Dropdown>
            </Select>
          )
        }
        `}
      />
      <div className="component-api">
        <h2>Component API</h2>
        <h3>Select</h3>
        <ComponentApiTable values={api} />
        <h3>Select Input</h3>
        <ComponentApiTable values={inputApi} />
        <h3>Select Dropdown</h3>
        <ComponentApiTable values={dropdownApi} />
        <h3>Select Option</h3>
        <ComponentApiTable values={optionApi} />
      </div>
    </>
  );
};

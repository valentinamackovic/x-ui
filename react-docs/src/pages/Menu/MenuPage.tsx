import { useState } from "react";
import Example from "../../components/Example";
import { Menu } from "x-ui-components";
import { ComponentApiTable } from "../../components/ComponentApiTable";
import { api, buttonApi, dropdownApi, itemApi } from "./api";

const StaticMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center">
      <Menu
        isStatic
        open={isOpen}
        onClose={() => setIsOpen(false)}
        items={[
          { id: "1", value: "Aciton 1 action 1" },
          { id: "2", value: "Aciton 2" },
          { id: "3", value: "Aciton 3" },
        ]}
        onItemClick={(item) => window.alert("item was clciked: " + item)}
        onButtonClick={() => setIsOpen(true)}
        component
      >
        Options
      </Menu>
    </div>
  );
};

const ComposableMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="center">
      <Menu>
        <Menu.Button onMenuButtonClick={() => setIsOpen(!isOpen)}>
          Composable
        </Menu.Button>
        <Menu.Dropdown open={isOpen}>
          <Menu.Item
            onClick={(item) => {
              setIsOpen(false);
            }}
            item={{ id: "1", value: "Action 1" }}
          >
            First Action
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

const MenuPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Menu</h1>
      <p>A versatile menu for navigation.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Basic example</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              items={[
                { id: "1", value: "Action 1 action 1" },
                { id: "2", value: "Action 2" },
                { id: "3", value: "Action 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
              component
            >
              Options
            </Menu>
          </div>
        }
        codeContent={`
        <Menu
          items={[
            { id: "1", value: "Action 1 action 1" },
            { id: "2", value: "Action 2" },
            { id: "3", value: "Action 3" },
          ]}
          onItemClick={(item) => window.alert("item was clciked: " + item)}
          component
        >
          Options
        </Menu>
        `}
      />
      <p>Disabled items</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              disabledItems={["1", "2"]}
              items={[
                { id: "1", value: "Action 1 action 1" },
                { id: "2", value: "Action 2" },
                { id: "3", value: "Action 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
              component
            >
              Options
            </Menu>
          </div>
        }
        codeContent={`
        <Menu
          disabledItems={["1", "2"]}
          items={[
            { id: "1", value: "Action 1 action 1" },
            { id: "2", value: "Action 2" },
            { id: "3", value: "Action 3" },
          ]}
          onItemClick={(item) => window.alert("item was clciked: " + item)}
          component
        >
          Options
        </Menu>
        `}
      />
      <p>Open set to true</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              open
              items={[
                { id: "1", value: "Action 1 action 1" },
                { id: "2", value: "Action 2" },
                { id: "3", value: "Action 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
              component
            >
              Options
            </Menu>
          </div>
        }
        codeContent={`
        <Menu
          open
          items={[
            { id: "1", value: "Action 1 action 1" },
            { id: "2", value: "Action 2" },
            { id: "3", value: "Action 3" },
          ]}
          onItemClick={(item) => window.alert("item was clciked: " + item)}
          component
        >
          Options
        </Menu>
        `}
      />
      <p>Trigger a function when the menu popup is closed</p>
      <Example
        exampleContent={
          <div className="center">
            <Menu
              onClose={() => window.alert("Closed menu popup.")}
              items={[
                { id: "1", value: "Action 1 action 1" },
                { id: "2", value: "Action 2" },
                { id: "3", value: "Action 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
              component
            >
              Options
            </Menu>
          </div>
        }
        codeContent={`
        <Menu
            onClose={() => window.alert("Closed menu popup.")}
            items={[
              { id: "1", value: "Action 1 action 1" },
              { id: "2", value: "Action 2" },
              { id: "3", value: "Action 3" },
            ]}
            onItemClick={(item) => window.alert("item was clciked: " + item)}
            component
          >
            Options
        </Menu>`}
      />
      <p>Ignore the internal logic with static property</p>
      <Example
        exampleContent={<StaticMenuExample />}
        codeContent={`
        const [isOpen, setIsOpen] = useState(false);

        return (
          <div className="center">
            <Menu
              isStatic
              open={isOpen}
              onClose={() => setIsOpen(false)}
              items={[
                { id: "1", value: "Aciton 1 action 1" },
                { id: "2", value: "Aciton 2" },
                { id: "3", value: "Aciton 3" },
              ]}
              onItemClick={(item) => window.alert("item was clciked: " + item)}
              onButtonClick={() => setIsOpen(true)}
              component
            >
              Options
            </Menu>
          </div>
        );
      
      `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={<ComposableMenuExample />}
        codeContent={`
      const [isOpen, setIsOpen] = useState(false);
      const [selectedItem, setSelectedItem] = useState<string | number>();
    
      return (
        <div className="center">
          <Menu
            open={isOpen}
            onClose={() => setIsOpen(false)}
            items={[
              { id: "1", value: "Action 1 Action 1" },
              { id: "2", value: "Action 2" },
              { id: "3", value: "Action 3" },
            ]}
            onItemClick={(item) => window.alert("item was clciked: " + item)}
            onButtonClick={() => setIsOpen(true)}
            component={true}
          >
            <Menu.Button onMenuButtonClick={() => setIsOpen(!isOpen)}>
              Composable
            </Menu.Button>
            <Menu.Dropdown open={isOpen}>
              <Menu.Item
                onClick={(item) => {
                  setSelectedItem(item);
                  setIsOpen(false);
                }}
                item={{ id: "1", value: "Action 1" }}
              >
                First Action
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      `}
      />
      <div className="component-api">
        <h2>Component API</h2>
        <h3>Menu</h3>
        <ComponentApiTable values={api} />
        <h3>Menu Button</h3>
        <ComponentApiTable values={buttonApi} />
        <h3>Menu Dropdown</h3>
        <ComponentApiTable values={dropdownApi} />
        <h3>Menu Item</h3>
        <ComponentApiTable values={itemApi} />
      </div>
    </>
  );
};

export default MenuPage;

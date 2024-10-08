import { useState } from "react";
import Example from "../../components/Example";
import { Modal } from "x-ui-components-react";
import { ComponentApiTable } from "../../components/ComponentApiTable";
import { api, buttonApi } from "./api";

const ModalComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        component
        title="Title"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        Example modal content.
      </Modal>
      <div className="center">
        <button className="btn" onClick={() => setModalOpen(true)}>
          Open modal
        </button>
      </div>
    </>
  );
};

const ModalStatic = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        component
        title="Title"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isStatic
      >
        Example modal content.
      </Modal>
      <div className="center">
        <button className="btn" onClick={() => setModalOpen(true)}>
          Open modal
        </button>
      </div>
    </>
  );
};

const ModalComposable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Content>
          <p>Example modal content.</p>
          <Modal.Button onClick={() => setModalOpen(false)}>
            Customisable Button
          </Modal.Button>
        </Modal.Content>
      </Modal>
      <div className="center">
        <button className="btn" onClick={() => setModalOpen(true)}>
          Open modal
        </button>
      </div>
    </>
  );
};

const ModalPage = () => {
  return (
    <>
      <h1 className="main-page-content-title">Modal</h1>
      <p>Display a modal dialog box, providing a title and content area.</p>
      <h2>Examples</h2>
      <h3>Use as a component</h3>
      <p>Setting component prop to true will apply some default styles.</p>
      <Example
        exampleContent={<ModalComponent />}
        codeContent={`
        import { Modal } from "x-ui-components-react"

        export default function Example() {
          const [componentModalOpen, setComponentModalOpen] = useState(false);
          
          return (
              <>
                <Modal
                    component
                    title="Title"
                    isOpen={componentModalOpen}
                    onClose={() => setComponentModalOpen(false)}
                >
                  Example modal content.
                </Modal>
                <div className="center">
                  <button className="btn" onClick={() => setComponentModalOpen(true)}>
                    Open modal
                  </button>
                </div>
              </>
            )
          }
        `}
      />
      <p>Ignore the internal logic with static property</p>
      <Example
        exampleContent={<ModalStatic />}
        codeContent={`
        import { Modal } from "x-ui-components-react"

        export default function Example() {
          const [modalOpen, setModalOpen] = useState(false);

          return (
            <>
              <Modal
                component
                title="Title"
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                isStatic
              >
                Example modal content.
              </Modal>
              <div className="center">
                <button className="btn" onClick={() => setModalOpen(true)}>
                  Open modal
                </button>
              </div>
            </>
          )
        }
      `}
      />
      <h3>Use as a composable</h3>
      <Example
        exampleContent={<ModalComposable />}
        codeContent={`
        import { Modal } from "x-ui-components-react"

        export default function Example() {
          const [componentModalOpen, setComponentModalOpen] = useState(false);
      
          return (
            <>
              <Modal
                  isOpen={componentModalOpen}
                  onClose={() => setComponentModalOpen(false)}
                  >
                  <Modal.Content>
                      <p>Example modal content.</p>
                      <Modal.Button onClick={() => setComponentModalOpen(false)}>Customisable Button</Modal.Button>
                  </Modal.Content>
              </Modal>
              <div className="center">
                  <button className="btn" onClick={() => setComponentModalOpen(true)}>
                      Open modal
                  </button>
              </div>
            </>
          )
        }
      `}
      />
      <div className="component-api">
        <h2>Component API</h2>
        <h3>Modal</h3>
        <ComponentApiTable values={api} />
        <h3>Modal Button</h3>
        <ComponentApiTable values={buttonApi} />
      </div>
    </>
  );
};

export default ModalPage;

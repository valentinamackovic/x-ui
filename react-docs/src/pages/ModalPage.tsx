import { useState } from "react";
import { Modal } from "../xui";
import "../xui/Modal/Modal";
import Example from "../components/Example";

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
        const ModalComponent = () => {
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
            );
        };
          `}
      />
      <p>
        With static prop set to true. This ignores all internal logic for
        opening/closing the modal. Notice how the modal does not close on
        pressign ESC and clicking outside of the modal component.
      </p>
      <Example
        exampleContent={<ModalStatic />}
        codeContent={`
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
      `}
      />
      <h3>Use as a composable</h3>
      <p>
        Using Button, Content and Title components that are a part of Modal
        provides more customisable experience.
      </p>
      <Example
        exampleContent={<ModalComposable />}
        codeContent={`
            const ModalComposable = () => {
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
                );
            };
      `}
      />
    </>
  );
};

export default ModalPage;

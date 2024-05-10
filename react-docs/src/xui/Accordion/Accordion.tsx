import { useState } from "react";
import "./styles.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export interface ReactChildren {
  children: React.ReactNode;
}
export interface AccordionProps extends ReactChildren {
  expanded?: boolean;
  title?: string;
  component?: boolean;
}
export interface AccordionButtonProps extends ReactChildren {
  onClick: () => void;
}
export interface AccordionContentProps extends ReactChildren {
  visible: boolean;
}

Accordion.Button = ({
  onClick: btnOnClick,
  children,
}: AccordionButtonProps) => {
  return (
    <button className="btn-accordion" onClick={btnOnClick}>
      {children}
    </button>
  );
};
Accordion.Content = ({ visible, children }: AccordionContentProps) => {
  return (
    <div className={`accordion-content ${visible ? "open" : ""}`}>
      {children}
    </div>
  );
};

export function Accordion({
  expanded: expandedProp,
  title,
  children,
  component,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(expandedProp ?? false);

  if (component) {
    return (
      <div className="accordion-wrapper">
        <button
          className="btn-accordion"
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded ? (
            <FaAngleDown className="accordion-icon" />
          ) : (
            <FaAngleUp className="accordion-icon" />
          )}
          {title}
        </button>
        <Accordion.Content visible={expanded}>{children}</Accordion.Content>
      </div>
    );
  }

  return <div className="accordion-wrapper">{children}</div>;
}

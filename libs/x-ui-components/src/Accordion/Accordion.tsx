import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export interface ReactChildren {
  children: React.ReactNode;
}
export interface AccordionProps extends ReactChildren {
  expanded?: boolean;
  title?: string;
  component?: boolean;
  isStatic?: boolean;
  onTitleClick?: () => void;
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
  ...props
}: AccordionButtonProps) => {
  return (
    <button className="btn-accordion" onClick={btnOnClick} {...props}>
      {children}
    </button>
  );
};
Accordion.Content = ({
  visible,
  children,
  ...props
}: AccordionContentProps) => {
  return (
    <div className={`accordion-content ${visible ? "open" : ""}`} {...props}>
      {children}
    </div>
  );
};

export function Accordion({
  expanded: expandedProp,
  title,
  children,
  component,
  isStatic,
  onTitleClick,
  ...props
}: AccordionProps) {
  const [expanded, setExpanded] = useState(expandedProp ?? false);

  useEffect(() => {
    expandedProp !== undefined && setExpanded(expandedProp);
  }, [expandedProp]);

  if (component) {
    return (
      <div className="accordion-wrapper" {...props}>
        <button
          className="btn-accordion"
          onClick={() => {
            !isStatic && setExpanded(!expanded);
            onTitleClick?.();
          }}
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

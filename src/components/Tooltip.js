import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const { spinning } = props;
  const wideTT = props.header === "About me";

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && !spinning && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.header}

          {props.content && (
            <div className="Tooltip-Body" style={{ width: wideTT && "270px" }}>
              {props.content}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

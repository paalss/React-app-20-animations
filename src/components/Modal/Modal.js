import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const modal = (props) => {
  return (
    // trunk: fade-slice
    <CSSTransition mountOnEnter unmountOnExit in={props.show} timeout={300} classNames="fade-slide">
      {(state) => (
          <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        )
      }
    </CSSTransition>
  );
};

export default modal;

import React, { Component, Fragment } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const duration = 300;
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <Fragment>
                <div
                  style={{
                    backgroundColor: "red",
                    width: 100,
                    height: 100,
                    margin: "auto",
                    transition: "opacity 1s ease-out",
                    opacity: state === "exiting" ? 0 : 1,
                  }}
                ></div>
                <p>{state}</p>
              </Fragment>
            );
          }}
        </Transition>
        {/* {this.state.showBlock ? (
          <div
            style={{
              backgroundColor: "yellow",
              width: 100,
              height: 100,
              margin: "auto",
            }}
          ></div>
        ) : null} */}
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={300}
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

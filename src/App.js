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
          timeout={300} // tall: for alle steg. objekt med spes props: individuelle timeouts for enter og exit
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("enter")}
          onEntering={() => console.log("entering")}
          onEntered={() => console.log("entered")}
          onExit={() => console.log("exit")}
          onExiting={() => console.log("exiting")}
          onExited={() => console.log("exited")}
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

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

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

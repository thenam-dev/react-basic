/**
 * JSX (code html trong javascript thay vi tra 1 bien) -> return block
 * How to create a component(vien gach tao nen bo cuc cua Reactjs)
 * import
 * write 1 class component
 * export
 *
 * Fragment (group many htm element)
 */

import React from "react";

class MyComponent extends React.Component {
  //key:value
  state = {
    name: "thenam",
    address: "Hanoi",
  };

  handleOnChangeName = (event) => {
    //auto merge - cap nhat state
    this.setState({
      name: event.target.value,
      address: "Vietnam",
    });
  };

  //su dung arrow function de xu li Events
  handleClickButton = () => {
    console.log("hit the button");
    alert("click me");
  };

  //re-render
  render() {
    // let name = "thenam"; // variable in JSX

    console.log(">>>call render:", this.state);
    return (
      // dung fragment thay vi boc bang div
      <React.Fragment>
        <div className="first">
          <input
            value={this.state["name"]}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          Hello my component, My name is {this.state.name}
        </div>
        <div className="second">I was born in {this.state.address}</div>
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            Click me
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MyComponent;

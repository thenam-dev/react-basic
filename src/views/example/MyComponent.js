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
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  //key:value
  // state = {
  //   name: "thenam",
  //   address: "Hanoi",
  // };

  state = {
    firstName: "Nam",
    lastName: "Nguyen",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("click submit");
  };

  // handleOnChangeName = (event) => {
  //   //auto merge - cap nhat state
  //   this.setState({
  //     name: event.target.value,
  //     address: "Vietnam",
  //   });
  // };

  // //su dung arrow function de xu li Events
  // handleClickButton = () => {
  //   console.log("hit the button");
  //   alert("click me");
  // };

  //re-render
  render() {
    console.log(">>>call render:", this.state);
    return (
      // // dung fragment thay vi boc bang div
      // <React.Fragment>
      //   <div className="first">
      //     <input
      //       value={this.state["name"]}
      //       type="text"
      //       onChange={(event) => this.handleOnChangeName(event)}
      //     />
      //     Hello my component, My name is {this.state.name}
      //   </div>
      //   <div className="second">I was born in {this.state.address}</div>
      //   <div className="third">
      //     <button
      //       onClick={() => {
      //         this.handleClickButton();
      //       }}
      //     >
      //       Click me
      //     </button>
      //   </div>
      // </React.Fragment>
      <>
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>

        <ChildComponent name={"child one"} />
        <ChildComponent name={"child two"} />
        <ChildComponent name={"child three"} />
      </>
    );
  }
}

export default MyComponent;

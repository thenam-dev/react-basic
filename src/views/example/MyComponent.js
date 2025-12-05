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
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  //key:value
  // state = {
  //   name: "thenam",
  //   address: "Hanoi",
  // };

  state = {
    arrJobs: [
      { id: "a123", title: "developer", salary: "1000" },
      { id: "a124", title: "tester", salary: "500" },
      { id: "a125", title: "project manager", salary: "1500" },
    ],
  };

  addNewJob = (job) => {
    console.log("???check job from parent:", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
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
    console.log(">>>check props:", this.state);
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
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          name={this.state.firstName + " " + this.state.lastName}
          age={"21"}
          address={"Hanoi"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;

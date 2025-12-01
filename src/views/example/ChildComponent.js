import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>>call render:", this.state);
    return <div>Child Component: {this.props.name}</div>;
  }
}

export default ChildComponent;

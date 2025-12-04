import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>>call render:", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    //key:value

    let { name, age } = this.props;

    return (
      <div>
        Child Component: {name} - {age}
      </div>
    );
  }
}

export default ChildComponent;

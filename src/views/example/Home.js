import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todos");
    }, 3000);
  }

  //HOC: Higher order component
  render() {
    console.log(">>> check props:", this.props);
    return (
      <>
        <div>Hello class Home</div>
      </>
    );
  }
}

export default withRouter(Home);

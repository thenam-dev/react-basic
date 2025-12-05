import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("click submit");
    console.log(">>> check data input:", this.state);
  };
  render() {
    return (
      <div>
        <form action="/action_page.php">
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={this.state.titleJob}
            onChange={(event) => this.handleChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </div>
    );
  }
}

export default AddComponent;

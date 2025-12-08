import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    //validate
    if (!this.state.title) {
      //if(null/undefined/empty) => false
      toast.warning("Missing title's Todo!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    //add xong tra ve rong
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;

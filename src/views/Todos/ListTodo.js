import React from "react";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Play football" },
      { id: "todo3", title: "Fixing bugs" },
    ],
  };

  render() {
    let { listTodos } = this.state;
    //let listTodos = this.state.listTodos

    return (
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" />
          <button type="button">Add</button>
        </div>
        <div className="list-todo-content">
          <div className="todo-child">ToDo 1</div>
          <div className="todo-child">ToDo 2</div>
          <div className="todo-child">ToDo 3</div>
        </div>
      </div>
    );
  }
}

export default ListTodo;

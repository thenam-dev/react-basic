import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Nav/Nav";
import Home from "./example/Home";

import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";

/**
 *  2 components: class component / function component (function,arrow)
 */

function App() {
  // const App = () =>{} -> function component
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

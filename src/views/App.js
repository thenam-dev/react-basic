import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 *  2 components: class component / function component (function,arrow)
 */

function App() {
  // const App = () =>{} -> function component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple TODO Apps with React.js (TheNam-Dev)</p>

        {/* <MyComponent /> */}
        <ListTodo></ListTodo>
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
  );
}

export default App;

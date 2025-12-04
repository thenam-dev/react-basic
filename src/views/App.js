import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";

/**
 *  2 components: class component / function component (function,arrow)
 *
 */

function App() {
  // const App = () =>{} -> function component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Studying React.js (TheNam-Dev)</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <MyComponent />

        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;

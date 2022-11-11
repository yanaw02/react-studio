import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  function handleClick() {
    setCounter(counter+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: {counter}</p>
        <button onClick={() => handleClick()}>Add 1</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

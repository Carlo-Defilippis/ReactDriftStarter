import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const handlePageChange = () => {
    setCount(count + 1)
    console.log("Page changed " + count + " times.")
    window.drift.page();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page has changed {count} {count === 1 ? 'time' : 'times'}.
        </p><button style={{height: '100px', width: '400px', fontSize: 'large'}} onClick={handlePageChange}>Change Page</button>
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

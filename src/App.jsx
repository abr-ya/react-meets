import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="app-header">Hello from Vite + React!</h1>
      <p>
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add 1 to counter
        </button>
      </p>
      <p>
        Counter value is:
        {' '}
        {count}
      </p>
      <p>
        Edit
        {' '}
        <code>App.jsx</code>
        {' '}
        and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  );
};

export default App;

import { useEffect } from 'react';
import logo from '../logo.svg';
import './App.css';
import { functions } from '../firebase';
import { httpsCallable } from 'firebase/functions';

function App() {

  useEffect(() => {
    httpsCallable(functions, "fetchData")({});
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='weight'>
          Edit <code>src/App.tsx</code> and save to reload.
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

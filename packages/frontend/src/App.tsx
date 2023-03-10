import { useCallback, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { axios } from './axios';
import { Api } from '@monorepostarter/utils/dist/main';

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState<Api.TestGet>();

  const fetch = useCallback(() => {
    axios.get<Api.TestGet>('/test').then((response) => setTest(response.data));
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      {test ? <p>{JSON.stringify(test)}</p> : <p>Waiting on results</p>}
      <button onClick={() => fetch()}>refetch</button>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { Router } from './routes/Router';
import { Header } from './components/Header';
import { useMyThreads } from './hooks/useMyThreads';

export const myThreadList = createContext();

function App() {
  return (
    <myThreadList.Provider value={useMyThreads()}>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
        <Router />
      </BrowserRouter>
    </myThreadList.Provider>
  );
}

export default App;

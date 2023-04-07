import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { Header } from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;

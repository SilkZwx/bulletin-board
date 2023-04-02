import './App.css';
import { BrowserRouter, Link} from 'react-router-dom';
import { Router } from './Router';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">
            <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit'  }}>掲示板</Link>
          </h3>
          <div className="App-link">
            <Link to={"/Thread/new"} style={{ textDecoration: 'none', color: 'inherit' }}>新しいスレッドを作成</Link>
          </div>
        </header>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;

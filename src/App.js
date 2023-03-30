import './App.css';
import { ThreadList } from './ThreadList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <div>
        {ThreadList()}
      </div>
    </div>
  );
}

export default App;

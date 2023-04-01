import './App.css';
import { ThreadList } from './ThreadList';
import { AddThread } from './AddThread';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <div>
        {ThreadList()}
        {AddThread()}
      </div>
    </div>
  );
}

export default App;

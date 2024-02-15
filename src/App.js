import logo from './logo.svg';
import './App.css';
import ProgressTracker from './ProgressTracker';
import ExerciseTracker from './ExerciseTracker';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <ProgressTracker />
      <ExerciseTracker />
    </div>
    
  );
}

export default App;

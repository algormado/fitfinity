import React from 'react';
import './App.css';
import ProgressTracker from './component/ProgressTracker';
import ExerciseTracker from './component/ExerciseTracker';
function App() {
  return (
    <div className="App">
      <ProgressTracker />
      <ExerciseTracker />
    </div>
    
  );
}

export default App;

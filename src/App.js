import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Notes from './components/Note';

function App() {
  return (
    <div className="App">
      <h1>React Testing</h1>
      <Counter />
      <hr />
      <Notes />
    </div>
  );
}

export default App;

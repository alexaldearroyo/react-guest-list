import './App.css';
import React from 'react';
import GuestList from './components/GuestList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guest List App</h1>
      </header>
      <main>
        <GuestList />
      </main>
    </div>
  );
}

export default App;

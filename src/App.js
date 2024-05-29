import React from 'react';
import './App.css';
import GuestList from './components/GuestList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Guest List App</h1>
      </header>
      <main>
        <GuestList />
      </main>
    </div>
  );
}

export default App;

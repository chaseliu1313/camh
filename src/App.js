import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Text/Heading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading type="h1" weight="bold">
          CAMH UI Library
        </Heading>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
// import Login from'./component/login';
import Router from'./component/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router />
          <p>  Front application</p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './app.scss';
import Tasks from './tasks';

function App() {

  return (
    <>
      <header>Taskmaster</header>
      <main>
        <Tasks></Tasks>
      </main>
      <footer>&copy;2019 PaulaT</footer>
    </>
  );
}

export default App;

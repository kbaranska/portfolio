import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.sass'
import {Header} from './components/header/header'
import { Welcome } from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Welcome/>
    </div>
  );
}

export default App;

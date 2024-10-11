import React from 'react';
import './App.css';
import About from './components/about/about';
import { PiDownloadSimpleLight } from "react-icons/pi";
import Button from './components/button/button';
import { NotFoundPage } from './components/not-found-page/not-found-page';

function App() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;

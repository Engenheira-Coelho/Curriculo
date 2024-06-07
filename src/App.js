import React from 'react';
import './App.css';
import About from './components/about/about';
import { PiDownloadSimpleLight } from "react-icons/pi";
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <About />
      <Button
        description="Botão"
        icon={<PiDownloadSimpleLight />}
        href={'#'}
      />
    </div>
  );
}

export default App;

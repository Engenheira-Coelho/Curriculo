// App.jsx
import React from 'react';
import Head from './components/header/header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './components/notFound/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Head />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;
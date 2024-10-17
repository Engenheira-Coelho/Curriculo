import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
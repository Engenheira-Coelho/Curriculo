import React from 'react';
import { Link } from 'react-router-dom';

export default function About(){
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}
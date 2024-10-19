// Head.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, [title, description]);

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
  </div>);
};

export default Header;

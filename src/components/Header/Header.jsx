// Head.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import headerIcon from "../../../src/images/Header_icon.png"

const Header = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', description);
  }, [title, description]);

  return (
          <header>
              <img src={headerIcon} alt="logo" width={170} height={90}/>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/volunteers">Voluntárias</Link>
                <Link to="/about">Sobre</Link>
              </nav>
          </header>
        );
};

export default Header;

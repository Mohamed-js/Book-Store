import React from 'react';
import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li className="logo blue">Bookstore CMS</li>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
      <div className="icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}

export default NavBar;

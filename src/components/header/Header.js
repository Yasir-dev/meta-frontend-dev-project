import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from '../../assets/logo.png';
import './Header.css';
import routes from '../../utils/routes';

const navLinks = Object.values(routes).filter(route => route.visibleInNavigation);

const Header = () => {
  const { pathname } = useLocation();
  const [isHamburgerExpanded, setIsHamburgerExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid navigation">
        <Link className="navigation-logo" to={routes.home.path}>
          <img 
            src={logoImage} 
            alt="Little Lemon Company logo" 
          />
        </Link>
        <button 
          className="navigation-hamburger" 
          type="button" 
          onClick={() => setIsHamburgerExpanded(!isHamburgerExpanded)}
        >
          {isHamburgerExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> : 
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul 
          className={isHamburgerExpanded ? 'navigation-links expanded' : 'navigation-links'} 
          onClick={() => setIsHamburgerExpanded(!isHamburgerExpanded)}
        >
          {navLinks.map((navLink, index) => 
            <li key={index}>
              <Link 
                className={pathname === navLink.path ? 'current-location' : ''} 
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
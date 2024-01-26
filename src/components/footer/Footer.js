import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faLocationDot,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { Link } from 'react-router-dom';
  import './Footer.css';
  import logoWhiteImage from '../../assets/logo-white.png';
  import routes from '../../utils/routes';
  
  const contactList = [
    { icon: faLocationDot, info: '678 Pisa Ave, Chicago, IL 60611', },
    { icon: faPhone, info: '(312) 593-2744', },
    { icon: faEnvelope, info: 'customer@littlelemon.com', },
  ];
  
  const socialMediaList = [
    { icon: faFacebook, name: 'facebook', },
    { icon: faTwitter, name: 'twitter', },
    { icon: faInstagram, name: 'instagram', },
    { icon: faYoutube, name: 'youtube', },
  ];
  
  const navLinks = Object.values(routes).filter(route => route.visibleInNavigation);
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="container grid">
          <img 
            className="footer-logo" 
            src={logoWhiteImage} 
            alt="Little Lemon" 
          />
          <nav className="footer-navigation">
            <h4>Sitemap</h4>
            <ul>
              {navLinks.map((navLink, index) => 
                <li key={index}>
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="footer-contact">
            <h4>Contact us</h4>
            <address>
            {contactList.map(({icon, info}, index) => 
              <p key={index}>
                <FontAwesomeIcon icon={icon} /> {info}
              </p>
            )}
            </address>
          </div>
          <div className="footer-social">
            <h4>Connect with us</h4>
            {socialMediaList.map(({name, icon}, index) => 
              <a 
                key={index} 
                href={`https://www.${name}.com`} 
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            )}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
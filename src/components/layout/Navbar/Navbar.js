import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import navbarlogo from '../../../assets/navbarimgs/navbarlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src={navbarlogo} alt="WebSort Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>About Us</Link>
          <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/careers" className={pathname === '/careers' ? 'active' : ''}>Careers</Link>
        </nav>

        <div className="contact-btn">
          <Link to="/contact">Contact us</Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
        <Link to="/contact" className="mobile-contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
      </div>
    </header>
  );
};

export default Navbar;
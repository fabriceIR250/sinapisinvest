import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const collapseRef = useRef(null);

  const handleNavLinkClick = () => {
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
    if (bsCollapse) {
      bsCollapse.hide(); // This hides the mobile nav after clicking
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white" to="/" onClick={handleNavLinkClick}>
          <img
            alt="Sinapis Investment Logo"
            src={logo}
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-2 fw-bold">SINAPIS</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={handleNavLinkClick}>
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={handleNavLinkClick}>
                <i className="bi bi-info-circle-fill me-1"></i> About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle text-white" 
                to="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-tools me-1"></i> Services
              </Link>
              <ul className="dropdown-menu bg-primary border-white">
                <li>
                  <Link className="dropdown-item text-white" to="/shop" onClick={handleNavLinkClick}>
                    <i className="bi bi-shop me-2"></i> Shop
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/food" onClick={handleNavLinkClick}>
                    <i className="bi bi-cup-straw me-2"></i> Food & Drinks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/banking" onClick={handleNavLinkClick}>
                    <i className="bi bi-bank me-2"></i> Banking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-white" to="/it" onClick={handleNavLinkClick}>
                    <i className="bi bi-laptop me-2"></i> IT Services
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={handleNavLinkClick}>
                <i className="bi bi-telephone-fill me-1"></i> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link btn rounded-pill ms-lg-2 bg-white text-primary fw-semibold" 
                to="/get-a-quote"
                onClick={handleNavLinkClick}
              >
                <i className="bi bi-envelope-fill me-1"></i> Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

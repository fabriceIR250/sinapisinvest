import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Sinapis Investment Company Ltd</h5>
            <p>Serving you with quality products and services.</p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              Western Province, Rubavu district
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p><i className="bi bi-telephone-fill me-2"></i>0788997534 / 0785967217</p>
            <p><i className="bi bi-envelope-fill me-2"></i>sinapisinvestment@gmail.com</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@sinapisinvest.com</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/about">About Us</Link></li>
              <li><Link className="text-white text-decoration-none" to="/shop">Shop</Link></li>
              <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">© 2025 Sinapis Investment Company Ltd. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://twitter.com/SinapisInvestment" className="text-white me-3">
              <i className="bi bi-twitter fs-5"></i>
            </a>
            <a href="https://facebook.com/SinapisInvestment" className="text-white me-3">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a href="https://instagram.com/SinapisInvestment" className="text-white">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
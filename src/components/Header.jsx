import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{color: "#74C0FC"}}></i>
          <span className="ms-2 fs-4">Bookstore</span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className={`nav-link px-2 ${isActivePage('/') ? 'text-primary fw-bold' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/books" className={`nav-link px-2 ${isActivePage('/books') ? 'text-primary fw-bold' : ''}`}>
            Book
          </Link>
        </li>
        <li>
          <Link to="/team" className={`nav-link px-2 ${isActivePage('/team') ? 'text-primary fw-bold' : ''}`}>
            Team
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link px-2 ${isActivePage('/contact') ? 'text-primary fw-bold' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
        <Link to="/register" className="btn btn-primary">Register</Link>
      </div>
    </header>
  );
};

export default Header;
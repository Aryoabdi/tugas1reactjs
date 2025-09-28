import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5 border-top bg-white">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5 className="fw-bold">BookStore</h5>
          <p className="text-muted">
            Destinasi terpercaya untuk semua kebutuhan literasi Anda. Membaca adalah jendela dunia.
          </p>
          <div className="d-flex gap-2">
            <a href="#" className="btn btn-outline-primary btn-sm">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="btn btn-outline-info btn-sm">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline-danger btn-sm">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-2 mb-4">
          <h6 className="fw-bold">Kategori</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Fiksi</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Non-Fiksi</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Komik</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Edukasi</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h6 className="fw-bold">Layanan</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Pengiriman Gratis</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Return Policy</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Pre-Order</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Gift Card</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-4">
          <h6 className="fw-bold">Newsletter</h6>
          <p className="text-muted small">Dapatkan update terbaru dan penawaran spesial!</p>
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Email Anda" />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="text-muted small mb-0">© 2025 BookStore. All rights reserved.</p>
        </div>
        <div className="col-md-6 text-end">
          <small className="text-muted">
            <a href="#" className="text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-decoration-none">Terms of Service</a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/pages/Books.jsx
import React from 'react';
import ProductList from '../components/ProductList';

const Books = () => {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">Koleksi Buku Kami</h1>
          <p className="lead text-muted">
            Jelajahi ribuan koleksi buku terbaik dari berbagai genre dan penulis terkenal dunia.
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Cari buku, penulis, atau ISBN..." />
            <button className="btn btn-outline-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Semua Kategori</option>
            <option>Fiksi</option>
            <option>Non-Fiksi</option>
            <option>Komik</option>
            <option>Edukasi</option>
            <option>Biografi</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Urutkan Berdasarkan</option>
            <option>Judul A-Z</option>
            <option>Judul Z-A</option>
            <option>Harga Terendah</option>
            <option>Harga Tertinggi</option>
            <option>Rating Tertinggi</option>
          </select>
        </div>
      </div>
      
      <ProductList />
    </div>
  );
};

export default Books;
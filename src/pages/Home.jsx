import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-bold mb-4" style={{fontSize: '2.5rem'}}>Temukan Buku Impian Anda</h1>
            <p className="lead text-body-secondary mb-4" style={{fontSize: '1.2rem'}}>
              Jelajahi ribuan judul dari berbagai genre, mulai dari novel fiksi terlaris, buku pengembangan diri, hingga komik yang seru. Pasti ada sesuatu yang spesial untuk Anda.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#" className="btn btn-primary btn-lg px-4 shadow-sm">
                <i className="fas fa-list me-2"></i>Lihat Semua Koleksi
              </a>
              <a href="#" className="btn btn-outline-danger btn-lg px-4">
                <i className="fas fa-fire me-2"></i>Penawaran Spesial
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProductList />
    </>
  );
};

export default Home;
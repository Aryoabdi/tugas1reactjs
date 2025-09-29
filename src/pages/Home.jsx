import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ProductList from '../components/ProductList';
import { booksData } from '../utils/books';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);

    const topRatedBooks = booksData
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);
    setFeaturedBooks(topRatedBooks);
  }, []);

  return (
    <>
      <Hero />
      <Stats />

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-bold mb-4" style={{fontSize: '2.5rem'}}>Buku Pilihan Terbaik</h1>
            <p className="lead text-body-secondary mb-4" style={{fontSize: '1.2rem'}}>
              Koleksi buku terpilih dengan rating tertinggi dari berbagai kategori. Temukan buku yang akan mengubah hidup Anda.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/books" className="btn btn-primary btn-lg px-4 shadow-sm">
                <i className="fas fa-list me-2"></i>Lihat Semua Koleksi ({books.length} Buku)
              </Link>
              <a href="#featured-books" className="btn btn-outline-danger btn-lg px-4">
                <i className="fas fa-fire me-2"></i>Buku Terpopuler
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="featured-books">
        <ProductList books={featuredBooks} />
      </div>
    </>
  );
};

export default Home;
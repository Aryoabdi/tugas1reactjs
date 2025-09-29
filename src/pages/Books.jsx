// src/pages/Books.jsx
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { booksData, getUniqueCategories, filterBooksByCategory, searchBooks, sortBooks } from '../utils/books';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [categories, setCategories] = useState([]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    rating: 4.0
  });

  useEffect(() => {
    setBooks(booksData);
    setFilteredBooks(booksData);

    const uniqueCategories = getUniqueCategories(booksData);
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    let result = books;

    if (searchTerm) {
      result = searchBooks(result, searchTerm);
    }

    result = filterBooksByCategory(result, selectedCategory);
    
    result = sortBooks(result, sortBy);
    
    setFilteredBooks(result);
  }, [books, searchTerm, selectedCategory, sortBy]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateRandomColor = () => {
    const colors = ['#3373dc', '#28a745', '#fd7014', '#dc2626', '#6933ff', '#087f23', '#e91e63', '#37415c', '#128a4f', '#6666ff', '#ff9500', '#9933ff'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    
    if (!newBook.title || !newBook.author || !newBook.price) {
      alert('Mohon isi semua field yang wajib diisi!');
      return;
    }

    const bookToAdd = {
      id: Date.now(), 
      ...newBook,
      price: parseInt(newBook.price),
      stock: parseInt(newBook.stock) || 1,
      rating: parseFloat(newBook.rating),
      isbn: `978-602-291-${String(Date.now()).slice(-6)}`,
      image: `data:image/svg+xml;base64,${btoa(`
        <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="400" fill="${generateRandomColor()}"/>
          <text x="150" y="200" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle">
            ${newBook.title}
          </text>
        </svg>
      `)}`
    };

    const updatedBooks = [...books, bookToAdd];
    setBooks(updatedBooks);

    if (newBook.category && !categories.includes(newBook.category)) {
      setCategories([...categories, newBook.category]);
    }

    setNewBook({
      title: '',
      author: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      rating: 4.0
    });
    
    setShowAddBookModal(false);
    alert(`Buku "${bookToAdd.title}" berhasil ditambahkan!`);
  };

  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">Koleksi Lengkap Buku Kami</h1>
          <p className="lead text-muted">
            Jelajahi {books.length} koleksi buku terbaik dari berbagai genre dan penulis terkenal dunia.
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-5">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Cari buku, penulis, atau kategori..." 
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Semua Kategori</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={sortBy} onChange={handleSortChange}>
            <option value="">Urutkan Berdasarkan</option>
            <option value="title-asc">Judul A-Z</option>
            <option value="title-desc">Judul Z-A</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
            <option value="rating-desc">Rating Tertinggi</option>
          </select>
        </div>
        <div className="col-md-1">
          <button 
            className="btn btn-success w-100"
            onClick={() => setShowAddBookModal(true)}
            title="Tambah Buku Baru"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <p className="text-muted">
            Menampilkan {filteredBooks.length} dari {books.length} buku
            {searchTerm && ` untuk pencarian "${searchTerm}"`}
            {selectedCategory && ` dalam kategori "${selectedCategory}"`}
          </p>
        </div>
      </div>

      <ProductList books={filteredBooks} />

      {showAddBookModal && (
        <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">
                  <i className="fas fa-plus-circle me-2"></i>Tambah Buku Baru
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowAddBookModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddBook}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-book me-2"></i>Judul Buku *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        placeholder="Masukkan judul buku"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-user-edit me-2"></i>Penulis *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        placeholder="Nama penulis"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="fas fa-align-left me-2"></i>Deskripsi
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={newBook.description}
                      onChange={handleInputChange}
                      rows="3"
                      placeholder="Deskripsi singkat tentang buku"
                    ></textarea>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-tag me-2"></i>Harga *
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={newBook.price}
                        onChange={handleInputChange}
                        placeholder="75000"
                        min="1000"
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-th-large me-2"></i>Kategori
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="category"
                        value={newBook.category}
                        onChange={handleInputChange}
                        placeholder="e.g. Fiksi, Non-Fiksi"
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-boxes me-2"></i>Stok
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="stock"
                        value={newBook.stock}
                        onChange={handleInputChange}
                        placeholder="10"
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">
                        <i className="fas fa-star me-2"></i>Rating (1-5)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="rating"
                        value={newBook.rating}
                        onChange={handleInputChange}
                        min="1"
                        max="5"
                        step="0.1"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowAddBookModal(false)}
                  >
                    <i className="fas fa-times me-2"></i>Batal
                  </button>
                  <button type="submit" className="btn btn-success">
                    <i className="fas fa-save me-2"></i>Simpan Buku
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
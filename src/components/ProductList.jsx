import React from "react";
import { formatPrice } from "../utils/books";

const ProductList = ({ books, showAddToCart = true }) => {
  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
    alert(`"${book.title}" berhasil ditambahkan ke keranjang!`);
  };

  const handleViewDetail = (book) => {
    console.log("View detail:", book);
    alert(`Melihat detail buku: "${book.title}"`);
  };

  return (
    <div className="album py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div
                className="card shadow-sm h-100 border-0"
                style={{ transition: "transform 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="position-relative">
                  <img
                    src={book.img}
                    className="card-img-top"
                    alt={`Sampul ${book.title}`}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning text-dark">
                      <i className="fas fa-star"></i> {book.rating}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <p className="text-muted small mb-2">Oleh {book.author}</p>
                  <p className="card-text text-secondary flex-grow-1">
                    {book.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => handleViewDetail(book)}
                      >
                        <i className="fas fa-eye me-1"></i>Detail
                      </button>
                      {showAddToCart && (
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={() => handleAddToCart(book)}
                        >
                          <i className="fas fa-cart-plus me-1"></i>Keranjang
                        </button>
                      )}
                    </div>
                    <h6 className="text-primary fw-bold mb-0">
                      {formatPrice(book.price)}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h4 className="text-muted">Tidak ada buku yang ditemukan</h4>
            <p className="text-muted">
              Coba ubah kata kunci pencarian atau filter Anda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

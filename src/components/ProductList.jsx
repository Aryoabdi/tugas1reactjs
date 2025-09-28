import React from 'react';
import buku1 from '../assets/buku1.jpeg';
import buku2 from '../assets/buku2.jpg';
import buku3 from '../assets/buku3.jpeg';
import buku4 from '../assets/buku4.jpg';
import buku5 from '../assets/buku5.jpg';
import buku6 from '../assets/buku6.jpg';

const ProductList = () => {
  const books = [
    {
      img: buku1,
      title: "Pemrograman Web (Edisi 2)",
      author: "Dr. Priyanto Hidayatullah S.T., M.Sc",
      description: "Panduan praktis pemrograman web (HTML, PHP, MySQL, Bootstrap) dengan studi kasus membangun aplikasi seperti toko online.",
      price: "Rp 125.000",
      rating: 4.5
    },
    {
      img: buku2,
      title: "Bisnis Online (Revisi Kedua)",
      author: "Rakhmat Makmur",
      description: "Membahas cara memulai dan mengelola bisnis online dengan memanfaatkan berbagai media sosial seperti Instagram, Facebook, dan Twitter.",
      price: "Rp 150.000",
      rating: 4.8
    },
    {
      img: buku3,
      title: "Buku Pintar Bisnis Online",
      author: "Fathul Husnan & Java Creativity",
      description: "Berisi trik jitu dan strategi praktis untuk menghasilkan uang dari bisnis online langsung dari laptop Anda.",
      price: "Rp 98.000",
      rating: 4.3
    },
    {
      img: buku4,
      title: "Kaya Raya Menjadi Raja Bisnis Online",
      author: "Agustina Wulandari",
      description: "Panduan motivasi menjadi kaya melalui bisnis online, dilengkapi kunci sukses reseller dan kisah-kisah nyata.",
      price: "Rp 110.000",
      rating: 4.6
    },
    {
      img: buku5,
      title: "Buku Sakti Membuat Toko Online dengan Blogger",
      author: "Fathul Husnan, Java Creativity",
      description: "Panduan khusus untuk membangun toko online secara cepat menggunakan platform Blogger, lengkap dengan bonus template dan script.",
      price: "Rp 89.000",
      rating: 4.7
    },
    {
      img: buku6,
      title: "Buku Pintar Blogger",
      author: "Java Creativity",
      description: "Panduan lengkap untuk menguasai platform Blogger, cocok untuk membangun berbagai jenis blog seperti blog pribadi, hobi, atau portofolio.",
      price: "Rp 175.000",
      rating: 4.4
    }
  ];

  return (
    <div className="album py-5" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.map((book, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm h-100 border-0" style={{transition: 'transform 0.2s', cursor: 'pointer'}} 
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="position-relative">
                  <img src={book.img} className="card-img-top" alt="Sampul Buku" 
                       style={{height: '250px', objectFit: 'cover'}} />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-warning text-dark">
                      <i className="fas fa-star"></i> {book.rating}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <p className="text-muted small mb-2">Oleh {book.author}</p>
                  <p className="card-text text-secondary flex-grow-1">{book.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary me-2">
                        <i className="fas fa-eye me-1"></i>Detail
                      </button>
                      <button type="button" className="btn btn-sm btn-primary">
                        <i className="fas fa-cart-plus me-1"></i>Keranjang
                      </button>
                    </div>
                    <h6 className="text-primary fw-bold mb-0">{book.price}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
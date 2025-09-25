import { useState } from 'react';

import gambarbuku from './assets/gambarbuku.jpg';
import buku1 from './assets/buku1.jpeg';
import buku2 from './assets/buku2.jpg';
import buku3 from './assets/buku3.jpeg';
import buku4 from './assets/buku4.jpg';
import buku5 from './assets/buku5.jpg';
import buku6 from './assets/buku6.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const renderHome = () => (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Gerbang Menuju Dunia Penuh Wawasan</h1>
            <p className="lead">
              Dari fiksi yang mendebarkan hingga non-fiksi yang mencerahkan, koleksi kami dipilih secara saksama untuk menginspirasi dan menghibur Anda. Mulailah perjalanan literasi Anda bersama kami hari ini.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 d-flex justify-content-center align-items-center">
            <img 
              src={gambarbuku} 
              alt="Tumpukan buku" 
              className="img-fluid rounded-3 shadow-lg" 
              style={{ 
                width: "80%", 
                height: "auto", 
                display: "block" 
              }} 
            />
            </div>
        </div>
      </div>

      <div className="container my-8">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="p-3">
              <i className="fas fa-book fa-3x text-primary mb-3"></i>
              <h3 className="fw-bold">10,000+</h3>
              <p className="text-muted">Koleksi Buku</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3">
              <i className="fas fa-users fa-3x text-success mb-3"></i>
              <h3 className="fw-bold">50,000+</h3>
              <p className="text-muted">Pembaca Setia</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3">
              <i className="fas fa-star fa-3x text-warning mb-3"></i>
              <h3 className="fw-bold">4.8/5</h3>
              <p className="text-muted">Rating Pembaca</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="p-3">
              <i className="fas fa-shipping-fast fa-3x text-info mb-3"></i>
              <h3 className="fw-bold">24 Jam</h3>
              <p className="text-muted">Pengiriman Cepat</p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="py-1 text-center container">
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

        <div className="album py-5" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {[
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
              ].map((book, index) => (
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
      </main>
    </>
  );

  const renderTeam = () => (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">Team Kami</h1>
          <p className="lead text-muted">
            Bertemu dengan tim profesional di balik BookStore yang berdedikasi untuk memberikan pengalaman membaca terbaik bagi Anda.
          </p>
        </div>
      </div>
      
      <div className="row">
        {[
          {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
            description: "Pencinta buku sejati dengan pengalaman 15 tahun di industri penerbitan.",
            social: { twitter: "#", linkedin: "#", email: "sarah@bookstore.com" }
          },
          {
            name: "Michael Chen",
            role: "Head of Curation",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            description: "Ahli literatur yang telah membaca lebih dari 10,000 buku dari berbagai genre.",
            social: { twitter: "#", linkedin: "#", email: "michael@bookstore.com" }
          },
          {
            name: "Emily Rodriguez",
            role: "Customer Experience Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            description: "Berdedikasi memastikan setiap pelanggan mendapat pelayanan terbaik.",
            social: { twitter: "#", linkedin: "#", email: "emily@bookstore.com" }
          },
          {
            name: "David Kim",
            role: "Technology Lead",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            description: "Membangun platform digital yang mudah digunakan untuk para pecinta buku.",
            social: { twitter: "#", linkedin: "#", email: "david@bookstore.com" }
          }
        ].map((member, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <img src={member.image} alt={member.name} 
                     className="rounded-circle mb-3" 
                     style={{width: '120px', height: '120px', objectFit: 'cover'}} />
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="text-primary fw-semibold mb-3">{member.role}</p>
                <p className="card-text text-muted small">{member.description}</p>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <a href={member.social.twitter} className="btn btn-outline-info btn-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.social.linkedin} className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={`mailto:${member.social.email}`} className="btn btn-outline-secondary btn-sm">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5 pt-5 border-top">
        <div className="col-lg-12 text-center mb-4">
          <h2 className="fw-bold">Nilai-Nilai Kami</h2>
        </div>
        <div className="col-md-4 text-center mb-4">
          <i className="fas fa-heart fa-3x text-danger mb-3"></i>
          <h5 className="fw-bold">Passion for Books</h5>
          <p className="text-muted">Kecintaan mendalam terhadap literatur dan pembelajaran.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <i className="fas fa-users fa-3x text-success mb-3"></i>
          <h5 className="fw-bold">Customer First</h5>
          <p className="text-muted">Kepuasan pelanggan adalah prioritas utama kami.</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <i className="fas fa-lightbulb fa-3x text-warning mb-3"></i>
          <h5 className="fw-bold">Innovation</h5>
          <p className="text-muted">Terus berinovasi untuk pengalaman membaca yang lebih baik.</p>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">Hubungi Kami</h1>
          <p className="lead text-muted">
            Ada pertanyaan atau butuh bantuan? Tim customer service kami siap membantu Anda 24/7.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0"><i className="fas fa-envelope me-2"></i>Kirim Pesan</h5>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">Nama Depan</label>
                    <input type="text" className="form-control" id="firstName" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Nama Belakang</label>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Nomor Telepon</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subjek</label>
                  <select className="form-select" id="subject">
                    <option>Pilih kategori pertanyaan</option>
                    <option>Pertanyaan Umum</option>
                    <option>Masalah Pesanan</option>
                    <option>Rekomendasi Buku</option>
                    <option>Keluhan</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="5" 
                           placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  <i className="fas fa-paper-plane me-2"></i>Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-map-marker-alt fa-2x text-danger mb-3"></i>
                  <h5 className="fw-bold">Alamat Kantor</h5>
                  <p className="text-muted">
                    Jl. Literasi No. 123<br />
                    Surabaya, Jawa Timur 60115<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-phone fa-2x text-success mb-3"></i>
                  <h5 className="fw-bold">Telepon</h5>
                  <p className="text-muted">
                    <strong>Hotline:</strong> (031) 123-4567<br />
                    <strong>WhatsApp:</strong> +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">
                    <strong>Umum:</strong> info@bookstore.com<br />
                    <strong>Support:</strong> support@bookstore.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 pt-5 border-top">
        <div className="col-lg-6 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-info text-white text-center">
              <h5 className="mb-0"><i className="fas fa-clock me-2"></i>Jam Operasional</h5>
            </div>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-6">
                  <h6 className="fw-bold">Toko Fisik</h6>
                  <p className="text-muted small mb-2">
                    Senin - Jumat: 09:00 - 21:00<br />
                    Sabtu - Minggu: 10:00 - 22:00
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold">Customer Service</h6>
                  <p className="text-muted small mb-2">
                    24/7 Online Support<br />
                    Respon dalam 1-2 jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h3 className="fw-bold">Pertanyaan Yang Sering Diajukan</h3>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="faqAccordion">
            {[
              {
                id: 1,
                question: "Bagaimana cara memesan buku?",
                answer: "Anda dapat memesan buku melalui website kami, aplikasi mobile, atau datang langsung ke toko fisik. Pilih buku yang diinginkan, masukkan ke keranjang, dan lakukan pembayaran."
              },
              {
                id: 2,
                question: "Berapa lama waktu pengiriman?",
                answer: "Untuk wilayah Surabaya: 1-2 hari kerja. Untuk Jawa Timur: 2-3 hari kerja. Untuk seluruh Indonesia: 3-7 hari kerja."
              },
              {
                id: 3,
                question: "Apakah ada garansi untuk buku yang dibeli?",
                answer: "Ya, kami memberikan jaminan penggantian untuk buku yang rusak atau cacat. Hubungi customer service kami dalam waktu 7 hari setelah pembelian."
              }
            ].map((faq) => (
              <div className="accordion-item border-0 mb-2 shadow-sm" key={faq.id}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" 
                          data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`}>
                    {faq.question}
                  </button>
                </h2>
                <div id={`collapse${faq.id}`} className="accordion-collapse collapse">
                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom mb-4">
        <div className="container">
          <a href="/" className="navbar-brand d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{color: "#667eea"}}></i>
            <span className="ms-2 fs-4 fw-bold">BookStore</span>
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-3 ${activeTab === 'home' ? 'active' : ''}`}
                  onClick={() => setActiveTab('home')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-3">
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-3 ${activeTab === 'team' ? 'active' : ''}`}
                  onClick={() => setActiveTab('team')}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-3 ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}>
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <button type="button" className="btn btn-outline-primary me-2">Login</button>
              <button type="button" className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </nav>

        {activeTab === 'home' && renderHome()}
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'contact' && renderContact()}

        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-2 ${activeTab === 'home' ? 'text-primary fw-bold' : 'text-body-secondary'}`} 
                  onClick={() => setActiveTab('home')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-2 ${activeTab === 'buku' ? 'text-primary fw-bold' : 'text-body-secondary'}`} 
                  onClick={() => setActiveTab('buku')}>
                  Book
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-2 ${activeTab === 'team' ? 'text-primary fw-bold' : 'text-body-secondary'}`} 
                  onClick={() => setActiveTab('team')}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#" 
                  className={`nav-link px-2 ${activeTab === 'contact' ? 'text-primary fw-bold' : 'text-body-secondary'}`} 
                  onClick={() => setActiveTab('contact')}>
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">© 2025 BookStore</p>
          </footer>
        </div>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .btn {
          transition: all 0.2s ease;
        }
        
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .accordion-button:focus {
          box-shadow: none;
          border-color: rgba(0,0,0,.125);
        }
        
        .nav-link {
          transition: color 0.2s ease;
        }
        
        .nav-link:hover {
          color: #667eea !important;
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }
          
          .btn-group {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .btn-group .btn {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

export default App;
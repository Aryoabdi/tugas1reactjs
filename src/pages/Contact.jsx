import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Terima kasih! Pesan Anda telah dikirim.');
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt fa-2x text-danger mb-3",
      title: "Alamat Kantor",
      content: "Jl. Literasi No. 123\nSurabaya, Jawa Timur 60115\nIndonesia"
    },
    {
      icon: "fas fa-phone fa-2x text-success mb-3",
      title: "Telepon",
      content: "Hotline: (031) 123-4567\nWhatsApp: +62 812-3456-7890"
    },
    {
      icon: "fas fa-envelope fa-2x text-primary mb-3",
      title: "Email",
      content: "Umum: info@bookstore.com\nSupport: support@bookstore.com"
    }
  ];

  const faqData = [
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
  ];

  return (
    <div className="container py-5">
      {/* Contact Header */}
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="fw-bold mb-4">Hubungi Kami</h1>
          <p className="lead text-muted">
            Ada pertanyaan atau butuh bantuan? Tim customer service kami siap membantu Anda 24/7.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-8 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0"><i className="fas fa-envelope me-2"></i>Kirim Pesan</h5>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">Nama Depan</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Nama Belakang</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Nomor Telepon</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subjek</label>
                  <select 
                    className="form-select" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih kategori pertanyaan</option>
                    <option value="general">Pertanyaan Umum</option>
                    <option value="order">Masalah Pesanan</option>
                    <option value="recommendation">Rekomendasi Buku</option>
                    <option value="complaint">Keluhan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  <i className="fas fa-paper-plane me-2"></i>Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-4">
          <div className="row">
            {contactInfo.map((info, index) => (
              <div className="col-12 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className={info.icon}></i>
                    <h5 className="fw-bold">{info.title}</h5>
                    <p className="text-muted" style={{whiteSpace: 'pre-line'}}>
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operating Hours */}
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

      {/* FAQ Section */}
      <div className="row mt-5">
        <div className="col-12 text-center mb-4">
          <h3 className="fw-bold">Pertanyaan Yang Sering Diajukan</h3>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="accordion" id="faqAccordion">
            {faqData.map((faq) => (
              <div className="accordion-item border-0 mb-2 shadow-sm" key={faq.id}>
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div 
                  id={`collapse${faq.id}`} 
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
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
};

export default Contact;
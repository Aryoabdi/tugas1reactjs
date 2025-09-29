import React from 'react';

const Team = () => {
  const teamMembers = [
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
  ];

  const companyValues = [
    {
      icon: "fas fa-heart fa-3x text-danger mb-3",
      title: "Passion for Books",
      description: "Kecintaan mendalam terhadap literatur dan pembelajaran."
    },
    {
      icon: "fas fa-users fa-3x text-success mb-3",
      title: "Customer First",
      description: "Kepuasan pelanggan adalah prioritas utama kami."
    },
    {
      icon: "fas fa-lightbulb fa-3x text-warning mb-3",
      title: "Innovation",
      description: "Terus berinovasi untuk pengalaman membaca yang lebih baik."
    }
  ];

  return (
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
        {teamMembers.map((member, index) => (
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
        {companyValues.map((value, index) => (
          <div className="col-md-4 text-center mb-4" key={index}>
            <i className={value.icon}></i>
            <h5 className="fw-bold">{value.title}</h5>
            <p className="text-muted">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="row mt-5 pt-5 border-top">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="fw-bold mb-4">Cerita Kami</h2>
          <p className="lead text-muted mb-4">
            Dimulai dari kecintaan sederhana terhadap buku, BookStore lahir dari visi untuk membuat literatur berkualitas dapat diakses oleh semua orang. Sejak 2020, kami telah melayani ribuan pembaca setia di seluruh Indonesia.
          </p>
          <div className="row text-center">
            <div className="col-md-6 mb-3">
              <h4 className="text-primary fw-bold">2020</h4>
              <p className="text-muted">Tahun Didirikan</p>
            </div>
            <div className="col-md-6 mb-3">
              <h4 className="text-primary fw-bold">100+</h4>
              <p className="text-muted">Kota Terjangkau</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
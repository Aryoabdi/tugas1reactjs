import React from 'react';

const Stats = () => {
  const stats = [
    {
      icon: "fas fa-book fa-3x text-primary mb-3",
      count: "10,000+",
      label: "Koleksi Buku"
    },
    {
      icon: "fas fa-users fa-3x text-success mb-3",
      count: "50,000+",
      label: "Pembaca Setia"
    },
    {
      icon: "fas fa-star fa-3x text-warning mb-3",
      count: "4.8/5",
      label: "Rating Pembaca"
    },
    {
      icon: "fas fa-shipping-fast fa-3x text-info mb-3",
      count: "24 Jam",
      label: "Pengiriman Cepat"
    }
  ];

  return (
    <div className="container my-5">
      <div className="row text-center">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="p-3">
              <i className={stat.icon}></i>
              <h3 className="fw-bold">{stat.count}</h3>
              <p className="text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
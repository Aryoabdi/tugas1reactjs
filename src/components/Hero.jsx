import React from 'react';
import gambarbuku from '../assets/gambarbuku.jpg';

const Hero = () => {
  return (
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
              width: "90%", 
              height: "auto", 
              display: "block"
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
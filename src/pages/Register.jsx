import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    newsletter: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: type === 'checkbox' ? checked : value
    }));

    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'Nama depan wajib diisi';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Nama belakang wajib diisi';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Nomor telepon wajib diisi';
    } else if (!/^[0-9+\-()\s]+$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password harus mengandung huruf besar, kecil, dan angka';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password wajib diisi';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sama';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui syarat dan ketentuan';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Registration attempt:', formData);
      alert('Registrasi berhasil! Silakan cek email untuk verifikasi. (Demo)');
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length === 0) return { strength: 0, label: '', color: '' };
    if (password.length < 6) return { strength: 25, label: 'Lemah', color: 'danger' };
    if (password.length < 8) return { strength: 50, label: 'Sedang', color: 'warning' };
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return { strength: 75, label: 'Baik', color: 'info' };
    return { strength: 100, label: 'Kuat', color: 'success' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-0">
                <i className="fas fa-user-plus me-2"></i>
                Buat Akun Baru
              </h3>
              <p className="mb-0 mt-2 opacity-75">Bergabunglah dengan komunitas pembaca kami!</p>
            </div>
            
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fw-bold">
                      <i className="fas fa-user me-2"></i>Nama Depan
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      placeholder="Nama depan"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fw-bold">
                      <i className="fas fa-user me-2"></i>Nama Belakang
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      placeholder="Nama belakang"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    <i className="fas fa-envelope me-2"></i>Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="masukkan@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">
                    <i className="fas fa-phone me-2"></i>Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    placeholder="+62 812-3456-7890"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    <i className="fas fa-lock me-2"></i>Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="Minimal 8 karakter"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  {formData.password && (
                    <div className="mt-2">
                      <div className="progress" style={{height: '4px'}}>
                        <div 
                          className={`progress-bar bg-${passwordStrength.color}`}
                          role="progressbar" 
                          style={{width: `${passwordStrength.strength}%`}}
                        ></div>
                      </div>
                      <small className={`text-${passwordStrength.color}`}>
                        Kekuatan password: {passwordStrength.label}
                      </small>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label fw-bold">
                    <i className="fas fa-lock me-2"></i>Konfirmasi Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      id="confirmPassword"
                      placeholder="Ulangi password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">{errors.confirmPassword}</div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check mb-3">
                    <input
                      className={`form-check-input ${errors.agreeTerms ? 'is-invalid' : ''}`}
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="agreeTerms">
                      Saya menyetujui{' '}
                      <Link to="/terms" className="text-decoration-none">Syarat dan Ketentuan</Link>
                      {' '}serta{' '}
                      <Link to="/privacy" className="text-decoration-none">Kebijakan Privasi</Link>
                    </label>
                    {errors.agreeTerms && (
                      <div className="invalid-feedback d-block">{errors.agreeTerms}</div>
                    )}
                  </div>
                  
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="newsletter">
                      <small>Saya ingin menerima newsletter dan penawaran spesial</small>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                  <i className="fas fa-user-plus me-2"></i>
                  Daftar Sekarang
                </button>

                <div className="text-center my-4">
                  <small className="text-muted">atau daftar dengan</small>
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-outline-danger">
                    <i className="fab fa-google me-2"></i>
                    Google
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <i className="fab fa-facebook me-2"></i>
                    Facebook
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center py-3 bg-light">
              <p className="mb-0">
                Sudah punya akun? 
                <Link to="/login" className="text-decoration-none fw-bold ms-1">
                  Masuk sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
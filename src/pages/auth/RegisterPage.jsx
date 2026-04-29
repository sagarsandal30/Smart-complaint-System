import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', password: '', role: 'citizen' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    login(formData.email, formData.password, formData.role);
    if (formData.role === 'citizen') navigate('/citizen/dashboard');
    else if (formData.role === 'worker') navigate('/worker/dashboard');
    else if (formData.role === 'admin') navigate('/admin/dashboard');
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="app-container" style={{ alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-6) 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
          <ShieldAlert size={48} color="var(--color-primary)" style={{ margin: '0 auto var(--spacing-2)' }} />
          <h1 className="font-bold text-xl">Smart Nagar 2.0</h1>
          <p className="text-muted">Create a new account</p>
        </div>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <label className="label">Full Name</label>
            <input type="text" name="fullName" required className="input" value={formData.fullName} onChange={handleChange} placeholder="John Doe" />
          </div>
          <div>
            <label className="label">Email Address</label>
            <input type="email" name="email" required className="input" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
          </div>
          <div>
            <label className="label">Phone</label>
            <input type="tel" name="phone" required className="input" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" name="password" required className="input" value={formData.password} onChange={handleChange} placeholder="••••••••" />
          </div>
          <div>
            <label className="label">Register As</label>
            <select name="role" className="select" value={formData.role} onChange={handleChange}>
              <option value="citizen">Citizen</option>
              <option value="worker">Worker</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-2" style={{ width: '100%', padding: '0.75rem' }}>Register</button>
        </form>
        <p className="text-center text-sm mt-4 text-muted">
          Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: '500' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;

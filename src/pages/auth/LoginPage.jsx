import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('citizen');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password, role);
    if (role === 'citizen') navigate('/citizen/dashboard');
    else if (role === 'worker') navigate('/worker/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
    else navigate('/');
  };

  return (
    <div className="app-container" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
          <ShieldAlert size={48} color="var(--color-primary)" style={{ margin: '0 auto var(--spacing-2)' }} />
          <h1 className="font-bold text-xl">Smart Nagar 2.0</h1>
          <p className="text-muted">Login to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="label">Email Address</label>
            <input type="email" required className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@example.com" />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" required className="input" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <div>
            <label className="label">Login As</label>
            <select className="select" value={role} onChange={e => setRole(e.target.value)}>
              <option value="citizen">Citizen</option>
              <option value="worker">Worker</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-2" style={{ width: '100%', padding: '0.75rem' }}>Login</button>
        </form>
        <p className="text-center text-sm mt-4 text-muted">
          Don't have an account? <Link to="/register" style={{ color: 'var(--color-primary)', fontWeight: '500' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;

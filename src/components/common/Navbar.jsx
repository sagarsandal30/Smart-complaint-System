import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, LogOut, Bell, Search, Moon } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <ShieldAlert size={28} color="var(--color-primary)" />
        Smart Nagar <span style={{ color: 'var(--color-secondary)' }}>2.0</span>
      </Link>
      
      {user && (
        <div className="navbar-center hidden-mobile">
          <div className="search-bar">
            <Search size={18} color="var(--color-text-muted)" />
            <input type="text" placeholder="Search complaints, wards, or anything..." />
          </div>
        </div>
      )}

      <div className="navbar-right">
        {user ? (
          <>
            <div className="navbar-actions">
              <button className="icon-btn" title="Toggle Dark Mode">
                <Moon size={20} />
              </button>
              <button className="icon-btn" title="Notifications" onClick={() => navigate('/notifications')}>
                <Bell size={20} />
                <span className="badge">3</span>
              </button>
            </div>
            <div className="navbar-profile">
              <div className="navbar-profile-info hidden-mobile">
                <div className="navbar-profile-name">{user.name}</div>
                <div className="navbar-profile-role">{user.role}</div>
              </div>
              <div className="navbar-profile-avatar" style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>
                {user.name.charAt(0)}
              </div>
              <button className="btn btn-outline" style={{ padding: '6px 12px' }} onClick={handleLogout}>
                <LogOut size={16} /> <span className="hidden-mobile">Logout</span>
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-gradient">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

import React, { useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { User, Mail, Phone, Shield } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          <div className="card" style={{ maxWidth: '600px' }}>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
              <div className="flex items-center justify-center rounded-full" style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                <User size={40} />
              </div>
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Shield size={14} className="text-muted" /> 
                  <span className="text-sm text-muted capitalize">{user.role}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)' }}>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-muted" />
                  <div>
                    <p className="text-xs text-muted">Email Address</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded" style={{ backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)' }}>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-muted" />
                  <div>
                    <p className="text-xs text-muted">Phone Number</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary mt-4 self-start">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;

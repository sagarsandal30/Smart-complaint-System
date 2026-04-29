import React, { useContext } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { Bell, CheckCircle } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import { formatDate } from '../../utils/formatDate';

const NotificationsPage = () => {
  const { user } = useContext(AuthContext);

  const notifications = [
    { id: 1, title: 'Complaint Resolved', message: 'Your complaint "Broken Streetlight" has been marked as resolved.', time: new Date().toISOString(), read: false },
    { id: 2, title: 'New Assignment', message: 'You have been assigned a new complaint: "Water Leakage".', time: new Date(Date.now() - 86400000).toISOString(), read: true },
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex items-center gap-2 mb-6">
            <Bell size={28} color="var(--color-primary)" />
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>

          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Recent Updates</h2>
              <button className="btn btn-outline" style={{ padding: '4px 8px', fontSize: '0.75rem' }}><CheckCircle size={14}/> Mark all as read</button>
            </div>

            <div className="flex flex-col gap-2">
              {notifications.map(n => (
                <div key={n.id} className="p-4 border rounded" style={{ backgroundColor: n.read ? 'white' : 'var(--color-primary-light)', borderColor: 'var(--color-border)' }}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">{n.title}</h3>
                    <span className="text-xs text-muted">{formatDate(n.time)}</span>
                  </div>
                  <p className="text-sm text-muted">{n.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationsPage;

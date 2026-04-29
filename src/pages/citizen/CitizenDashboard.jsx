import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import StatCard from '../../components/common/StatCard';
import ComplaintCard from '../../components/complaints/ComplaintCard';
import { AuthContext } from '../../context/AuthContext';
import { mockComplaints } from '../../data/mockData';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const CitizenDashboard = () => {
  const { user } = useContext(AuthContext);
  const myComplaints = mockComplaints.filter(c => c.citizenId === user?.id);

  const stats = {
    total: myComplaints.length,
    pending: myComplaints.filter(c => c.status === 'Pending').length,
    inProgress: myComplaints.filter(c => c.status === 'In Progress').length,
    resolved: myComplaints.filter(c => c.status === 'Resolved').length
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {user?.name}</h1>
              <p className="text-muted text-sm mt-1">Here is the latest update on your reported issues.</p>
            </div>
            <Link to="/citizen/create" className="btn btn-gradient gap-2" style={{ padding: '0.5rem 1rem' }}>
              <AlertCircle size={18} /> Report New Issue
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard title="Total Filed" value={stats.total} icon={AlertCircle} color="var(--color-primary)" trend={12} />
            <StatCard title="Pending Review" value={stats.pending} icon={Clock} color="var(--color-warning)" />
            <StatCard title="In Progress" value={stats.inProgress} icon={Clock} color="var(--color-info)" />
            <StatCard title="Resolved" value={stats.resolved} icon={CheckCircle} color="var(--color-success)" trend={24} />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Complaints</h2>
            <Link to="/profile" className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>View All &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {myComplaints.slice(0, 3).map(c => (
               <ComplaintCard key={c.id} complaint={c} />
            ))}
            {myComplaints.length === 0 && (
               <div className="text-center p-8 text-muted bg-white rounded-lg border" style={{ gridColumn: 'span 3' }}>
                  You haven't filed any complaints yet.
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CitizenDashboard;

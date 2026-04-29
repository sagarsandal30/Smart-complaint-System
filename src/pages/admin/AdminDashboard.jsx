import React from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import StatCard from '../../components/common/StatCard';
import Table from '../../components/common/Table';
import StatusBadge from '../../components/common/StatusBadge';
import PriorityBadge from '../../components/common/PriorityBadge';
import { mockComplaints } from '../../data/mockData';
import { formatDate } from '../../utils/formatDate';
import { AlertCircle, AlertTriangle, CheckCircle, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = {
    total: mockComplaints.length,
    new: mockComplaints.filter(c => c.status === 'Pending').length,
    escalated: mockComplaints.filter(c => c.status === 'Escalated').length,
    resolved: mockComplaints.filter(c => c.status === 'Resolved').length
  };

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title', render: (row) => <Link to={`/complaints/${row.id}`} style={{ fontWeight: '600', color: 'var(--color-primary)' }}>{row.title}</Link> },
    { header: 'Category', accessor: 'category' },
    { header: 'Priority', accessor: 'priority', render: (row) => <PriorityBadge priority={row.priority} /> },
    { header: 'Status', accessor: 'status', render: (row) => <StatusBadge status={row.status} /> },
    { header: 'Worker', accessor: 'assignedTo', render: (row) => row.assignedTo || 'Unassigned' },
    { header: 'Action', accessor: 'action', render: (row) => (
      <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '0.75rem', borderRadius: 'var(--radius-full)' }}>Assign</button>
    )}
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Admin Hub Overview</h1>
              <p className="text-muted text-sm mt-1">Monitor city-wide issues and personnel.</p>
            </div>
            <Link to="/admin/analytics" className="btn btn-outline gap-2" style={{ padding: '0.5rem 1rem' }}>
              View Detailed Analytics
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
             <StatCard title="Total Complaints" value={stats.total} icon={List} color="var(--color-primary)" trend={8} />
             <StatCard title="Awaiting Assignment" value={stats.new} icon={AlertCircle} color="var(--color-warning)" trend={-2} />
             <StatCard title="Escalations" value={stats.escalated} icon={AlertTriangle} color="var(--color-danger)" trend={5} />
             <StatCard title="Resolved Issues" value={stats.resolved} icon={CheckCircle} color="var(--color-success)" trend={14} />
          </div>

          <div className="card glass">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Action Required: Recent Complaints</h2>
            </div>
            <Table columns={columns} data={mockComplaints} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;

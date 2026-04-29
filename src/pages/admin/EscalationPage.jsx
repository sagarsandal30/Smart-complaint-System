import React from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import Table from '../../components/common/Table';
import { mockComplaints } from '../../data/mockData';
import { AlertCircle } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const EscalationPage = () => {
  const escalations = mockComplaints.slice(0, 2).map(c => ({
    ...c,
    daysPending: 5,
    escalationLevel: 'Level 1 (Supervisor)'
  }));

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
    { header: 'Worker', accessor: 'assignedTo', render: (row) => row.assignedTo || 'Unassigned' },
    { header: 'Days Pending', accessor: 'daysPending', render: (row) => <span className="font-bold" style={{ color: 'var(--color-danger)' }}>{row.daysPending} Days</span> },
    { header: 'Status', accessor: 'status', render: (row) => <StatusBadge status={row.status} /> },
    { header: 'Escalation Level', accessor: 'escalationLevel' },
    { header: 'Action', accessor: 'action', render: (row) => (
      <button className="btn btn-danger" style={{ padding: '4px 12px', fontSize: '0.75rem' }}>Notify Authority</button>
    )}
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle size={28} color="var(--color-danger)" />
            <h1 className="text-2xl font-bold">Escalations</h1>
          </div>

          <div className="card">
            <h2 className="text-lg font-bold mb-4">Complaints Exceeding SLA</h2>
            <Table columns={columns} data={escalations} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EscalationPage;

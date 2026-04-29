import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import { mockComplaints } from '../../data/mockData';
import { formatDate } from '../../utils/formatDate';
import { MoreHorizontal } from 'lucide-react';
import PriorityBadge from '../../components/common/PriorityBadge';

const KanbanColumn = ({ title, tasks, statusColor }) => {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(240, 244, 248, 0.5)', minHeight: '600px', border: '1px solid var(--color-border)' }}>
      <div className="flex justify-between items-center mb-2 px-1">
        <h3 className="font-bold flex items-center gap-2 text-sm">
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: statusColor }}></div>
          {title} <span className="text-muted text-xs bg-white px-2 py-0.5 rounded-full border">{tasks.length}</span>
        </h3>
        <button className="text-muted" style={{ cursor: 'pointer' }}><MoreHorizontal size={16}/></button>
      </div>

      {tasks.map(task => (
        <div key={task.id} className="card glass p-3 cursor-pointer border" style={{ transition: 'transform 0.2s', borderColor: 'var(--color-border)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-muted">#{task.id}</span>
            <PriorityBadge priority={task.priority} />
          </div>
          <h4 className="font-semibold text-sm mb-1">{task.title}</h4>
          <p className="text-xs text-muted mb-3 truncate">{task.address}</p>
          <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-xs font-medium text-muted">{formatDate(task.createdAt)}</span>
            <div className="flex">
               <div className="rounded-full bg-primary text-white flex items-center justify-center font-bold" style={{ width: '24px', height: '24px', fontSize: '10px', backgroundColor: 'var(--color-primary)' }}>W1</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkerDashboard = () => {
  const myTasks = mockComplaints.filter(c => c.assignedTo === 'w1' || c.assignedTo === 'w2');

  const pending = myTasks.filter(c => c.status === 'Pending');
  const inProgress = myTasks.filter(c => c.status === 'In Progress');
  const resolved = myTasks.filter(c => c.status === 'Resolved');

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Task Board</h1>
              <p className="text-sm text-muted">Manage your assigned complaints and field work.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <KanbanColumn title="To Do" tasks={pending} statusColor="var(--color-warning)" />
            <KanbanColumn title="In Progress" tasks={inProgress} statusColor="var(--color-info)" />
            <KanbanColumn title="Completed" tasks={resolved} statusColor="var(--color-success)" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkerDashboard;

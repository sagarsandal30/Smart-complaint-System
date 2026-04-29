import React, { useState } from 'react';
import Navbar from '../../components/common/Navbar';
import ComplaintCard from '../../components/complaints/ComplaintCard';
import { mockComplaints } from '../../data/mockData';

const PublicComplaintsPage = () => {
  const [complaints] = useState(mockComplaints);
  const [filterCat, setFilterCat] = useState('');

  const filtered = filterCat 
    ? complaints.filter(c => c.category === filterCat)
    : complaints;

  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="page-content" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Public Complaints</h1>
          <select 
            className="select" 
            style={{ width: '200px' }}
            value={filterCat}
            onChange={(e) => setFilterCat(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Garbage">Garbage</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Streetlight">Streetlight</option>
            <option value="Road/Pothole">Road/Pothole</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filtered.map(c => (
            <ComplaintCard key={c.id} complaint={c} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PublicComplaintsPage;

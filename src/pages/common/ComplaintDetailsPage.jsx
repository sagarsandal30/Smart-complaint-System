import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Calendar, User, ThumbsUp } from 'lucide-react';
import Navbar from '../../components/common/Navbar';
import StatusBadge from '../../components/common/StatusBadge';
import PriorityBadge from '../../components/common/PriorityBadge';
import { mockComplaints, mockUser } from '../../data/mockData';
import { formatDate } from '../../utils/formatDate';

const ComplaintDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    const found = mockComplaints.find(c => c.id === id);
    if (found) setComplaint(found);
  }, [id]);

  if (!complaint) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline mb-4 text-sm">
          <ChevronLeft size={16} /> Back
        </button>

        <div className="card">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{complaint.title}</h1>
              <div className="flex gap-2 items-center">
                <StatusBadge status={complaint.status} />
                <PriorityBadge priority={complaint.priority} />
                <span className="text-sm font-semibold px-2 py-1 bg-gray-100 rounded" style={{ backgroundColor: 'var(--color-bg-main)' }}>{complaint.category}</span>
              </div>
            </div>
            <button className="btn btn-primary">
              <ThumbsUp size={16} /> Upvote ({complaint.upvotes})
            </button>
          </div>

          <img 
            src={complaint.image} 
            alt="Complaint" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-4)' }}
          />

          <div className="mb-6">
            <h3 className="font-bold mb-2">Description</h3>
            <p className="text-muted">{complaint.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 p-4" style={{ backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-md)' }}>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-muted" /> <span className="text-sm">{complaint.address} ({complaint.ward})</span></div>
            <div className="flex items-center gap-2"><Calendar size={16} className="text-muted" /> <span className="text-sm">{formatDate(complaint.createdAt)}</span></div>
            <div className="flex items-center gap-2"><User size={16} className="text-muted" /> <span className="text-sm">Reported by Citizen (ID: {complaint.citizenId})</span></div>
            <div className="flex items-center gap-2"><MapPin size={16} className="text-muted" /> <span className="text-sm">Lat/Lng: {complaint.lat}, {complaint.lng}</span></div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Timeline</h3>
            <div className="flex flex-col gap-4">
              {complaint.timeline.map((t, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                    {idx < complaint.timeline.length - 1 && <div style={{ width: '2px', flex: 1, backgroundColor: 'var(--color-primary)', margin: '4px 0' }}></div>}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold">{t.status}</p>
                    <p className="text-xs text-muted">{formatDate(t.timestamp)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComplaintDetailsPage;
